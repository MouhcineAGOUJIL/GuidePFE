import { ReportPage } from '../content'

export const part2: ReportPage[] = [
    // --- TITRE PARTIE 2 ---
    {
        title: 'PARTIE II : REALISATION',
        content: "Cette partie est la plus volumineuse du rapport.\n\nElle couvre tout le cycle de vie technique :\n1.  **Collecte** (Le terrain)\n2.  **Analyse** (Le sens)\n3.  **Conception** (Le plan)\n4.  **Réalisation** (Le code)\n\n> C'est ici que vous prouvez votre valeur technique.",
        isTitlePage: true
    },

    // ==========================================
    // CHAPITRE 1 : COLLECTE DES DONNEES
    // ==========================================

    {
        title: '1.1 Collecte : Objectifs & Stratégie',
        content: "### Introduction\nTransition cruciale entre la théorie et la pratique. L'objectif est de valider vos hypothèses par le terrain.\n\n### Stratégie de collecte\nIl ne suffit pas de poser des questions au hasard.\n- **Données Quantitatives** : Chiffres, statistiques (Combien ?).\n- **Données Qualitatives** : Opinions, ressentis (Pourquoi ?).\n- **Données Contextuelles** : Qui sont les répondants ?\n\n### Population Cible\nDéfinissez votre **échantillonnage** : Aléatoire ? Par quotas ? Stratifié ?\n> Une mauvaise cible rendra vos résultats inexploitables.",
        details: [
            { id: 'col-strat', text: 'Données Quantitatives' },
            { id: 'col-pop', text: 'échantillonnage' }
        ]
    },

    {
        title: '1.2 Outils & Administration',
        content: "### Choix des outils\n- **Questionnaires** : Pour le volume (Google Forms).\n- **Entretiens** : Pour la profondeur (Teams, Face à face).\n- **Observation** : Pour la réalité terrain (Grille d'observation).\n\n### Administration\nAvant de lancer un questionnaire à 1000 personnes, faites un **Test Pilote** sur 3 personnes pour chasser les ambiguïtés.\n\n### Canaux\nEmail, Réseaux sociaux, Intranet... Choisissez le canal adapté à votre cible.",
        details: [
            { id: 'col-tools', text: 'Choix des outils' },
            { id: 'col-channels', text: 'Canaux' }
        ]
    },

    {
        title: '1.3 Suivi & Consolidation',
        content: "### Monitoring\nSuivez le taux de réponse quotidiennement. Si ça stagne après 3 jours, relancez !\n\n### Nettoyage (Data Cleaning)\nAvant d'analyser, nettoyez !\n- Supprimez les doublons.\n- Écartez les réponses incomplètes ou fantaisistes.\n- Centralisez tout dans un fichier propre (Excel/CSV).\n\n### Collecte Secondaire\nN'oubliez pas les données existantes : Rapports d'activité, Logs serveurs, Bases de données ERP/CRM.",
        details: [
            { id: 'col-follow', text: 'Monitoring' },
            { id: 'col-clean', text: 'Nettoyage (Data Cleaning)' }
        ]
    },

    // ==========================================
    // CHAPITRE 2 : ANALYSE DES DONNEES
    // ==========================================

    {
        title: '2.1 Méthodologie d\'Analyse',
        content: "Une fois les données collectées, il faut les faire parler. Ne livrez jamais de données brutes.\n\n### Les 4 Étapes\n1.  **Analyse brute** : Tris à plat (Moyennes, %).\n2.  **Analyse croisée** : Corrélations (ex: Les jeunes achètent-ils plus sur mobile ?).\n3.  **Interprétation** : Donnez du sens aux chiffres.\n4.  **Synthèse** : Transformez l'interprétation en **décision**.\n\n> Un graphique sans commentaire ne sert à rien.",
        details: [
            { id: 'ana-method', text: 'Le 4 Étapes' }
        ]
    },

    {
        title: '2.2 Analyse de l\'Environnement',
        content: "Votre solution ne vit pas dans le vide. Analysez son écosystème.\n\n### SWOT (Rappel)\nConfrontez vos résultats terrain à la matrice SWOT initiale.\n\n### PESTEL\nAnalysez les contraintes macro-économiques :\n- **P**olitique\n- **E**conomique\n- **S**ocial\n- **T**echnologique\n- **E**nvironnemental (Green IT ?)\n- **L**égal (RGPD ?)",
        details: [
            { id: 'ana-pestel', text: 'PESTEL' }
        ]
    },

    {
        title: '2.3 Spécification des Besoins',
        content: "C'est le contrat de départ de votre développement.\n\n### Besoins Fonctionnels (Le Quoi)\nListez les fonctionnalités attendues par l'utilisateur :\n- *'En tant qu'admin, je veux bannir un user'*\n- *'Le système doit générer un PDF...*\n\n### Besoins Non-Fonctionnels (Le Comment)\nLes contraintes de qualité souvent oubliées :\n- **Performance** (Réponse < 1s)\n- **Sécurité** (Chiffrement AES-256)\n- **Disponibilité** (99.9% uptime)",
        details: [
            { id: 'ana-func', text: 'Besoins Fonctionnels' },
            { id: 'ana-nonfunc', text: 'Besoins Non-Fonctionnels' }
        ]
    },

    // ==========================================
    // CHAPITRE 3 : CONCEPTION (MODELING)
    // ==========================================

    {
        title: '3.1 Conception : Préambule',
        content: "### L'analogie de la maison\nOn ne pose pas de briques sans plan d'architecte. Coder sans concevoir, c'est créer de la dette technique immédiate.\n\n### Les outils de modélisation\nSelon votre profil :\n- **Dev** : UML, Merise.\n- **Data** : Pipelines ETL, Modèles ML.\n- **Réseau** : Topologies GNS3, Cisco Packet Tracer.",
        details: [
            { id: 'conc-plan', text: 'L\'analogie de la maison' }
        ]
    },

    {
        title: '3.2 UML : Vue Fonctionnelle',
        content: "### Diagramme de Cas d'Utilisation (Use Case)\nIl décrit **QUI** fait **QUOI**.\n\n- Identifiez les **Acteurs** (Humains ou Systèmes).\n- Définissez les **Cas** (Actions).\n- Utilisez les relations *include* (obligatoire) et *extend* (optionnel).\n\n> Ne rentrez pas dans les détails techniques ici, restez fonctionnel.",
        details: [
            { id: 'uml-uc', text: 'Cas d\'Utilisation' }
        ]
    },

    {
        title: '3.3 UML : Vue Statique',
        content: "### Diagramme de Classes\nC'est le **squelette** de votre application.\n- Définissez les Entités (Table BDD).\n- Définissez les Attributs et Méthodes.\n- Soignez les cardinalités (1..n, 0..1).\n\nC'est la base de votre future base de données.",
        details: [
            { id: 'uml-class', text: 'Diagramme de Classes' }
        ]
    },

    {
        title: '3.4 UML : Vue Dynamique',
        content: "### Diagramme de Séquence\nIl montre **COMMENT** les objets communiquent chronologiquement.\n\nIndispensable pour les fonctionnalités complexes (ex: Paiement en ligne, Authentification OAuth).\nIl fait le lien entre le Front, le Back et la Base de données.",
        details: [
            { id: 'uml-seq', text: 'Diagramme de Séquence' }
        ]
    },

    {
        title: '3.5 Architecture Système',
        content: "### Architecture Logique\n- **N-Tiers** : Présentation, Métier, Données.\n- **Microservices** vs **Monolithe**.\n\n### Architecture Physique\n- Diagramme de déploiement.\n- Zones de sécurité (LAN, DMZ, WAN).\n- Placement des Firewalls et Load Balancers.",
        details: [
            { id: 'conc-arch', text: 'Architecture Logique' },
            { id: 'conc-phys', text: 'Architecture Physique' }
        ]
    },

    {
        title: '3.6 UX/UI & Prototypage',
        content: "Avant de coder l'interface, dessinez-la.\n\n### Les 3 Niveaux\n1.  **Wireframes** : Le squelette (Noir & Blanc, Placeholders). Focus sur l'ergonomie.\n2.  **Mockups** : La peau (Couleurs, Typo, Images). Focus sur l'visuel.\n3.  **Prototypes** : L'interaction (Clics, Navigation). Focus sur l'expérience.\n\n> 'Le dessin est gratuit, le code coûte cher.' Validez vos écrans avant d'ouvrir VS Code.",
        details: [
            { id: 'conc-ui', text: 'Les 3 Niveaux' }
        ]
    },

    // ==========================================
    // CHAPITRE 4 : MISE EN OEUVRE
    // ==========================================

    {
        title: '4.1 Choix Technologiques',
        content: "### La Matrice de Décision\nArrêtez de choisir une techno 'parce que c'est cool'.\nComparez rationnellement :\n- **Critères** : Performance, Communauté, Coût, Courbe d'apprentissage.\n- **Pondération** : Donnez un poids à chaque critère.\n- **Score** : Notez chaque solution.\n\nLe vainqueur est celui qui a le meilleur score pondéré.",
        details: [
            { id: 'tech-matrix', text: 'Matrice de Décision' }
        ]
    },

    {
        title: '4.2 Réalisation & Challenges',
        content: "Ne racontez pas votre code ligne par ligne.\n\n### Ce qu'il faut montrer\n- Les **challenges techniques** majeurs et comment vous les avez résolus.\n- Les **bonnes pratiques** mises en place (Clean Code, Gitflow, Tests).\n- Des extraits de code **pertinents** (Algorithme complexe, Requête optimisée).\n\n> Prouvez que vous êtes un ingénieur, pas juste un exécutant.",
        details: [
            { id: 'tech-chal', text: 'challenges techniques' }
        ]
    }
]
