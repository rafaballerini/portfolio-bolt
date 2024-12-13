import React from 'react';
import { projects } from '../data/projects';

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-brown-light">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-brown-dark text-center mb-12">Projetos em Destaque</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-brown-dark mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-brown-medium text-white rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <blockquote className="border-l-4 border-brown-dark pl-4 italic text-gray-600">
                  "{project.testimonial.text}"
                  <footer className="text-sm text-gray-500 mt-2">— {project.testimonial.author}</footer>
                </blockquote>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}