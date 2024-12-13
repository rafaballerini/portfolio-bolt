import React from 'react';
import { skills } from '../data/skills';

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-brown-dark text-center mb-12">Habilidades & Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Object.entries(skills).map(([key, category]) => {
            const Icon = category.icon;
            return (
              <div key={key} className="bg-brown-light rounded-lg p-6 shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <Icon size={24} className="text-brown-dark" />
                  <h3 className="text-2xl font-bold text-brown-dark">{category.title}</h3>
                </div>
                <div className="space-y-4">
                  {category.skills.map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-1">
                        <span className="text-brown-dark font-medium">{skill.name}</span>
                        <span className="text-brown-dark">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-brown-medium rounded-full h-2">
                        <div
                          className="bg-brown-dark h-2 rounded-full"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}