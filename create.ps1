param (
    [string]$day = "1",
    [string]$year = "2020"
 )

# Create The Folder for the Day
New-Item -Path "$($PSScriptRoot)\src" -Name $day -ItemType "directory"

# Create 2 new empty Files
New-Item -Path "$($PSScriptRoot)\src\$($day)" -Name "inputTest.txt" -ItemType "file"
New-Item -Path "$($PSScriptRoot)\src\$($day)" -Name "day$($day).js" -ItemType "file"


# Get the input for the day
$source = "https://adventofcode.com/$($year)/day/$($day)/input"
$destination = "$($PSScriptRoot)\src\$($day)\input.txt" 
$cookie = Get-Content C:\Users\sryod\Desktop\Advent-of-Code\cookie.txt -First 1

$webConnection = New-Object System.Net.WebClient
$webConnection.Headers.Add([System.Net.HttpRequestHeader]::Cookie, "session=$($cookie)")
$webConnection.DownloadFile($source, $destination)