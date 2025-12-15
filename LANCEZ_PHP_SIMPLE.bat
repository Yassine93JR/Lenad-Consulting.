@echo off
chcp 65001 >nul
title Ouvrir Site PHP

echo Ouverture du site PHP...
echo.

REM Essayer d'ouvrir avec le serveur PHP intégré
start "" "index.php"

REM Si PHP est installé, lancer le serveur
where php >nul 2>&1
if %ERRORLEVEL% EQU 0 (
    echo.
    echo Serveur PHP demarre sur http://localhost:8000
    echo.
    start http://localhost:8000
    php -S localhost:8000
) else (
    echo.
    echo PHP n'est pas installe.
    echo Le fichier index.php s'ouvre dans votre navigateur.
    echo.
    echo Pour la version complete, installez PHP ou XAMPP.
    echo.
    pause
)

