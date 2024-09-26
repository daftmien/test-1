# Chemin vers le répertoire contenant les fichiers à renommer
$sourcePath = "C:\Users\damir\OneDrive\Bureau\l-odyssee-de-la-cavaliere-arc-en-ciel\res-generator\resources\android\icon"

# Chemin vers le répertoire de destination
$destinationPath = "C:\Users\damir\OneDrive\Bureau\l-odyssee-de-la-cavaliere-arc-en-ciel\res-generator\android\app\src\main\res\mipmap-hdpi"

# Obtenir tous les fichiers du répertoire source
Get-ChildItem -Path $sourcePath -Filter "*.png" | ForEach-Object {
    $newName = $_.Name
    $newPath = Join-Path -Path $destinationPath -ChildPath $newName

    # Vérifier si le fichier de destination existe déjà
    if (Test-Path -Path $newPath) {
        # Supprimer le fichier de destination existant
        Remove-Item -Path $newPath -Force
    }

    # Déplacer le fichier
    Move-Item -Path $_.FullName -Destination $newPath -ErrorAction Stop
}
