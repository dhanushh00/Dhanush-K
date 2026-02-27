"use client";

import { motion } from "framer-motion";

type SkillGroup = {
    label: string;
    skills: string[];
};

const skillGroups: SkillGroup[] = [
    {
        label: "Languages",
        skills: ["Python", "C", "C++", "Java"],
    },
    {
        label: "Web Development",
        skills: ["HTML", "CSS", "JavaScript", "React", "Next.js"],
    },
    {
        label: "AI / ML",
        skills: ["Machine Learning", "NLP", "Transformers", "Hugging Face", "Generative AI"],
    },
    {
        label: "Tools & Technologies",
        skills: ["Git", "GitHub", "Docker", "AWS", "Streamlit"],
    },
    {
        label: "Databases",
        skills: ["MongoDB", "MySQL"],
    },
    {
        label: "Other",
        skills: ["DevOps Basics", "API Development", "Cloud Deployment"],
    },
];

export function Skills() {
    return (
        <section id="skills" className="px-8 md:px-16 lg:px-24 py-20 max-w-4xl">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-sm font-semibold text-foreground uppercase tracking-widest mb-12">
                    Skills
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-10">
                    {skillGroups.map((group, i) => (
                        <motion.div
                            key={group.label}
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.35, delay: i * 0.06 }}
                        >
                            <p className="text-xs text-muted-foreground uppercase tracking-widest mb-3">
                                {group.label}
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {group.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1.5 text-sm border border-border rounded-full text-foreground/80 hover:bg-accent hover:text-foreground transition-colors cursor-default"
                                    >
                                        {skill}
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
