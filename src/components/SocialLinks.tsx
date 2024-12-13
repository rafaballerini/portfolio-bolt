import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { socialLinks } from '../data/socialLinks';

const iconMap = {
  Github,
  Linkedin,
  Mail,
};

export default function SocialLinks() {
  return (
    <div className="flex gap-4 justify-center md:justify-start">
      {socialLinks.map((link) => {
        const Icon = iconMap[link.icon as keyof typeof iconMap];
        return (
          <a
            key={link.name}
            href={link.url}
            className="text-brown-light hover:text-white transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon size={24} />
          </a>
        );
      })}
    </div>
  );
}