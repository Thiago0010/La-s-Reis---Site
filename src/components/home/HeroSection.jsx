import React from 'react';
import { Button } from "../ui/button";
import { GraduationCap, MessageCircle } from 'lucide-react';

export default function HeroSection() {
    const scrollToContact = () => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
            {/* Decorative elements */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-72 h-72 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-1000"></div>
            
            <div className="container mx-auto px-6 py-20 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                        <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-emerald-100">
                            <GraduationCap className="w-5 h-5 text-emerald-600" />
                            <span className="text-sm font-medium text-gray-700">Professora de Inglês Certificada</span>
                        </div>
                        
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                            Aprenda Inglês de{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
                                Verdade
                            </span>
                        </h1>
                        
                        <p className="text-xl text-gray-600 leading-relaxed">
                            Olá! Sou a <span className="font-semibold text-emerald-700">Laís Reis</span>, e vou te ajudar a alcançar 
                            fluência no inglês com uma metodologia personalizada e eficiente.
                        </p>
                        
                        <div className="flex flex-wrap gap-4">
                            <Button 
                                size="lg" 
                                onClick={scrollToContact}
                                className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all"
                            >
                                <MessageCircle className="w-5 h-5 mr-2" />
                                Agendar Aula Experimental
                            </Button>
                            <Button 
                                size="lg" 
                                variant="outline"
                                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                                className="px-8 py-6 text-lg border-2 border-emerald-600 text-emerald-700 hover:bg-emerald-50"
                            >
                                Conhecer Metodologia
                            </Button>
                        </div>
                        
                        <div className="flex items-center gap-8 pt-4">
                            <div className="text-center">
                                <div className="text-3xl font-bold text-emerald-600">120+</div>
                                <div className="text-sm text-gray-600">Alunos</div>
                            </div>
                            <div className="h-12 w-px bg-gray-300"></div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-emerald-600">12+</div>
                                <div className="text-sm text-gray-600">Anos de Experiência</div>
                            </div>
                            <div className="h-12 w-px bg-gray-300"></div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-emerald-600">98,9%</div>
                                <div className="text-sm text-gray-600">Satisfação</div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="relative lg:block hidden">
                        <div className="relative z-10"> 
                            <img 
                                src="src\components\home\main.jpg" 
                                alt="Professora Laís"
                                className="rounded-3xl shadow-2xl w-full object-cover"
                            />
                            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center">
                                        <span className="text-2xl">🎓</span>
                                    </div>
                                    <div>
                                        <div className="font-bold text-gray-900">Certificação Internacional</div>
                                        <div className="text-sm text-gray-600">TEFL & Cambridge</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}