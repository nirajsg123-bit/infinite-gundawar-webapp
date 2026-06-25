@echo off
echo Starting Infinite Gundawar Web App...
cd /d C:\Users\drnik\infinite-gundawar-webapp

:: Kill any existing node processes on port 3000
for /f "tokens=5" %%a in ('netstat -ano ^| findstr :3000 ^| findstr LISTENING') do (
    taskkill /PID %%a /F >nul 2>&1
)

:: Build if .next doesn't exist
if not exist ".next" (
    echo Building for production...
    call npm run build
    if errorlevel 1 (
        echo BUILD FAILED!
        pause
        exit /b 1
    )
)

:: Start production server
echo Starting production server on http://localhost:3000
start http://localhost:3000
npm run start
