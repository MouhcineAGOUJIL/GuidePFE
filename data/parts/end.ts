import { ReportPage } from '../content'

export const partEnd: ReportPage[] = [
    // --- TITRE FIN ---
    {
        title: 'CLÔTURE DU RAPPORT',
        content: "Cette dernière section marque la fin formelle du document : Bilan global, Sources et Annexes.",
        isTitlePage: true
    },

    // --- CONCLUSION GENERALE ---
    {
        title: 'Conclusion Générale',
        content: "C'est l'atterrissage du projet. Elle doit répondre en écho à l'Introduction Générale.\n\n### Structure\n1.  **Rappel** du contexte et de la problématique initiale.\n2.  **Synthèse** du travail réalisé (Parties 1, 2 et 3).\n3.  **Apports** personnels et professionnels.\n4.  **Ouverture** sur l'avenir (Perspectives).",
        details: [
            { id: 'conc-echo', text: 'répondre en écho' },
            { id: 'conc-perso', text: 'Apports' }
        ]
    },

    // --- BIBLIOGRAPHIE ---
    {
        title: 'Bibliographie & Webographie',
        content: "La liste de toutes les sources citées. Une source non citée est du plagiat.\n\n### Normes\nUtilisez une norme standard (APA, ISO 690, IEEE).\n\n### Webographie\nAttention aux liens morts. Indiquez la date de consultation : *[Consulté le 20/05/2025]*.",
        details: [
            { id: 'biblio-norm', text: 'norme standard' },
            { id: 'biblio-link', text: 'liens morts' }
        ]
    },

    // --- ANNEXES ---
    {
        title: 'Annexes',
        content: "Tout ce qui alourdit le rapport mais sert de preuve.\n\n### Quoi mettre ?\n- Extraits de code source (pas tout !).\n- PV de recette détaillés.\n- Fiches techniques (Datasheets) complètes.\n- Guides d'installation.\n\n> Chaque annexe doit être numérotée et avoir un titre.",
        details: [
            { id: 'annex-content', text: 'Quoi mettre ?' },
            { id: 'annex-ref', text: 'numérotée' }
        ]
    }
]
