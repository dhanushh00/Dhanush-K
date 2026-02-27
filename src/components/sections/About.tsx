"use client";

import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";

const currentlyLearning = ["LangChain", "PyTorch", "Advanced Generative AI"];

export function About() {
    return (
        <section id="about" className="px-8 md:px-16 lg:px-24 py-20 max-w-4xl">
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
                        I am a pre-final year Computer Science student at{" "}
                        <span className="text-foreground font-medium">VIT, Chennai</span>,
                        with a strong interest in Artificial Intelligence and full-stack
                        development. I enjoy building real-world applications that combine
                        machine learning with practical user interfaces.
                    </p>
                    <p>
                        My work focuses on solving meaningful problems — from{" "}
                        <span className="text-foreground font-medium">
                            legal sentiment analysis
                        </span>{" "}
                        using Generative AI to{" "}
                        <span className="text-foreground font-medium">
                            assistive navigation systems
                        </span>{" "}
                        for visually impaired users.
                    </p>
                    <p>
                        I am currently exploring{" "}
                        <span className="text-foreground font-medium">
                            Generative AI, system design,
                        </span>{" "}
                        and scalable application development — with a focus on shipping
                        things that actually work.
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
