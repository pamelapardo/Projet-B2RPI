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
git clone https://github.com/pamelapardo/arkhe_build

# Redémarrer Apache pour appliquer les modifications
systemctl restart apache2

# Afficher un message de confirmation
echo "Le site a été déployé avec succès."

# Sortir du script
exit 0
