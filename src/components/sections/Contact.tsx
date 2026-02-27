"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Download } from "lucide-react";

export function Contact() {
    return (
        <section id="contact" className="px-8 md:px-16 lg:px-24 py-20 max-w-2xl">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-sm font-semibold text-foreground uppercase tracking-widest mb-12">
                    Contact
                </h2>

                <p className="text-lg text-muted-foreground leading-relaxed mb-12 max-w-lg">
                    I'm actively looking for internship and full-time opportunities. Feel
                    free to reach out via email or any of the links below.
                </p>

                <div className="flex flex-col gap-6">
                    <a
                        href="mailto:dhanushkg23@gmail.com"
                        className="flex items-center gap-4 text-base group"
                    >
                        <Mail className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors shrink-0" />
                        <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                            dhanushkg23@gmail.com
                        </span>
                    </a>

                    <a
                        href="https://github.com/dhanushh00"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 text-base group"
                    >
                        <Github className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors shrink-0" />
                        <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                            github.com/dhanushh00
                        </span>
                    </a>

                    <a
                        href="https://www.linkedin.com/in/dhanush-k-127099310/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 text-base group"
                    >
                        <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors shrink-0" />
                        <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                            linkedin.com/in/dhanush-k-127099310
                        </span>
                    </a>

                    <a
                        href="https://x.com/DhanushK1271650"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 text-base group"
                    >
                        <svg className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors shrink-0" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 22.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </svg>
                        <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                            x.com/DhanushK1271650
                        </span>
                    </a>
                </div>

                {/* Resume CTA */}
                <a
                    href="/resume.pdf"
                    target="_blank"
                    className="mt-10 inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-border text-sm font-medium hover:bg-accent transition-colors"
                >
                    <Download className="w-4 h-4" />
                    Download Resume
                </a>
            </motion.div>
        </section>
    );
}
