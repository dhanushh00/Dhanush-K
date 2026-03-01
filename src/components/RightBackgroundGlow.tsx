"use client";

import { motion } from "framer-motion";

export function RightBackgroundGlow() {
    return (
        <div className="fixed top-0 right-0 w-full h-full overflow-hidden pointer-events-none z-0">
            <motion.div
                animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.4, 0.7, 0.4],
                    x: [0, -30, 0],
                    y: [0, 40, 0],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute -top-[10%] -right-[10%] w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] rounded-full bg-foreground/5 blur-[100px] md:blur-[120px]"
            />
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3],
                    x: [0, 40, 0],
                    y: [0, -40, 0],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2,
                }}
                className="absolute top-[40%] -right-[5%] w-[45vw] h-[45vw] max-w-[700px] max-h-[700px] rounded-full bg-foreground/5 blur-[120px] md:blur-[150px]"
            />
            <motion.div
                animate={{
                    scale: [1, 1.15, 1],
                    opacity: [0.3, 0.5, 0.3],
                    x: [0, -20, 0],
                    y: [0, -30, 0],
                }}
                transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 5,
                }}
                className="absolute -bottom-[10%] -right-[10%] w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] rounded-full bg-foreground/5 blur-[100px] md:blur-[120px]"
            />
        </div>
    );
}
