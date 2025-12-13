"use client";

import { useEffect, useRef } from "react";

export default function ParticleGrid() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationFrameId: number;
        let particles: Array<{
            x: number;
            y: number;
            baseX: number;
            baseY: number;
            size: number;
            alpha: number;
        }> = [];

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initParticles();
        };

        const initParticles = () => {
            particles = [];
            const spacing = 80;
            const cols = Math.ceil(canvas.width / spacing);
            const rows = Math.ceil(canvas.height / spacing);

            for (let i = 0; i < cols; i++) {
                for (let j = 0; j < rows; j++) {
                    particles.push({
                        x: i * spacing,
                        y: j * spacing,
                        baseX: i * spacing,
                        baseY: j * spacing,
                        size: Math.random() * 1.5 + 0.5,
                        alpha: Math.random() * 0.3 + 0.1,
                    });
                }
            }
        };

        let mouseX = 0;
        let mouseY = 0;

        const handleMouseMove = (e: MouseEvent) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach((particle) => {
                // Calculate distance from mouse
                const dx = mouseX - particle.x;
                const dy = mouseY - particle.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                const maxDistance = 150;

                if (distance < maxDistance) {
                    const force = (maxDistance - distance) / maxDistance;
                    particle.x = particle.baseX - dx * force * 0.1;
                    particle.y = particle.baseY - dy * force * 0.1;
                } else {
                    particle.x += (particle.baseX - particle.x) * 0.05;
                    particle.y += (particle.baseY - particle.y) * 0.05;
                }

                // Draw particle
                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(245, 158, 11, ${particle.alpha})`;
                ctx.fill();

                // Draw connections to nearby particles
                particles.forEach((other) => {
                    const dx2 = particle.x - other.x;
                    const dy2 = particle.y - other.y;
                    const dist = Math.sqrt(dx2 * dx2 + dy2 * dy2);

                    if (dist < 100 && dist > 0) {
                        ctx.beginPath();
                        ctx.moveTo(particle.x, particle.y);
                        ctx.lineTo(other.x, other.y);
                        ctx.strokeStyle = `rgba(245, 158, 11, ${0.05 * (1 - dist / 100)})`;
                        ctx.stroke();
                    }
                });
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        resize();
        window.addEventListener("resize", resize);
        window.addEventListener("mousemove", handleMouseMove);
        animate();

        return () => {
            window.removeEventListener("resize", resize);
            window.removeEventListener("mousemove", handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-0"
            style={{ opacity: 0.6 }}
        />
    );
}
