import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog";
const LegalModal = ({ title, children, triggerText }: { title: string, children: React.ReactNode, triggerText: string }) => (
  <Dialog>
    <DialogTrigger asChild>
      <button className="text-sm text-muted-foreground hover:text-primary transition-colors">{triggerText}</button>
    </DialogTrigger>
    <DialogContent className="sm:max-w-[425px] bg-secondary border-white/10">
      <DialogHeader>
        <DialogTitle>{title}</DialogTitle>
        <DialogDescription>
          Last updated: October 2025
        </DialogDescription>
      </DialogHeader>
      <div className="prose prose-sm max-h-[60vh] overflow-y-auto text-muted-foreground prose-invert">
        {children}
      </div>
    </DialogContent>
  </Dialog>
);
export function Footer() {
  return (
    <footer className="bg-background border-t border-white/10">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-2xl font-bold font-display text-primary">W3J LLC</h2>
            <p className="text-muted-foreground text-sm mt-1">
              Licensed Technology Consulting Services
            </p>
          </div>
          <div className="flex space-x-6">
            <a href="https://github.com/W3JDev" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <span className="sr-only">GitHub</span>
              <Github className="h-6 w-6" />
            </a>
            <a href="https://www.linkedin.com/in/muhammad-nurunnabi-15629025b/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <span className="sr-only">LinkedIn</span>
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="https://x.com/w3jdev" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <span className="sr-only">X</span>
              <Twitter className="h-6 w-6" />
            </a>
          </div>
        </div>
        <div className="mt-8 border-t border-white/10 pt-8 flex flex-col sm:flex-row-reverse justify-between items-center text-sm text-muted-foreground space-y-4 sm:space-y-0">
          <div className="flex space-x-4">
            <LegalModal title="Privacy Policy" triggerText="Privacy Policy">
              <p>This is a placeholder for the Privacy Policy. A full policy will be available upon official launch, detailing how we collect, use, and protect your data in compliance with relevant regulations.</p>
            </LegalModal>
            <LegalModal title="Terms of Service" triggerText="Terms of Service">
              <p>This is a placeholder for the Terms of Service. A full agreement will be available upon official launch, outlining the terms and conditions for using our services and website.</p>
            </LegalModal>
          </div>
          <p>&copy; 2025 W3J LLC. EIN: 37-2188653. All rights reserved.</p>
        </div>
        <p className="text-xs text-muted-foreground/50 text-center mt-8">Built with ❤️ at Cloudflare</p>
      </div>
    </footer>
  );
}