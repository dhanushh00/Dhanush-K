"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export function Hero() {
    return (
        <section id="home" className="min-h-screen flex flex-col justify-center px-8 md:px-16 lg:px-24 py-24">
            <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55 }}
                className="max-w-4xl w-full"
            >
                <p className="text-sm text-muted-foreground mb-6 tracking-[0.2em] font-medium uppercase">
                    Hello, I'm
                </p>
                <h1 className="text-6xl md:text-8xl lg:text-9xl font-extrabold leading-none mb-6 tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-foreground via-foreground/90 to-muted-foreground/50">
                    Dhanush K
                </h1>
                <p className="text-2xl md:text-3xl lg:text-4xl text-foreground/80 mb-8 font-light tracking-wide">
                    AI Engineer · Full Stack Developer
                </p>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-12 max-w-2xl font-light">
                    I design and build intelligent systems powered by machine learning and modern web technologies. Focused on creating scalable, real-world solutions.
                </p>

                <div className="flex gap-4 flex-wrap">
                    <a
                        href="#projects"
                        className="px-7 py-2.5 rounded-full bg-foreground text-background text-sm font-medium hover:opacity-75 transition-opacity"
                    >
                        View Projects
                    </a>
                    <a
                        href="#contact"
                        className="px-7 py-2.5 rounded-full border border-border text-sm font-medium hover:bg-accent transition-colors"
                    >
                        Contact Me
                    </a>
                </div>
            </motion.div>

            <motion.a
                href="#about"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.1, duration: 0.5 }}
                className="mt-24 inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors w-fit"
            >
                <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
                scroll down
            </motion.a>
        </section>
    );
}
