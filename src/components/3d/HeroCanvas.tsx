import React, { useRef, Suspense, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

// Rotating geometric core
const GeometricCore: React.FC<{ mousePos: { x: number; y: number } }> = ({ mousePos }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);
  const outerRef = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.2 + mousePos.y * 0.05;
      meshRef.current.rotation.y += delta * 0.25 + mousePos.x * 0.05;
    }
    if (ringRef.current) {
      ringRef.current.rotation.x -= delta * 0.15;
      ringRef.current.rotation.z += delta * 0.3;
    }
    if (outerRef.current) {
      outerRef.current.rotation.y += delta * 0.08;
    }
  });

  return (
    <group position={[0, 0, 0]}>
      {/* Central Glass-like Icosahedron */}
      <Float speed={2} rotationIntensity={1.2} floatIntensity={1.5}>
        <mesh ref={meshRef} scale={1.8}>
          <icosahedronGeometry args={[1, 1]} />
          <MeshDistortMaterial
            color="#6366F1"
            attach="material"
            distort={0.25}
            speed={1.5}
            roughness={0.15}
            metalness={0.8}
            wireframe={true}
          />
        </mesh>
      </Float>

      {/* Orbiting Electric Cyan Ring */}
      <mesh ref={ringRef} scale={2.4} rotation={[Math.PI / 3, 0, 0]}>
        <torusGeometry args={[1, 0.03, 16, 100]} />
        <meshStandardMaterial
          color="#22D3EE"
          emissive="#22D3EE"
          emissiveIntensity={0.8}
          roughness={0.2}
          wireframe={false}
        />
      </mesh>

      {/* Secondary Violet Wireframe Orbit */}
      <mesh ref={outerRef} scale={2.9} rotation={[-Math.PI / 4, Math.PI / 4, 0]}>
        <octahedronGeometry args={[1, 0]} />
        <meshStandardMaterial
          color="#8B5CF6"
          emissive="#6366F1"
          emissiveIntensity={0.4}
          wireframe={true}
          transparent={true}
          opacity={0.35}
        />
      </mesh>

      {/* Ambient particles */}
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[new Float32Array(
              Array.from({ length: 450 }, () => (Math.random() - 0.5) * 14)
            ), 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.035}
          color="#6366F1"
          transparent
          opacity={0.6}
        />
      </points>
    </group>
  );
};

export const HeroCanvas: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isSupported, setIsSupported] = useState(true);

  useEffect(() => {
    // Detect WebGL support & reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setIsSupported(false);
      return;
    }

    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) setIsSupported(false);
    } catch {
      setIsSupported(false);
    }

    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  if (!isSupported) {
    return (
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-96 h-96 rounded-full bg-gradient-to-tr from-brand-indigo/20 via-brand-cyan/20 to-transparent blur-3xl" />
      </div>
    );
  }

  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        dpr={[1, 1.75]}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      >
        <ambientLight intensity={0.7} />
        <directionalLight position={[10, 10, 5]} intensity={1.2} color="#6366F1" />
        <pointLight position={[-8, -8, -5]} intensity={1.5} color="#22D3EE" />
        <pointLight position={[5, -5, 5]} intensity={0.8} color="#8B5CF6" />
        <Suspense fallback={null}>
          <GeometricCore mousePos={mousePos} />
        </Suspense>
      </Canvas>
    </div>
  );
};
