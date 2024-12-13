import React from 'react';
import { services } from '../data/services';
import ServiceCard from './ServiceCard';

export default function Services() {
  return (
    <section className="py-20 bg-brown-light">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-brown-dark text-center mb-12">Serviços</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}