# Guide PFE Interactif 📚

Une application web interactive conçue pour guider les étudiants de l'ESI dans la rédaction de leur Projet de Fin d'Études (PFE). L'application simule un livre numérique pour une expérience de lecture immersive.

## 🚀 Démarrage Rapide

### Prérequis
- Node.js (v18+ recommandé)
- npm ou yarn

### Installation
```bash
git clone <votre-repo>
cd GuidePFE
npm install
```

### Lancer le serveur de développement
```bash
npm run dev
```
Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## 📂 Structure du Projet

- **`/components`** : Contient tous les composants React.
  - `BookViewer.tsx` : Le conteneur principal du livre (gère la pagination).
  - `BookPage.tsx` : Le composant qui affiche une page individuelle (texte + images).
  - `LandingPage.tsx` : La page d'accueil.
- **`/data`** : Contient les données statiques.
  - `content.ts` : **C'est ici que se trouve tout le texte du guide.**
- **`/public`** : Ressources statiques.
  - `/images` : Toutes les images du guide.
  - `/content` : (Ignoré par git) Dossier pour stocker les PDF sources bruts.

## 🛠 Guide de Contribution

### 1. Modifier le contenu du guide
Tout le contenu est centralisé dans `data/content.ts`.
Pour ajouter ou modifier une page, éditez le tableau `reportPages` :

```typescript
{
  title: 'Titre de la Page',
  content: "Votre texte ici...", // Utilisez \n pour les sauts de ligne
  image: "/images/dossier/image.png", // Optionnel
  imageCaption: "Légende de l'image", // Optionnel
  details: [ // Mots-clés interactifs
    { id: 'cle-unique', text: 'mot-clé à surligner' }
  ]
}
```

### 2. Ajouter des images
1. Placez votre image dans `public/images/`.
2. Référencez-la dans `content.ts` avec le chemin absolu (ex: `/images/part1/mon-image.png`).

### 3. Liste des Chapitres (Introduction)
Pour afficher une liste verticale dans l'introduction, rédigez simplement le contenu avec des tirets et des sauts de ligne `\n`. Le composant `BookPage` gère l'affichage ligne par ligne.

## 🎨 Technologies
- **Framework** : [Next.js](https://nextjs.org/)
- **Style** : [Tailwind CSS](https://tailwindcss.com/)
- **Animations** : [Framer Motion](https://www.framer.com/motion/)
- **Livre Interactif** : [react-pageflip](https://github.com/Nodlik/react-pageflip)

## 📝 Licence
Projet interne - École des Sciences de l'Information.
