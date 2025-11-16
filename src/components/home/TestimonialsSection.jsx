import React from 'react';
import { Star, Quote } from 'lucide-react';

export default function TestimonialsSection() {
    const testimonials = [
        {
            name: "Carolina Mendes",
            role: "Gerente de Marketing",
    
            text: "A Laís transformou minha relação com o inglês! Hoje consigo participar de reuniões internacionais com total confiança. Sua metodologia é incrível!",
            rating: 5
        },
        {
            name: "Rafael Santos",
            role: "Engenheiro de Software",
  
            text: "Estudei inglês por anos em escolas tradicionais e não conseguia me comunicar. Com as aulas da Laís, em 8 meses já estava fazendo entrevistas em inglês!",
            rating: 5
        },
        {
            name: "Juliana Costa",
            role: "Empresária",
       
            text: "Precisava de inglês urgente para uma viagem de negócios. A Laís montou um curso personalizado e em 3 meses eu estava pronta. Simplesmente perfeito!",
            rating: 5
        },
        {
            name: "Pedro Oliveira",
            role: "Estudante de Medicina",

            text: "As aulas são dinâmicas e divertidas. A Laís tem uma paciência incrível e sabe explicar de forma clara. Meu inglês melhorou muito!",
            rating: 5
        },
        {
            name: "Amanda Silva",
            role: "Designer",
          
            text: "Sempre tive medo de falar inglês, mas a Laís criou um ambiente super confortável. Hoje eu amo praticar e me sinto cada vez mais confiante!",
            rating: 5
        },
        {
            name: "Lucas Almeida",
            role: "Consultor",
        
            text: "A metodologia da Laís é completamente diferente do que já vi. Focada em conversação real e nas minhas necessidades específicas. Recomendo demais!",
            rating: 5
        }
    ];

    return (
        <section className="py-24 bg-gradient-to-br from-emerald-50 to-teal-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        O que Dizem Meus{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
                            Alunos
                        </span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Histórias reais de transformação e sucesso no aprendizado do inglês.
                    </p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div 
                            key={index}
                            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
                        >
                            <Quote className="w-10 h-10 text-emerald-200 mb-4" />
                            
                            <div className="flex gap-1 mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                                ))}
                            </div>
                            
                            <p className="text-gray-700 mb-6 leading-relaxed">
                                "{testimonial.text}"
                            </p>
                            
                            <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                                <div>
                                    <div className="font-bold text-gray-900">{testimonial.name}</div>
                                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
