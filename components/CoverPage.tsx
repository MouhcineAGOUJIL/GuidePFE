'use client'

import { forwardRef } from 'react'

interface CoverPageProps {
    data: {
        title: string
        student: string
        filiere: string
        supervisors: { name: string; role: string }[]
        jury: { name: string; role: string }[]
        promotion: string
    }
    onDetailClick: (detailId: string) => void
}

const CoverPage = forwardRef<HTMLDivElement, CoverPageProps>(({ data, onDetailClick }, ref) => {
    return (
        <div ref={ref} className="bg-white h-full w-full p-8 md:p-12 shadow-sm relative overflow-hidden flex flex-col items-center text-center">
            {/* Paper texture overlay */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/paper.png')]"></div>

            {/* Logos Header */}
            <div className="w-full flex justify-between items-start mb-20 mt-8">
                <div className="flex flex-col items-center w-1/3">
                    <img src="/images/esi_logo.png" alt="ESI Logo" className="h-16 md:h-20 object-contain mb-2" />
                    <div className="text-[0.6rem] uppercase tracking-wider text-gray-600 font-semibold">École des Sciences de l'Information</div>
                </div>
                <div className="flex flex-col items-center w-1/3">
                    {/* Placeholder for Company/Partner Logo */}
                    <div className="h-16 md:h-20 w-32 border-2 border-dashed border-gray-300 rounded flex items-center justify-center text-gray-400 text-xs">
                        Logo Entreprise
                    </div>
                </div>
            </div>

            {/* Title Box */}
            <div
                onClick={() => onDetailClick('titre-consignes')}
                className="border border-gray-800 p-6 mb-12 w-full max-w-2xl cursor-pointer hover:bg-blue-50 transition-colors group relative"
            >
                <div className="absolute top-0 right-0 -mt-2 -mr-2 opacity-0 group-hover:opacity-100 transition-opacity bg-primary-600 text-white text-xs px-2 py-1 rounded">
                    Voir consignes
                </div>
                <h1 className="text-xl md:text-2xl font-bold text-gray-900 leading-tight uppercase font-serif">
                    {data.title}
                </h1>
            </div>

            {/* Context Text */}
            <div className="space-y-2 mb-12 text-gray-800 font-serif">
                <p className="text-sm md:text-base">Mémoire de fin d'études présenté pour l'obtention</p>
                <p className="text-sm md:text-base font-bold">du diplôme d'Ingénieur d'État</p>
                <p className="text-sm md:text-base">de l'École des Sciences de l'Information</p>
            </div>

            {/* Student Name */}
            <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 uppercase tracking-wide">{data.student}</h2>
            </div>

            {/* Supervisors */}
            <div className="mb-12">
                <p className="font-bold text-gray-800 mb-2">Sous la direction de :</p>
                {data.supervisors.map((sup, idx) => (
                    <p key={idx} className="text-gray-900">{sup.name}</p>
                ))}
            </div>

            {/* Jury Section */}
            <div className="w-full text-left max-w-md mx-auto mb-auto">
                <h3 className="font-bold text-gray-800 mb-4 border-b border-gray-300 pb-1 inline-block">Membres de jury :</h3>
                <div className="grid grid-cols-[1fr,2fr] gap-y-2 text-sm text-gray-800">
                    {data.jury.map((member, idx) => (
                        <>
                            <div key={`role-${idx}`} className="font-semibold">{member.role} :</div>
                            <div key={`name-${idx}`}>{member.name}</div>
                        </>
                    ))}
                </div>
            </div>

            {/* Footer / Promotion */}
            <div className="mt-8 pt-4 border-t border-gray-100 w-full">
                <p className="font-bold text-gray-800">Promotion {data.promotion}</p>
            </div>
        </div>
    )
})

CoverPage.displayName = 'CoverPage'

export default CoverPage
