import React, { useEffect } from 'react';
import { Toaster } from '@/components/ui/sonner';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Services } from '@/components/Services';
import { About } from '@/components/About';
import { Portfolio } from '@/components/Portfolio';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
const businessSchema = {
  "@context": "https://schema.org",
  "@type": "Corporation",
  "name": "W3J LLC",
  "legalName": "W3J LLC",
  "url": "https://w3jdev.com",
  "logo": "https://via.placeholder.com/250x100.png?text=W3J+LLC",
  "founder": {
    "@type": "Person",
    "name": "Muhammad Nurunnabi"
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "30 N Gould St Ste R",
    "addressLocality": "Sheridan",
    "addressRegion": "WY",
    "postalCode": "82801",
    "addressCountry": "US"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer service",
    "email": "admin@w3jdev.com"
  },
  "taxID": "37-2188653",
  "description": "W3J LLC provides specialized consulting services for enterprise technology solutions, full-stack development, and AI integration.",
  "sameAs": [
    "https://github.com/W3JDev",
    "https://www.linkedin.com/in/muhammad-nurunnabi-15629025b/",
    "https://x.com/w3jdev"
  ],
  "knowsAbout": [
    "Full Stack Development",
    "AI Integration",
    "Solution Architecture",
    "SaaS Development",
    "Python",
    "JavaScript",
    "React",
    "OpenAI",
    "Google Gemini"
  ]
};
export function HomePage() {
  useEffect(() => {
    document.title = 'W3J LLC - Enterprise Technology Consulting';
    const setMeta = (name: string, content: string) => {
      let element = document.querySelector(`meta[name='${name}']`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute('name', name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };
    setMeta('description', 'W3J LLC provides specialized consulting services for enterprise technology solutions, full-stack development, and AI integration.');
    setMeta('keywords', 'Full Stack Development, AI Integration, Python, React, OpenAI, Enterprise Software');
    const scriptId = 'business-schema';
    const existingScript = document.getElementById(scriptId);
    if (existingScript) {
      document.head.removeChild(existingScript);
    }
    const script = document.createElement('script');
    script.id = scriptId;
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify(businessSchema);
    document.head.appendChild(script);
    return () => {
      const scriptToRemove = document.getElementById(scriptId);
      if (scriptToRemove) {
        document.head.removeChild(scriptToRemove);
      }
    };
  }, []);
  return (
    <div className="bg-background font-sans text-foreground">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
      <Toaster richColors theme="dark" position="top-right" />
    </div>
  );
}