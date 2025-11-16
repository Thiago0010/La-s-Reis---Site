import React from 'react';
import { Button } from "../ui/button";
import { Check, Briefcase, Plane, GraduationCap } from 'lucide-react';

export default function ServicesSection() {
    const services = [
        {
            icon: GraduationCap,
            name: "Inglês Geral",
            description: "Para você que quer aprender inglês do zero ou melhorar seu nível atual",
            features: [
                "Aulas individuais ou em grupo",
                "Material didático incluso",
                "Foco em conversação",
                "Horários flexíveis",
                "Acompanhamento personalizado"
            ],
            color: "from-emerald-500 to-teal-500",
            popular: true
        },
        {
            icon: Briefcase,
            name: "Inglês para Negócios",
            description: "Ideal para profissionais que precisam do inglês no ambiente corporativo",
            features: [
                "Vocabulário corporativo",
                "Apresentações e reuniões",
                "E-mails profissionais",
                "Negociações",
                "Networking internacional"
            ],
            color: "from-blue-500 to-cyan-500"
        },
        {
            icon: Plane,
            name: "Inglês para Viagens",
            description: "Aprenda o essencial para se comunicar com confiança nas suas viagens",
            features: [
                "Situações práticas",
                "Vocabulário de viagem",
                "Curso intensivo",
                "Simulações reais",
                "Preparação rápida"
            ],
            color: "from-cyan-500 to-teal-500"
        }
    ];

    return (
        <section id="services" className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Cursos{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
                            Disponíveis
                        </span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Escolha o curso ideal para seus objetivos e comece sua jornada rumo à fluência.
                    </p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {services.map((service, index) => (
                        <div 
                            key={index}
                            className={`relative bg-gradient-to-br from-white to-gray-50 p-8 rounded-3xl border-2 ${
                                service.popular ? 'border-emerald-500 shadow-2xl scale-105' : 'border-gray-200 shadow-lg'
                            } hover:shadow-2xl transition-all`}
                        >
                            {service.popular && (
                                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                    <span className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                                        MAIS POPULAR
                                    </span>
                                </div>
                            )}
                            
                            <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                                <service.icon className="w-8 h-8 text-white" />
                            </div>
                            
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">
                                {service.name}
                            </h3>
                            
                            <p className="text-gray-600 mb-6">
                                {service.description}
                            </p>
                            
                            <div className="space-y-3 mb-8">
                                {service.features.map((feature, idx) => (
                                    <div key={idx} className="flex items-start gap-3">
                                        <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-700">{feature}</span>
                                    </div>
                                ))}
                            </div>
                            
                            <Button 
                                className={`w-full ${
                                    service.popular 
                                        ? 'bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700' 
                                        : 'bg-gray-900 hover:bg-gray-800'
                                } text-white py-6`}
                                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                            >
                                Quero este Curso
                            </Button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}