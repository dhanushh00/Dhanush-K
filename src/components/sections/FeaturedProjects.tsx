"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const featured = [
    {
        title: "Finora AI – Agentic Financial Intelligence Platform",
        category: "AI",
        description: "Multi-agent AI system orchestrating 5 specialised agents for news, sentiment, technical analysis, risk, and report generation using LangGraph and FinBERT.",
        tech: ["LangGraph", "Python", "FinBERT", "pandas-ta", "FastAPI", "Next.js"],
        github: "https://github.com/dhanushh00",
        live: null,
    },
    {
        title: "Cipher DAO – Confidential Governance Protocol",
        category: "Blockchain",
        description: "Privacy-focused DAO with 4 Solidity smart contracts for encrypted balances, private voting, and an ERC-4626 vault using Inco TEE deployed on Base Sepolia.",
        tech: ["Solidity", "Inco TEE", "ERC-4626", "Base Sepolia", "Web3.js"],
        github: "https://github.com/dhanushh00",
        live: null,
    },
    {
        title: "CrimeVision – Intelligent Cloud-Based Criminal Identification System",
        category: "Cloud / Full Stack",
        description: "Scalable serverless criminal identification architecture featuring real-time facial recognition via AWS Rekognition, Lambda triggers, S3, and DynamoDB.",
        tech: ["AWS Rekognition", "AWS Lambda", "Amazon S3", "DynamoDB", "Python"],
        github: "https://github.com/dhanushh00",
        live: null,
    },
];

export function FeaturedProjects() {
    return (
        <section className="px-5 sm:px-8 md:px-16 lg:px-24 py-12 sm:py-16">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5 }}
            >
                <div className="flex items-center justify-between mb-10">
                    <p className="text-xs text-muted-foreground uppercase tracking-widest">Featured Projects</p>
                    <a href="#projects" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                        View all →
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {featured.map((project, i) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.35, delay: i * 0.08 }}
                            className="group flex flex-col justify-between gap-5 p-6 rounded-2xl border border-border bg-card hover:border-foreground/25 hover:bg-accent/40 transition-all duration-200"
                        >
                            <div className="flex flex-col gap-3">
                                <div className="flex items-start justify-between gap-4">
                                    <h3 className="text-base font-semibold text-foreground leading-snug">
                                        {project.title}
                                    </h3>
                                    <div className="flex items-center gap-2 shrink-0">
                                        <a href={project.github} target="_blank" rel="noopener noreferrer"
                                            className="text-muted-foreground hover:text-foreground transition-colors" aria-label="GitHub">
                                            <Github className="w-4 h-4" />
                                        </a>
                                        {project.live && (
                                            <a href={project.live} target="_blank" rel="noopener noreferrer"
                                                className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Live">
                                                <ExternalLink className="w-4 h-4" />
                                            </a>
                                        )}
                                    </div>
                                </div>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    {project.description}
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {project.tech.map((t) => (
                                    <span key={t} className="px-2.5 py-1 text-xs border border-border rounded-full text-muted-foreground">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
