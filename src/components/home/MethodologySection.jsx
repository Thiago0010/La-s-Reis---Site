import React from 'react';
import { BookOpen, Headphones, MessageSquare, Video } from 'lucide-react';

export default function MethodologySection() {
    const steps = [
        {
            icon: MessageSquare,
            title: "Comunicação Real",
            description: "Desde a primeira aula, você pratica conversação em situações reais do dia a dia.",
            color: "from-emerald-500 to-teal-500"
        },
        {
            icon: Headphones,
            title: "Compreensão Auditiva",
            description: "Treino intensivo com diversos sotaques e contextos para você entender inglês de verdade.",
            color: "from-teal-500 to-cyan-500"
        },
        {
            icon: BookOpen,
            title: "Gramática Contextualizada",
            description: "Aprenda gramática de forma natural, aplicada em situações práticas e relevantes.",
            color: "from-cyan-500 to-blue-500"
        },
        {
            icon: Video,
            title: "Material Personalizado",
            description: "Conteúdos adaptados aos seus interesses: negócios, viagens, filmes, ou o que você preferir!",
            color: "from-blue-500 to-emerald-500"
        }
    ];

    return (
        <section className="py-24 bg-gradient-to-br from-gray-50 to-emerald-50/30">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Metodologia que{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
                            Funciona
                        </span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Uma abordagem completa que desenvolve todas as habilidades necessárias 
                        para você dominar o inglês.
                    </p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {steps.map((step, index) => (
                        <div 
                            key={index}
                            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 border border-gray-100"
                        >
                            <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                                <step.icon className="w-8 h-8 text-white" />
                            </div>
                            <div className="text-emerald-600 font-bold text-sm mb-2">PASSO {index + 1}</div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">
                                {step.title}
                            </h3>
                            <p className="text-gray-600">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
                
                <div className="mt-16 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl p-12 text-white text-center shadow-2xl">
                    <h3 className="text-3xl font-bold mb-4">
                        Resultados Comprovados
                    </h3>
                    <p className="text-xl text-emerald-50 mb-8 max-w-3xl mx-auto">
                        Meus alunos conseguem manter conversas em inglês em média após 6 meses de aulas. 
                        Com dedicação e prática, você também pode!
                    </p>
                    <div className="flex flex-wrap justify-center gap-8">
                        <div className="text-center">
                            <div className="text-4xl font-bold mb-1">6 meses</div>
                            <div className="text-emerald-100">Conversação Fluente</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold mb-1">12 meses</div>
                            <div className="text-emerald-100">Inglês Avançado</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold mb-1">18 meses</div>
                            <div className="text-emerald-100">Proficiência Total</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}