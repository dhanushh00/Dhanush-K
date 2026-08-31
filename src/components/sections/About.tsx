"use client";

import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";

const currentlyLearning = ["Quantum Computing", "Advanced Multi-Agent Systems", "Zero-Knowledge Proofs"];

export function About() {
    return (
        <section id="about" className="px-5 sm:px-8 md:px-16 lg:px-24 py-16 sm:py-20 max-w-4xl">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-sm font-semibold text-foreground uppercase tracking-widest mb-10">
                    About
                </h2>

                <div className="space-y-4 text-base leading-relaxed text-foreground/80">
                    <p>
                        I am a Computer Science student at{" "}
                        <span className="text-foreground font-medium">Vellore Institute of Technology, Chennai</span> (CGPA: 8.63),
                        specialising in Agentic AI systems, confidential blockchain protocols, full-stack engineering, and cloud infrastructure.
                    </p>
                    <p>
                        My work spans building autonomous multi-agent intelligence platforms with <span className="text-foreground font-medium">LangGraph & FinBERT</span>,
                        confidential governance smart contracts on <span className="text-foreground font-medium">Ethereum & Base Sepolia</span> using Inco TEE,
                        and event-driven serverless facial recognition systems using the <span className="text-foreground font-medium">AWS Cloud</span> ecosystem.
                    </p>
                    <p>
                        Beyond engineering, I serve as a <span className="text-foreground font-medium">Student Council Member</span> at VIT Chennai managing student affairs
                        and university policy, and I have solved <span className="text-foreground font-medium">500+ problems on LeetCode</span> across Data Structures & Algorithms.
                    </p>
                </div>

                {/* Currently Learning */}
                <div className="mt-10 pt-8 border-t border-border">
                    <div className="flex items-center gap-2 mb-4">
                        <BookOpen className="w-4 h-4 text-muted-foreground" />
                        <span className="text-xs text-muted-foreground uppercase tracking-widest">
                            Currently Learning
                        </span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {currentlyLearning.map((item) => (
                            <span
                                key={item}
                                className="px-3 py-1.5 text-sm border border-dashed border-border rounded-full text-muted-foreground"
                            >
                                {item}
                            </span>
                        ))}
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
