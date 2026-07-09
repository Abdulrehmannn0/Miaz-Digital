/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef, useState } from 'react';

export default function InteractiveFX() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const cursorDotRef = useRef<HTMLDivElement | null>(null);
  const cursorRingRef = useRef<HTMLDivElement | null>(null);
  
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isClicking, setIsClicking] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  
  const mouseRef = useRef({ x: -1000, y: -1000, targetX: -1000, targetY: -1000 });
  const particlesRef = useRef<Array<{
    x: number;
    y: number;
    vx: number;
    vy: number;
    radius: number;
  }>>([]);

  useEffect(() => {
    // 1. PARTICLES SPIDER WEB CANVAS LOGIC
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const initParticles = () => {
      const particleCount = Math.min(80, Math.floor((width * height) / 18000));
      const particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.6,
          vy: (Math.random() - 0.5) * 0.6,
          radius: Math.random() * 1.5 + 1,
        });
      }
      particlesRef.current = particles;
    };

    initParticles();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initParticles();
    };

    window.addEventListener('resize', handleResize);

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      const particles = particlesRef.current;
      const mouse = mouseRef.current;

      // Draw and update particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        // Bounce off screen boundaries
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Boundary safety clamps
        p.x = Math.max(0, Math.min(width, p.x));
        p.y = Math.max(0, Math.min(height, p.y));

        // Interaction with mouse: pull particles slightly
        if (mouse.x > 0 && mouse.x < width && mouse.y > 0 && mouse.y < height) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 180) {
            // Very soft pull force
            const force = (180 - dist) / 180;
            p.x += (dx / dist) * force * 0.5;
            p.y += (dy / dist) * force * 0.5;
          }
        }

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        // Slate color in light theme, blue-ish in dark
        const isDark = document.documentElement.classList.contains('dark');
        ctx.fillStyle = isDark ? 'rgba(59, 130, 246, 0.3)' : 'rgba(37, 99, 235, 0.25)';
        ctx.fill();
      });

      // Draw connection lines (Spider web effect)
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            const isDark = document.documentElement.classList.contains('dark');
            const alpha = (120 - dist) / 120 * (isDark ? 0.08 : 0.06);
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = isDark ? `rgba(147, 197, 253, ${alpha})` : `rgba(37, 99, 235, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }

        // Also connect to mouse
        if (mouse.x > 0 && mouse.x < width && mouse.y > 0 && mouse.y < height) {
          const dx = p1.x - mouse.x;
          const dy = p1.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150) {
            const isDark = document.documentElement.classList.contains('dark');
            const alpha = (150 - dist) / 150 * (isDark ? 0.15 : 0.1);
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = isDark ? `rgba(59, 130, 246, ${alpha})` : `rgba(37, 99, 235, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  useEffect(() => {
    // 2. PREMIUM CUSTOM MOUSE CURSOR & MAGNETIC EFFECT DELEGATION
    let ringX = 0;
    let ringY = 0;
    let currentX = 0;
    let currentY = 0;
    let activeMagneticElement: HTMLElement | null = null;

    const handleMouseMove = (e: MouseEvent) => {
      // Show cursor elements once mouse moves
      if (!isVisible) setIsVisible(true);

      currentX = e.clientX;
      currentY = e.clientY;

      mouseRef.current.x = currentX;
      mouseRef.current.y = currentY;

      // Instantly position the central solid dot
      if (cursorDotRef.current) {
        cursorDotRef.current.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
      }

      // Magnetic hover logic
      if (activeMagneticElement) {
        const rect = activeMagneticElement.getBoundingClientRect();
        // Distance from cursor to center of element
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const dx = currentX - centerX;
        const dy = currentY - centerY;

        // Apply a translation to the hovered element
        // Maximum offset of 14px to keep it elegant and readable
        const power = 0.2; 
        const magX = dx * power;
        const magY = dy * power;

        activeMagneticElement.style.transform = `translate3d(${magX}px, ${magY}px, 0)`;
        
        // Slightly snap cursor ring to center of element for high-end feel
        mouseRef.current.targetX = centerX + dx * 0.35;
        mouseRef.current.targetY = centerY + dy * 0.35;
      } else {
        mouseRef.current.targetX = currentX;
        mouseRef.current.targetY = currentY;
      }
    };

    const handleMouseLeaveWindow = () => {
      setIsVisible(false);
    };

    const handleMouseEnterWindow = () => {
      setIsVisible(true);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    // Dynamic delegation for hover changes and magnetic targets
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      // Find closest interactable or explicitly marked elements
      const hoverable = target.closest('a, button, [role="button"], input, select, textarea, .hover-magnetic, .group, img, .bento-card');
      if (hoverable) {
        setIsHovered(true);

        // Check if this should have magnetic transition effect
        // All buttons, links, images, cards, and explicitly marked elements can have magnetic pull!
        const isMagnetic = hoverable.matches('button, a, img, .hover-magnetic, .magnetic-btn, [role="button"]');
        if (isMagnetic) {
          activeMagneticElement = hoverable as HTMLElement;
          activeMagneticElement.style.transition = 'none'; // Disable transition during drag pull
        }
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      const hoverable = target.closest('a, button, [role="button"], input, select, textarea, .hover-magnetic, .group, img, .bento-card');
      if (hoverable) {
        setIsHovered(false);
      }

      if (activeMagneticElement && (target === activeMagneticElement || !activeMagneticElement.contains(target))) {
        // Reset transform smoothly
        activeMagneticElement.style.transition = 'transform 0.4s cubic-bezier(0.25, 1, 0.5, 1)';
        activeMagneticElement.style.transform = 'translate3d(0, 0, 0)';
        activeMagneticElement = null;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);
    document.addEventListener('mouseleave', handleMouseLeaveWindow);
    document.addEventListener('mouseenter', handleMouseEnterWindow);

    // Custom loop to animate outer cursor ring with smooth easing (spring-like lerp)
    let active = true;
    const updateRing = () => {
      if (!active) return;

      const targetX = mouseRef.current.targetX;
      const targetY = mouseRef.current.targetY;

      // Linear interpolation factor (0.15 for smooth drag latency)
      const ease = 0.15;
      ringX += (targetX - ringX) * ease;
      ringY += (targetY - ringY) * ease;

      if (cursorRingRef.current) {
        cursorRingRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      }

      requestAnimationFrame(updateRing);
    };

    updateRing();

    // Inject cursor styles to hide standard cursor on desktop devices with fine hover pointer
    const styleTag = document.createElement('style');
    styleTag.innerHTML = `
      @media (hover: hover) and (pointer: fine) {
        html, body, a, button, select, input, textarea, [role="button"] {
          cursor: none !important;
        }
      }
    `;
    document.head.appendChild(styleTag);

    return () => {
      active = false;
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
      document.removeEventListener('mouseleave', handleMouseLeaveWindow);
      document.removeEventListener('mouseenter', handleMouseEnterWindow);
      document.head.removeChild(styleTag);
    };
  }, [isVisible]);

  return (
    <>
      {/* Spider Web Background Canvas */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none z-0"
        style={{ mixBlendMode: 'normal' }}
      />

      {/* Custom Mouse Cursor Dots (Hidden on touch devices, show on hoverable desktops) */}
      <div className={`hidden md:block fixed inset-0 pointer-events-none z-[9999] transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        
        {/* Core Dot */}
        <div
          ref={cursorDotRef}
          className="fixed w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400 pointer-events-none -left-1 -top-1 transition-all duration-75 mix-blend-difference"
        />

        {/* Outer Ring */}
        <div
          ref={cursorRingRef}
          className={`fixed rounded-full border pointer-events-none transition-all duration-300 ease-out -left-4 -top-4 ${
            isClicking 
              ? 'w-10 h-10 border-blue-700 bg-blue-600/20' 
              : isHovered 
                ? 'w-12 h-12 border-blue-500 bg-blue-500/10' 
                : 'w-8 h-8 border-blue-600/30 bg-transparent'
          }`}
        />
      </div>
    </>
  );
}
