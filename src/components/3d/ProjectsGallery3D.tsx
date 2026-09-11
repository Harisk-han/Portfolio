import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars, Float, Text, Html } from "@react-three/drei";
import { useRef, useState, Suspense } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { motion } from "framer-motion-3d";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";

interface ProjectData {
  title: string;
  category: string;
  summary: string;
  result: string;
  technologies: string[];
  accent: string;
  color: string;
  glow: string;
  metric: string;
  videoUrl?: string;
  details?: {
    challenge?: string;
    approach?: string;
    impact?: string;
  };
  links?: {
    label: string;
    href: string;
    icon: any;
  }[];
}

interface ProjectCard3DProps {
  project: ProjectData;
  index: number;
  totalProjects: number;
  selectedIndex: number | null;
  onSelect: (index: number) => void;
}

const ProjectCard3D = ({ project, index, totalProjects, selectedIndex, onSelect }: ProjectCard3DProps) => {
  const meshRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);
  
  const isSelected = selectedIndex === index;
  const isExpanded = isSelected || hovered;
  
  useFrame((state) => {
    if (meshRef.current) {
      const angle = (index / totalProjects) * Math.PI * 2;
      const time = state.clock.elapsedTime;
      
      // Smooth rotation to face camera
      const targetRotation = -angle + Math.PI / 2;
      meshRef.current.rotation.y = THREE.MathUtils.lerp(
        meshRef.current.rotation.y,
        targetRotation,
        0.1
      );
      
      // Floating animation
      meshRef.current.position.y = Math.sin(time * 0.5 + index) * 0.3;
      
      // Scale animation on hover/select
      const targetScale = isExpanded ? 1.15 : 1;
      meshRef.current.scale.setScalar(
        THREE.MathUtils.lerp(meshRef.current.scale.x, targetScale, 0.1)
      );
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
    <group ref={meshRef}>
      {/* Main card */}
      <mesh
        onClick={(e) => {
          e.stopPropagation();
          onSelect(index);
        }}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <boxGeometry args={[3, 4, 0.08]} />
        <meshStandardMaterial
          color={isExpanded ? color : '#1e293b'}
          transparent
          opacity={isExpanded ? 0.95 : 0.85}
          metalness={0.6}
          roughness={0.2}
          emissive={color}
          emissiveIntensity={isExpanded ? 0.4 : 0.15}
        />
        
        {/* Glowing border */}
        <mesh position={[0, 0, -0.05]}>
          <boxGeometry args={[3.05, 4.05, 0.02]} />
          <meshStandardMaterial
            color={color}
            transparent
            opacity={isExpanded ? 0.7 : 0.3}
            emissive={color}
            emissiveIntensity={0.6}
          />
        </mesh>
      </mesh>

      {/* Title bar */}
      <mesh position={[0, 1.5, 0.05]}>
        <boxGeometry args={[2.6, 0.35, 0.02]} />
        <meshStandardMaterial 
          color={color} 
          emissive={color} 
          emissiveIntensity={0.5}
          transparent
          opacity={0.9}
        />
      </mesh>

      {/* Category bar */}
      <mesh position={[0, -1.5, 0.05]}>
        <boxGeometry args={[2, 0.25, 0.02]} />
        <meshStandardMaterial 
          color="#64748b" 
          transparent
          opacity={0.7}
        />
      </mesh>

      {/* Metric badge */}
      <mesh position={[1.2, 1.5, 0.05]}>
        <cylinderGeometry args={[0.25, 0.25, 0.02, 16]} rotation={[Math.PI / 2, 0, 0]} />
        <meshStandardMaterial 
          color={color} 
          emissive={color} 
          emissiveIntensity={0.8}
        />
      </mesh>

      {/* Particles around card when expanded */}
      {isExpanded && (
        <>
          {[...Array(8)].map((_, i) => {
            const particleAngle = (i / 8) * Math.PI * 2;
            return (
              <mesh
                key={i}
                position={[
                  Math.cos(particleAngle) * 2.5,
                  Math.sin(particleAngle) * 0.5,
                  Math.sin(particleAngle) * 2.5
                ]}
              >
                <sphereGeometry args={[0.05, 8, 8]} />
                <meshStandardMaterial
                  color={color}
                  emissive={color}
                  emissiveIntensity={1}
                  transparent
                  opacity={0.8}
                />
              </mesh>
            );
          })}
        </>
      )}

      {/* HTML overlay for text (only when selected) */}
      {isSelected && (
        <Html distanceFactor={10}>
          <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-80 bg-gray-900/95 backdrop-blur-md rounded-xl p-4 border border-white/10 shadow-2xl">
            <h3 className="text-white font-bold text-lg mb-1">{project.title}</h3>
            <p className="text-sky-400 text-sm mb-2">{project.category}</p>
            <p className="text-gray-400 text-xs mb-3 line-clamp-2">{project.summary}</p>
            <div className="flex flex-wrap gap-1 mb-3">
              {project.technologies.slice(0, 3).map((tech, i) => (
                <span key={i} className="text-[10px] px-2 py-0.5 bg-white/10 rounded-full text-gray-300">
                  {tech}
                </span>
              ))}
            </div>
            {project.links && project.links.length > 0 && (
              <div className="flex gap-2">
                {project.links.map((link, i) => (
                  <a
                    key={i}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-xs text-sky-400 hover:text-sky-300 transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink size={12} />
                    {link.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        </Html>
      )}
    </group>
  );
};

interface ProjectsGallery3DProps {
  projects: ProjectData[];
}

export const ProjectsGallery3D = ({ projects }: ProjectsGallery3DProps) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const groupRef = useRef<THREE.Group>(null);
  const { camera } = useThree();

  useFrame((state) => {
    if (groupRef.current) {
      // Slow auto-rotation
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.05) * 0.1;
    }
    
    // Smooth camera movement when selecting
    if (selectedIndex !== null) {
      const targetPosition = new THREE.Vector3(
        Math.sin(selectedIndex * 0.5) * 8,
        2,
        Math.cos(selectedIndex * 0.5) * 8
      );
      camera.position.lerp(targetPosition, 0.05);
      camera.lookAt(0, 0, 0);
    } else {
      // Default camera position
      camera.position.lerp(new THREE.Vector3(0, 2, 10), 0.05);
      camera.lookAt(0, 0, 0);
    }
  });

  const radius = 7;
  const positions = projects.map((_, index) => {
    const angle = (index / projects.length) * Math.PI * 2;
    return [
      Math.cos(angle) * radius,
      0,
      Math.sin(angle) * radius,
    ] as [number, number, number];
  });

  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[20, 20, 20]} intensity={1.5} color="#0ea5e9" />
      <pointLight position={[-20, -10, -20]} intensity={0.8} color="#8b5cf6" />
      <spotLight
        position={[0, 30, 0]}
        angle={0.4}
        penumbra={1}
        intensity={1.2}
        castShadow
      />

      <Stars radius={200} depth={100} count={8000} factor={4} saturation={0.5} fade speed={0.5} />

      {/* Nebula effect */}
      <mesh position={[0, 0, -20]}>
        <sphereGeometry args={[40, 32, 32]} />
        <meshBasicMaterial
          color="#1e1b4b"
          transparent
          opacity={0.3}
          side={THREE.BackSide}
        />
      </mesh>

      <Float speed={1} rotationIntensity={0.3} floatIntensity={0.3}>
        <group ref={groupRef}>
          {projects.map((project, index) => (
            <ProjectCard3D
              key={index}
              project={project}
              index={index}
              totalProjects={projects.length}
              selectedIndex={selectedIndex}
              onSelect={setSelectedIndex}
            />
          ))}
        </group>
      </Float>

      {/* Central decorative element */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        <mesh position={[0, 0, 0]}>
          <torusKnotGeometry args={[2, 0.6, 128, 32]} />
          <meshStandardMaterial
            color="#0ea5e9"
            wireframe
            transparent
            opacity={0.15}
            emissive="#0ea5e9"
            emissiveIntensity={0.3}
          />
        </mesh>
      </Float>

      {/* Ring system */}
      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, -2, 0]}>
        <ringGeometry args={[8, 8.2, 64]} />
        <meshStandardMaterial
          color="#0ea5e9"
          transparent
          opacity={0.1}
          side={THREE.DoubleSide}
        />
      </mesh>

      <OrbitControls
        enableZoom={true}
        enablePan={true}
        minDistance={5}
        maxDistance={25}
        autoRotate={!selectedIndex}
        autoRotateSpeed={0.3}
        polarRange={[0.5, Math.PI / 2]}
      />
    </>
  );
};

// Loading fallback component
export const ProjectsGalleryFallback = () => (
  <div className="w-full h-full flex items-center justify-center">
    <div className="text-center">
      <div className="w-16 h-16 border-4 border-sky-500/30 border-t-sky-500 rounded-full animate-spin mx-auto mb-4" />
      <p className="text-gray-400">Loading 3D gallery...</p>
    </div>
  </div>
);
