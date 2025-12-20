import { ReportPage } from '../content'

export const part0: ReportPage[] = [
    // --- NOTICE BIBLIOGRAPHIQUE ---
    {
        title: 'Notice Bibliographique',
        content: "Cette page est **obligatoire** et doit respecter un format strict pour l'archivage.\n\n### 1. Titre du PFE\nLe titre doit être **identique** à celui de la couverture. Il doit être concis, précis et refléter exactement le contenu technique.\n\n### 2. Auteur & Encadrement\nIndiquez clairement :\n- Votre **Nom et Prénom**\n- Les noms de vos encadrants (Pédagogique et Entreprise)\n\n### 3. Résumé (Synthèse)\nUn paragraphe de **10 à 15 lignes** maximum. Il doit répondre à 3 questions :\n- Quel est le contexte ?\n- Quel est le problème ?\n- Quelle est la solution apportée ?\n\n### 4. Mots-clés\nSélectionnez **4 à 6 mots-clés** pertinents pour l'indexation (ex: Intelligence Artificielle, Supply Chain, React, Microservices).",
        details: [
            { id: 'meta-titre', text: 'Titre du PFE' },
            { id: 'meta-resume', text: 'Résumé (Synthèse)' },
            { id: 'meta-keywords', text: 'Mots-clés' }
        ]
    },

    // --- RESUME (FR) ---
    {
        title: 'Résumé',
        content: "Le résumé en français est une **version étendue** de celui de la notice bibliographique. Il tient sur une page.\n\n### Structure recommandée\n1. **Contexte (20%)** : Situer le stage (Entreprise, Secteur).\n2. **Problématique (20%)** : La difficulté majeure abordée.\n3. **Méthodologie (30%)** : Les outils et la démarche adoptés.\n4. **Résultats (30%)** : Les gains chiffrés et la conclusion technique.\n\n### Mots-clés\nListez de nouveau ici les **Mots-clés** principaux pour faciliter la lecture rapide.\n\n> **Conseil** : C'est souvent la seule page lue par les recruteurs ou les non-spécialistes. Soignez l'orthographe et le style !",
        details: [
            { id: 'resume-context', text: 'Contexte (20%)' },
            { id: 'resume-problem', text: 'Problématique (20%)' },
            { id: 'resume-method', text: 'Méthodologie (30%)' },
            { id: 'resume-results', text: 'Résultats (30%)' },
            { id: 'meta-keywords', text: 'Mots-clés' }
        ]
    },

    // --- ABSTRACT (EN) ---
    {
        title: 'Abstract',
        content: "L'Abstract est la **traduction fidèle** de votre résumé français.\n\n### Attention aux erreurs fréquentes\n- Ne pas utiliser Google Traduction aveuglément. Faites relire par un anglophone si possible.\n- Utilisez le **vocabulaire technique précis** (Terminologie standard).\n- Préférez la **voix passive** souvent utilisée dans les articles scientifiques (ex: 'A solution was proposed...' plutôt que 'We proposed...').\n\n### Keywords\nTranslate your keywords accurately to English.\n\n> La maîtrise de l'anglais technique est une compétence évaluée par le jury.",
        details: [
            { id: 'abstract-trans', text: 'traduction fidèle' },
            { id: 'abstract-vocab', text: 'vocabulaire technique précis' },
            { id: 'abstract-voice', text: 'voix passive' }
        ]
    },

    // --- RESUME (AR) ---
    {
        title: 'ملخص (Résumé Arabe)',
        content: "Le résumé en arabe doit également être une traduction fidèle. Il est obligatoire pour les thèses et PFE dans le contexte universitaire marocain.\n\n### Consignes de rédaction\n- Utilisez l'arabe littéraire (**Fus'ha**) et non le dialecte (Darija).\n- Veillez à la justesse des termes techniques arabes (ex: 'Intelligence Artificielle' se traduit par 'الذكاء الاصطناعي').\n- L'alignement du texte se fera automatiquement de droite à gauche sur la version finale.\n\n### كلمات مفتاحية (Mots-clés)\nTraduisez vos mots-clés en arabe.\n\n> Assurez-vous que la mise en page (RTL) est correcte lors de l'impression PDF.",
        details: [
            { id: 'ar-fusha', text: 'Fus\'ha' },
            { id: 'ar-terms', text: 'termes techniques arabes' },
            { id: 'ar-rtl', text: 'droite à gauche' }
        ]
    },

    // --- TABLE DES ABREVIATIONS & ACRONYMES ---
    {
        title: 'Table des abréviations',
        content: "Cette liste permet au lecteur de comprendre les sigles utilisés sans avoir à chercher leur première occurrence.\n\n### Format\nTriez la liste par **ordre alphabétique**.\n\n**Exemple :**\n- **API** : Application Programming Interface\n- **AWS** : Amazon Web Services\n- **ML** : Machine Learning\n- **PFE** : Projet de Fin d'Études\n- **SI** : Système d'Information\n\n> **Règle d'or** : Définissez toujours un acronyme lors de sa première utilisation dans le texte (ex: '...le Système d'Information (SI)...').",
        details: [
            { id: 'abbrev-order', text: 'ordre alphabétique' },
            { id: 'abbrev-rule', text: 'Règle d\'or' }
        ]
    },

    // --- LISTE DES TABLEAUX ---
    {
        title: 'Liste des tableaux',
        content: "Cette page recense tous les tableaux du rapport avec leurs titres et numéros de page.\n\n### Génération Automatique\nNe faites pas cette liste à la main ! Utilisez la fonctionnalité de votre éditeur de texte (Word: Références -> Insérer une table des illustrations).\n\n### Convention de nommage\nLe titre d'un tableau se place **au-dessus** du tableau (ex: *Tableau 1 : Comparatif des technologies*).",
        details: [
            { id: 'list-auto', text: 'Génération Automatique' },
            { id: 'table-naming', text: 'au-dessus' }
        ]
    },

    // --- LISTE DES FIGURES ---
    {
        title: 'Liste des figures',
        content: "Comme pour les tableaux, cette liste recense toutes les images, diagrammes et graphiques.\n\n### Génération Automatique\nElle doit aussi être générée automatiquement.\n\n### Convention de nommage\nLe titre (légende) d'une figure se place **en-dessous** de la figure (ex: *Figure 1 : Architecture globale du système*).\n\n> **Important** : Toutes les figures doivent être lisibles et de bonne qualité (évitez les captures d'écran floues).",
        details: [
            { id: 'fig-naming', text: 'en-dessous' },
            { id: 'fig-quality', text: 'bonne qualité' }
        ]
    },

    // --- LISTE DES ANNEXES ---
    {
        title: 'Liste des annexes',
        content: "Les annexes contiennent les documents utiles mais trop volumineux ou techniques pour le corps du texte (Codes sources longs, Fiches techniques, Questionnaires...).\n\n### Organisation\nNumérotez vos annexes (Annexe A, Annexe B...).\n\n**Exemples d'annexes :**\n- Annexe A : Planning détaillé du projet (Gantt)\n- Annexe B : Extraits de code source\n- Annexe C : Configuration des serveurs\n- Annexe D : Modèle de données complet",
        details: [
            { id: 'annex-def', text: 'documents utiles' },
            { id: 'annex-num', text: 'Numérotez vos annexes' }
        ]
    },

    // --- INTRODUCTION GENERALE ---
    {
        title: 'Introduction générale',
        content: "C'est l'entrée en matière du rapport. Elle doit être rédigée à la fin du projet pour une cohérence parfaite.\n\n### 1. Accroche & Contexte (Entonnoir)\nPartez du général vers le particulier. Contextualisez le domaine (ex: L'essor du E-commerce) pour arriver à l'entreprise et son besoin spécifique.\n\n### 2. Problématique\nPosez **LA question** centrale qui justifie votre travail. C'est le fil rouge du rapport.\n\n### 3. Objectifs\nAnnoncez ce que vous allez réaliser pour résoudre la problématique (Application Web, Algorithme, Migration...).\n\n### 4. Annonce du plan\nDécrivez la structure du rapport :\n- *'Dans un premier temps, nous présenterons...'* (Partie 1)\n- *'Ensuite, nous détaillerons...'*\n- *'Enfin, nous exposerons les résultats...'*",
        details: [
            { id: 'intro-accroche', text: 'Accroche & Contexte' },
            { id: 'intro-problem', text: 'Problématique' },
            { id: 'intro-obj', text: 'Objectifs' },
            { id: 'intro-plan', text: 'Annonce du plan' }
        ]
    }
]
