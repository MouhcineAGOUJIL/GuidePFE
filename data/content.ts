export type ReportPage = {
  title: string
  content: string
  image?: string
  imageCaption?: string
  details?: {
    id: string
    text: string
    position?: number
  }[]
}

export type Instruction = {
  id: string
  title: string
  content: string
  category: string
}

export const coverData = {
  title: "SUJET DE VOTRE PFE : TITRE CONCIS ET PRÉCIS",
  student: "VOTRE NOM ET PRÉNOM",
  filiere: "Votre Filière (ex: Ingénierie des Données)",
  supervisors: [
    { name: "M. NOM Prénom", role: "Encadrant interne" }
  ],
  jury: [
    { name: "M. NOM Prénom", role: "Président" },
    { name: "M. NOM Prénom", role: "Encadrant" },
    { name: "M. NOM Prénom", role: "Rapporteur" },
    { name: "M. NOM Prénom", role: "Examinateur" }
  ],
  promotion: "2025-2026",
  details: [
    { id: 'titre-consignes', text: 'SUJET DE VOTRE PFE : TITRE CONCIS ET PRÉCIS' }
  ]
}

export const reportPages: ReportPage[] = [
  {
    title: 'Notice Bibliographique',
    content: "La notice bibliographique permet d'identifier rapidement le document. Elle se place généralement au verso de la page de garde ou sur une page dédiée. Elle contient les métadonnées essentielles pour le catalogage : Titre, Auteurs, Mots-clés, Résumé (brève description), Date de publication, et l'organisme d'affiliation.",
    details: [
      { id: 'meta-data', text: 'métadonnées essentielles' }
    ]
  },
  {
    title: 'Dédicaces',
    content: "Cette page est personnelle et optionnelle. Elle permet à l'étudiant de dédier son travail à des proches (parents, amis, conjoint). Le style est libre, souvent émotionnel, mais doit rester sobre et respectueux. Elle ne doit pas être confondue avec les remerciements.",
    details: [
      { id: 'style-dedicace', text: 'style est libre' }
    ]
  },
  {
    title: 'Remerciements',
    content: "Les remerciements sont obligatoires et professionnels. Ils s'adressent, dans un ordre hiérarchique, aux personnes ayant contribué techniquement et académiquement au projet : Encadrants, Membres du jury, Responsables de stage en entreprise, et l'école. C'est une marque de maturité professionnelle.",
    details: [
      { id: 'ordre-remerciements', text: 'ordre hiérarchique' },
      { id: 'qui-remercier', text: 'personnes ayant contribué' }
    ]
  },
  {
    title: 'Résumé & Abstract',
    content: "Le résumé (en français) et l'abstract (en anglais) sont les parties les plus lues du rapport. Ils doivent synthétiser en 15-20 lignes : le contexte, la problématique, la méthodologie, les résultats principaux et la conclusion. Ils sont suivis d'une liste de mots-clés (4 à 6) pour l'indexation.",
    details: [
      { id: 'structure-resume', text: 'synthétiser' },
      { id: 'mots-cles', text: 'mots-clés' }
    ]
  },
  {
    title: 'Listes des Tableaux & Figures',
    content: "Ces listes permettent de retrouver rapidement les éléments visuels du rapport. Chaque figure et tableau doit avoir une légende numérotée (ex: Figure 1: Architecture du système). Ces listes sont générées automatiquement par les outils de traitement de texte (Word/LaTeX).",
    details: [
      { id: 'legendes', text: 'légende numérotée' },
      { id: 'auto-gen', text: 'générées automatiquement' }
    ]
  },
  {
    title: 'Table des Matières',
    content: "La table des matières (ou sommaire) reflète la structure logique du rapport. Elle doit être claire, équilibrée (les chapitres doivent avoir des tailles comparables) et détaillée jusqu'au niveau 3 maximum (I.1.a). Elle permet au lecteur de naviguer efficacement.",
    details: [
      { id: 'equilibre', text: 'équilibrée' },
      { id: 'profondeur', text: 'niveau 3 maximum' }
    ]
  },
  {
    title: 'Introduction Générale',
    content: "L'introduction générale est la vitrine de votre rapport. Elle doit capter l'attention du lecteur en posant le contexte global. Elle définit clairement la problématique (le 'Pourquoi' du projet) et les objectifs (le 'Quoi'). Elle se termine obligatoirement par l'annonce du plan du rapport, qui guide le lecteur à travers les différents chapitres :\n\n- **Chapitre 1** : Cadre théorique & Méthodologie.\n- **Chapitre 2** : Revue de littérature (Machine Learning & Deep Learning).\n- **Chapitre 3** : Analyse de l'existant & Besoins.\n- **Chapitre 4** : Conception (Modèles ML & GAN).\n- **Chapitre 5** : Réalisation & Implémentation.\n- **Chapitre 6** : Résultats & Comparaison.",
    details: [
      { id: 'accroche', text: 'capter l\'attention' },
      { id: 'annonce-plan', text: 'annonce du plan' },
      { id: 'structure-chapitres', text: 'différents chapitres' }
    ]
  },
  {
    title: '1. Cadrage du Projet',
    content:
      "Le cadrage est la fondation de tout Projet de Fin d'Études. Il ne s'agit pas seulement de choisir un titre, mais de définir précisément le périmètre du travail. Cette phase repose sur la définition claire du Sujet (titre concis et technique), de l'Objet d'étude (le domaine ou le système visé) et de la Problématique (la question centrale que le PFE doit résoudre). Un bon cadrage garantit que le travail restera focalisé et pertinent.",
    image: "/images/part1/cadrage.png",
    imageCaption: "Le triptyque du cadrage : Sujet, Objet, Problématique.",
    details: [
      { id: 'titre-consignes', text: 'Sujet' },
      { id: 'problematique', text: 'Problématique' },
    ],
  },
  {
    title: '2. Revue de Littérature',
    content:
      "La Revue de Littérature (RL) n'est pas une simple liste bibliographique. C'est une analyse critique de l'état de l'art. Elle commence par une recherche systématique sur des bases reconnues (IEEE, ACM, Google Scholar) en utilisant des mots-clés précis. L'objectif est d'atteindre la saturation théorique, c'est-à-dire le point où les nouvelles lectures n'apportent plus de concepts nouveaux majeurs.",
    image: "/images/part1/recherche.png",
    imageCaption: "Processus de recherche systématique et outils (Zotero, Mendeley).",
    details: [
      { id: 'recherche-systematique', text: 'recherche systématique' },
      { id: 'saturation', text: 'saturation théorique' },
    ],
  },
  {
    title: '3. Analyse & Synthèse de la RL',
    content:
      "Une fois les sources collectées, il faut passer à l'analyse et à la synthèse. Évitez le résumé 'article par article'. Privilégiez une synthèse thématique qui regroupe les travaux par concepts ou approches. L'analyse doit être critique : évaluez la validité des résultats et identifiez les contradictions. La conclusion de la RL doit impérativement mettre en lumière le 'Gap' (le manque) que votre PFE va combler.",
    image: "/images/part1/analyse.png",
    imageCaption: "De la lecture à la synthèse thématique.",
    details: [
      { id: 'synthese-thematique', text: 'synthèse thématique' },
      { id: 'gap', text: 'Gap' },
    ],
  },
  {
    title: '4. Analyse Documentaire',
    content:
      "L'analyse documentaire complète la RL en se focalisant sur des documents 'terrain' ou techniques existants (rapports d'entreprise, documentation technique, normes, données brutes). Contrairement à la RL qui traite de concepts théoriques, l'analyse documentaire aide à comprendre le contexte opérationnel. Elle exige une vérification rigoureuse de l'authenticité et de la fiabilité des sources.",
    image: "/images/part1/doc-analysis.png",
    imageCaption: "Sources documentaires : Rapports, Données, Normes.",
    details: [
      { id: 'analyse-doc', text: "analyse documentaire" },
      { id: 'authenticite', text: 'authenticité' },
    ],
  },
  {
    title: '5. Benchmarking',
    content:
      "Le benchmark (ou parangonnage) est une analyse comparative de solutions existantes (environ 3 à 5). L'objectif est de situer votre future solution. La démarche se fait en 3 étapes : 1. Définir les critères de comparaison (coût, performance, fonctionnalités). 2. Collecter les données sur les solutions cibles. 3. Analyser via une matrice comparative pour justifier le choix de votre approche.",
    image: "/images/part1/benchmark.png",
    imageCaption: "Matrice de benchmarking : Comparaison multicritère.",
    details: [
      { id: 'benchmark-steps', text: 'analyse comparative' },
      { id: 'criteres', text: 'critères de comparaison' },
    ],
  },
  {
    title: '6. Conclusion Partie 1',
    content:
      "La partie 'Cadrage & Informations de Seconde Main' est l'ancrage de votre PFE. Elle valide que le problème existe, qu'il est pertinent, et que vous connaissez l'état de l'art. Elle mène naturellement à la formulation des hypothèses et au choix de la méthodologie (Partie 2). Sans cette fondation solide, le développement technique risque d'être hors-sujet ou redondant.",
    image: "/images/part1/conclusion-p1.png",
    imageCaption: "Du Cadrage à la Méthodologie.",
    details: [
      { id: 'hypotheses', text: 'hypothèses' },
    ],
  },
]

export const instructions: Instruction[] = [
  {
    id: 'meta-data',
    title: 'Éléments de la Notice',
    content: "- Titre exact du PFE.\n- Nom(s) et Prénom(s) de l'auteur.\n- Mots-clés (5 max).\n- Résumé court (1 paragraphe).\n- Mention de confidentialité (si applicable).",
    category: 'Préambule'
  },
  {
    id: 'style-dedicace',
    title: 'Conseils Dédicace',
    content: "- Restez sobre.\n- Évitez les surnoms trop familiers ou les textes trop longs.\n- Alignement souvent à droite ou centré, en italique.",
    category: 'Préambule'
  },
  {
    id: 'ordre-remerciements',
    title: "L'Ordre Protocolaire",
    content: "1. Directeur de l'école (optionnel mais poli).\n2. Encadrant pédagogique (Professeur).\n3. Encadrant professionnel (Maître de stage).\n4. Membres du jury (pour l'évaluation).\n5. L'équipe d'accueil.",
    category: 'Préambule'
  },
  {
    id: 'qui-remercier',
    title: "Le Ton des Remerciements",
    content: "- Utilisez des formules comme 'Je tiens à exprimer ma gratitude...', 'J'adresse mes vifs remerciements...'.\n- Soyez sincère mais formel.",
    category: 'Préambule'
  },
  {
    id: 'structure-resume',
    title: "Structure du Résumé",
    content: "- Contexte : 1 phrase.\n- Problème : 1 phrase.\n- Solution/Approche : 2-3 phrases.\n- Résultats/Gain : 1-2 phrases.\n- Conclusion/Impact : 1 phrase.",
    category: 'Résumé'
  },
  {
    id: 'mots-cles',
    title: "Choix des Mots-clés",
    content: "- Utilisez le vocabulaire technique standard du domaine.\n- Évitez les mots trop génériques (ex: 'Informatique').\n- Préférez 'Machine Learning', 'Microservices', 'Optimisation'.",
    category: 'Résumé'
  },
  {
    id: 'legendes',
    title: "Gestion des Légendes",
    content: "- Figure (Graphique, Schéma, Image) : Légende en DESSOUS.\n- Tableau : Légende au DESSUS.\n- Citez toujours la source si l'image n'est pas de vous.",
    category: 'Listes'
  },
  {
    id: 'auto-gen',
    title: "Automatisation",
    content: "- N'écrivez JAMAIS les listes à la main.\n- Utilisez les styles de titres (Titre 1, Titre 2) pour la TDM.\n- Utilisez 'Insérer une légende' pour les figures.",
    category: 'Listes'
  },
  {
    id: 'equilibre',
    title: "Équilibre du Plan",
    content: "- Évitez un Chapitre 1 de 50 pages et un Chapitre 2 de 5 pages.\n- Essayez d'avoir une structure symétrique (ex: 3 ou 4 grands chapitres).",
    category: 'Structure'
  },
  {
    id: 'profondeur',
    title: "Profondeur de la Table",
    content: "- N'allez pas trop loin dans la numérotation (ex: I.1.a.i.alpha est illisible).\n- Arrêtez-vous au niveau 3 (1.1.1).",
    category: 'Structure'
  },
  {
    id: 'accroche',
    title: "L'Accroche (Hook)",
    content: "- Commencez par une vérité générale, une statistique choc ou une citation pertinente.\n- Montrez immédiatement l'intérêt du sujet.",
    category: 'Introduction'
  },
  {
    id: 'annonce-plan',
    title: "L'Annonce du Plan",
    content: "- Utilisez le futur simple ('Nous commencerons par...', 'Ensuite, nous aborderons...').\n- Évitez les formules lourdes ('Dans un premier temps...').\n- Le plan doit être fluide et logique.",
    category: 'Introduction'
  },
  {
    id: 'structure-chapitres',
    title: "Structure du Rapport",
    content: "- Équilibre : Vos chapitres doivent avoir des volumes comparables.\n- Logique : Du général (Théorie/Contexte) au particulier (Réalisation).\n- Progression : Chaque chapitre doit répondre à une question soulevée par le précédent.",
    category: 'Introduction'
  },
  {
    id: 'titre-consignes',
    title: 'Le Sujet',
    content:
      "- Le titre doit être technique et précis.\n- Évitez les titres trop vagues comme 'Application Web'.\n- Préférez : 'Conception d'une plateforme d'analyse temps réel avec Kafka'.",
    category: 'Cadrage',
  },
  {
    id: 'problematique',
    title: 'La Problématique',
    content:
      "- Elle doit être formulée sous forme de question.\n- Elle doit exprimer un besoin ou une lacune.\n- Exemple : 'Comment optimiser la consommation énergétique des réseaux IoT ?'",
    category: 'Cadrage',
  },
  {
    id: 'recherche-systematique',
    title: 'Recherche Systématique',
    content:
      "- Utilisez des bases académiques (IEEE Xplore, Google Scholar).\n- Utilisez des opérateurs booléens (AND, OR).\n- Priorisez les articles récents (moins de 5 ans).",
    category: 'Littérature',
  },
  {
    id: 'saturation',
    title: 'Saturation Théorique',
    content:
      "- Concept clé : vous arrêtez de chercher quand vous ne trouvez plus de nouveaux concepts.\n- Cela prouve que vous avez 'fait le tour' de la question.",
    category: 'Littérature',
  },
  {
    id: 'synthese-thematique',
    title: 'Synthèse Thématique',
    content:
      "- Ne faites pas : Auteur A a dit ça, Auteur B a dit ça.\n- Faites : 'Plusieurs approches existent pour X. L'approche statistique (Auteur A, B) et l'approche neuronale (Auteur C).'\n- C'est vous qui structurez la connaissance.",
    category: 'Analyse',
  },
  {
    id: 'gap',
    title: 'Le Gap (Manque)',
    content:
      "- C'est la justification de votre PFE.\n- 'Bien que l'approche X soit performante, elle ne traite pas le cas Y... C'est ce que nous proposons.'",
    category: 'Analyse',
  },
  {
    id: 'analyse-doc',
    title: 'Analyse Documentaire',
    content:
      "- Utile pour comprendre le métier de l'entreprise.\n- Sources : Cahiers des charges, manuels utilisateurs, archives de données.\n- Permet de comprendre 'le terrain'.",
    category: 'Contexte',
  },
  {
    id: 'authenticite',
    title: 'Authenticité des sources',
    content:
      "- Toujours vérifier l'origine d'un document.\n- Est-ce une source primaire (originale) ou secondaire (interprétée) ?\n- Attention aux sources obsolètes.",
    category: 'Contexte',
  },
  {
    id: 'benchmark-steps',
    title: 'Méthode de Benchmarking',
    content:
      "- Ne choisissez pas des concurrents au hasard.\n- Prenez le leader du marché, un challenger, et une solution open-source.\n- Soyez objectif dans l'analyse.",
    category: 'Benchmark',
  },
  {
    id: 'criteres',
    title: 'Critères de Comparaison',
    content:
      "- Définissez-les AVANT de comparer.\n- Exemples : Coût de licence, Compatibilité, Communauté, Performance, Courbe d'apprentissage.",
    category: 'Benchmark',
  },
  {
    id: 'hypotheses',
    title: 'Formulation des Hypothèses',
    content:
      "- Une hypothèse est une réponse provisoire à la problématique.\n- Elle sera validée ou infirmée par votre travail technique.\n- 'Nous supposons que l'usage de graphQL améliorera la latence...'",
    category: 'Conclusion P1',
  },
]
