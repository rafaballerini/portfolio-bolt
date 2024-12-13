import React from 'react';
import { Mail } from 'lucide-react';
import SocialLinks from './SocialLinks';

export default function ProfileHeader() {
  return (
    <header className="min-h-[70vh] flex flex-col justify-center bg-gradient-to-b from-brown-dark to-brown-medium text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/3">
            <img
              src="https://github.com/rafaballerini.png"
              alt="Rafaella Ballerini"
              className="rounded-full w-64 h-64 object-cover border-4 border-brown-light mx-auto md:mx-0"
            />
          </div>
          <div className="md:w-2/3 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Olá! Sou Rafaella Ballerini
            </h1>
            <p className="text-xl mb-6 text-brown-light">
              Desenvolvedora e criadora de conteúdo apaixonada por tecnologia e educação.
            </p>
            <div className="flex gap-4 justify-center md:justify-start">
              <a 
                href="#contact" 
                className="flex items-center gap-2 bg-brown-light text-brown-dark px-6 py-3 rounded-lg font-semibold hover:bg-white transition-colors"
              >
                <Mail size={20} />
                Entrar em Contato
              </a>
            </div>
            <div className="mt-6">
              <SocialLinks />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}