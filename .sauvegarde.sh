#!/usr/bin/env sh

# Abandonner en cas d'erreur
set -e

# Ajouter tous les fichiers au suivi Git
git add .

# Commit avec un message
git commit -m 'sauvegarde rapide'

# Envoyer les modifications vers le dépôt distant
git push
