"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const skills = ["Solidity", "React", "Next.js", "Node.js", "PostgreSQL", "PyTorch", "Ethereum"];

const highlights = [
    "Building Ethereum smart contracts and decentralised applications with Solidity",
    "Student Council Member at VIT Chennai — managing 1000+ students & driving campus improvement",
    "Built ChainFund: a decentralised chit-fund protocol with an AI credit scoring oracle",
    "Solved 450+ LeetCode problems over the past year",
    "Consistently practising Data Structures & Algorithms",
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
                className="max-w-3xl w-full mx-auto flex flex-col gap-14"
            >
                {/* Identity block */}
                <div className="flex flex-col gap-5">
                    <motion.p variants={fadeUp} className="text-xs text-muted-foreground tracking-[0.2em] uppercase font-medium">
                        Hello, I’m
                    </motion.p>
                    <motion.h1 variants={fadeUp} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-none tracking-tight text-transparent bg-clip-text bg-linear-to-br from-foreground via-foreground/90 to-muted-foreground/50">
                        Dhanush K
                    </motion.h1>
                    <motion.p variants={fadeUp} className="text-xl md:text-2xl text-foreground/80 font-light tracking-wide">
                        Blockchain Developer &nbsp;·&nbsp; Full Stack Developer
                    </motion.p>
                    <motion.p variants={fadeUp} className="text-base text-muted-foreground leading-relaxed max-w-xl">
                        I design and build decentralised systems — writing smart contracts on Ethereum and shipping full-stack applications that bridge Web3 with great user experiences.
                    </motion.p>

                    <motion.div variants={fadeUp} className="flex gap-4 flex-wrap pt-1">
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
                        Final-year CSE student at <span className="text-foreground font-medium">VIT, Chennai</span> with a focus on Blockchain development and full-stack engineering. I build decentralised applications and web platforms that solve real problems.
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
