import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { motion, useScroll, useTransform } from "framer-motion";

import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";

function CameraController({ scrollY }) {
  const { camera } = useThree();

  useFrame(() => {
    let scroll = scrollY.get();

    // Hard reset tiny values
    if (scroll < 1) scroll = 0;

    let zoom = scroll / 500;

    // Clamp strictly
    zoom = Math.max(0, Math.min(zoom, 1));

    // DIRECT SET (no interpolation)
    camera.position.z = 5 - zoom * 1.7;

    camera.lookAt(0, 0, 0);
  });

  return null;
}

function Shape() {
  const ref = useRef();

  useFrame(() => {
    ref.current.rotation.y += 0.0015; // smooth auto rotate
  });

  return (
    <mesh ref={ref}>
      {/* <torusKnotGeometry args={[1, 0.3, 128, 32]} /> //original */}
      {/* <torusKnotGeometry args={[2, 0.3, 128, 32]} /> //long */}
      {/* <torusKnotGeometry args={[1, 2, 128, 32]} /> //multi-sphere-like */}
      {/* <torusKnotGeometry args={[1, 2, 128, 32, 2]} /> //2-shapes-last-parameter */}
      {/* <torusKnotGeometry args={[1, 2, 128, 32, 1, 2]} /> //some-experiment */}
      <torusKnotGeometry args={[2, 1, 128, 32]} /> //multi-sphere-like
      {/* <meshStandardMaterial color="#14b8a6" wireframe /> */}
      {/* <meshMatcapMaterial color="#f48120" wireframe /> */}
      <meshStandardMaterial color="#14b8a6" wireframe />
    </mesh>
  );
}

export default function Hero() {
  const { scrollY } = useScroll();

  // 3D moves slower than scroll (depth effect)
  const y = useTransform(scrollY, [0, 500], [0, 100]);

  // Text fades slightly on scroll
  const opacity = useTransform(scrollY, [0, 300], [1, 0.7]);
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-transparent will-change-transform">
      {/* 3D Background */}
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <div className="w-full h-full flex items-center justify-center">
          <Canvas
            camera={{ position: [0, 0, 5], fov: 75 }}
            gl={{ alpha: true }}
          >
            <ambientLight intensity={0.5} />
            <directionalLight position={[3, 3, 3]} />

            <Shape />

            <CameraController scrollY={scrollY} />
          </Canvas>
        </div>
      </motion.div>

      {/* Text */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 text-center px-6"
      >
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-8xl font-semibold"
        >
          Mohammad Aftab Arab
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-4 text-muted text-2xl"
        >
          Network Engineer • Fortinet Certified • Firewall & Network
          Troubleshooting
        </motion.p>
      </motion.div>
    </section>
  );
}
