import { ReportPage } from '../content'

export const part1: ReportPage[] = [
    // --- TITRE PARTIE 1 ---
    {
        title: 'PARTIE I : CADRAGE & PROJET',
        content: "Cette partie couvre le **Cadrage** du projet et les **Informations de seconde main** (État de l'art).\n\nElle est cruciale car elle construit la fondation théorique et méthodologique de votre travail.",
        isTitlePage: true
    },

    // --- CHAPITRE 1 : SUJET - OBJET - PROBLEME ---
    {
        title: '1. Sujet, Objet & Problème',
        content: "Ces trois concepts définissent le périmètre de votre intervention.\n\n### Le Sujet\nIl correspond au thème général (ex: *L'Intelligence Artificielle*). Il situe le travail dans son contexte global (Secteur, Techno).\n\n### L'Objet\nIl précise ce qui est réellement étudié (ex: *L'optimisation des réseaux de neurones pour mobile*). C'est l'angle d'attaque spécifique.\n\n### Le Problème\nC'est le dysfonctionnement observé (ex: *Les modèles actuels sont trop lents*). C'est le point de départ concret qui nécessite une intervention.",
        details: [
            { id: 'sujet-bp', text: 'Le Sujet' },
            { id: 'objet-bp', text: 'L\'Objet' },
            { id: 'probleme-bp', text: 'Le Problème' }
        ]
    },

    // --- CHAPITRE 2 : PROBLEMATIQUE & SWOT ---
    {
        title: '2. La Problématique',
        content: "Une problématique se construit selon une logique rigoureuse en **3 étapes** :\n\n### ÉTAPE 1 : Le Contexte et l'Enjeu\n**Structure** : \"Dans un contexte de [tendance], le domaine de [domaine] fait face à [défi]. L'enjeu principal réside dans [enjeu].\"\n\n> **Exemple** : \"Dans un contexte de digitalisation accélérée... cette double contrainte place les conseillers dans une situation paradoxale où ils doivent à la fois accélérer et sécuriser leurs processus.\"\n\n### ÉTAPE 2 : L'État des Connaissances et le Paradoxe\n**Structure** : \"Les recherches existantes ont montré [ce que l'on sait]. Cependant, elles présentent des limites [critique]. On observe ainsi une tension entre [aspect A] et [aspect B].\"\n\n> **Exemple** : \"La littérature sur l'automatisation (Smith, 2020)... démontre ses bénéfices... Néanmoins, ces études négligent la dimension relationnelle... Se crée ainsi une tension entre standardisation et personnalisation.\"\n\n### ÉTAPE 3 : La Question de Recherche\n**Structure** : \"Face à ce constat, notre recherche s'interroge : Comment [action] peut-il permettre de [résoudre tension] ?\"\n\n> **Exemple** : \"Dans quelle mesure une plateforme hybride... peut-elle optimiser la gestion patrimoniale sans déshumaniser le conseil ?\"\n\n### 🔍 Les 4 Types de Problématiques\n1. **L'Écart** : Théorie vs Pratique.\n2. **Le Paradoxe** : Innovation vs Contrôle.\n3. **Le Changement** : Adaptation face à une rupture.\n4. **L'Application** : Transposition d'un concept.",
        details: [
            { id: 'prob-structure', text: '3 étapes' },
            { id: 'prob-types', text: '4 Types de Problématiques' },
            { id: 'prob-structure', text: 'situation paradoxale' }
        ]
    },

    // --- CHAPITRE 3 : QUESTIONS DE RECHERCHE ---
    {
        title: '3. Questions de Recherche',
        content: "Elles décomposent la problématique en sous-questions ciblées pour structurer la démarche.\n\n### Règles d'or\n- **2 à 5 questions** maximum.\n- Elles doivent être **logiques** et **complémentaires**.\n- Elles couvrent la totalité du problème posé.\n\n> Ne confondez pas 'Question de recherche' (Théorique/Analytique) et 'Tâche à faire' (Technique).",
        details: [
            { id: 'q-rech-do', text: 'Règles d\'or' },
            { id: 'q-rech-dont', text: 'ne confondez pas' }
        ]
    },

    // --- CHAPITRE 4 : OBJECTIFS (SMART) ---
    {
        title: '4. Objectifs du Projet',
        content: "Les objectifs traduisent les questions de recherche en **actions concrètes**.\n\n### Niveaux\n- **Objectif Général** : La finalité globale du projet.\n- **Objectifs Spécifiques** : Les étapes opérationnelles pour y arriver.\n\n### Méthode S.M.A.R.T\nVos objectifs doivent être :\n- **S**pécifiques (Clairs)\n- **M**esurables (Quantifiables)\n- **A**tteignables (Faisables)\n- **R**éalistes (Pertinents)\n- **T**emporels (Datés)",
        details: [
            { id: 'obj-smart', text: 'Méthode S.M.A.R.T' },
            { id: 'obj-verbs', text: 'actions concrètes' }
        ]
    },

    // --- CHAPITRE 5 : HYPOTHESES ---
    {
        title: '5. Les Hypothèses',
        content: "Les hypothèses sont des **suppositions logiques** que votre travail va chercher à valider ou infirmer.\n\n### Types d'hypothèses\n- **Descriptive** : Décrit un phénomène.\n- **Explicative** : Lien de cause à effet.\n- **Comparative** : Compare deux méthodes.\n- **Prédictive** : Anticipe un résultat.\n\n> Une hypothèse n'est pas une certitude, c'est un point de départ pour l'expérimentation.",
        details: [
            { id: 'hyp-types', text: 'Types d\'hypothèses' },
            { id: 'hyp-bp', text: 'suppositions logiques' }
        ]
    },

    // --- CHAPITRE 6 : REVUE DE LITTERATURE ---
    {
        title: '6. Revue de Littérature (RL)',
        content: "La RL est le fondement théorique de votre recherche. Elle identifie ce qui a déjà été fait.\n\n### Le 'GAP' (Manque)\nLe but ultime est de trouver le **GAP** : Ce que la littérature n'a pas encore résolu. C'est là que se situe votre valeur ajoutée.\n\n### Méthodologie\n1.  **Recherche** : Mots-clés, Opérateurs booléens, Sources fiables (IEEE, ScienceDirect).\n2.  **Saturation** : Arrêter quand plus aucune nouvelle idée n'apparaît.\n3.  **Synthèse** : Ne résumez pas article par article. Regroupez par idées/thèmes.",
        details: [
            { id: 'rl-def', text: 'fondement théorique' },
            { id: 'rl-gap', text: 'Le \'GAP\'' },
            { id: 'rl-method', text: 'Méthodologie' }
        ]
    },

    // --- CHAPITRE 7 : ANALYSE DOCUMENTAIRE & BENCHMARK ---
    {
        title: '7. Analyse Doc. & Benchmark',
        content: "### Analyse Documentaire\nUtilisation de sources existantes (Documents techniques, Rapports, Données brutes) pour comprendre le phénomène.\n\n### Benchmarking (Comparatif)\nMéthode pour comparer plusieurs solutions existantes selon des critères précis.\n1.  **Identifier** les solutions concurrentes.\n2.  **Définir** les critères (Coût, Perf, Sécurité).\n3.  **Comparer** (Tableau pondéré).\n4.  **Conclure** sur la meilleure solution.",
        details: [
            { id: 'doc-analysis', text: 'Analyse Documentaire' },
            { id: 'bench-steps', text: 'Benchmarking (Comparatif)' }
        ]
    },

    // --- CONCLUSION PARTIE 1 ---
    {
        title: 'Conclusion Partie I',
        content: "Cette partie a posé le **cadre méthodologique** du projet.\n\nEn définissant clairement le sujet, la problématique et en analysant l'existant (Revue de littérature, Benchmark), nous avons légitimé la nécessité de ce projet et identifié la **valeur ajoutée** attendue.\n\nNous pouvons maintenant passer à l'analyse et à la conception de la solution.",
        details: [
            { id: 'cl-conclusion', text: 'Conclusion Partie I' }
        ]
    }
]
