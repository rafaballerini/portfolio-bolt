import React, { useState } from 'react';
import { Mail, Clock, Calendar } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    details: '',
    budget: '',
    timeline: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Formulário enviado:', formData);
  };

  return (
    <section id="contact" className="py-20 bg-brown-dark">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2 p-8 bg-brown-medium">
              <h2 className="text-3xl font-bold text-white mb-6">Vamos Trabalhar Juntos</h2>
              <div className="space-y-6 text-white">
                <div className="flex items-center gap-3">
                  <Mail size={20} />
                  <span>contato@rafaballerini.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock size={20} />
                  <span>Resposta em até 24 horas</span>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar size={20} />
                  <span>Disponível para novos projetos</span>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 p-8">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Nome</label>
                  <input
                    type="text"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brown-dark focus:ring focus:ring-brown-medium focus:ring-opacity-50"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brown-dark focus:ring focus:ring-brown-medium focus:ring-opacity-50"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Detalhes do Projeto</label>
                  <textarea
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brown-dark focus:ring focus:ring-brown-medium focus:ring-opacity-50"
                    rows={4}
                    required
                    value={formData.details}
                    onChange={(e) => setFormData({...formData, details: e.target.value})}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Orçamento</label>
                    <select
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brown-dark focus:ring focus:ring-brown-medium focus:ring-opacity-50"
                      value={formData.budget}
                      onChange={(e) => setFormData({...formData, budget: e.target.value})}
                    >
                      <option value="">Selecione...</option>
                      <option value="2-5k">R$ 2.000 - R$ 5.000</option>
                      <option value="5-10k">R$ 5.000 - R$ 10.000</option>
                      <option value="10k+">R$ 10.000+</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Prazo</label>
                    <select
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brown-dark focus:ring focus:ring-brown-medium focus:ring-opacity-50"
                      value={formData.timeline}
                      onChange={(e) => setFormData({...formData, timeline: e.target.value})}
                    >
                      <option value="">Selecione...</option>
                      <option value="1-2">1-2 meses</option>
                      <option value="2-3">2-3 meses</option>
                      <option value="3+">3+ meses</option>
                    </select>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full bg-brown-dark text-white py-2 px-4 rounded-md hover:bg-brown-medium transition-colors"
                >
                  Enviar Mensagem
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}