// ThreeDModel.jsx
import React, { Suspense, useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment, PresentationControls } from "@react-three/drei";

function Model() {
  const modelRef = useRef();
  const gltf = useGLTF("/models/untitled1.glb");
  
  // Subtle automatic rotation animation
  useFrame((state) => {
    if (modelRef.current) {
      modelRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.2) * 0.2;
    }
  });

  return (
    <primitive 
      ref={modelRef}
      object={gltf.scene} 
      scale={2} 
      position={[0, 0.1, 0]} // Adjust position as needed
    />
  );
}

// Loading spinner component
function LoadingSpinner() {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="w-12 h-12 border-4 border-sky-200 border-t-sky-600 rounded-full animate-spin"></div>
    </div>
  );
}

export default function ThreeDModel() {
  return (
    <div className="model-wrapper relative w-full h-full rounded-xl overflow-hidden bg-gradient-to-br from-sky-50 to-white">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-sky-100 rounded-full opacity-50 blur-xl -mr-10 -mt-10"></div>
      <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-100 rounded-full opacity-30 blur-xl -ml-10 -mb-10"></div>
      
      <Canvas 
        style={{ height: "500px" }}
        camera={{ position: [0, 0, 5], fov: 45 }}
        dpr={[1, 2]} // Optimize for high DPI displays
      >
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 5, 5]} intensity={1} castShadow />
        <directionalLight position={[-5, 5, 2]} intensity={0.5} />
        
        <Suspense fallback={null}>
          <PresentationControls
            global
            snap
            rotation={[0, 0, 0]}
            polar={[-Math.PI / 4, Math.PI / 4]}
            azimuth={[-Math.PI / 4, Math.PI / 4]}
          >
            <Model />
          </PresentationControls>
          <Environment preset="city" />
        </Suspense>
        
        <OrbitControls 
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 2}
        />
      </Canvas>
      
      {/* Interaction hint */}
      <div className="absolute bottom-4 right-4 bg-white bg-opacity-70 backdrop-blur-sm px-3 py-2 rounded-lg text-sm text-sky-800 shadow-sm">
        <p>Drag to rotate model</p>
      </div>
    </div>
  );
}