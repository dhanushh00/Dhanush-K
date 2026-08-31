"use client";

import { motion } from "framer-motion";

const work = [
    {
        role: "Student Council Member",
        org: "VIT Chennai",
        period: "2025 – Present",
        icon: "SC",
        bullets: [
            "Connected students, parents, faculty, and administrators to address student concerns.",
            "Contributed to university policy development related to student welfare, code of behaviour, and extracurricular activities.",
            "Coordinated with the Students’ Welfare Office to organise cultural, technical, and sports-related campus activities.",
        ],
    },
    {
        role: "Active Member",
        org: "Artificial Intelligence Club, VIT Chennai",
        period: "2024 – 2025",
        icon: "AI",
        bullets: [
            "Conducted AI workshops, technical sessions, and hackathons to promote practical learning.",
            "Collaborated with club members on AI projects, technical discussions, and events.",
        ],
    },
];

const education = [
    {
        degree: "B.Tech in Computer Science and Engineering",
        institution: "Vellore Institute of Technology, Chennai",
        period: "Aug 2023 – Jul 2027",
        detail: "CGPA: 8.63",
    },
    {
        degree: "Class XII",
        institution: "Government Higher Secondary School",
        period: "2021 – 2023",
        detail: "92.5%",
    },
];

const certifications = [
    "Introduction to Generative AI – IBM",
    "Foundation of Quantum Technologies – IBM",
    "Solved 500+ problems on LeetCode, demonstrating strong problem-solving and Data Structures & Algorithms skills.",
];

function Label({ children }: { children: React.ReactNode }) {
    return (
        <p className="text-xs text-muted-foreground uppercase tracking-widest mb-5">
            {children}
        </p>
    );
}

export function Experience() {
    return (
        <section id="experience" className="px-5 sm:px-8 md:px-16 lg:px-24 pt-16 sm:pt-20 pb-10 max-w-4xl space-y-14">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-sm font-semibold text-foreground uppercase tracking-widest mb-12">
                    Experience & Education
                </h2>

                {/* Work */}
                <div className="mb-12">
                    <Label>Experience</Label>
                    {work.map((item, i) => (
                        <div key={i} className="flex gap-5 mb-8">
                            <div className="shrink-0 mt-1 w-10 h-10 rounded-full border border-border bg-accent flex items-center justify-center text-sm font-semibold text-muted-foreground">
                                {item.icon}
                            </div>
                            <div className="flex-1 pb-4">
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                                    <span className="text-lg font-bold text-foreground">{item.role}</span>
                                    <span className="text-sm text-muted-foreground shrink-0">{item.period}</span>
                                </div>
                                <p className="text-base text-muted-foreground mb-4">{item.org}</p>
                                <ul className="flex flex-col gap-2">
                                    {item.bullets.map((b, j) => (
                                        <li key={j} className="text-sm text-muted-foreground flex items-start gap-3">
                                            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-border shrink-0" />
                                            {b}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Education */}
                <div className="mb-12">
                    <Label>Education</Label>
                    {education.map((item, i) => (
                        <div key={i} className="flex gap-5">
                            <div className="shrink-0 mt-1 w-10 h-10 rounded-full border border-border bg-accent flex items-center justify-center text-sm font-semibold text-muted-foreground">
                                VIT
                            </div>
                            <div className="flex-1">
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                                    <span className="text-lg font-bold text-foreground">{item.degree}</span>
                                    <span className="text-sm text-muted-foreground shrink-0">{item.period}</span>
                                </div>
                                <p className="text-base text-muted-foreground">{item.institution}</p>
                                <p className="text-sm text-muted-foreground mt-1">{item.detail}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Certifications & Achievements */}
                <div>
                    <Label>Certificates & Achievements</Label>
                    <ul className="flex flex-col gap-2.5">
                        {certifications.map((cert, i) => (
                            <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                                <span className="mt-2 w-1 h-1 rounded-full bg-border shrink-0" />
                                {cert}
                            </li>
                        ))}
                    </ul>
                </div>
            </motion.div>
        </section>
    );
}
