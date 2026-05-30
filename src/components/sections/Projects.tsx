"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

type Project = {
    title: string;
    description: string;
    tech: string[];
    github: string;
    live: string | null;
    category: string;
};

const projects: Project[] = [
    {
        title: "ChainFund — Decentralised Community Lending Protocol",
        description:
            "Smart-contract chit fund where members deposit periodically and bid via sealed-bid auctions to receive the pool, with on-chain repayment tracking and an AI-powered credit scoring oracle.",
        tech: ["Solidity", "Foundry", "React", "Node.js", "Ethers.js", "Gemini API"],
        github: "https://github.com/dhanushkg23",
        live: null,
        category: "Blockchain",
    },
    {
        title: "Multimodal Deepfake Detection System",
        description:
            "Two-branch deepfake detector combining lip-sync inconsistency analysis and temporal artifact detection, with explainable outputs for human-readable reasoning.",
        tech: ["Python", "PyTorch", "OpenCV", "Scikit-learn", "SyncNet"],
        github: "https://github.com/dhanushkg23",
        live: null,
        category: "AI/ML",
    },
    {
        title: "Neuro-Symbolic Tax Optimisation Engine",
        description:
            "Hybrid reasoning system combining symbolic tax rules with ML-driven heuristics to generate personalised tax optimisation recommendations in an interactive web app.",
        tech: ["Python", "Streamlit", "Scikit-learn", "Pandas", "NumPy"],
        github: "https://github.com/dhanushkg23",
        live: null,
        category: "AI/ML",
    },
];

const categories = ["All", "Blockchain", "AI/ML"];

export function Projects() {
    const [active, setActive] = useState("All");
    const filtered =
        active === "All" ? projects : projects.filter((p) => p.category === active);

    return (
        <section id="projects" className="px-5 sm:px-8 md:px-16 lg:px-24 py-16 sm:py-20 max-w-5xl mx-auto w-full">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-12">
                    <h2 className="text-sm font-semibold text-foreground uppercase tracking-widest">
                        Projects
                    </h2>

                    {/* Filter pills */}
                    <div className="flex gap-2 flex-wrap">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActive(cat)}
                                className={`px-3 py-1 text-xs rounded-full border transition-colors ${active === cat
                                    ? "bg-foreground text-background border-foreground"
                                    : "border-border text-muted-foreground hover:border-foreground hover:text-foreground"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col gap-0">
                    {filtered.map((project, i) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.35, delay: i * 0.07 }}
                            className="group p-5 sm:p-6 -mx-5 sm:-mx-6 rounded-2xl hover:bg-accent/40 transition-colors"
                        >
                            {/* Header row */}
                            <div className="flex items-start justify-between gap-4 mb-3">
                                <div>
                                    <span className="text-sm text-muted-foreground mr-4">
                                        0{i + 1}
                                    </span>
                                    <span className="text-xl font-bold group-hover:text-muted-foreground transition-colors">
                                        {project.title}
                                    </span>
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

                            <p className="text-sm text-muted-foreground leading-relaxed mb-4 ml-0 sm:ml-6">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 ml-0 sm:ml-6">
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
