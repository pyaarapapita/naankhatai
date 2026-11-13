@echo off
echo ===================================================
echo   Starting Our Story - 3D Romantic Universe
echo ===================================================
echo Opening in default browser...
start "" "http://localhost:8080/index.html"
echo Starting local web server on port 8080 (Press Ctrl+C to stop)...
python -m http.server 8080
pause

