import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float, Stars, Text } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export const ParticlesField = () => {
  const pointsRef = useRef<THREE.Points>(null);
  
  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.02;
      pointsRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.05) * 0.1;
    }
  });

  // Create particle system
  const particlesCount = 2000;
  const positions = new Float32Array(particlesCount * 3);
  const colors = new Float32Array(particlesCount * 3);

  for (let i = 0; i < particlesCount * 3; i += 3) {
    // Position
    positions[i] = (Math.random() - 0.5) * 50;
    positions[i + 1] = (Math.random() - 0.5) * 50;
    positions[i + 2] = (Math.random() - 0.5) * 50;

    // Colors - mix of sky blue and violet
    const colorChoice = Math.random();
    if (colorChoice > 0.6) {
      colors[i] = 0.04; // R - sky
      colors[i + 1] = 0.65; // G
      colors[i + 2] = 0.91; // B
    } else if (colorChoice > 0.3) {
      colors[i] = 0.55; // R - violet
      colors[i + 1] = 0.36; // G
      colors[i + 2] = 0.96; // B
    } else {
      colors[i] = 0.02; // R - cyan
      colors[i + 1] = 0.71; // G
      colors[i + 2] = 0.82; // B
    }
  }

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesCount}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={particlesCount}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.08}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
};

interface FloatingGeometriesProps {
  mousePosition: [number, number];
}

export const FloatingGeometries = ({ mousePosition }: FloatingGeometriesProps) => {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        mousePosition[0] * 0.1,
        0.05
      );
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        mousePosition[1] * 0.1,
        0.05
      );
    }
  });

  return (
    <group ref={groupRef}>
      {/* Floating Icosahedron */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        <mesh position={[5, 2, -5]}>
          <icosahedronGeometry args={[1, 0]} />
          <meshStandardMaterial
            color="#0ea5e9"
            wireframe
            transparent
            opacity={0.3}
            emissive="#0ea5e9"
            emissiveIntensity={0.5}
          />
        </mesh>
      </Float>

      {/* Floating Octahedron */}
      <Float speed={1.5} rotationIntensity={0.8} floatIntensity={0.8}>
        <mesh position={[-6, -1, -8]}>
          <octahedronGeometry args={[1.2, 0]} />
          <meshStandardMaterial
            color="#8b5cf6"
            wireframe
            transparent
            opacity={0.3}
            emissive="#8b5cf6"
            emissiveIntensity={0.5}
          />
        </mesh>
      </Float>

      {/* Floating Tetrahedron */}
      <Float speed={2.5} rotationIntensity={0.6} floatIntensity={0.6}>
        <mesh position={[7, -2, -6]}>
          <tetrahedronGeometry args={[1, 0]} />
          <meshStandardMaterial
            color="#06b6d4"
            wireframe
            transparent
            opacity={0.3}
            emissive="#06b6d4"
            emissiveIntensity={0.5}
          />
        </mesh>
      </Float>

      {/* Ring System */}
      <Float speed={1} rotationIntensity={0.3} floatIntensity={0.3}>
        <mesh position={[-5, 3, -7]} rotation={[Math.PI / 3, Math.PI / 4, 0]}>
          <torusGeometry args={[1.5, 0.05, 16, 100]} />
          <meshStandardMaterial
            color="#0ea5e9"
            transparent
            opacity={0.4}
            emissive="#0ea5e9"
            emissiveIntensity={0.3}
          />
        </mesh>
      </Float>

      {/* Another Ring */}
      <Float speed={1.2} rotationIntensity={0.4} floatIntensity={0.4}>
        <mesh position={[6, 1, -9]} rotation={[Math.PI / 2, 0, Math.PI / 6]}>
          <torusGeometry args={[2, 0.03, 16, 100]} />
          <meshStandardMaterial
            color="#8b5cf6"
            transparent
            opacity={0.3}
            emissive="#8b5cf6"
            emissiveIntensity={0.3}
          />
        </mesh>
      </Float>
    </group>
  );
};

interface HeroBackground3DProps {
  mousePosition?: [number, number];
}

export const HeroBackground3D = ({ mousePosition = [0, 0] }: HeroBackground3DProps) => {
  return (
    <>
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#0ea5e9" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8b5cf6" />
      
      <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />
      
      <ParticlesField />
      <FloatingGeometries mousePosition={mousePosition} />
      
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        minDistance={5}
        maxDistance={20}
        autoRotate
        autoRotateSpeed={0.2}
        polarRange={[0.5, Math.PI / 2]}
      />
    </>
  );
};
