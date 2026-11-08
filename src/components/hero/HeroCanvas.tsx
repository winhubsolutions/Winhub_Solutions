"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { Globe, Sparkles, Cpu, Waves } from "lucide-react";

export type HeroShapeType = "globe" | "neural" | "wave" | "knot";

interface HeroCanvasProps {
  currentShape?: HeroShapeType;
  onShapeChange?: (shape: HeroShapeType) => void;
  hideControls?: boolean;
}

export default function HeroCanvas({
  currentShape = "neural",
  onShapeChange,
  hideControls = false,
}: HeroCanvasProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeShape, setActiveShape] = useState<HeroShapeType>(currentShape);
  const shapeRef = useRef<HeroShapeType>(currentShape);

  // Sync internal state with prop
  useEffect(() => {
    setActiveShape(currentShape);
    shapeRef.current = currentShape;
  }, [currentShape]);

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;

    // ─── Scene, Camera, Renderer ───
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 7;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Root Group
    const rootGroup = new THREE.Group();
    // Shift slightly to the right on desktop so text on the left stays clear
    const updatePosition = () => {
      if (container.clientWidth > 1024) {
        rootGroup.position.set(1.8, 0, 0);
        rootGroup.scale.set(1.05, 1.05, 1.05);
      } else {
        rootGroup.position.set(0, 0, 0);
        rootGroup.scale.set(0.85, 0.85, 0.85);
      }
    };
    updatePosition();
    scene.add(rootGroup);

    // ─── 1. SHAPE: KNOT (Original Torus Knot) ───
    const knotGroup = new THREE.Group();
    const knotOuterGeo = new THREE.IcosahedronGeometry(2.3, 2);
    const knotOuterMat = new THREE.MeshBasicMaterial({
      color: 0x222222,
      wireframe: true,
      transparent: true,
      opacity: 0.16,
    });
    const knotOuter = new THREE.Mesh(knotOuterGeo, knotOuterMat);
    knotGroup.add(knotOuter);

    const knotInnerGeo = new THREE.TorusKnotGeometry(1.2, 0.22, 120, 16);
    const knotInnerMat = new THREE.MeshBasicMaterial({
      color: 0xff7120,
      wireframe: true,
      transparent: true,
      opacity: 0.85,
    });
    const knotInner = new THREE.Mesh(knotInnerGeo, knotInnerMat);
    knotGroup.add(knotInner);
    rootGroup.add(knotGroup);

    // ─── 2. SHAPE: GLOBE (Cybernetic Global Sphere) ───
    const globeGroup = new THREE.Group();
    const globeGeo = new THREE.SphereGeometry(1.9, 28, 20);
    const globeMat = new THREE.MeshBasicMaterial({
      color: 0xff7120,
      wireframe: true,
      transparent: true,
      opacity: 0.55,
    });
    const globeMesh = new THREE.Mesh(globeGeo, globeMat);
    globeGroup.add(globeMesh);

    // Latitude / Orbital Rings
    const ringGeo1 = new THREE.TorusGeometry(2.35, 0.018, 16, 90);
    const ringMat1 = new THREE.MeshBasicMaterial({
      color: 0xff7120,
      transparent: true,
      opacity: 0.9,
    });
    const ring1 = new THREE.Mesh(ringGeo1, ringMat1);
    ring1.rotation.x = Math.PI / 2.8;
    globeGroup.add(ring1);

    const ringGeo2 = new THREE.TorusGeometry(2.55, 0.012, 16, 90);
    const ringMat2 = new THREE.MeshBasicMaterial({
      color: 0x555555,
      transparent: true,
      opacity: 0.45,
    });
    const ring2 = new THREE.Mesh(ringGeo2, ringMat2);
    ring2.rotation.y = Math.PI / 3;
    globeGroup.add(ring2);

    // Glowing coordinate vertex nodes
    const globePointsMat = new THREE.PointsMaterial({
      size: 0.05,
      color: 0xffffff,
      transparent: true,
      opacity: 0.9,
    });
    const globePoints = new THREE.Points(globeGeo, globePointsMat);
    globeGroup.add(globePoints);
    rootGroup.add(globeGroup);

    // ─── 3. SHAPE: NEURAL (AI Geodesic Polyhedron) ───
    const neuralGroup = new THREE.Group();
    const neuralGeo1 = new THREE.IcosahedronGeometry(2.1, 1);
    const neuralMat1 = new THREE.MeshBasicMaterial({
      color: 0xff7120,
      wireframe: true,
      transparent: true,
      opacity: 0.75,
    });
    const neuralMesh1 = new THREE.Mesh(neuralGeo1, neuralMat1);
    neuralGroup.add(neuralMesh1);

    // Inner pulsating core
    const neuralGeo2 = new THREE.OctahedronGeometry(1.0, 0);
    const neuralMat2 = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      wireframe: true,
      transparent: true,
      opacity: 0.4,
    });
    const neuralMesh2 = new THREE.Mesh(neuralGeo2, neuralMat2);
    neuralGroup.add(neuralMesh2);

    // Vertex points
    const neuralPointsMat = new THREE.PointsMaterial({
      size: 0.07,
      color: 0xff7120,
      transparent: true,
      opacity: 0.95,
    });
    const neuralPoints = new THREE.Points(neuralGeo1, neuralPointsMat);
    neuralGroup.add(neuralPoints);
    rootGroup.add(neuralGroup);

    // ─── 4. SHAPE: WAVE (Quantum Cyber Terrain) ───
    const waveGroup = new THREE.Group();
    const waveGeo = new THREE.PlaneGeometry(5.5, 5.5, 26, 26);
    const waveMat = new THREE.MeshBasicMaterial({
      color: 0xff7120,
      wireframe: true,
      transparent: true,
      opacity: 0.65,
    });
    const waveMesh = new THREE.Mesh(waveGeo, waveMat);
    waveMesh.rotation.x = -Math.PI / 2.6;
    waveGroup.add(waveMesh);
    rootGroup.add(waveGroup);

    // Initial shape visibility locks (default: Neural)
    knotGroup.visible = shapeRef.current === "knot";
    globeGroup.visible = shapeRef.current === "globe";
    neuralGroup.visible = shapeRef.current === "neural";
    waveGroup.visible = shapeRef.current === "wave";

    // ─── Universal Floating Coordinate Particles ───
    const particleCount = 180;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const orangeColor = new THREE.Color(0xff7120);
    const darkColor = new THREE.Color(0x555555);

    for (let i = 0; i < particleCount; i++) {
      const idx = i * 3;
      positions[idx] = (Math.random() - 0.5) * 14;
      positions[idx + 1] = (Math.random() - 0.5) * 10;
      positions[idx + 2] = (Math.random() - 0.5) * 8;

      const c = Math.random() > 0.4 ? orangeColor : darkColor;
      colors[idx] = c.r;
      colors[idx + 1] = c.g;
      colors[idx + 2] = c.b;
    }

    particleGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    particleGeo.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.045,
      vertexColors: true,
      transparent: true,
      opacity: 0.7,
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // ─── Mouse Tracking Damping ───
    let targetX = 0;
    let targetY = 0;
    let mouseX = 0;
    let mouseY = 0;

    const onMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      targetX = x * 0.5;
      targetY = y * 0.35;
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });

    // Handle Window Resize
    const onResize = () => {
      if (!container) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      updatePosition();
    };

    window.addEventListener("resize", onResize);

    // ─── Animation Loop ───
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse follow
      mouseX += (targetX - mouseX) * 0.05;
      mouseY += (targetY - mouseY) * 0.05;

      rootGroup.rotation.y = elapsedTime * 0.1 + mouseX;
      rootGroup.rotation.x = elapsedTime * 0.06 + mouseY;

      const current = shapeRef.current;

      // Visibility toggles with smooth opacity/scale
      knotGroup.visible = current === "knot";
      globeGroup.visible = current === "globe";
      neuralGroup.visible = current === "neural";
      waveGroup.visible = current === "wave";

      // Animate Knot
      if (knotGroup.visible) {
        knotInner.rotation.z = elapsedTime * 0.2;
        knotInner.rotation.x = elapsedTime * 0.15;
      }

      // Animate Globe
      if (globeGroup.visible) {
        globeMesh.rotation.y = elapsedTime * 0.18;
        ring1.rotation.z = -elapsedTime * 0.3;
        ring2.rotation.z = elapsedTime * 0.22;
      }

      // Animate Neural
      if (neuralGroup.visible) {
        neuralMesh1.rotation.y = elapsedTime * 0.14;
        neuralMesh2.rotation.y = -elapsedTime * 0.25;
        const scale = 1 + Math.sin(elapsedTime * 2.5) * 0.06;
        neuralMesh2.scale.set(scale, scale, scale);
      }

      // Animate Wave Plane
      if (waveGroup.visible) {
        const posAttr = waveGeo.attributes.position;
        const vertex = new THREE.Vector3();
        for (let i = 0; i < posAttr.count; i++) {
          vertex.fromBufferAttribute(posAttr, i);
          const z =
            Math.sin(vertex.x * 1.5 + elapsedTime * 1.8) * 0.28 +
            Math.cos(vertex.y * 1.5 + elapsedTime * 1.4) * 0.28;
          posAttr.setZ(i, z);
        }
        posAttr.needsUpdate = true;
      }

      // Animate Particle Field
      particles.rotation.y = -elapsedTime * 0.025;
      particles.rotation.x = mouseX * 0.15;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      knotOuterGeo.dispose();
      knotOuterMat.dispose();
      knotInnerGeo.dispose();
      knotInnerMat.dispose();
      globeGeo.dispose();
      globeMat.dispose();
      ringGeo1.dispose();
      ringMat1.dispose();
      ringGeo2.dispose();
      ringMat2.dispose();
      neuralGeo1.dispose();
      neuralMat1.dispose();
      neuralGeo2.dispose();
      neuralMat2.dispose();
      waveGeo.dispose();
      waveMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
    };
  }, []);

  const handleShapeSelect = (shape: HeroShapeType) => {
    setActiveShape(shape);
    shapeRef.current = shape;
    if (onShapeChange) {
      onShapeChange(shape);
    }
  };

  return (
    <>
      <div
        ref={containerRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden"
        aria-hidden="true"
      />

      {/* Floating Interactive 3D Shape Switcher (Only if not controlled externally) */}
      {!hideControls && (
        <div className="absolute bottom-4 right-4 sm:right-8 z-30 pointer-events-auto flex items-center gap-1.5 p-1 rounded-full bg-white/80 dark:bg-[#121216]/80 backdrop-blur-md border border-[#E2E2DC] dark:border-[#282830] shadow-md text-xs font-mono">
          <span className="text-[10px] text-[#888888] px-2.5 uppercase tracking-wider hidden sm:inline-block">
            // 3D VISUAL:
          </span>

          <button
            onClick={() => handleShapeSelect("globe")}
            title="Digital Global Sphere"
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full transition-all cursor-pointer ${
              activeShape === "globe"
                ? "bg-[#FF7120] text-white font-bold shadow-sm"
                : "text-[#555552] dark:text-[#A0A09B] hover:text-[#0A0A0A] dark:hover:text-white"
            }`}
          >
            <Globe className="w-3.5 h-3.5" />
            <span className="text-[11px]">Globe</span>
          </button>

          <button
            onClick={() => handleShapeSelect("neural")}
            title="AI Neural Polyhedron"
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full transition-all cursor-pointer ${
              activeShape === "neural"
                ? "bg-[#FF7120] text-white font-bold shadow-sm"
                : "text-[#555552] dark:text-[#A0A09B] hover:text-[#0A0A0A] dark:hover:text-white"
            }`}
          >
            <Cpu className="w-3.5 h-3.5" />
            <span className="text-[11px]">Neural</span>
          </button>

          <button
            onClick={() => handleShapeSelect("wave")}
            title="Quantum Cyber Wave"
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full transition-all cursor-pointer ${
              activeShape === "wave"
                ? "bg-[#FF7120] text-white font-bold shadow-sm"
                : "text-[#555552] dark:text-[#A0A09B] hover:text-[#0A0A0A] dark:hover:text-white"
            }`}
          >
            <Waves className="w-3.5 h-3.5" />
            <span className="text-[11px]">Wave</span>
          </button>

          <button
            onClick={() => handleShapeSelect("knot")}
            title="Geometric Torus Knot"
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full transition-all cursor-pointer ${
              activeShape === "knot"
                ? "bg-[#FF7120] text-white font-bold shadow-sm"
                : "text-[#555552] dark:text-[#A0A09B] hover:text-[#0A0A0A] dark:hover:text-white"
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span className="text-[11px]">Knot</span>
          </button>
        </div>
      )}
    </>
  );
}
