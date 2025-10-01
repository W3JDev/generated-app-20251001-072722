import React from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Scene } from '@/components/canvas/Scene';
export function Hero() {
  const handleCTAClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <Scene />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-br from-white via-gray-300 to-gray-500 tracking-tight"
        >
          Innovative Solutions in
          <br />
          Full Stack & AI Development
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground"
        >
          Building the future of productivity, automation, and business intelligence.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="mt-10"
        >
          <Button
            size="lg"
            onClick={handleCTAClick}
            className="px-8 py-4 text-lg bg-primary text-background font-semibold rounded-lg shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] transform hover:scale-105 transition-all duration-300 ease-in-out"
          >
            Request Consultation
          </Button>
        </motion.div>
      </div>
    </section>
  );
}