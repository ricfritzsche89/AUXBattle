@echo off
:: BatchGotAdmin
:-------------------------------------
REM  --> Check for permissions
>nul 2>&1 "%SYSTEMROOT%\system32\cacls.exe" "%SYSTEMROOT%\system32\config\system"

REM --> If error flag set, we do not have admin.
if '%errorlevel%' NEQ '0' (
    echo Fordere Administratorrechte an...
    goto UACPrompt
) else ( goto gotAdmin )

:UACPrompt
    echo Set UAC = CreateObject^("Shell.Application"^) > "%temp%\getadmin.vbs"
    set params = %*:"=""
    echo UAC.ShellExecute "cmd.exe", "/c %~s0 %params%", "", "runas", 1 >> "%temp%\getadmin.vbs"

    "%temp%\getadmin.vbs"
    del "%temp%\getadmin.vbs"
    exit /B

:gotAdmin
    pushd "%CD%"
    CD /D "%~dp0"
:--------------------------------------

echo ====================================================
echo AUX Battle - Firewall Setup
echo ====================================================
echo.
echo Loesche alte Regeln falls vorhanden...
netsh advfirewall firewall delete rule name="AUX Battle Vite Port 5173" >nul 2>&1

echo.
echo Erstelle neue Firewall-Regeln fuer Port 5173 (TCP)...
netsh advfirewall firewall add rule name="AUX Battle Vite Port 5173" dir=in action=allow protocol=TCP localport=5173 profile=any
netsh advfirewall firewall add rule name="AUX Battle Vite Port 5173" dir=out action=allow protocol=TCP localport=5173 profile=any

echo.
echo ====================================================
echo Setup erfolgreich abgeschlossen! 
echo Dein Handy kann sich jetzt ueber den QR-Code verbinden.
echo ====================================================
echo.
pause
