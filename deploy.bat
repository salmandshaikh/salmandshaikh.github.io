@echo off
echo Deploying Enhanced Portfolio...
echo.

cd /d "%~dp0"

echo Building project...
call npm run build
if %errorlevel% neq 0 (
    echo Error building project.
    pause
    exit /b %errorlevel%
)

REM Add all files
git add .
git commit -m "Enhanced UI: Neural background + Glassmorphism"
git push origin main

echo Deploying to gh-pages...

REM Create a temp folder for the build
if exist "..\temp_dist" rmdir /s /q "..\temp_dist"
xcopy /E /I /Y dist "..\temp_dist"

REM Switch to gh-pages
git checkout gh-pages 2>nul || git checkout -b gh-pages

REM Clean content but keep .git
git rm -rf .
git clean -fxd

REM Restore from temp
xcopy /E /I /Y "..\temp_dist" .
rmdir /s /q "..\temp_dist"

REM Commit and Push
git add .
git commit -m "Deploy: Enhanced UI"
git push -f origin gh-pages

REM Return to main
git checkout main

echo.
echo Deployment Complete!
pause
