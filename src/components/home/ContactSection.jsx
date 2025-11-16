import React, { useState } from 'react';
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { toast } from 'sonner';

export default function ContactSection() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        course: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        
      
const response = await fetch('https://formspree.io/f/xanapkzy', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
});

if (!response.ok) throw new Error('Erro ao enviar');

        
        toast.success('Mensagem enviada com sucesso! Entrarei em contato em breve.');
        setFormData({ name: '', email: '', phone: '', course: '', message: '' });
        setIsSubmitting(false);
    };

    const handleChange = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    return (
        <section id="contact" className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Agende sua{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
                            Aula Experimental
                        </span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Entre em contato e dê o primeiro passo rumo à fluência no inglês!
                    </p>
                </div>
                
                <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                Vamos conversar?
                            </h3>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                Preencha o formulário ao lado ou entre em contato pelos canais abaixo. 
                                A primeira aula é gratuita e sem compromisso!
                            </p>
                        </div>
                        
                        <div className="space-y-6">
                            <div className="flex items-start gap-4 p-4 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl">
                                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <Mail className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <div className="font-semibold text-gray-900">Email</div>
                                    <a href__="mailto:laisreis16@gmail.com" className="text-emerald-600 hover:text-emerald-700">
                                        laisreis16@gmail.com
                                    </a>
                                </div>
                            </div>
                            
                            <div className="flex items-start gap-4 p-4 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl">
                                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <Phone className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <div className="font-semibold text-gray-900">Telefone / WhatsApp</div>
                                    <a href__="tel:+5561991119542" className="text-emerald-600 hover:text-emerald-700">
                                        (61) 9111-9542
                                    </a>
                                </div>
                            </div>
                            
                            <div className="flex items-start gap-4 p-4 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl">
                                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <MapPin className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <div className="font-semibold text-gray-900">Localização</div>
                                    <p className="text-gray-600">
                                        Aulas Onlines<br />
                                        Rio de Janeiro - RJ
                                    </p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="bg-gradient-to-br from-emerald-600 to-teal-600 p-8 rounded-2xl text-white">
                            <h4 className="text-xl font-bold mb-2">🎁 Aula Experimental Gratuita</h4>
                            <p className="text-emerald-50">
                                Conheça minha metodologia e veja como o inglês pode ser mais fácil 
                                do que você imagina. Sem compromisso!
                            </p>
                        </div>
                    </div>
                    
                    <div className="bg-gradient-to-br from-gray-50 to-emerald-50/30 p-8 rounded-3xl shadow-xl">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Nome Completo *
                                </label>
                                <Input
                                    required
                                    value={formData.name}
                                    onChange={(e) => handleChange('name', e.target.value)}
                                    placeholder="Seu nome"
                                    className="w-full"
                                />
                            </div>
                            
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Email *
                                </label>
                                <Input
                                    type="email"
                                    required
                                    value={formData.email}
                                    onChange={(e) => handleChange('email', e.target.value)}
                                    placeholder="seu@email.com"
                                    className="w-full"
                                />
                            </div>
                            
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Telefone / WhatsApp *
                                </label>
                                <Input
                                    required
                                    value={formData.phone}
                                    onChange={(e) => handleChange('phone', e.target.value)}
                                    placeholder="(11) 99999-9999"
                                    className="w-full"
                                />
                            </div>
                            
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Curso de Interesse
                                </label>
                                <Select
                                    value={formData.course}
                                    onValueChange={(value) => handleChange('course', value)}
                                >
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="Selecione um curso" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="geral">Inglês Geral</SelectItem>
                                        <SelectItem value="negocios">Inglês para Negócios</SelectItem>
                                        <SelectItem value="viagens">Inglês para Viagens</SelectItem>
                                        <SelectItem value="outro">Outro</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Mensagem
                                </label>
                                <Textarea
                                    value={formData.message}
                                    onChange={(e) => handleChange('message', e.target.value)}
                                    placeholder="Conte um pouco sobre seus objetivos com o inglês..."
                                    className="w-full h-32"
                                />
                            </div>
                            
                            <Button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white py-6 text-lg"
                            >
                                {isSubmitting ? (
                                    'Enviando...'
                                ) : (
                                    <>
                                        <Send className="w-5 h-5 mr-2" />
                                        Enviar Mensagem
                                    </>
                                )}
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}