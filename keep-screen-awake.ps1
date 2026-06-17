<#
.SYNOPSIS
Keeps Windows awake by simulating human activity.

.DESCRIPTION
Prevents system sleep and display timeout by faking human activity — moves the
mouse, sends keystrokes, and optionally cycles through open windows with Alt+Tab.
Uses Windows power state APIs alongside input simulation to keep the session alive.

.PARAMETER IntervalSeconds
How often to refresh the keep-awake request and simulate activity (5-3600).

.PARAMETER MoveMouse
Moves the mouse +3 px and back each cycle (default: $true).

.PARAMETER PressKey
Sends a ScrollLock tap (harmless, toggles back) each cycle (default: $true).

.PARAMETER SwitchTabs
Sends Alt+Tab to cycle through open windows (default: $false — disruptive).

.EXAMPLE
powershell -ExecutionPolicy Bypass -File .\scripts\keep-screen-awake.ps1

.EXAMPLE
powershell -ExecutionPolicy Bypass -File .\scripts\keep-screen-awake.ps1 -IntervalSeconds 30 -MoveMouse:$false

.EXAMPLE
powershell -ExecutionPolicy Bypass -File .\scripts\keep-screen-awake.ps1 -SwitchTabs
#>

param(
    [ValidateRange(5, 3600)]
    [int]$IntervalSeconds = 60,

    [string]$Reason = "Keeping screen awake for active work",

    [switch]$MoveMouse = $true,

    [switch]$PressKey = $true,

    [switch]$SwitchTabs = $false
)

Add-Type -TypeDefinition @"
using System;
using System.Runtime.InteropServices;

public static class PowerState {
    [Flags]
    public enum ExecutionState : uint {
        ES_AWAYMODE_REQUIRED = 0x00000040,
        ES_CONTINUOUS = 0x80000000,
        ES_DISPLAY_REQUIRED = 0x00000002,
        ES_SYSTEM_REQUIRED = 0x00000001
    }

    [DllImport("kernel32.dll", SetLastError = true)]
    public static extern ExecutionState SetThreadExecutionState(ExecutionState esFlags);
}
"@

Add-Type -TypeDefinition @"
using System;
using System.Runtime.InteropServices;

public static class InputSim {
    [DllImport("user32.dll", SetLastError = true)]
    public static extern bool SetCursorPos(int x, int y);

    [DllImport("user32.dll", SetLastError = true)]
    public static extern bool GetCursorPos(out POINT lpPoint);

    [DllImport("user32.dll", SetLastError = true)]
    public static extern void keybd_event(byte bVk, byte bScan, uint dwFlags, UIntPtr dwExtraInfo);

    [StructLayout(LayoutKind.Sequential)]
    public struct POINT { public int X; public int Y; }

    public const byte VK_SCROLL     = 0x91;
    public const byte VK_LMENU      = 0xA4;
    public const byte VK_TAB        = 0x09;
    public const uint KEYEVENTF_KEYDOWN = 0x0000;
    public const uint KEYEVENTF_KEYUP   = 0x0002;
}
"@

function Set-KeepAwake {
    [void][PowerState]::SetThreadExecutionState(
        [PowerState+ExecutionState]::ES_CONTINUOUS -bor
        [PowerState+ExecutionState]::ES_SYSTEM_REQUIRED -bor
        [PowerState+ExecutionState]::ES_DISPLAY_REQUIRED
    )
}

function Clear-KeepAwake {
    [void][PowerState]::SetThreadExecutionState(
        [PowerState+ExecutionState]::ES_CONTINUOUS
    )
}

function Invoke-FakeActivity {
    param([switch]$MoveMouse, [switch]$PressKey, [switch]$SwitchTabs)

    if ($MoveMouse) {
        $pt = New-Object InputSim+POINT
        [void][InputSim]::GetCursorPos([ref]$pt)
        [void][InputSim]::SetCursorPos($pt.X + 3, $pt.Y + 3)
        Start-Sleep -Milliseconds 50
        [void][InputSim]::SetCursorPos($pt.X, $pt.Y)
    }

    if ($PressKey) {
        [InputSim]::keybd_event([InputSim]::VK_SCROLL, 0, [InputSim]::KEYEVENTF_KEYDOWN, [UIntPtr]::Zero)
        Start-Sleep -Milliseconds 30
        [InputSim]::keybd_event([InputSim]::VK_SCROLL, 0, [InputSim]::KEYEVENTF_KEYUP, [UIntPtr]::Zero)
    }

    if ($SwitchTabs) {
        [InputSim]::keybd_event([InputSim]::VK_LMENU, 0, [InputSim]::KEYEVENTF_KEYDOWN, [UIntPtr]::Zero)
        Start-Sleep -Milliseconds 50
        [InputSim]::keybd_event([InputSim]::VK_TAB, 0, [InputSim]::KEYEVENTF_KEYDOWN, [UIntPtr]::Zero)
        Start-Sleep -Milliseconds 100
        [InputSim]::keybd_event([InputSim]::VK_TAB, 0, [InputSim]::KEYEVENTF_KEYUP, [UIntPtr]::Zero)
        Start-Sleep -Milliseconds 50
        [InputSim]::keybd_event([InputSim]::VK_LMENU, 0, [InputSim]::KEYEVENTF_KEYUP, [UIntPtr]::Zero)
    }
}

try {
    [Console]::TreatControlCAsInput = $false
} catch {
    # Older hosts may not allow this setting. Ctrl+C still stops the script.
}

Write-Host "Keeping this Windows session awake. Press Ctrl+C to stop."
Write-Host "This script moves the mouse, presses keys, switches tabs, switches screens, or fake human activity."
Write-Host ("Reason: {0}" -f $Reason)

try {
    $startedAt = Get-Date

    while ($true) {
        Set-KeepAwake

        Invoke-FakeActivity -MoveMouse:$MoveMouse -PressKey:$PressKey -SwitchTabs:$SwitchTabs

        $elapsed = New-TimeSpan -Start $startedAt -End (Get-Date)
        $elapsedText = "{0:00}:{1:00}:{2:00}" -f [int]$elapsed.TotalHours, $elapsed.Minutes, $elapsed.Seconds
        $host.UI.RawUI.WindowTitle = "Keep Screen Awake - running $elapsedText"

        Write-Host ("[{0}] Keep-awake active | elapsed {1} | next refresh in {2}s" -f (Get-Date -Format "HH:mm:ss"), $elapsedText, $IntervalSeconds)
        Start-Sleep -Seconds $IntervalSeconds
    }
}
finally {
    Clear-KeepAwake
    $host.UI.RawUI.WindowTitle = "Windows PowerShell"
    Write-Host "Normal Windows power behavior restored."
}
