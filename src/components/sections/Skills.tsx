"use client";

import { motion } from "framer-motion";

type SkillGroup = {
    label: string;
    skills: string[];
};

const skillGroups: SkillGroup[] = [
    {
        label: "Languages",
        skills: ["Python", "C", "C++", "Java", "JavaScript", "Go", "Solidity", "SQL"],
    },
    {
        label: "Blockchain",
        skills: ["Ethereum", "Smart Contracts", "Web3.js", "Ethers.js", "Hardhat", "Foundry", "ERC-20 / ERC-721"],
    },
    {
        label: "Web",
        skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Express.js", "Tailwind CSS"],
    },
    {
        label: "Databases",
        skills: ["MongoDB", "PostgreSQL", "OracleSQL", "Prisma", "Redis", "Firebase"],
    },
    {
        label: "AI / ML",
        skills: ["Machine Learning", "NLP", "Transformers", "Hugging Face", "Generative AI", "Pandas", "NumPy", "Matplotlib", "Scikit-learn", "TensorFlow", "PyTorch"],
    },
    {
        label: "Tools",
        skills: ["Git", "GitHub", "Docker", "Postman", "AWS", "Azure", "Streamlit", "Drizzle ORM"],
    },
    {
        label: "Backend",
        skills: ["REST APIs", "GraphQL"],
    },
];

export function Skills() {
    return (
        <section id="skills" className="px-5 sm:px-8 md:px-16 lg:px-24 pt-10 sm:pt-12 pb-16 sm:pb-20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="max-w-3xl mx-auto"
            >
                <h2 className="text-sm font-semibold text-foreground uppercase tracking-widest mb-6">
                    Skills
                </h2>

                <div className="flex flex-col border-t border-border/40">
                    {skillGroups.map((group, i) => (
                        <motion.div
                            key={group.label}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: i * 0.05 }}
                            className="grid grid-cols-1 sm:grid-cols-[140px_1fr] gap-x-8 gap-y-3 py-6 sm:py-7 border-b border-border/40 items-start"
                        >
                            {/* Label — subtle and tracking-widest */}
                            <span className="text-[10px] text-muted-foreground/50 uppercase tracking-[0.25em] pt-0 sm:pt-2 shrink-0">
                                {group.label}
                            </span>

                            {/* Skills chips */}
                            <div className="flex flex-wrap gap-2.5">
                                {group.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1.5 text-sm rounded-full transition-all duration-300 cursor-default border border-border text-foreground/70 hover:border-foreground/40 hover:text-foreground"
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
