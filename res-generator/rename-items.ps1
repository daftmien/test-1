# Chemin vers le répertoire contenant les fichiers et dossiers à renommer
$directoryPath = "C:\Users\damir\OneDrive\Bureau\l-odyssee-de-la-cavaliere-arc-en-ciel\res-generator\resources\android"

# Vérifier si le répertoire existe
if (-Not (Test-Path -Path $directoryPath)) {
    Write-Error "Le chemin spécifié n'existe pas : $directoryPath"
    exit 1
}

# Renommer les fichiers et dossiers en remplaçant les tirets par des underscores
Get-ChildItem -Path $directoryPath -Recurse | ForEach-Object {
    if ($_.Name -match "-") {
        $newName = $_.Name -replace '-', '_'
        $newPath = Join-Path -Path $_.Parent.FullName -ChildPath $newName
        Rename-Item -Path $_.FullName -NewName $newPath -ErrorAction Stop
        Write-Output "Renamed: $($_.FullName) to $newPath"
    }
}

Write-Output "Les fichiers et dossiers ont été renommés avec succès."
