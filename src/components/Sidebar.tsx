"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Home, User, Briefcase, Mail, Code2, Layers, Menu, X, Moon, Sun, FileText } from "lucide-react";
import { useTheme } from "next-themes";

const navItems = [
    { label: "Home", href: "#home", icon: Home },
    { label: "About", href: "#about", icon: User },
    { label: "Projects", href: "#projects", icon: Briefcase },
    { label: "Skills", href: "#skills", icon: Code2 },
    { label: "Experience", href: "#experience", icon: Layers },
    { label: "Contact", href: "#contact", icon: Mail },
];

const SOCIAL = {
    github: "https://github.com/dhanushh00",
    linkedin: "https://www.linkedin.com/in/dhanush-k-127099310/",
    x: "https://x.com/DhanushK1271650",
};
const RESUME_PATH = "/resume.pdf";

function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    return (
        <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="w-8 h-8 flex items-center justify-center rounded-md text-muted-foreground hover:text-foreground hover:bg-accent transition-colors relative -mr-2"
            aria-label="Toggle theme"
        >
            <Sun className="absolute h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        </button>
    );
}

export function Sidebar() {
    const [open, setOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { rootMargin: "-40% 0px -40% 0px" }
        );

        navItems.forEach(({ href }) => {
            const id = href.replace("#", "");
            const element = document.getElementById(id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, []);

    const content = (
        <div className="flex flex-col h-full py-8 px-6 gap-6">
            {/* Identity */}
            <div>
                <div className="w-14 h-14 rounded-full bg-accent border border-border mb-4 flex items-center justify-center text-lg font-bold text-foreground select-none">
                    DK
                </div>
                <h1 className="text-sm font-semibold leading-tight">Dhanush K</h1>
                <p className="text-xs text-muted-foreground mt-0.5">AI/ML Dev · Full Stack</p>
            </div>

            {/* Nav */}
            <nav className="flex flex-col gap-0.5">
                {navItems.map(({ label, href, icon: Icon }) => {
                    const isActive = activeSection === href.replace("#", "");
                    return (
                        <a
                            key={label}
                            href={href}
                            onClick={() => setOpen(false)}
                            className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors ${isActive
                                ? "bg-foreground text-background font-medium"
                                : "text-muted-foreground hover:text-foreground hover:bg-accent"
                                }`}
                        >
                            <Icon className="w-4 h-4 shrink-0" />
                            {label}
                        </a>
                    );
                })}
            </nav>

            <div className="flex-1" />

            {/* Social + theme */}
            <div className="flex flex-col gap-5 pt-4 border-t border-border">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 -ml-2">
                        <Link href={SOCIAL.github} target="_blank" rel="noopener noreferrer"
                            className="w-8 h-8 flex items-center justify-center rounded-md text-muted-foreground hover:text-foreground hover:bg-accent transition-colors" aria-label="GitHub">
                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                            </svg>
                        </Link>
                        <Link href={SOCIAL.linkedin} target="_blank" rel="noopener noreferrer"
                            className="w-8 h-8 flex items-center justify-center rounded-md text-muted-foreground hover:text-foreground hover:bg-accent transition-colors" aria-label="LinkedIn">
                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
                        </Link>
                        <Link href={SOCIAL.x} target="_blank" rel="noopener noreferrer"
                            className="w-8 h-8 flex items-center justify-center rounded-md text-muted-foreground hover:text-foreground hover:bg-accent transition-colors" aria-label="X (Twitter)">
                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 22.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                            </svg>
                        </Link>
                    </div>
                    <ThemeToggle />
                </div>

                <div className="flex flex-col gap-2">
                    <Link href={RESUME_PATH} target="_blank"
                        className="flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors">
                        <FileText className="w-3.5 h-3.5" />
                        Download Resume
                    </Link>
                    <a href={`mailto:dhanushkg23@gmail.com`} className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                        dhanushkg23@gmail.com
                    </a>
                </div>
            </div>
        </div>
    );

    return (
        <>
            {/* Desktop Sidebar */}
            <aside className="hidden md:flex flex-col fixed left-0 top-0 h-screen w-60 border-r border-border bg-background z-40">
                {content}
            </aside>

            {/* Mobile top bar */}
            <div className="md:hidden flex items-center justify-between px-4 py-3 border-b border-border bg-background sticky top-0 z-40">
                <span className="font-semibold text-sm">Dhanush K</span>
                <div className="flex items-center gap-1">
                    <ThemeToggle />
                    <button onClick={() => setOpen(!open)}
                        className="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent transition-colors">
                        {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </button>
                </div>
            </div>

            {/* Mobile drawer */}
            {open && (
                <div className="md:hidden fixed inset-0 z-30 pt-14">
                    <div className="absolute inset-0 bg-black/50" onClick={() => setOpen(false)} />
                    <aside className="relative w-60 h-full bg-background border-r border-border z-40">
                        {content}
                    </aside>
                </div>
            )}
        </>
    );
}
