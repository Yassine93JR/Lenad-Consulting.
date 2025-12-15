@echo off
chcp 65001 >nul
title Serveur PHP - Lenad Consulting

echo ========================================
echo   SERVEUR PHP LOCAL
echo ========================================
echo.

REM Vérifier si PHP est installé
where php >nul 2>&1
if %ERRORLEVEL% NEQ 0 (
    echo [ERREUR] PHP n'est pas installe !
    echo.
    echo Installez PHP depuis : https://www.php.net/downloads.php
    echo OU utilisez XAMPP : https://www.apachefriends.org/
    echo.
    pause
    exit /b 1
)

echo [OK] PHP detecte
php --version
echo.

echo [INFO] Demarrage du serveur PHP...
echo.
echo Le site sera disponible sur : http://localhost:8000
echo.
echo Appuyez sur Ctrl+C pour arreter le serveur
echo.
echo ========================================
echo.

php -S localhost:8000

pause

