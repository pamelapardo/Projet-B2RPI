#!/bin/bash

# Vérifier que le script est exécuté en tant que superutilisateur (root)
if [[ $EUID -ne 0 ]]; then
   echo "Ce script doit être exécuté en tant que superutilisateur (root)."
   exit 1
fi

# Installer Apache
apt update
apt install -y apache2

# Installer Git
apt install -y git

# Cloner le dépôt Git dans le répertoire du site Apache
cd /var/www/html

# Spécifiez ici l'URL de votre dépôt Git
git clone https://github.com/pamelapardo/arkhe_build

# Modifier le chemin du répertoire racine dans le fichier de configuration d'Apache
nouveau_chemin="/var/www/html/arkhe_build"

# Vérifier si le chemin existe
if [ -d "$nouveau_chemin" ]; then
    sed -i "s#/var/www/html#$nouveau_chemin#" /etc/apache2/sites-available/000-default.conf
else
    echo "Le chemin '$nouveau_chemin' n'existe pas."
    exit 1
fi

# Redémarrer Apache pour appliquer les modifications
systemctl restart apache2

# Afficher un message de confirmation
echo "Le chemin du répertoire racine d'Apache a été modifié avec succès vers $nouveau_chemin."

# Sortir du script
exit 0
