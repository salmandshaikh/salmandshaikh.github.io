import { useEffect, useRef } from 'react';
import './MLBackground.css';

const MLBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let particles = [];
        let nodes = [];
        let time = 0;

        // Set canvas size
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initNodes();
        };
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        // Particle class - more visible but still subtle
        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 2 + 0.5;
                this.speedX = (Math.random() - 0.5) * 0.5;
                this.speedY = (Math.random() - 0.5) * 0.5;
                this.opacity = Math.random() * 0.4 + 0.2;
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;

                if (this.x > canvas.width) this.x = 0;
                if (this.x < 0) this.x = canvas.width;
                if (this.y > canvas.height) this.y = 0;
                if (this.y < 0) this.y = canvas.height;
            }

            draw() {
                ctx.fillStyle = `rgba(59, 130, 246, ${this.opacity})`;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        // Node class for subtle grid
        class Node {
            constructor(x, y) {
                this.baseX = x;
                this.baseY = y;
                this.x = x;
                this.y = y;
                this.size = 2;
                this.offset = Math.random() * Math.PI * 2;
            }

            update(time) {
                // Gentle floating motion
                this.x = this.baseX + Math.sin(time * 0.001 + this.offset) * 10;
                this.y = this.baseY + Math.cos(time * 0.001 + this.offset) * 10;
            }

            draw() {
                ctx.fillStyle = 'rgba(59, 130, 246, 0.15)';
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        // Initialize nodes in a grid
        const initNodes = () => {
            nodes = [];
            const spacing = 120;
            for (let x = spacing; x < canvas.width; x += spacing) {
                for (let y = spacing; y < canvas.height; y += spacing) {
                    nodes.push(new Node(x, y));
                }
            }
        };

        // Initialize particles
        for (let i = 0; i < 60; i++) {
            particles.push(new Particle());
        }

        initNodes();

        // Draw connections between nearby nodes
        const drawConnections = () => {
            for (let i = 0; i < nodes.length; i++) {
                for (let j = i + 1; j < nodes.length; j++) {
                    const dx = nodes[i].x - nodes[j].x;
                    const dy = nodes[i].y - nodes[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 150) {
                        const opacity = 0.1 * (1 - distance / 150);
                        ctx.strokeStyle = `rgba(59, 130, 246, ${opacity})`;
                        ctx.lineWidth = 0.5;
                        ctx.beginPath();
                        ctx.moveTo(nodes[i].x, nodes[i].y);
                        ctx.lineTo(nodes[j].x, nodes[j].y);
                        ctx.stroke();
                    }
                }
            }
        };

        // Animation loop
        const animate = () => {
            time += 1;

            // Clear with solid background
            ctx.fillStyle = '#0d1117';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Draw subtle connections
            drawConnections();

            // Update and draw nodes
            nodes.forEach(node => {
                node.update(time);
                node.draw();
            });

            // Update and draw particles
            particles.forEach(particle => {
                particle.update();
                particle.draw();
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        // Cleanup
        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <div className="ml-background">
            <canvas ref={canvasRef} className="ml-canvas" />
            <div className="animated-gradient" />
            <div className="grid-overlay" />
        </div>
    );
};

export default MLBackground;
