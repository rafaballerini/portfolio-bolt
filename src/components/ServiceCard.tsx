import React from 'react';

interface ServiceCardProps {
  title: string;
  price: string;
}

export default function ServiceCard({ title, price }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
      <h3 className="text-xl font-bold text-brown-dark mb-4">{title}</h3>
      <p className="text-brown-medium font-semibold">{price}</p>
    </div>
  );
}