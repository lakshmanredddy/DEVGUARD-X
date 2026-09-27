@echo off
cd /d "%~dp0"
where node >nul 2>nul
if errorlevel 1 (
  echo Node.js 20+ is required. Install Node.js and run this file again.
  pause
  exit /b 1
)
echo.
echo ========================================
echo        DEVGUARD-X  ^|  IBM Bob 2.0
echo ========================================
echo.
echo Starting full-stack server...
start "DEVGUARD-X Server" cmd /k "node server.js"
timeout /t 2 /nobreak >nul
start "" "http://localhost:3000"
