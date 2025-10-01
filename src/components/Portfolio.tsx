import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';
import Tilt from 'react-vanilla-tilt';
const projects = [
  {
    title: 'SereneAI by GuestAi',
    description: 'AI-powered virtual assistant for salons and spas, optimizing booking and customer service.',
    link: 'https://github.com/W3JDev/SereneAI-by-GuestAi',
  },
  {
    title: 'VA-AI Powered Demo Video',
    description: 'AI-driven video analysis platform using Google Gemini AI to extract insights and summarize content.',
    link: 'https://github.com/W3JDev/VA-AI-Powered-Demo-Video-in-minutes',
  },
  {
    title: 'Vine_Ai',
    description: 'Premium AI-powered wine pairing app with interactive taste quizzes and personalized suggestions.',
    link: 'https://github.com/W3JDev/Vine_Ai',
  },
  {
    title: 'GuestAi',
    description: 'Intelligent virtual restaurant assistant for orders, reservations, and guest engagement.',
    link: 'https://github.com/W3JDev/GuestAi',
  },
  {
    title: 'lovable-clone-ai',
    description: 'Innovative TypeScript AI framework focused on automation and agent infrastructure.',
    link: 'https://github.com/W3JDev/lovable-clone-ai',
  },
  {
    title: 'Advance 3D Animated Portfolio',
    description: 'Portfolio project showcasing advanced 3D animation and visual techniques.',
    link: 'https://github.com/W3JDev/advance-3d-animated-MNJ-portfolio',
  },
];
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
export function Portfolio() {
  return (
    <section id="portfolio" className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-display font-bold text-primary"
          >
            Project Showcase
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            A glimpse into the solutions we build for our clients.
          </motion.p>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              transition={{ delay: index * 0.1 }}
            >
              <Tilt style={{ background: 'transparent', boxShadow: 'none' }}>
                <Card className="h-full flex flex-col bg-secondary/50 border border-white/10 transition-all duration-300 hover:border-white/20 hover:shadow-2xl hover:shadow-primary/10">
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold text-primary">{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground">{project.description}</p>
                  </CardContent>
                  <CardFooter>
                    <Button asChild variant="outline" className="w-full border-primary/50 hover:bg-primary hover:text-background">
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        View on GitHub <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}