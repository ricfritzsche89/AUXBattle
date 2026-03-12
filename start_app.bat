@echo off
echo Starte AUX Battle PWA...
echo.

:: Prüfe ob node_modules existieren, falls nicht installiere sie
if not exist "node_modules\" (
    echo node_modules nicht gefunden. Installiere Abhängigkeiten...
    call npm install
)

:: Öffne den Browser
echo Öffne Browser...
start http://localhost:5173

:: Starte den Dev-Server
echo Dev-Server wird gestartet...
echo.
call npm run dev

pause
