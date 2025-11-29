# Start a simple HTTP server and open the default browser to the site
# Usage: Right-click -> "Run with PowerShell" or run in PowerShell

$projectPath = "d:\1_third_sem\RS\website"
$port = 8000

Write-Output "Starting HTTP server at http://localhost:$port/ serving $projectPath"
# Start python -m http.server in a new window
Start-Process -FilePath "powershell.exe" -ArgumentList "-NoExit","-Command","cd '$projectPath'; python -m http.server $port"

# Give the server a moment to start
Start-Sleep -Milliseconds 700

# Open default browser
Start-Process "http://localhost:$port/"
