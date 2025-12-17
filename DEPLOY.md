# Guide de Déploiement

Ce projet est construit avec **Next.js**, ce qui rend son déploiement très simple sur des plateformes modernes.

## Option 1 : Vercel (Recommandé)
C'est la méthode la plus simple et la plus optimisée pour Next.js.

1. Créez un compte sur [Vercel](https://vercel.com).
2. Installez Vercel CLI ou connectez votre repo GitHub/GitLab.
   ```bash
   npm i -g vercel
   vercel login
   ```
3. Déployez depuis la racine du projet :
   ```bash
   vercel
   ```
4. Suivez les instructions à l'écran (validez les paramètres par défaut).

## Option 2 : Netlify
1. Créez un fichier `netlify.toml` à la racine si nécessaire, ou configurez via l'interface web.
2. Commande de build : `npm run build`
3. Répertoire de publication : `.next` (ou via le plugin Next.js de Netlify).

## Option 3 : Hébergement Classique (VPS / Docker)
Si vous souhaitez héberger sur votre propre serveur (Ubuntu/Debian, etc.).

### Prérequis
- Node.js 18+ installé sur le serveur.
- Un gestionnaire de processus comme PM2 (optionnel mais recommandé).

### Étapes
1. **Build** : Compilez l'application pour la production.
   ```bash
   npm run build
   ```
2. **Start** : Lancez le serveur de production.
   ```bash
   npm start
   ```
   *L'application tournera par défaut sur le port 3000.*

### Avec Docker
Créez un `Dockerfile` :
```dockerfile
FROM node:18-alpine AS base

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
```

Puis construisez et lancez :
```bash
docker build -t guide-pfe .
docker run -p 3000:3000 guide-pfe
```

## Note sur les Images
Assurez-vous que le dossier `public/images` est bien inclus dans votre déploiement. Si vous utilisez Docker, la commande `COPY . .` s'en charge.
