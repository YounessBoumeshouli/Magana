readme 

MAGANA E-commerc : 

Bienvenue dans la  plateforme e-commerce de notre entreprise on traivailler pour offrir une expérience d'achat en ligne fluide et personnalisée. Cette plateforme permettra aux utilisateurs de choisir et personnaliser leurs produits, tout en offrant des fonctionnalités avancées pour faciliter la recherche, la navigation, et la gestion des commandes. Ce projet vise à créer une vitrine moderne, qui allie efficacité, ergonomie et performances.


Tables des Matiéres :

Planification

Fonctionnalités

Utilisation

Captures d'Écran

Structure des Fichiers

Technologies Utilisées


planification :  
 
voila le lien vere github projects pour voir la planification de mon brief : 

https://github.com/users/YounessBoumeshouli/projects/1


Fonctionnalités  :


1. Conception et Maquettage (D & M) 🖌️
Maquettes : Création de maquettes interactives et attractives, intégrant des éléments tels que des sliders et des effets visuels dynamiques afin d'optimiser l'expérience utilisateur.
2. Développement 💻
Carrousel : Intégration d'un carrousel dynamique pour la mise en avant des produits phares et des promotions, offrant une expérience interactive.

Galerie : Développement d'une galerie interactive permettant de visualiser les produits sous différents angles et avec différentes options.

Validation REGEX : Mise en place de validations avec des expressions régulières pour assurer l'intégrité des données saisies, comme les noms, adresses et e-mails.

Filtre et Recherche : Développement d'une fonctionnalité de recherche avancée et de filtres pour permettre aux utilisateurs de trouver facilement des produits selon des critères comme la taille, la couleur et les caractéristiques techniques.

Personnalisation des produits : Permet aux utilisateurs de personnaliser les produits (choix de caractéristiques, options supplémentaires) avec une mise à jour en temps réel du prix.

Panier : Mise en place d'un panier interactif, où la quantité des produits sélectionnés peut être ajustée et le prix total recalculé instantanément.

Devis : Génération d'un devis détaillé au format PDF, permettant aux utilisateurs de conserver ou partager un récapitulatif de leur commande.

Local Storage : Utilisation du localStorage pour enregistrer les préférences et les choix des utilisateurs, afin d'améliorer la fluidité de la navigation et faciliter le retour aux sélections précédentes.

Consommation API : Intégration d'une API pour récupérer en temps réel les informations sur les produits, assurant ainsi une gestion efficace et flexible des données.



Utilisation :


Prérequis
Avant de démarrer ce projet, assurez-vous d'avoir les éléments suivants installés sur votre machine :

Node.js (version 12 ou supérieure) : Pour gérer les dépendances et le serveur local.
npm (ou yarn) : Pour installer les dépendances du projet.
Installation
Clonez ce dépôt sur votre machine locale :

bash
Copier le code
git clone https://github.com/votre-utilisateur/nom-du-repository.git
Allez dans le répertoire du projet :

bash
Copier le code
cd nom-du-repository
Installez les dépendances nécessaires :

bash
Copier le code
npm install
Lancer le projet
Pour lancer l’application en mode développement, utilisez la commande suivante :

bash
Copier le code
npm start
Cela démarrera un serveur local sur http://localhost:3000 (ou le port par défaut configuré).

Fonctionnalités disponibles
Une fois l’application lancée, vous pouvez explorer les fonctionnalités suivantes :

Carrousel dynamique sur la page d'accueil pour visualiser les produits phares et promotions.
Galerie interactive permettant de visualiser les produits sous différents angles.
Filtres avancés pour rechercher des produits selon des critères spécifiques (taille, couleur, etc.).
Personnalisation des produits, mise à jour en temps réel des prix en fonction des sélections.
Ajout au panier avec mise à jour instantanée du total en fonction des quantités.
Devis généré en PDF, avec toutes les informations de la commande.
Consommation API
L’application récupère les informations sur les produits via une API. Assurez-vous que l’API est correctement configurée et accessible pour un fonctionnement optimal.

Structure des Fichiers :

- index.html : ficher html principal 

- views :
             -catalogue.html
             -details.html
             -panier.html
             -about.html

-Assets :
   -css:
            - global.css
            - input.css
            - output.css 
   -images:
             -brand 
             - home-images
             - magana-images
             - product 
    js :
             -catalogue.js
             -details.js 
             - home.js
             - panier.js
             - about.js
             - script.js
             - data.json