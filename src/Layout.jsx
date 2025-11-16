import React, { useState, useEffect } from 'react';
import { Menu, X, GraduationCap } from 'lucide-react';
import { Button } from "./components/ui/button";

export default function Layout({ children }) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMobileMenuOpen(false);
        }
    };

    const navItems = [
        { label: 'Sobre', id: 'about' },
        { label: 'Cursos', id: 'services' },
        { label: 'Contato', id: 'contact' }
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <header 
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                    isScrolled 
                        ? 'bg-white/95 backdrop-blur-md shadow-lg' 
                        : 'bg-transparent'
                }`}
            >
                <div className="container mx-auto px-6 py-4">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <button 
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            className="flex items-center gap-2 group"
                        >
                            <div className="w-10 h-10 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all">
                                <GraduationCap className="w-6 h-6 text-white" />
                            </div>
                            <span className="text-2xl font-bold text-gray-900">
                                Professora Laís
                            </span>
                        </button>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex items-center gap-8">
                            {navItems.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => scrollToSection(item.id)}
                                    className="text-gray-700 hover:text-emerald-600 font-medium transition-colors"
                                >
                                    {item.label}
                                </button>
                            ))}
                            <Button
                                onClick={() => scrollToSection('contact')}
                                className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white shadow-lg hover:shadow-xl"
                            >
                                Aula Grátis
                            </Button>
                        </nav>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden text-gray-900"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? (
                                <X className="w-6 h-6" />
                            ) : (
                                <Menu className="w-6 h-6" />
                            )}
                        </button>
                    </div>

                    {/* Mobile Navigation */}
                    {isMobileMenuOpen && (
                        <div className="md:hidden mt-4 py-4 border-t border-gray-200">
                            <nav className="flex flex-col gap-4">
                                {navItems.map((item) => (
                                    <button
                                        key={item.id}
                                        onClick={() => scrollToSection(item.id)}
                                        className="text-left text-gray-700 hover:text-emerald-600 font-medium transition-colors py-2"
                                    >
                                        {item.label}
                                    </button>
                                ))}
                                <Button
                                    onClick={() => scrollToSection('contact')}
                                    className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white w-full"
                                >
                                    Aula Grátis
                                </Button>
                            </nav>
                        </div>
                    )}
                </div>
            </header>

            {/* Main Content */}
            <main className="pt-20">
                {children}
            </main>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-12">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-3 gap-8">
                        <div>
                            <div className="flex items-center gap-2 mb-4">
                                <div className="w-10 h-10 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-xl flex items-center justify-center">
                                    <GraduationCap className="w-6 h-6 text-white" />
                                </div>
                                <span className="text-xl font-bold">Professora Laís</span>
                            </div>
                            <p className="text-gray-400">
                                Transformando vidas através do ensino do inglês há mais de 12 anos.
                            </p>
                        </div>
                        
                        <div>
                            <h4 className="font-bold mb-4">Links Rápidos</h4>
                            <div className="space-y-2">
                                {navItems.map((item) => (
                                    <button
                                        key={item.id}
                                        onClick={() => scrollToSection(item.id)}
                                        className="block text-gray-400 hover:text-emerald-400 transition-colors"
                                    >
                                        {item.label}
                                    </button>
                                ))}
                            </div>
                        </div>
                        
                        <div>
                            <h4 className="font-bold mb-4">Contato</h4>
                            <div className="space-y-2 text-gray-400">
                                <p>laisreis16@gmail.com</p>
                                <p>(61) 9 9111-9542</p>
                                <p>Rio de Janeiro - RJ</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                        <p>© 2025 Professora Laís. Todos os direitos reservados.</p>
                        <a href="https://thiago0010.github.io/NEV_Thi_ii-Developer./">Made by [NEV]Thi_ii</a>
                    </div>
                </div>
            </footer>
        </div>
    );
}