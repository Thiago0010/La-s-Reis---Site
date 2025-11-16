import React from 'react';
import { Award, Heart, Target, Users } from 'lucide-react';

export default function AboutSection() {
    const qualities = [
        {
            icon: Heart,
            title: "Ensino Personalizado",
            description: "Cada aluno é único. Adapto minha metodologia às suas necessidades e objetivos."
        },
        {
            icon: Target,
            title: "Foco em Resultados",
            description: "Metodologia comprovada que garante evolução rápida e consistente."
        },
        {
            icon: Users,
            title: "Turmas Reduzidas",
            description: "Atenção individualizada para acelerar seu aprendizado."
        },
        {
            icon: Award,
            title: "Certificações Internacionais",
            description: "TEFL certificada com especialização em ensino de inglês para brasileiros."
        }
    ];

    return (
        <section id="about" className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-6">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                            Sobre a Professora{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
                                Laís
                            </span>
                        </h2>
                        
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Há mais de 12 anos ajudo brasileiros a realizarem o sonho de falar inglês fluentemente. 
                            Minha paixão é ver a transformação dos meus alunos, desde o primeiro "Hello!" até conversas 
                            complexas e confiantes.
                        </p>
                        
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Com certificações internacionais e experiência em diversos métodos de ensino, desenvolvi 
                            uma metodologia própria que combina o melhor de cada abordagem, sempre focando nas 
                            dificuldades específicas de quem tem o português como língua materna.
                        </p>
                        
                        <div className="bg-gradient-to-r from-emerald-50 to-teal-50 p-6 rounded-2xl border border-emerald-100">
                            <p className="text-gray-700 italic">
                                "Meu objetivo não é apenas ensinar inglês, mas fazer você se sentir confortável 
                                e confiante para usar o idioma em qualquer situação da sua vida."
                            </p>
                            <p className="text-emerald-700 font-semibold mt-2">- Laís</p>
                        </div>
                    </div>
                    
                    <div className="grid sm:grid-cols-2 gap-6">
                        {qualities.map((quality, index) => (
                            <div 
                                key={index}
                                className="bg-gradient-to-br from-white to-emerald-50 p-6 rounded-2xl border border-emerald-100 hover:shadow-lg transition-all hover:-translate-y-1"
                            >
                                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center mb-4">
                                    <quality.icon className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">
                                    {quality.title}
                                </h3>
                                <p className="text-gray-600 text-sm">
                                    {quality.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}