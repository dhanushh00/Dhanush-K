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
        title: "AI Resume Analyzer",
        description:
            "Full-stack web app that uses ML models to analyze resumes against job descriptions. Provides skill-gap detection and personalized suggestions to improve candidate screening efficiency.",
        tech: ["Node.js", "MongoDB", "Machine Learning", "Docker", "AWS"],
        github: "https://github.com/dhanushkg23",
        live: null,
        category: "Full Stack",
    },
    {
        title: "AI Legal Sentiment Analyzer",
        description:
            "Sentiment analysis tool built with FLAN-T5 and Hugging Face that performs real-time analysis on legal documents, automating insight extraction from complex legal text.",
        tech: ["Python", "FLAN-T5", "Hugging Face", "Streamlit", "AWS"],
        github: "https://github.com/dhanushkg23",
        live: null,
        category: "AI/ML",
    },
    {
        title: "Smart Path for Visually Impaired",
        description:
            "Navigation system with real-time voice guidance and location tracking to help visually impaired users navigate independently. Focused on accessibility and real-world usability.",
        tech: ["React", "Geolocation API", "WebSockets", "Node.js"],
        github: "https://github.com/dhanushkg23",
        live: null,
        category: "Full Stack",
    },
];

const categories = ["All", "AI/ML", "Full Stack"];

export function Projects() {
    const [active, setActive] = useState("All");
    const filtered =
        active === "All" ? projects : projects.filter((p) => p.category === active);

    return (
        <section id="projects" className="px-8 md:px-16 lg:px-24 py-20 max-w-5xl">
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
                            className="group p-6 -mx-6 rounded-2xl hover:bg-accent/40 transition-colors"
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

                            <p className="text-sm text-muted-foreground leading-relaxed mb-4 ml-6">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 ml-6">
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
