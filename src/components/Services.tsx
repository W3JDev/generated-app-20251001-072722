import React from 'react';
import { Code, Bot, LayoutGrid, Rocket } from 'lucide-react';
import { motion, Variants } from 'framer-motion';
import Marquee from '@/components/ui/Marquee';
const services = [
  {
    icon: <Code className="h-8 w-8 text-primary" />,
    title: 'Full Stack Development',
    description: 'End-to-end solutions with Python, JavaScript, and TypeScript.',
    className: 'md:col-span-2',
  },
  {
    icon: <Bot className="h-8 w-8 text-primary" />,
    title: 'AI Integration',
    description: 'Leveraging OpenAI and Google Gemini APIs for intelligent applications.',
    className: 'md:col-span-1',
  },
  {
    icon: <LayoutGrid className="h-8 w-8 text-primary" />,
    title: 'Solution Architecture',
    description: 'Designing scalable and resilient enterprise-grade platforms.',
    className: 'md:col-span-1',
  },
  {
    icon: <Rocket className="h-8 w-8 text-primary" />,
    title: 'SaaS & App Development',
    description: 'From concept to launch, we develop and scale innovative SaaS products.',
    className: 'md:col-span-2',
  },
];
const technologies = ['Python', 'TypeScript', 'React', 'Node.js', 'OpenAI', 'Google Gemini', 'AWS', 'Docker', 'Kubernetes', 'PostgreSQL'];
const cardVariants: Variants = {
  offscreen: {
    opacity: 0,
    y: 50,
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 0.8,
    },
  },
};
export function Services() {
  return (
    <section id="services" className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-display font-bold text-primary"
          >
            Our Expertise
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            A comprehensive suite of services to build and scale your technology platforms.
          </motion.p>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className={service.className}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              transition={{ delay: index * 0.1 }}
            >
              <div className="h-full p-8 rounded-lg border border-white/10 bg-secondary/50 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-primary/10 rounded-full blur-3xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-primary">{service.title}</h3>
                  <p className="mt-2 text-muted-foreground">{service.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="mt-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background z-10"></div>
        <Marquee pauseOnHover className="[--duration:60s]">
          {technologies.map((tech) => (
            <span key={tech} className="mx-4 text-lg font-medium text-muted-foreground">{tech}</span>
          ))}
        </Marquee>
      </div>
    </section>
  );
}