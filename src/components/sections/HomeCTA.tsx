"use client";

import { motion } from "framer-motion";

export function HomeCTA() {
    return (
        <section className="px-8 md:px-16 lg:px-24 py-20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5 }}
                className="flex flex-col gap-6 items-start"
            >
                <p className="text-2xl md:text-3xl font-semibold text-foreground leading-snug max-w-lg">
                    Let's build something impactful.
                </p>
                <p className="text-base text-muted-foreground max-w-md leading-relaxed">
                    Open to internships, freelance projects, and collaborations. If you have an idea, let's talk.
                </p>
                <a
                    href="#contact"
                    className="px-6 py-2.5 rounded-full bg-foreground text-background text-sm font-medium hover:opacity-75 transition-opacity"
                >
                    Contact Me
                </a>
            </motion.div>
        </section>
    );
}
