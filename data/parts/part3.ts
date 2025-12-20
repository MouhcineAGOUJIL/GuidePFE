import { ReportPage } from '../content'

export const part3: ReportPage[] = [
    // --- TITRE PARTIE 3 ---
    {
        title: 'PARTIE III : RÉSULTATS & DISCUSSION',
        content: "Objectif : Démontrer, **preuves à l'appui**, que le travail réalisé répond à la problématique et aux objectifs du PFE.\n\nC'est la partie la plus 'scientifique' du rapport.",
        isTitlePage: true
    },

    // --- INTRODUCTION & ROLE ---
    {
        title: '1. Rôle et Place',
        content: "### L'Architecture du Rapport\n- **Partie I & II** : Promesse (Ce qu'on veut faire).\n- **Partie III** : Preuve (Ce qu'on a fait et ce que ça vaut).\n\n### Attentes du Jury\n1.  **Objectifs atteints** : Vérification factuelle.\n2.  **Mesures concrètes** : Pas de 'ça marche bien'. Donnez des chiffres !\n3.  **Lucidité** : Connaître ses limites est une preuve de maturité.",
        details: [
            { id: 'role-proof', text: 'Preuve' },
            { id: 'expect-kpi', text: 'Mesures concrètes' }
        ]
    },

    // --- DEFINITIONS CLÉS ---
    {
        title: '2. Définitions à ne pas confondre',
        content: "### Résultats (Quoi ?)\nLes faits bruts et observables.\n*Ex: 'Le modèle atteint 92% de précision.'*\n\n### Analyse (Pourquoi ?)\nL'explication technique.\n*Ex: 'Le gain vient de l'optimisation des hyperparamètres.'*\n\n### Discussion (Et alors ?)\nLe recul critique et l'impact.\n*Ex: 'C'est 12% de mieux que l'état de l'art.'*",
        details: [
            { id: 'def-res', text: 'Résultats (Quoi ?)' },
            { id: 'def-ana', text: 'Analyse (Pourquoi ?)' },
            { id: 'def-disc', text: 'Discussion (Et alors ?)' }
        ]
    },

    // --- CHAPITRE 1 : PRESENTATION DES RESULTATS ---
    {
        title: '3.1 Présentation : Rappel & KPI',
        content: "### Le Cadre\nRappelez toujours l'objectif avant de montrer le résultat. Structurez par **Objectif** et non par chronologie.\n\n### Les KPI (Indicateurs)\nDéfinissez vos critères d'acceptation :\n- **IT/Data** : Précision, Latence, F1-Score.\n- **Réseaux** : Bande passante, Jitter.\n- **Gestion** : ROI, Taux d'erreur.",
        details: [
            { id: 'pres-struct', text: 'Structurez par Objectif' },
            { id: 'kpi-examples', text: 'Les KPI (Indicateurs)' }
        ]
    },

    {
        title: '3.2 La "Fiche Résultat"',
        content: "Pour chaque résultat majeur, adoptez ce format standard :\n\n1.  **Intitulé** : *Résultat R1 : Performance du système*\n2.  **Contexte** : *Sur maquette V2, 1000 utilisateurs*\n3.  **Valeur** : *Temps moyen = 1.6s*\n4.  **Critère** : *Objectif < 2.0s*\n5.  **Statut** : *✅ Atteint*",
        details: [
            { id: 'res-sheet', text: 'format standard' }
        ]
    },

    {
        title: '3.3 Figures & Tableaux',
        content: "### Bonnes Pratiques\n- **Numérotation** : Fig III.1, Tab III.2.\n- **Titre** : Informatif et explicite.\n- **Légende** : Unités, axes, sources.\n\n### Commenter une figure\n1.  **Annonce** : 'La figure ci-dessous montre...'\n2.  **Observation** : 'On constate un pic à 14h...'\n3.  **Lien** : 'Cela confirme l'hypothèse H1.'",
        details: [
            { id: 'fig-bp', text: 'Bonnes Pratiques' },
            { id: 'fig-comment', text: 'Commenter une figure' }
        ]
    },

    {
        title: '3.4 Le Tableau de Synthèse',
        content: "C'est l'élément **indispensable** pour la fin de ce chapitre.\n\nIl permet au jury de valider le projet en un coup d'œil.\n**Colonnes** : Objectif | Indicateur (KPI) | Seuil Attendu | Résultat | Statut (OK/KO).",
        details: [
            { id: 'tab-synth', text: 'Tableau de Synthèse' }
        ]
    },

    // --- CHAPITRE 2 : ANALYSE ---
    {
        title: '4.1 Méthodologie de Validation',
        content: "Un résultat sans protocole n'a aucune valeur scientifique.\n\n### Le Protocole\n- **Stratégie** : Fonctionnel, Performance, Sécurité ?\n- **Données** : Volume, provenance.\n- **Outils** : JMeter, Postman, SonarQube.\n- **Reproductibilité** : Tout doit pouvoir être refait à l'identique.",
        details: [
            { id: 'val-proto', text: 'Protocole' },
            { id: 'val-tools', text: 'Outils' }
        ]
    },

    {
        title: '4.2 Analyses Quantitatives & Qualitatives',
        content: "### Quantitative\nUtilisez les statistiques (Moyenne, Variance, Écart-type). Comparez avant/après (A/B Testing).\n\n### Qualitative\nPour l'ergonomie ou les bugs.\n*Observation : 'L'utilisateur ne trouve pas le bouton.'*\n*Cause : 'Contraste insuffisant.'*",
        details: [
            { id: 'ana-quant', text: 'Quantitative' },
            { id: 'ana-qual', text: 'Qualitative' }
        ]
    },

    {
        title: '4.3 Interprétation',
        content: "### Le Pourquoi\nExpliquez les causes profondes des résultats.\n- *'Ce résultat s'explique par la saturation du bus...'*\n- *'Le facteur dominant est la qualité des données...'\n\nNe constatez pas seulement, **expliquez** !",
        details: [
            { id: 'ana-why', text: 'Interprétation' }
        ]
    },

    // --- CHAPITRE 3 : DISCUSSION ---
    {
        title: '5.1 Discussion & Comparaison',
        content: "Positionnez votre travail.\n\n- **Baseline** : Mieux qu'avant ?\n- **Exigences** : Conforme au cahier des charges ?\n- **Compromis** : Avez-vous sacrifié la vitesse pour la précision ?\n- **Impact** : Quelles conséquences pour la production ?",
        details: [
            { id: 'disc-comp', text: 'Positionnez votre travail' }
        ]
    },

    {
        title: '5.2 Les Limites (Honnêteté)',
        content: "Soyez honnête intellectuellement. Cacher les défauts est suspect.\n\n- **Données** : Biais, volume insuffisant ?\n- **Technique** : Matériel limité ?\n- **Temps** : Manque de temps pour tout finir ?\n\n> Avouer une limite et proposer une correction est une preuve de professionnalisme.",
        details: [
            { id: 'disc-limits', text: 'Soyez honnête' }
        ]
    },

    {
        title: '5.3 Recommandations & Perspectives',
        content: "Que faire après vous ?\n\n- **Court terme** : Actions rapides (Correctifs).\n- **Moyen terme** : Développements futurs (CI/CD).\n- **Long terme** : Refonte, Changement d'échelle.",
        details: [
            { id: 'disc-future', text: 'Recommandations' }
        ]
    },

    // --- CONSEILS REDACTION ---
    {
        title: '6. Style & Erreurs à éviter',
        content: "### Style Académique\n- **Neutre et Précis**. Pas d'opinions ('C'est super').\n- **Phrases courtes**.\n\n### Erreurs fréquentes\n- Mélanger Résultats et Discussion.\n- Trop de captures d'écran sans commentaire.\n- Résultats 'orphelins' sans lien avec les objectifs.",
        details: [
            { id: 'style-acad', text: 'Style Académique' },
            { id: 'style-errors', text: 'Erreurs fréquentes' }
        ]
    },

    // --- CONCLUSION PARTIE 3 ---
    {
        title: 'Conclusion Partie III',
        content: "Cette partie a permis de valider techniquement le projet.\n\nNous avons prouvé l'atteinte des objectifs via des mesures factuelles, analysé les écarts et discuté les limites.\n\nLe projet est maintenant prêt pour le bilan général.",
        details: [
            { id: 'nop-conc', text: 'Conclusion Partie III' }
        ]
    }
]
