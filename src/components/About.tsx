import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
const expertiseAreas = [
  'Scalable Full-Stack Python & TypeScript Solutions',
  'AI Integration with OpenAI & Google Gemini',
  'Enterprise-Grade Solution Architecture',
  'End-to-End SaaS Product Development',
  'Robust API Design & Implementation',
];
export function About() {
  const targetRef = React.useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'end start'],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  const x = useTransform(scrollYProgress, [0.1, 0.7], ['-50%', '50%']);
  return (
    <section id="about" className="py-20 md:py-40 bg-background" ref={targetRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div style={{ opacity, scale }} className="text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary tracking-tight">
            Architecting The Future of Technology
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto">
            Founded by Muhammad Nurunnabi, W3J LLC specializes in developing robust, scalable, and intelligent software for enterprises, startups, and SaaS operators. Our mission is to deliver exceptional value by architecting and implementing high-performance systems that are scalable, maintainable, and secure.
          </p>
        </motion.div>
        <div className="mt-20 lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="relative p-8 rounded-lg border border-white/10 bg-secondary/50"
          >
            <h3 className="text-2xl font-semibold text-primary">Core Expertise</h3>
            <ul className="mt-6 space-y-4">
              {expertiseAreas.map((item, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="flex-shrink-0 h-6 w-6 text-primary/70 mt-1" />
                  <span className="ml-3 text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-12 lg:mt-0 text-lg text-muted-foreground space-y-4"
          >
            <p>We bridge the gap between complex business requirements and elegant technical solutions. Our approach is rooted in deep technical expertise and a commitment to understanding your unique challenges.</p>
            <p>From initial concept to final deployment, we partner with you to ensure every line of code contributes to your strategic goals.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}