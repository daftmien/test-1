# Définit les chemins des répertoires sources et cibles
$splashSrc = "C:\Users\damir\OneDrive\Bureau\l-odyssee-de-la-cavaliere-arc-en-ciel\res-generator\resources\android\splash"
$iconSrc = "C:\Users\damir\OneDrive\Bureau\l-odyssee-de-la-cavaliere-arc-en-ciel\res-generator\resources\android\icon"
$drawableSrc = "C:\Users\damir\OneDrive\Bureau\l-odyssee-de-la-cavaliere-arc-en-ciel\res-generator\resources\drawable"

$splashDest = "C:\Users\damir\OneDrive\Bureau\l-odyssee-de-la-cavaliere-arc-en-ciel\platforms\android\app\src\main\res\drawable"
$iconDest = "C:\Users\damir\OneDrive\Bureau\l-odyssee-de-la-cavaliere-arc-en-ciel\platforms\android\app\src\main\res\mipmap-anydpi"
$drawableDest = "C:\Users\damir\OneDrive\Bureau\l-odyssee-de-la-cavaliere-arc-en-ciel\platforms\android\app\src\main\res\drawable"

# Crée les répertoires de destination s'ils n'existent pas
If (-not (Test-Path -Path $splashDest)) { New-Item -ItemType Directory -Path $splashDest }
If (-not (Test-Path -Path $iconDest)) { New-Item -ItemType Directory -Path $iconDest }
If (-not (Test-Path -Path $drawableDest)) { New-Item -ItemType Directory -Path $drawableDest }

# Copie les fichiers de splash
Copy-Item -Path "$splashSrc\*" -Destination $splashDest -Recurse -Force

# Copie les fichiers d'icônes
Copy-Item -Path "$iconSrc\*" -Destination $iconDest -Recurse -Force

# Copie les fichiers drawable
Copy-Item -Path "$drawableSrc\*" -Destination $drawableDest -Recurse -Force
