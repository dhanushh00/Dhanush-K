"use client";

import { motion } from "framer-motion";
import { Mail, Download, Phone, MapPin } from "lucide-react";

const contacts = [
    {
        label: "Email",
        value: "dhanushkg23@gmail.com",
        href: "mailto:dhanushkg23@gmail.com",
        icon: <Mail className="w-5 h-5" />,
    },
    {
        label: "Phone",
        value: "+91 9944516689",
        href: "tel:+919944516689",
        icon: <Phone className="w-5 h-5" />,
    },
    {
        label: "Location",
        value: "Kanchipuram, India",
        href: "https://maps.google.com/?q=Kanchipuram,India",
        icon: <MapPin className="w-5 h-5" />,
    },
    {
        label: "LinkedIn",
        value: "dhanush-k-127099310",
        href: "https://www.linkedin.com/in/dhanush-k-127099310/",
        icon: (
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
        ),
    },
    {
        label: "GitHub",
        value: "dhanushh00",
        href: "https://github.com/dhanushh00",
        icon: (
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
        ),
    },
    {
        label: "LeetCode",
        value: "DHANUSH–07 (500+ Solved)",
        href: "https://leetcode.com/u/DHANUSH-07",
        icon: (
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.26 5.26 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.246 2.152 5.652 2.164 7.91.034l3.704-3.527a1.378 1.378 0 0 0 .023-1.95 1.378 1.378 0 0 0-1.95-.024l-3.705 3.528a2.911 2.911 0 0 1-4.088-.016l-4.246-4.164a3.15 3.15 0 0 1-.685-1.002 3.06 3.06 0 0 1-.166-.622 3.014 3.014 0 0 1-.03-.893 2.986 2.986 0 0 1 .664-1.189l3.864-4.137 5.385-5.766a1.378 1.378 0 0 0-.986-2.355zm-2.823 8.372a1.38 1.38 0 0 0-1.378 1.378v4.966c0 .762.616 1.378 1.378 1.378h7.94a1.38 1.38 0 0 0 1.378-1.378 1.38 1.38 0 0 0-1.378-1.378h-6.562v-3.588a1.38 1.38 0 0 0-1.378-1.378z"/>
            </svg>
        ),
    },
    {
        label: "X (Twitter)",
        value: "DhanushK1271650",
        href: "https://x.com/DhanushK1271650",
        icon: (
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 22.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
        ),
    },
];

export function Contact() {
    return (
        <section id="contact" className="px-5 sm:px-8 md:px-16 lg:px-24 py-16 sm:py-20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-sm font-semibold text-foreground uppercase tracking-widest mb-12">
                    Contact
                </h2>

                {/* 2-column layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

                    {/* Left: Text + CTA */}
                    <div className="flex flex-col gap-8">
                        <div className="space-y-3">
                            <p className="text-2xl font-semibold text-foreground leading-snug">
                                Building systems that solve real problems.
                            </p>
                            <p className="text-base text-muted-foreground leading-relaxed">
                                Open to projects, collaborations, and opportunities.
                            </p>
                        </div>

                        <a
                            href="/resume.pdf"
                            target="_blank"
                            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-border text-sm font-medium hover:bg-foreground hover:text-background transition-colors w-fit"
                        >
                            <Download className="w-4 h-4" />
                            Download Resume
                        </a>
                    </div>

                    {/* Right: 2-column grid of contact cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {contacts.map((item, i) => (
                            <motion.a
                                key={item.label}
                                href={item.href}
                                target={item.href.startsWith("mailto") ? undefined : "_blank"}
                                rel={item.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: i * 0.06 }}
                                className="group flex items-center gap-4 px-5 py-4 rounded-2xl border border-border bg-card hover:border-foreground/25 hover:bg-accent/50 transition-all duration-200"
                            >
                                {/* Icon */}
                                <div className="shrink-0 text-muted-foreground group-hover:text-foreground transition-colors">
                                    {item.icon}
                                </div>

                                {/* Label + Value */}
                                <div className="min-w-0 flex flex-col gap-0.5">
                                    <span className="text-xs text-muted-foreground uppercase tracking-widest font-medium">
                                        {item.label}
                                    </span>
                                    <span className="text-sm text-foreground truncate">
                                        {item.value}
                                    </span>
                                </div>
                            </motion.a>
                        ))}
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
