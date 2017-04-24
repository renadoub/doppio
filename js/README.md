# Doppio Website

## Serveur http local

Pour afficher correctement une page web en local, il est nécessaire de démarrer un serveur web. Ca peut se faire très simplement de plein de manière différentes.

### Python 2
```
python2 -m SimpleHTTPServer
```

### Python 3
```
python3 -m http.server
```

### Node
Le plus simple est d'installer le package http-server via npm
```
npm install -g http-server
```
Et ensuite
```
http-server
```

## Trame de développement

### 1 - Préparation des contenus et des graphiques

Pour créer le contenu du site, on peut travailler avec bootstrap en mode one page pour éviter de gérer les copies de toutes les librairies sur les différentes pages.

Bootstrap va donner tous les composants web donc on a besoin.

Toutes les librairies sont chargées via les CDN pour éviter d'avoir à packager l'aplication. 

### 2 - Séparation en plusieurs pages

### 3 - Application d'éléments de style

### 4 - Déploiement
