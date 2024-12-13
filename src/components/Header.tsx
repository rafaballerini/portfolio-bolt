import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Header() {
  return (
    <header className="min-h-screen flex flex-col justify-center bg-gradient-to-b from-[#8B4513] to-[#DEB887] text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1537511446984-935f663eb1f4?auto=format&fit=crop&w=800&q=80"
              alt="Professional headshot"
              className="rounded-full w-64 h-64 object-cover border-4 border-[#F5DEB3] mx-auto md:mx-0"
            />
          </div>
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Crafting Digital Excellence
            </h1>
            <p className="text-xl mb-6 text-[#F5DEB3]">
              Full-Stack Developer specializing in creating beautiful, high-performance web applications that drive business growth.
            </p>
            <div className="flex gap-4 justify-center md:justify-start">
              <a href="#contact" className="bg-[#F5DEB3] text-[#8B4513] px-6 py-3 rounded-lg font-semibold hover:bg-white transition-colors">
                Hire Me
              </a>
              <div className="flex gap-4 items-center">
                <a href="https://github.com" className="hover:text-[#F5DEB3] transition-colors">
                  <Github size={24} />
                </a>
                <a href="https://linkedin.com" className="hover:text-[#F5DEB3] transition-colors">
                  <Linkedin size={24} />
                </a>
                <a href="mailto:contact@example.com" className="hover:text-[#F5DEB3] transition-colors">
                  <Mail size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}