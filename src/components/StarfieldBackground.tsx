"use client";

import { useEffect, useRef } from "react";

interface Star {
    x: number;
    y: number;
    radius: number;
    opacity: number;
    twinkleSpeed: number;
    phase: number;
    driftSpeed: number; // for parallax depending on radius
}

interface ShootingStar {
    x: number;
    y: number;
    length: number;
    speed: number;
    angle: number;
    opacity: number;
    thickness: number;
}

export function StarfieldBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animFrameId: number;
        let stars: Star[] = [];
        const shootingStars: ShootingStar[] = [];

        const NUM_STARS = 600;

        function resize() {
            if (!canvas) return;
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }

        function createStars() {
            if (!canvas) return;
            stars = Array.from({ length: NUM_STARS }, () => {
                const radius = Math.random() * 0.8 + 0.2; // 0.2 to 1.0 (much smaller)
                return {
                    x: Math.random() * canvas!.width,
                    y: Math.random() * canvas!.height,
                    radius,
                    opacity: Math.random() * 0.25 + 0.05, // much fainter base opacity
                    twinkleSpeed: Math.random() * 0.01 + 0.005, // very slow twinkle
                    phase: Math.random() * Math.PI * 2,
                    driftSpeed: radius * 0.02, // much slower drift
                };
            });
        }

        function spawnShootingStar() {
            if (!canvas) return;
            shootingStars.push({
                x: Math.random() * canvas.width,
                y: Math.random() * (canvas.height / 3), // spawn in top third
                length: Math.random() * 200 + 100,
                speed: Math.random() * 20 + 15,
                angle: (Math.PI / 4) + (Math.random() * 0.1 - 0.05), // roughly 45 degrees
                opacity: Math.random() * 0.3 + 0.1, // less bright
                thickness: Math.random() * 0.5 + 0.1, // very thin
            });
        }

        function draw(time: number) {
            if (!canvas || !ctx) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw regular stars with drift
            for (const star of stars) {
                // Parallax drift (moving up and left slightly)
                star.x -= star.driftSpeed;
                star.y -= star.driftSpeed * 0.5;

                // Wrap around
                if (star.x < 0) star.x = canvas.width;
                if (star.y < 0) star.y = canvas.height;

                // Twinkle
                const twinkle = Math.max(
                    0,
                    star.opacity + Math.sin(time * star.twinkleSpeed + star.phase) * 0.15
                );

                ctx.beginPath();
                ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 255, 255, ${twinkle})`;
                ctx.fill();
            }

            // Randomly spawn shooting stars
            if (Math.random() < 0.002 && shootingStars.length === 0) {
                spawnShootingStar();
            }

            // Draw and update shooting stars
            for (let i = shootingStars.length - 1; i >= 0; i--) {
                const ss = shootingStars[i];

                ss.x += Math.cos(ss.angle) * ss.speed;
                ss.y += Math.sin(ss.angle) * ss.speed;
                ss.opacity -= 0.008; // fade out speed

                if (ss.opacity <= 0 || ss.x > canvas.width || ss.y > canvas.height) {
                    shootingStars.splice(i, 1);
                    continue;
                }

                const tailX = ss.x - Math.cos(ss.angle) * ss.length;
                const tailY = ss.y - Math.sin(ss.angle) * ss.length;

                const gradient = ctx.createLinearGradient(ss.x, ss.y, tailX, tailY);
                gradient.addColorStop(0, `rgba(255, 255, 255, ${ss.opacity})`);
                gradient.addColorStop(1, `rgba(255, 255, 255, 0)`);

                ctx.beginPath();
                ctx.moveTo(ss.x, ss.y);
                ctx.lineTo(tailX, tailY);
                ctx.strokeStyle = gradient;
                ctx.lineWidth = ss.thickness;
                ctx.stroke();
            }

            animFrameId = requestAnimationFrame(draw);
        }

        resize();
        createStars();
        animFrameId = requestAnimationFrame(draw);

        const handleResize = () => {
            resize();
            createStars();
        };
        window.addEventListener("resize", handleResize);

        return () => {
            cancelAnimationFrame(animFrameId);
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 w-full h-full pointer-events-none z-0 opacity-0 dark:opacity-100 transition-opacity duration-500"
            aria-hidden="true"
        />
    );
}
