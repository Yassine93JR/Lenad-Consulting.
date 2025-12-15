@echo off
chcp 65001 >nul
title Ouvrir Site Lenad Consulting

echo ========================================
echo   OUVERTURE DU SITE
echo ========================================
echo.

REM Ouvrir index.html directement
start "" "%~dp0index.html"

echo.
echo Le site s'ouvre dans votre navigateur !
echo.
echo Si vous voulez la version Laravel :
echo 1. Installez Composer
echo 2. cd laravel
echo 3. composer install
echo 4. php artisan serve
echo.
pause

