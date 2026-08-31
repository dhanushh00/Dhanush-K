"use client";

import { motion } from "framer-motion";

export function RightBackgroundGlow() {
    return (
        <div className="fixed top-0 right-0 w-full h-full overflow-hidden pointer-events-none z-0">
            {/* Top-right */}
            <motion.div
                animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.65, 0.9, 0.65],
                    x: [0, -30, 0],
                    y: [0, 40, 0],
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-[10%] -right-[10%] w-[50vw] h-[50vw] max-w-[650px] max-h-[650px] rounded-full bg-foreground/12 blur-[100px] md:blur-[120px]"
            />
            {/* Mid-right */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.6, 0.85, 0.6],
                    x: [0, 40, 0],
                    y: [0, -40, 0],
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute top-[40%] -right-[5%] w-[50vw] h-[50vw] max-w-[700px] max-h-[700px] rounded-full bg-foreground/12 blur-[120px] md:blur-[150px]"
            />
            {/* Bottom-right */}
            <motion.div
                animate={{
                    scale: [1, 1.15, 1],
                    opacity: [0.65, 0.9, 0.65],
                    x: [0, -20, 0],
                    y: [0, -30, 0],
                }}
                transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 5 }}
                className="absolute -bottom-[10%] -right-[10%] w-[55vw] h-[55vw] max-w-[750px] max-h-[750px] rounded-full bg-foreground/14 blur-[100px] md:blur-[120px]"
            />
            {/* Top-left */}
            <motion.div
                animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.55, 0.8, 0.55],
                    x: [0, 20, 0],
                    y: [0, 30, 0],
                }}
                transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 3 }}
                className="absolute -top-[5%] left-[5%] w-[50vw] h-[50vw] max-w-[650px] max-h-[650px] rounded-full bg-foreground/10 blur-[120px] md:blur-[140px]"
            />
            {/* Bottom-left */}
            <motion.div
                animate={{
                    scale: [1, 1.12, 1],
                    opacity: [0.55, 0.8, 0.55],
                    x: [0, -15, 0],
                    y: [0, 20, 0],
                }}
                transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 7 }}
                className="absolute -bottom-[5%] left-[5%] w-[50vw] h-[50vw] max-w-[650px] max-h-[650px] rounded-full bg-foreground/12 blur-[110px] md:blur-[130px]"
            />
        </div>
    );
}
