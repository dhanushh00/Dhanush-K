"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const skills = ["Python", "Java", "Solidity", "LangGraph", "AWS", "PostgreSQL", "MongoDB", "Next.js", "Multi-Agent Systems"];

const highlights = [
    "Finora AI: Multi-agent financial intelligence system using LangGraph with 5 specialised agents, FinBERT & pandas-ta",
    "Cipher DAO: Confidential governance protocol with 4 Solidity smart contracts on Base Sepolia using Inco TEE & ERC-4626",
    "CrimeVision: Scalable serverless criminal identification system built on AWS (Rekognition, Lambda, S3, DynamoDB)",
    "Student Council Member at VIT Chennai (2025 – Present) — managing student affairs & university policy",
    "Solved 500+ problems on LeetCode demonstrating strong problem-solving and Data Structures & Algorithms",
];

const container = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.1 },
    },
};

const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function Hero() {
    return (
        <section id="home" className="min-h-screen flex flex-col justify-center px-5 sm:px-8 md:px-16 lg:px-24 py-20 sm:py-24">
            <motion.div
                variants={container}
                initial="hidden"
                animate="visible"
                className="max-w-5xl w-full flex flex-col gap-14"
            >
                {/* Identity block */}
                <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-center justify-center">
                    {/* Image – right side on desktop */}
                    <motion.div variants={fadeUp} className="shrink-0 relative group order-first md:order-last">
                        <div className="relative w-52 h-68 sm:w-60 sm:h-76 md:w-68 md:h-84 rounded-[2.5rem] overflow-hidden border border-border/30 bg-background shadow-xl">
                            {/* The Image - Centered */}
                            <img 
                                src="/profile-hero.jpg" 
                                alt="Dhanush K" 
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                                style={{ objectPosition: '50% center' }}
                            />
                        </div>
                    </motion.div>
                    
                    {/* Text Content – left side on desktop */}
                    <motion.div variants={fadeUp} className="flex flex-col gap-5 flex-1 text-center md:text-left relative z-10 order-last md:order-first">
                        <p className="text-xs text-muted-foreground tracking-[0.2em] uppercase font-medium">
                            Hello, I’m
                        </p>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[5rem] font-extrabold leading-none tracking-tight text-transparent bg-clip-text bg-linear-to-br from-foreground via-foreground/90 to-muted-foreground/50">
                            Dhanush K
                        </h1>
                        <p className="text-xl md:text-2xl text-foreground/80 font-light tracking-wide">
                            AI Engineer &nbsp;·&nbsp; Blockchain Developer &nbsp;·&nbsp; Full Stack Developer
                        </p>
                        <p className="text-base text-muted-foreground leading-relaxed max-w-xl mx-auto md:mx-0">
                            I build multi-agent AI systems, confidential blockchain protocols, and scalable cloud architectures — bridging intelligent reasoning with robust full-stack systems.
                        </p>

                        <div className="flex gap-4 flex-wrap pt-1 justify-center md:justify-start">
                            <a href="#projects" className="px-6 py-2.5 rounded-full bg-foreground text-background text-sm font-medium hover:opacity-75 transition-opacity">
                                View Projects
                            </a>
                            <a href="#contact" className="px-6 py-2.5 rounded-full border border-border text-sm font-medium hover:bg-accent transition-colors">
                                Contact Me
                            </a>
                            <a
                                href="/resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-2.5 rounded-full border border-border text-sm font-medium hover:bg-accent transition-colors"
                            >
                                Resume
                            </a>
                        </div>
                    </motion.div>
                </div>

                {/* Skills Snapshot */}
                <motion.div variants={fadeUp} className="flex flex-col gap-3">
                    <p className="text-xs text-muted-foreground uppercase tracking-widest">Stack</p>
                    <p className="text-sm text-foreground/80 flex flex-wrap gap-x-2 gap-y-1">
                        {skills.map((s, i) => (
                            <span key={s}>
                                {s}{i < skills.length - 1 && <span className="text-border mx-1">·</span>}
                            </span>
                        ))}
                    </p>
                </motion.div>

                {/* About Preview */}
                <motion.div variants={fadeUp} className="flex flex-col gap-3 border-l-2 border-border pl-5">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                        CSE student at <span className="text-foreground font-medium">VIT Chennai</span> (CGPA: 8.63) building intelligent multi-agent AI platforms, privacy-preserving smart contracts, and cloud-native systems.
                    </p>
                    <a href="#about" className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors w-fit">
                        Read more <ArrowRight className="w-3 h-3" />
                    </a>
                </motion.div>

                {/* Highlights */}
                <motion.div variants={fadeUp} className="flex flex-col gap-3">
                    <p className="text-xs text-muted-foreground uppercase tracking-widest">Highlights</p>
                    <ul className="flex flex-col gap-2">
                        {highlights.map((h) => (
                            <li key={h} className="flex items-start gap-3 text-sm text-muted-foreground">
                                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-foreground/40 shrink-0" />
                                {h}
                            </li>
                        ))}
                    </ul>
                </motion.div>
            </motion.div>
        </section>
    );
}
