@echo off
echo ========================================
echo   LENAD CONSULTING - LANCEMENT DU SITE
echo ========================================
echo.

REM Vérifier si Node.js est installé
where node >nul 2>&1
if %ERRORLEVEL% NEQ 0 (
    echo [ERREUR] Node.js n'est pas installe!
    echo.
    echo Veuillez installer Node.js depuis:
    echo https://nodejs.org/
    echo.
    pause
    exit /b 1
)

echo [OK] Node.js detecte
echo.

REM Vérifier si node_modules existe
if not exist "node_modules" (
    echo [INFO] Installation des dependances...
    echo Cela peut prendre 2-5 minutes...
    echo.
    call npm install
    if %ERRORLEVEL% NEQ 0 (
        echo.
        echo [ERREUR] L'installation a echoue!
        echo Essayez: npm install --legacy-peer-deps
        pause
        exit /b 1
    )
    echo.
    echo [OK] Dependances installees!
    echo.
) else (
    echo [OK] Dependances deja installees
    echo.
)

REM Lancer le serveur
echo [INFO] Lancement du site...
echo.
echo Le site sera disponible sur: http://localhost:3000
echo.
echo Appuyez sur Ctrl+C pour arreter le serveur
echo.
echo ========================================
echo.

call npm run dev

pause

