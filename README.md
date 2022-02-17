# Installation projet 
`npm install` Permet d'installer l'enssemble des modules du projet

***

# Démarrer projet sur un téléphone

1. Connecter par câble le téléphone au pc  
2. Executer `ionic cap run android --external -livereload` et selectionner le mobile voulu  
3. Par la suite l'app build et s'ouvre sur le device  

***

# Autoriser le mobile connecté à accéder à l'api en localhost

Sur chrome, accéder au [DevTools](https://chrome://inspect/#devices) (chrome://inspect)  
Selectionner "Post Forwarding" et renseigner le port et l'ip utilisé par l'api (ex: port: 3000; ip: localhost:3000)  
Actualiser la page et relancer l'app pour correctement prendre en compte les changements

***

# Récupérer les logs de l'application 

Pour récupérer les logs de l'application lancé sur le téléphone  
Sur chrome, accéder au [DevTools](https://chrome://inspect/#devices) (chrome://inspect)  
Selectionner "inspect" dans la liste des mobiles connectés  
Un nouvel onglet chrome s'ouvre avec l'affichage du device et la console chrome  

***

# API Map
Leaflet: `https://leafletjs.com/`
