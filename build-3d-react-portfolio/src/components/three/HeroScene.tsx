import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Environment,
  Float,
  MeshDistortMaterial,
  Sparkles,
} from "@react-three/drei";
import type { Mesh } from "three";

function DistortedBlob() {
  const meshRef = useRef<Mesh>(null);

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.15;
      meshRef.current.rotation.y += delta * 0.2;
    }
  });

  return (
    <Float speed={1.6} rotationIntensity={0.6} floatIntensity={1.2}>
      <mesh ref={meshRef} scale={1.9}>
        <icosahedronGeometry args={[1, 4]} />
        <MeshDistortMaterial
          color="#8b5cf6"
          attach="material"
          distort={0.45}
          speed={2}
          roughness={0.15}
          metalness={0.6}
          emissive="#4c1d95"
          emissiveIntensity={0.35}
        />
      </mesh>
    </Float>
  );
}

function RingCluster() {
  const groupRef = useRef<Mesh>(null);
  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.z += delta * 0.1;
    }
  });
  return (
    <group ref={groupRef as never}>
      <mesh rotation={[Math.PI / 3, 0, 0]} position={[2.4, -1, -1]}>
        <torusGeometry args={[0.5, 0.12, 16, 100]} />
        <meshStandardMaterial color="#22d3ee" metalness={0.7} roughness={0.2} />
      </mesh>
      <mesh rotation={[Math.PI / 4, Math.PI / 4, 0]} position={[-2.2, 1.2, -1.5]}>
        <torusGeometry args={[0.35, 0.09, 16, 100]} />
        <meshStandardMaterial color="#f472b6" metalness={0.7} roughness={0.2} />
      </mesh>
    </group>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      dpr={[1, 1.8]}
      camera={{ position: [0, 0, 5.5], fov: 45 }}
      gl={{ antialias: true, alpha: true }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[3, 3, 3]} intensity={1.2} color="#c4b5fd" />
        <pointLight position={[-3, -2, -2]} intensity={0.8} color="#22d3ee" />
        <DistortedBlob />
        <RingCluster />
        <Sparkles count={60} scale={7} size={2.4} speed={0.4} color="#a78bfa" />
        <Environment preset="city" />
      </Suspense>
    </Canvas>
  );
}
