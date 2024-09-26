# Chemins vers les répertoires de source et de destination
$sourceIcons = "C:\Users\damir\OneDrive\Bureau\l-odyssee-de-la-cavaliere-arc-en-ciel\res-generator\resources\android\icon"
$sourceSplash = "C:\Users\damir\OneDrive\Bureau\l-odyssee-de-la-cavaliere-arc-en-ciel\res-generator\resources\android\splash"
$destinationRes = "C:\Users\damir\OneDrive\Bureau\l-odyssee-de-la-cavaliere-arc-en-ciel\platforms\android\app\src\main\res"

# Vérifier si les répertoires de source existent
if (-Not (Test-Path -Path $sourceIcons)) {
    Write-Error "Le chemin des icônes n'existe pas : $sourceIcons"
    exit 1
}

if (-Not (Test-Path -Path $sourceSplash)) {
    Write-Error "Le chemin des splash screens n'existe pas : $sourceSplash"
    exit 1
}

# Supprimer les anciens fichiers générés par Cordova
Get-ChildItem -Path $destinationRes -Recurse -File -Filter "*.png" | ForEach-Object {
    Remove-Item -Path $_.FullName -Force
    Write-Output "Removed: $($_.FullName)"
}

# Copier les nouvelles icônes et splash screens
$densities = @("mdpi", "hdpi", "xhdpi", "xxhdpi", "xxxhdpi")
foreach ($density in $densities) {
    $sourceIconsDensity = "$sourceIcons-$density"
    $destinationIconsDensity = "$destinationRes\mipmap-$density"
    
    if (Test-Path -Path $sourceIconsDensity) {
        # Créer le répertoire de destination s'il n'existe pas
        if (-Not (Test-Path -Path $destinationIconsDensity)) {
            New-Item -ItemType Directory -Path $destinationIconsDensity
        }

        # Copier les icônes
        Copy-Item -Path "$sourceIconsDensity\*" -Destination $destinationIconsDensity -Recurse -Force
        Write-Output "Copied icons to: $destinationIconsDensity"
    }
}

# Créer le répertoire de destination pour les splash screens s'il n'existe pas
$destinationSplash = "$destinationRes\drawable"
if (-Not (Test-Path -Path $destinationSplash)) {
    New-Item -ItemType Directory -Path $destinationSplash
}

# Copier les splash screens
Copy-Item -Path "$sourceSplash\*" -Destination $destinationSplash -Recurse -Force
Write-Output "Copied splash screens to: $destinationSplash"

Write-Output "Les fichiers ont été copiés avec succès."
