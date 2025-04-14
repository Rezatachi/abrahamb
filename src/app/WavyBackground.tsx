// components/WavyParticles.tsx
'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useRef, useMemo } from 'react';

function Particles() {
  const pointsRef = useRef<THREE.Points>(null);

  const count = 10000; // Increased the number of particles

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) {
      arr[i] = (Math.random() - 0.5) * 10; // Spread in X, Y, Z
    }
    return arr;
  }, []);

  const uniforms = useMemo(() => ({
    uTime: { value: 0 },
  }), []);

  useFrame(({ clock }) => {
    if (pointsRef.current) {
      uniforms.uTime.value = clock.getElapsedTime();
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
      <bufferAttribute
        attach="attributes-position"
        args={[positions, 3]}
      />
      </bufferGeometry>
      <shaderMaterial
      uniforms={uniforms}
      vertexShader={`
        uniform float uTime;
        varying float vAlpha;

        float noise(vec3 p) {
        return sin(p.x * 3.0 + uTime * 0.5) * 0.5 + // Increased speed
             cos(p.y * 3.0 + uTime * 0.6) * 0.5; // Increased speed
        }

        void main() {
        vec3 pos = position;
        float n = noise(pos);
        pos.z += n * 0.25;

        vAlpha = 0.5 + 0.5 * smoothstep(-1.0, 1.0, n);

        gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
        gl_PointSize = 6.0; // Increased particle size
        }
      `}
      fragmentShader={`
        varying float vAlpha;
        void main() {
        float d = length(gl_PointCoord - 0.5);
        float alpha = smoothstep(0.5, 0.0, d) * vAlpha;
        gl_FragColor = vec4(vec3(0.0), alpha); // Black particles
        }
      `}
      transparent
      depthWrite={false}
      blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

export default function WavyParticles() {
  return (
    <div className="absolute inset-0 -z-[-1]">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 75 }}
        style={{ background: '#f8f8f8' }} // Off-white background
      >
        <ambientLight intensity={0.4} />
        <Particles />
      </Canvas>
    </div>
  );
}
