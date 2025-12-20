export type ReportPage = {
  title: string
  content: string | string[]
  image?: string
  imageCaption?: string
  isTitlePage?: boolean
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
  student: "Votre Nom et Prénom",
  filiere: "Génie Informatique & Données",
  supervisors: [
    { name: "M. le Professeur X", role: "Encadrant Pédagogique" }
  ],
  jury: [
    { name: "M. le Président du Jury", role: "Président" },
    { name: "M. l'Examinateur", role: "Examinateur" },
    { name: "M. l'Encadrant", role: "Encadrant" }
  ],
  promotion: "2025-2026",
  details: [
    { id: 'titre-consignes', text: 'SUJET DE VOTRE PFE : TITRE CONCIS ET PRÉCIS' }
  ]
}

import { part0 } from './parts/part0'
import { part1 } from './parts/part1'
import { part2 } from './parts/part2'
import { part3 } from './parts/part3'
import { partEnd } from './parts/end'

export const reportPages: ReportPage[] = [
  ...part0,
  ...part1,
  ...part2,
  ...part3,
  ...partEnd
]

export const instructions: Instruction[] = [
  // --- PARTIE 0 : NOTICE & RESUMES ---
  {
    id: 'meta-titre',
    title: 'Le Titre',
    content: "Le titre est la première chose que le jury voit. Il doit contenir les technologies clés et le domaine d'application.",
    category: 'Préambule'
  },
  {
    id: 'meta-resume',
    title: 'Synthèse',
    content: "C'est un exercice de style difficile. Résumez 6 mois de travail en 15 lignes. Soyez percutant.",
    category: 'Préambule'
  },
  {
    id: 'meta-keywords',
    title: 'Mots-Clés',
    content: "Ils servent à l'indexation dans les bases de données. Évitez les termes trop génériques comme 'Informatique'.",
    category: 'Préambule'
  },
  {
    id: 'resume-context',
    title: 'Contexte',
    content: "Situez le projet : 'Dans le cadre de la modernisation du SI de l'entreprise X...'.",
    category: 'Résumé'
  },
  {
    id: 'resume-problem',
    title: 'Problématique',
    content: "Quel est le 'caillou dans la chaussure' de l'entreprise qui a justifié votre embauche ?",
    category: 'Résumé'
  },
  {
    id: 'resume-method',
    title: 'Méthodologie',
    content: "Citez la stack technique et la méthode de gestion de projet (Agile/Scrum).",
    category: 'Résumé'
  },
  {
    id: 'resume-results',
    title: 'Résultats',
    content: "Donnez un chiffre clé si possible (Gain de temps, Performance, Nombre d'utilisateurs).",
    category: 'Résumé'
  },
  {
    id: 'abstract-trans',
    title: 'Traduction',
    content: "Une mauvaise traduction décrédibilise le travail. Payez attention aux faux-amis (ex: 'Sensible' ne veut pas dire 'Sensible' mais 'Raissonable' ! 'Sensitive' est le bon mot).",
    category: 'Abstract'
  },
  {
    id: 'abstract-vocab',
    title: 'Vocabulaire',
    content: "Utilisez les termes standards : 'Framework', 'Library', 'Latency', 'Throughput'.",
    category: 'Abstract'
  },
  {
    id: 'abstract-voice',
    title: 'Voix Passive',
    content: "En anglais académique, on dit 'Tests were conducted' plutôt que 'I conducted tests'.",
    category: 'Abstract'
  },
  {
    id: 'ar-fusha',
    title: 'Arabe Littéraire',
    content: "Le rapport est un document officiel. Le dialecte est strictement interdit.",
    category: 'Résumé Arabe'
  },
  {
    id: 'ar-terms',
    title: 'Terminologie Arabe',
    content: "Vérifiez les traductions officielles. Ex: 'Base de données' = 'قاعدة البيانات'.",
    category: 'Résumé Arabe'
  },
  {
    id: 'ar-rtl',
    title: 'Direction RTL',
    content: "Vérifiez que la ponctuation ne 'saute' pas en début de ligne. C'est un bug fréquent lors de l'export PDF.",
    category: 'Résumé Arabe'
  },
  {
    id: 'abbrev-order',
    title: 'Ordre Alpha',
    content: "Une liste non triée est inutilisable pour le lecteur. Utilisez le tri automatique de l'éditeur.",
    category: 'Listes'
  },
  {
    id: 'abbrev-rule',
    title: 'Définition',
    content: "Ne supposez jamais que le lecteur connait un acronyme, même 'courant' comme API.",
    category: 'Listes'
  },
  {
    id: 'list-auto',
    title: 'Automatisme',
    content: "Si vous ajoutez une figure, la liste doit se mettre à jour toute seule (Clic droit > Mettre à jour).",
    category: 'Listes'
  },
  {
    id: 'table-naming',
    title: 'Titre Tableau',
    content: "Convention standard : Le titre est TOUJOURS au-dessus pour un tableau.",
    category: 'Listes'
  },
  {
    id: 'fig-naming',
    title: 'Titre Figure',
    content: "Convention standard : Le titre est TOUJOURS en-dessous pour une image ou graphique.",
    category: 'Listes'
  },
  {
    id: 'fig-quality',
    title: 'Qualité',
    content: "Une image pixelisée ou illisible donne une impression de négligence immédiate.",
    category: 'Listes'
  },
  {
    id: 'annex-def',
    title: 'Contenu Annexe',
    content: "Ne mettez pas tout le code ! Seulement les extraits pertinents ou les preuves de concept.",
    category: 'Annexes'
  },
  {
    id: 'annex-num',
    title: 'Numérotation',
    content: "Les annexes sont généralement numérotées A, B, C... ou I, II, III... pour ne pas confondre avec les chapitres.",
    category: 'Annexes'
  },
  {
    id: 'intro-accroche',
    title: 'L\'Entonnoir',
    content: "La technique de l'entonnoir : Partez du Monde > Secteur > Entreprise > Projet.",
    category: 'Introduction'
  },
  {
    id: 'intro-problem',
    title: 'La Question',
    content: "Si vous n'avez pas de problématique claire, vous n'avez pas de sujet de PFE, juste une tâche à exécuter.",
    category: 'Introduction'
  },
  {
    id: 'intro-obj',
    title: 'Objectifs',
    content: "Séparez les objectifs techniques (Réaliser une app) des objectifs fonctionnels (Améliorer la vente).",
    category: 'Introduction'
  },
  {
    id: 'intro-plan',
    title: 'Le Plan',
    content: "Le plan annonce la couleur. Il doit dérouler une logique implacable.",
    category: 'Introduction'
  },

  // --- ANCIENNES CONSIGNES (Legacy mais utiles) ---
  {
    id: 'meta-data',
    title: 'Conseils : Notice',
    content: "Soyez synthétique. Les mots-clés doivent être standards (ex: IEEE Taxinomie). Le résumé doit donner envie de lire le rapport entier.",
    category: 'Préambule'
  },
  {
    id: 'style-dedicace',
    title: 'Conseils : Dédicace',
    content: "Restez sobre. Ce n'est pas un discours de mariage. Évitez les surnoms familiers.",
    category: 'Préambule'
  },
  {
    id: 'ordre-remerciements',
    title: 'Conseils : Remerciements',
    content: "Respectez la hiérarchie : Encadrants > Jury > Entreprise > Proches. N'oubliez personne, c'est politique.",
    category: 'Préambule'
  },
  {
    id: 'equilibre',
    title: 'Conseils : Plan',
    content: "Vos parties doivent être équilibrées. Évitez une partie de 50 pages et une autre de 5. Le niveau de détail 3 (I.1.a) est suffisant.",
    category: 'Structure'
  },
  {
    id: 'accroche',
    title: 'L\'Accroche',
    content: "Commencez par un fait marquant, un chiffre ou une actualité du domaine pour capter l'intérêt immédiat du lecteur.",
    category: 'Introduction'
  },
  {
    id: 'annonce-plan',
    title: 'Annonce du Plan',
    content: "Utilisez le futur simple : 'Nous verrons...', 'Nous analyserons...'. Évitez 'Dans un premier temps je vais...'.",
    category: 'Introduction'
  },

  // --- PARTIE 1 : CADRAGE & INFO SECONDE MAIN ---
  {
    id: 'sujet-bp',
    title: 'Bonnes pratiques: Sujet',
    content: "Choisir un thème clair, lié au domaine. Présenter de manière générale sans technique. Montrer l'utilité et l'actualité.",
    category: 'Cadrage'
  },
  {
    id: 'objet-bp',
    title: 'Bonnes pratiques: Objet',
    content: "Définir ce qui est réellement étudié. Limiter clairement le périmètre (Inclus/Exclu). Garder une formulation concise.",
    category: 'Cadrage'
  },
  {
    id: 'probleme-bp',
    title: 'Bonnes pratiques: Problème',
    content: "Décrire la situation réelle qui pose difficulté. S'appuyer sur des faits observés, pas des suppositions. Éviter le vague.",
    category: 'Cadrage'
  },
  {
    id: 'prob-structure',
    title: 'La Structure (3 Étapes)',
    content: "**ÉTAPE 1 : Le Contexte et l'Enjeu**\nSituez le sujet (Tendance, Défi) et montrez l'urgence de la situation (Données concrètes).\n\n**ÉTAPE 2 : Le Paradoxe**\nMontrez ce que la littérature dit, mais surtout ce qu'elle ne dit pas (Limites). Identifiez la tension entre deux exigences contradictoires (ex: Standardisation vs Personnalisation).\n\n**ÉTAPE 3 : La Question**\nFormulez votre question centrale qui tente de résoudre cette tension, suivie de sous-questions opérationnelles.",
    category: 'Problématique'
  },
  {
    id: 'prob-types',
    title: 'Les 4 Types',
    content: "**1. L'Écart** : Entre ce qui est théorique (souhaitable) et pratique (réel).\n**2. Le Paradoxe** : Concilier deux exigences opposées (Innovation vs Contrôle).\n**3. Le Changement** : Adapter l'existant face à une rupture majeure.\n**4. L'Application** : Transposer un concept connu dans un nouveau contexte.",
    category: 'Problématique'
  },
  {
    id: 'q-rech-do',
    title: 'Ce qu\'il faut mettre',
    content: "2 à 5 questions claires, précises, liées à la problématique. Elles doivent être exploratoires ou explicatives.",
    category: 'Questions de Recherche'
  },
  {
    id: 'q-rech-dont',
    title: 'Ce qu\'il faut éviter',
    content: "Questions qui ne répondent pas à la problématique, trop techniques, trop vagues ou fermées (Oui/Non).",
    category: 'Questions de Recherche'
  },
  {
    id: 'obj-smart',
    title: 'Critères S.M.A.R.T',
    content: "Spécifique (Clair), Mesurable (Quantifiable), Atteignable (Ressources ok), Réaliste (Utile), Temporel (Date limite).",
    category: 'Objectifs'
  },
  {
    id: 'obj-verbs',
    title: 'Verbes d\'action',
    content: "Utilisez des verbes forts à l'infinitif : Identifier, Analyser, Concevoir, Implémenter, Évaluer, Tester.",
    category: 'Objectifs'
  },
  {
    id: 'hyp-types',
    title: 'Types d\'hypothèses',
    content: "Descriptives (Quoi?), Explicatives (Pourquoi?), Comparatives (Mieux que?), Prédictives (Si... alors...).",
    category: 'Hypothèses'
  },
  {
    id: 'hyp-bp',
    title: 'Bonnes Pratiques',
    content: "Hypothèses claires, testables, basées sur des arguments. Évitez celles impossibles à mesurer ou trop évidentes.",
    category: 'Hypothèses'
  },
  {
    id: 'rl-def',
    title: 'Définition RL',
    content: "Fondement théorique qui légitime le projet. Elle démontre votre expertise et justifie la méthodologie.",
    category: 'Revue Littérature'
  },
  {
    id: 'rl-gap',
    title: 'Le GAP',
    content: "Vide de connaissance ou limite méthodologique actuelle. Votre PFE sert à combler ce vide.",
    category: 'Revue Littérature'
  },
  {
    id: 'rl-method',
    title: 'Stratégie de Recherche',
    content: "Mots-clés, Opérateurs (AND/OR), Sources fiables (Scholar, Thèses). Arrêtez à saturation (plus de nouvelles idées).",
    category: 'Revue Littérature'
  },
  {
    id: 'doc-analysis',
    title: 'Analyse Documentaire',
    content: "Critiquez vos sources : Authenticité, Contexte, Auteur. Déconstruisez pour reconstruire selon votre problématique.",
    category: 'Info 2nde Main'
  },
  {
    id: 'bench-steps',
    title: 'Étapes Benchmark',
    content: "1. Identifier quoi comparer. 2. Choisir critères. 3. Collecter info (Tableau). 4. Analyser et Conclure (Solution retenue).",
    category: 'Info 2nde Main'
  },
  {
    id: 'cl-conclusion',
    title: 'Synthèse',
    content: "Rappelez le cadre méthodologique posé. Confirmez que la vision est claire pour passer à la réalisation.",
    category: 'Conclusion'
  },


  // --- PARTIE 2 : REALISATION ---
  {
    id: 'col-strat',
    title: 'Types de données',
    content: "Mixez les approches : Quantitatif pour la représentativité (Stats), Qualitatif pour la profondeur (Pourquoi?).",
    category: 'Collecte'
  },
  {
    id: 'col-pop',
    title: 'Échantillonnage',
    content: "Qui interroger ? Clients, Experts, Utilisateurs finaux ? La taille de l'échantillon doit être significative.",
    category: 'Collecte'
  },
  {
    id: 'col-tools',
    title: 'Support',
    content: "Testez toujours vos questionnaires (Test pilote) avant de les diffuser massivement pour éviter les ambiguïtés.",
    category: 'Collecte'
  },
  {
    id: 'col-channels',
    title: 'Canaux',
    content: "Adaptez le canal à la cible. Ne faites pas un Google Forms pour un PDG, demandez un entretien.",
    category: 'Collecte'
  },
  {
    id: 'col-follow',
    title: 'Monitoring',
    content: "Suivez le taux de réponse quotidiennement. Relancez après une semaine. Utilisez des incentives si besoin.",
    category: 'Collecte'
  },
  {
    id: 'col-clean',
    title: 'Data Cleaning',
    content: "Supprimez les réponses aberrantes (ex: âge = 999). Une donnée sale faussera toute votre analyse.",
    category: 'Collecte'
  },
  {
    id: 'ana-method',
    title: 'Analyse',
    content: "Ne laissez pas Excel décider. Interprétez chaque graphique. Qu'est-ce que ça veut dire pour le projet ?",
    category: 'Analyse'
  },
  {
    id: 'ana-pestel',
    title: 'Analyse Macro',
    content: "PESTEL : Politique, Economique, Social, Technologique, Environnemental, Légal. Anticipez les contraintes externes.",
    category: 'Analyse'
  },
  {
    id: 'ana-func',
    title: 'Le Quoi',
    content: "Authentification, Gestion des profils, Génération de PDF... Listez toutes les features.",
    category: 'Analyse'
  },
  {
    id: 'ana-nonfunc',
    title: 'La Qualité',
    content: "Performance ( < 2s), Sécurité (GDPR, HTTPS), Maintenabilité (Code propre), Ergonomie (Responsive).",
    category: 'Analyse'
  },
  {
    id: 'conc-plan',
    title: 'Analogie',
    content: "On ne construit pas une maison sans plan d'architecte. Le code sans conception est voué à l'échec (Dette technique).",
    category: 'Conception'
  },
  {
    id: 'uml-uc',
    title: 'Use Case',
    content: "Restez macro. Ne détaillez pas chaque clic. Qui sont les acteurs et quelles sont leurs grandes fonctions ?",
    category: 'Conception'
  },
  {
    id: 'uml-class',
    title: 'Class Diagram',
    content: "Normalisez votre modèle de données (1FN, 2FN, 3FN). Évitez la redondance. C'est le cœur de la performance.",
    category: 'Conception'
  },
  {
    id: 'uml-seq',
    title: 'Sequence Diagram',
    content: "Faites-le pour les cas complexes uniquement. Montrez les appels API, l'authentification, les transactions BDD.",
    category: 'Conception'
  },
  {
    id: 'conc-arch',
    title: 'Architecture Logique',
    content: "N-Tiers (Front/Back/Data), Microservices, Monolithe ? Justifiez selon la complexité et l'équipe.",
    category: 'Conception'
  },
  {
    id: 'conc-phys',
    title: 'Architecture Physique',
    content: "Où est hébergé le code ? Cloud (AWS/Azure) ou On-Premise ? Comment assurez-vous la sécurité (Firewall) ?",
    category: 'Conception'
  },
  {
    id: 'conc-ui',
    title: 'Prototypage',
    content: "Wireframe (Squelette) -> Mockup (Graphisme) -> Prototype (Interactif). 'Le dessin est gratuit', le code coûte cher.",
    category: 'Conception'
  },
  {
    id: 'tech-matrix',
    title: 'Choix Rationnel',
    content: "Comparez les frameworks (ex: React vs Angular) sur des critères objectifs (Courbe d'apprentissage, Performance, Communauté).",
    category: 'Mise en oeuvre'
  },
  {
    id: 'tech-chal',
    title: 'Challenges',
    content: "Ne dites pas 'C'était dur'. Dites 'Le problème X a été résolu par l'approche Y'. Montrez votre capacité de résolution.",
    category: 'Mise en oeuvre'
  },

  // --- PARTIE 3 : RESULTATS & DISCUSSION ---
  {
    id: 'role-proof',
    title: 'Preuve',
    content: "La Partie 3 est votre tribunal. Vous devez convaincre le jury que ça marche avec des pièces à conviction (KPI, Logs).",
    category: 'Résultats'
  },
  {
    id: 'expect-kpi',
    title: 'Mesures',
    content: "Interdiction d'utiliser 'rapide', 'efficace', 'bon'. Utilisez '1.2s', '95%', '0 bugs critiques'.",
    category: 'Résultats'
  },
  {
    id: 'def-res',
    title: 'Résultats',
    content: "C'est le constat. Neutre. Froid. Indiscutable. C'est l'écran de l'oscilloscope ou la sortie de la console.",
    category: 'Définitions'
  },
  {
    id: 'def-ana',
    title: 'Analyse',
    content: "C'est l'explication technique. Pourquoi la courbe monte ? Pourquoi le modèle échoue sur les images floues ?",
    category: 'Définitions'
  },
  {
    id: 'def-disc',
    title: 'Discussion',
    content: "C'est la prise de recul. Est-ce suffisant ? Est-ce mieux qu'avant ? Est-ce industrialisable ?",
    category: 'Définitions'
  },
  {
    id: 'pres-struct',
    title: 'Logique',
    content: "Règle d'or : Un résultat n'existe que s'il répond à un objectif défini dans l'introduction.",
    category: 'Présentation'
  },
  {
    id: 'kpi-examples',
    title: 'Exemples KPI',
    content: "Méca (Résistance N/m²), Info (Latence ms, CPU %), Gestion (ROI €, NPS), Réseau (Jitter ms).",
    category: 'Présentation'
  },
  {
    id: 'res-sheet',
    title: 'Fiche Résultat',
    content: "Adoptez ce standard pour chaque test. Ça montre une rigueur scientifique impeccable.",
    category: 'Présentation'
  },
  {
    id: 'fig-bp',
    title: 'Figures Orphelines',
    content: "Ne jamais mettre une figure sans la citer dans le texte ('cf. Figure 3'). Si elle n'est pas citée, elle n'existe pas.",
    category: 'Rédaction'
  },
  {
    id: 'fig-comment',
    title: 'Annonce-Obs-Lien',
    content: "La méthode infaillible : 1. Dites ce qu'on voit. 2. Décrivez l'évolution. 3. Concluez sur l'objectif.",
    category: 'Rédaction'
  },
  {
    id: 'tab-synth',
    title: 'Synthèse',
    content: "Si le jury ne lit qu'une page de la partie 3, c'est celle-ci. Soignez ce tableau.",
    category: 'Présentation'
  },
  {
    id: 'val-proto',
    title: 'Protocole',
    content: "N'importe qui doit pouvoir refaire votre test en lisant cette section. Précisez l'OS, la RAM, la version des libs.",
    category: 'Analyse'
  },
  {
    id: 'val-tools',
    title: 'Outils',
    content: "JMeter pour la charge, Selenium pour l'UI, Wireshark pour le réseau, TensorBoard pour l'IA.",
    category: 'Analyse'
  },
  {
    id: 'ana-quant',
    title: 'Statistiques',
    content: "Une moyenne seule est trompeuse. Donnez toujours l'écart-type ou les min/max pour montrer la stabilité.",
    category: 'Analyse'
  },
  {
    id: 'ana-qual',
    title: 'Verbatim',
    content: "Pour les tests utilisateurs, citez des phrases réelles : 'Je ne comprends pas ce bouton'. C'est très impactant.",
    category: 'Analyse'
  },
  {
    id: 'ana-why',
    title: 'Causalité',
    content: "Ne soyez pas un spectateur. Vous êtes l'ingénieur. Trouvez la cause racine (Root Cause Analysis).",
    category: 'Analyse'
  },
  {
    id: 'disc-comp',
    title: 'Comparaison',
    content: "Si vous n'avez pas de point de comparaison (état de l'art ou existant), votre résultat est orphelin.",
    category: 'Discussion'
  },
  {
    id: 'disc-limits',
    title: 'Limites',
    content: "C'est la section 'Honnêteté'. Avouer que le dataset est petit ne vous pénalisera pas. Le cacher, si.",
    category: 'Discussion'
  },
  {
    id: 'disc-future',
    title: 'Futur',
    content: "Montrez que le projet ne s'arrête pas à votre départ. Donnez la roadmap au prochain stagiaire.",
    category: 'Discussion'
  },
  {
    id: 'style-acad',
    title: 'Ton Neutre',
    content: "Bannissez les 'Je pense', 'Il semble', 'Malheureusement'. Utilisez 'On observe', 'Il apparaît', 'Cependant'.",
    category: 'Rédaction'
  },
  {
    id: 'style-errors',
    title: 'Erreurs',
    content: "Ne transformez pas la partie 3 en journal intime ('J'ai eu du mal à...'). Restez sur les faits techniques.",
    category: 'Rédaction'
  },
  // --- CLÔTURE ---
  {
    id: 'conc-echo',
    title: 'Boucle',
    content: "Une bonne conclusion répond directement à la question posée en introduction. Lisez votre Intro avant d'écrire votre Conclusion.",
    category: 'Conclusion'
  },
  {
    id: 'conc-perso',
    title: 'Apports',
    content: "Le jury veut savoir ce que vous avez appris humainement. 'J'ai appris à gérer le stress', 'J'ai découvert le monde bancaire'.",
    category: 'Conclusion'
  },
  {
    id: 'biblio-norm',
    title: 'Norme Zotero',
    content: "utilisez un outil (Zotero, Mendeley) pour générer la bibliographie. Ne le faites jamais à la main.",
    category: 'Bibliographie'
  },
  {
    id: 'biblio-link',
    title: 'Liens',
    content: "Rien n'est pire qu'un lien 'File Not Found'. Vérifiez-les tous la veille du dépôt.",
    category: 'Bibliographie'
  },
  {
    id: 'annex-content',
    title: 'Volume',
    content: "L'annexe n'est pas une poubelle. N'y mettez que des documents de valeur cités dans le texte.",
    category: 'Annexes'
  },
  {
    id: 'annex-ref',
    title: 'Lien',
    content: "Si vous mettez une annexe, le rapport doit dire 'Voir Annexe A'. Sinon le jury ne la lira jamais.",
    category: 'Annexes'
  },
  {
    id: 'nop-conc',
    title: 'Conclusion',
    content: "Fermez la boucle. Rappelez la problématique et dites clairement si elle est résolue.",
    category: 'Conclusion'
  },
]
