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

REM Push to main
echo Pushing source...
git push origin main

REM Deploy to gh-pages using subtree
echo Deploying to gh-pages...

REM Make sure gh-pages exists
git checkout gh-pages 2>nul || git checkout -b gh-pages

REM Clean and Copy
git rm -rf .
git clean -fxd
xcopy /E /I /Y dist\* .

REM Commit and Push
git add .
git commit -m "Deploy: Enhanced UI"
git push -f origin gh-pages

REM Return to main
git checkout main

echo.
echo Deployment Complete!
pause
