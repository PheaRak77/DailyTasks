import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Float, MeshWobbleMaterial } from "@react-three/drei";

export default function FloatingIcosahedron({
  color = "#8b5cf6",
}: {
  color?: string;
}) {
  return (
    <Canvas camera={{ position: [0, 0, 4], fov: 50 }} gl={{ alpha: true }}>
      <Suspense fallback={null}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[2, 2, 2]} intensity={1} />
        <Float speed={2} rotationIntensity={1.4} floatIntensity={1.6}>
          <mesh scale={1.3}>
            <octahedronGeometry args={[1, 0]} />
            <MeshWobbleMaterial
              color={color}
              factor={0.4}
              speed={1.5}
              roughness={0.2}
              metalness={0.5}
            />
          </mesh>
        </Float>
      </Suspense>
    </Canvas>
  );
}
