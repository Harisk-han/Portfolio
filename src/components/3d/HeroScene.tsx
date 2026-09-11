import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars, Float } from "@react-three/drei";
import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { motion } from "framer-motion-3d";

interface ProjectCard3DProps {
  position: [number, number, number];
  rotation: [number, number, number];
  project: {
    title: string;
    category: string;
    accent: string;
  };
  onClick: () => void;
  index: number;
}

const ProjectCard3D = ({ position, rotation, project, onClick, index }: ProjectCard3DProps) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = rotation[1] + Math.sin(state.clock.elapsedTime * 0.5 + index) * 0.1;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.3 + index) * 0.2;
    }
  });

  const getColorFromAccent = (accent: string) => {
    if (accent.includes('sky')) return '#0ea5e9';
    if (accent.includes('cyan')) return '#06b6d4';
    if (accent.includes('violet')) return '#8b5cf6';
    if (accent.includes('purple')) return '#a855f7';
    if (accent.includes('emerald')) return '#10b981';
    if (accent.includes('amber')) return '#f59e0b';
    if (accent.includes('rose')) return '#f43f5e';
    if (accent.includes('blue')) return '#3b82f6';
    if (accent.includes('lime')) return '#84cc16';
    if (accent.includes('indigo')) return '#6366f1';
    return '#64748b';
  };

  const color = getColorFromAccent(project.accent);

  return (
    <motion.mesh
      ref={meshRef}
      position={position}
      rotation={rotation}
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      scale={hovered ? 1.1 : 1}
    >
      {/* Card base */}
      <boxGeometry args={[2.8, 3.5, 0.1]} />
      <meshStandardMaterial
        color={hovered ? color : '#1e293b'}
        transparent
        opacity={hovered ? 0.95 : 0.8}
        metalness={0.5}
        roughness={0.2}
        emissive={color}
        emissiveIntensity={hovered ? 0.3 : 0.1}
      />
      
      {/* Glowing edges */}
      <mesh position={[0, 0, 0.06]}>
        <boxGeometry args={[2.85, 3.55, 0.02]} />
        <meshStandardMaterial
          color={color}
          transparent
          opacity={hovered ? 0.6 : 0.2}
          emissive={color}
          emissiveIntensity={0.5}
        />
      </mesh>

      {/* Title text placeholder - represented by colored strip */}
      <mesh position={[0, 1.2, 0.06]}>
        <boxGeometry args={[2, 0.3, 0.02]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.5} />
      </mesh>

      {/* Category indicator */}
      <mesh position={[0, -1.2, 0.06]}>
        <boxGeometry args={[1.5, 0.2, 0.02]} />
        <meshStandardMaterial color="#94a3b8" transparent opacity={0.6} />
      </mesh>
    </motion.mesh>
  );
};

interface HeroSceneProps {
  onProjectClick: (index: number) => void;
  projects: any[];
}

export const HeroScene = ({ onProjectClick, projects }: HeroSceneProps) => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
    }
  });

  // Create circular arrangement of project cards
  const radius = 6;
  const cardPositions = projects.slice(0, 6).map((_, index) => {
    const angle = (index / 6) * Math.PI * 2;
    return [
      Math.cos(angle) * radius,
      (Math.random() - 0.5) * 2,
      Math.sin(angle) * radius,
    ] as [number, number, number];
  });

  return (
    <>
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#0ea5e9" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8b5cf6" />
      <spotLight
        position={[0, 15, 0]}
        angle={0.3}
        penumbra={1}
        intensity={1}
        castShadow
      />

      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />

      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        <group ref={groupRef}>
          {projects.slice(0, 6).map((project, index) => (
            <ProjectCard3D
              key={index}
              index={index}
              project={project}
              position={cardPositions[index]}
              rotation={[0, -(index / 6) * Math.PI * 2, 0]}
              onClick={() => onProjectClick(index)}
            />
          ))}
        </group>
      </Float>

      {/* Central floating element */}
      <Float speed={3} rotationIntensity={1} floatIntensity={1}>
        <mesh position={[0, 0, 0]}>
          <icosahedronGeometry args={[1.5, 0]} />
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

      <OrbitControls
        enableZoom={true}
        enablePan={false}
        minDistance={5}
        maxDistance={20}
        autoRotate
        autoRotateSpeed={0.5}
      />
    </>
  );
};
