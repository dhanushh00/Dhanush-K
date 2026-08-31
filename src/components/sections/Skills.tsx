"use client";

import { motion } from "framer-motion";

type SkillGroup = {
    label: string;
    skills: string[];
};

const skillGroups: SkillGroup[] = [
    {
        label: "Languages",
        skills: ["Python", "Java", "Solidity", "SQL", "JavaScript", "TypeScript"],
    },
    {
        label: "Cloud (AWS)",
        skills: ["AWS EC2", "AWS Lambda", "Amazon S3", "AWS DynamoDB", "AWS RDS", "AWS Rekognition"],
    },
    {
        label: "AI & Agents",
        skills: ["Multi-Agent Systems", "LangGraph", "FinBERT", "Gemini API", "Generative AI", "PyTorch", "pandas-ta"],
    },
    {
        label: "Blockchain",
        skills: ["Smart Contracts", "Solidity", "Inco TEE", "ERC-4626", "Base Sepolia", "Ethereum", "Web3.js"],
    },
    {
        label: "Databases",
        skills: ["MongoDB", "PostgreSQL", "OracleSQL"],
    },
    {
        label: "Web & Backend",
        skills: ["React", "Next.js", "Node.js", "FastAPI", "REST APIs", "Tailwind CSS"],
    },
    {
        label: "Tools",
        skills: ["Git", "GitHub", "VS Code", "Postman", "Foundry"],
    },
    {
        label: "Soft Skills",
        skills: ["Problem-Solving", "Teamwork", "Leadership", "Communication", "Time Management"],
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
                className="max-w-3xl"
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
