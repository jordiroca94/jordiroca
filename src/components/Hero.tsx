import { useEffect, useRef, useState } from "react";
import ProfileImage from "../assets/images/profile.jpeg";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Socials from "./Socials";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mounted, setMounted] = useState(false);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!canvasRef.current || !mounted) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;

      constructor(x?: number, y?: number) {
        this.x = x ?? Math.random() * canvas.width;
        this.y = y ?? Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
        this.color = "rgba(0, 0, 0, 0.5)";
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width) this.x = 0;
        else if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        else if (this.y < 0) this.y = canvas.height;
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const particlesArray: Particle[] = [];

    const baseParticleCount = Math.min(
      100,
      Math.floor((canvas.width * canvas.height) / 10000)
    );

    for (let i = 0; i < baseParticleCount; i++) {
      particlesArray.push(new Particle());
    }

    const addParticlesAt = (x: number, y: number) => {
      for (let i = 0; i < 5; i++) {
        particlesArray.push(
          new Particle(x + Math.random() * 10 - 5, y + Math.random() * 10 - 5)
        );
      }
    };

    const handleClick = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      addParticlesAt(x, y);
    };

    function connectParticles() {
      const maxDistance = 150;

      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          const dx = particlesArray[a].x - particlesArray[b].x;
          const dy = particlesArray[a].y - particlesArray[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxDistance) {
            if (!ctx) return;

            const opacity = 1 - distance / maxDistance;
            ctx.strokeStyle = `rgba(0, 0, 0, ${opacity * 0.2})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
            ctx.stroke();
          }
        }
      }
    }

    function animate() {
      if (!ctx) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
      }

      connectParticles();
      requestAnimationFrame(animate);
    }

    animate();
    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("click", handleClick);
    };
  }, [mounted]);

  return (
    <div className="relative min-h-screen w-full overflow-hidden -mt-16">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 -z-10"
        aria-hidden="true"
      />

      <div className="relative z-10 flex min-h-screen items-center justify-center">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <div className="flex flex-col items-center md:flex-row md:items-start md:space-x-12">
              <div className="mb-8 md:mb-0">
                <div className="relative h-48 w-48 overflow-hidden rounded-full border-4 shadow-xl">
                  <img src={ProfileImage} alt="profile" />
                </div>
              </div>

              <div className="text-center md:text-left">
                <h1 className="mb-2 text-4xl font-bold tracking-tight">
                  Jordi Roca
                </h1>
                <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
                  {t("hero.subtitle")}
                </p>
                <div className="flex flex-wrap justify-center gap-4 md:justify-start">
                  <Link
                    to={`/${i18n.language}/${t("navigation.links.projects")}`}
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
                  >
                    {t("hero.button")}
                  </Link>
                  <Socials />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
