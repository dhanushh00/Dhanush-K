"use client";

import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";

const currentlyLearning = ["LangChain", "PyTorch", "Advanced Generative AI"];

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
                        I am a final-year Computer Science student at{" "}
                        <span className="text-foreground font-medium">VIT, Chennai</span>,
                        focused on building blockchain systems, full-stack applications, and
                        practical AI/ML projects. I enjoy shipping end-to-end products — from
                        smart contracts and backend services to polished UIs.
                    </p>
                    <p>
                        Recently, I’ve worked on decentralised lending protocols, multimodal
                        deepfake detection, and neuro-symbolic optimisation tools — combining
                        reasoning with data-driven models.
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
