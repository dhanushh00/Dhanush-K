"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

type Project = {
    title: string;
    tagline: string;
    bullets: string[];
    tech: string[];
    github: string;
    live: string | null;
    categories: string[];
};

const projects: Project[] = [
    {
        title: "Finora AI – Agentic Financial Intelligence Platform",
        tagline: "Multi-agent AI system orchestrating 5 specialized intelligence agents for explainable financial insights and portfolio analysis.",
        bullets: [
            "Built a multi-agent AI system using LangGraph with 5 specialised agents for news, sentiment, technical analysis, risk, and financial reporting.",
            "Integrated FinBERT for financial sentiment analysis and pandas-ta for RSI, SMA, EMA, and Bollinger Bands to generate market insights.",
            "Developed an AI report agent that combines agent outputs to provide explainable investment insights with confidence scores and risk analysis.",
            "Added real-time stock data, portfolio tracking, watchlists, and price alerts to help users monitor and analyse investments.",
        ],
        tech: ["LangGraph", "Python", "FinBERT", "pandas-ta", "FastAPI", "Next.js", "PostgreSQL", "Gemini API"],
        github: "https://github.com/dhanushh00",
        live: null,
        categories: ["AI", "Full Stack"],
    },
    {
        title: "Cipher DAO – Confidential Governance Protocol",
        tagline: "Privacy-preserving decentralized governance protocol with TEE-based confidentiality and dual-token voting on Base Sepolia.",
        bullets: [
            "Built a privacy-focused DAO with 4 Solidity smart contracts for encrypted balances, private voting, and hidden proposal amounts using Inco TEE.",
            "Developed a dual-token system (cUSDC and cGOV) with an ERC-4626 vault for confidential asset and voting management.",
            "Implemented session keys to reduce repeated MetaMask prompts and deployed contracts on Base Sepolia.",
            "Designed a confidential governance flow covering proposal creation, encrypted voting, proposal finalization, and secure execution.",
        ],
        tech: ["Solidity", "Inco TEE", "ERC-4626", "Base Sepolia", "Smart Contracts", "Web3.js", "Ethers.js"],
        github: "https://github.com/dhanushh00",
        live: null,
        categories: ["Blockchain", "Full Stack"],
    },
    {
        title: "CrimeVision – Intelligent Cloud-Based Criminal Identification System",
        tagline: "Serverless cloud architecture for real-time facial recognition, metadata indexing, and secure criminal identity verification.",
        bullets: [
            "Built real-time facial recognition using AWS Rekognition for identity detection and verification.",
            "Deployed event-driven workflows with AWS Lambda triggered by image uploads to Amazon S3.",
            "Managed facial metadata operations using Amazon DynamoDB for scalable cloud storage.",
            "Designed a scalable and secure cloud-based identity recognition architecture.",
        ],
        tech: ["AWS Rekognition", "AWS Lambda", "Amazon S3", "Amazon DynamoDB", "Python", "REST APIs"],
        github: "https://github.com/dhanushh00",
        live: null,
        categories: ["Cloud", "Full Stack", "AI"],
    },
];

const categories = ["All", "AI", "Blockchain", "Full Stack", "Cloud"];

export function Projects() {
    const [active, setActive] = useState("All");
    const filtered =
        active === "All" ? projects : projects.filter((p) => p.categories.includes(active));

    return (
        <section id="projects" className="px-5 sm:px-8 md:px-16 lg:px-24 py-16 sm:py-20 max-w-5xl">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-12">
                    <div>
                        <h2 className="text-sm font-semibold text-foreground uppercase tracking-widest">
                            Projects
                        </h2>
                        <p className="text-xs text-muted-foreground mt-1">
                            Filtered by AI · Blockchain · Full Stack · Cloud
                        </p>
                    </div>

                    {/* Filter pills */}
                    <div className="flex gap-2 flex-wrap">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActive(cat)}
                                className={`px-3 py-1 text-xs rounded-full border transition-colors ${active === cat
                                    ? "bg-foreground text-background border-foreground font-medium"
                                    : "border-border text-muted-foreground hover:border-foreground hover:text-foreground"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col gap-6">
                    {filtered.map((project, i) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.35, delay: i * 0.07 }}
                            className="group p-6 sm:p-7 rounded-2xl border border-border bg-card/60 hover:bg-accent/30 hover:border-foreground/20 transition-all duration-200"
                        >
                            {/* Header row */}
                            <div className="flex items-start justify-between gap-4 mb-3">
                                <div>
                                    <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                                        <span className="text-xs font-mono text-muted-foreground">
                                            0{i + 1}
                                        </span>
                                        {project.categories.map((c) => (
                                            <span
                                                key={c}
                                                className="px-2 py-0.5 text-[11px] font-medium rounded-md bg-accent text-foreground/80 border border-border"
                                            >
                                                {c}
                                            </span>
                                        ))}
                                    </div>
                                    <h3 className="text-xl font-bold text-foreground group-hover:text-foreground/90 transition-colors">
                                        {project.title}
                                    </h3>
                                </div>
                                <div className="flex items-center gap-3 shrink-0 pt-0.5">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-muted-foreground hover:text-foreground transition-colors"
                                        aria-label="GitHub"
                                    >
                                        <Github className="w-4 h-4" />
                                    </a>
                                    {project.live && (
                                        <a
                                            href={project.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-muted-foreground hover:text-foreground transition-colors"
                                            aria-label="Live Demo"
                                        >
                                            <ExternalLink className="w-4 h-4" />
                                        </a>
                                    )}
                                </div>
                            </div>

                            <p className="text-sm text-foreground/80 leading-relaxed mb-4">
                                {project.tagline}
                            </p>

                            {/* Bullets */}
                            <ul className="flex flex-col gap-2 mb-5">
                                {project.bullets.map((bullet, idx) => (
                                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-foreground/40 shrink-0" />
                                        <span>{bullet}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="flex flex-wrap gap-2 pt-2 border-t border-border/50">
                                {project.tech.map((t) => (
                                    <span
                                        key={t}
                                        className="px-2.5 py-1 text-xs border border-border rounded-full text-muted-foreground"
                                    >
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
