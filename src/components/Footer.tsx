import { SOCIALS } from '../constants';
import { motion } from 'motion/react';
import { Mail, ArrowUpRight } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Footer() {
  return (
    <footer id="contact" className="py-24 px-6 bg-background border-t border-outline-variant">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-display font-bold tracking-tighter mb-8"
            >
              HAVE A <span className="text-primary italic">PROJECT</span> IN MIND?
            </motion.h2>
            <p className="text-foreground/60 text-lg max-w-md mb-10">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=chibuzodany@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-4 text-2xl font-display font-bold text-primary hover:gap-6 transition-all"
            >
              <Mail size={32} /> chibuzodany@gmail.com <ArrowUpRight size={24} className="group-hover:rotate-45 transition-transform" />
            </a>
          </div>

          <div className="flex flex-col justify-end">
            <div className="grid grid-cols-2 gap-4">
              {SOCIALS.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "flex items-center gap-3 p-4 rounded-2xl glass border border-outline-variant transition-all hover:scale-105",
                    social.color
                  )}
                >
                  <social.icon size={20} />
                  <span className="font-medium">{social.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-12 border-t border-outline-variant gap-6">
          <p className="text-foreground/40 text-sm font-mono">
            © 2026 DANIEL MOJEKWU. ALL RIGHTS RESERVED.
          </p>
          <div className="flex items-center gap-8">
            <a href="#" className="text-xs font-mono uppercase tracking-widest text-foreground/40 hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs font-mono uppercase tracking-widest text-foreground/40 hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
