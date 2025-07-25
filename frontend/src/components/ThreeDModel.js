// ThreeDModel.jsx
import React, { Suspense, useRef, useState, useEffect } from "react";
import { Canvas, useThree, extend, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment, PresentationControls } from "@react-three/drei";
import { DRACOLoader } from 'three-stdlib';
// Extend Three.js with DRACOLoader
extend({ DRACOLoader });

// Configure DRACO loader
const dracoLoader = new DRACOLoader();
dracoLoader.setDecoderPath('https://www.gstatic.com/draco/v1/decoders/');
dracoLoader.setDecoderConfig({ type: 'js' });

function Model({ modelPath, scale = 2 }) {
  const modelRef = useRef();
  const { scene } = useThree();
  const gltf = useGLTF(modelPath, undefined, undefined, loader => {
    loader.setDRACOLoader(dracoLoader);
  });

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      // Dispose of geometries and materials to prevent memory leaks
      scene.traverse(child => {
        if (child.isMesh) {
          child.geometry?.dispose();
          child.material?.dispose();
        }
      });
    };
  }, [scene]);

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
      scale={scale}
      position={[0, 0.1, 0]}
      dispose={null}
    />
  );
}

// Skeleton loader for 3D model
function SkeletonLoader() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center animate-pulse">
      {/* 3D box skeleton using divs only */}
      <div className="w-24 h-20 bg-sky-100 rounded-lg shadow-inner mb-3"></div>
      <div className="w-16 h-10 bg-sky-50 rounded-md mb-3"></div>
      <div className="w-28 h-6 bg-sky-100 rounded mb-2"></div>
      <div className="w-16 h-4 bg-sky-50 rounded"></div>
    </div>
  );
}

// Loading spinner component (fallback for slow loads)
function LoadingSpinner() {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="w-12 h-12 border-4 border-sky-200 border-t-sky-600 rounded-full animate-spin"></div>
      <span className="ml-3 text-sky-700">Loading 3D model...</span>
    </div>
  );
}

// Error boundary component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="w-full h-full flex items-center justify-center bg-red-50 rounded-lg p-4">
          <p className="text-red-600">Failed to load 3D model. Please try again later.</p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default function ThreeDModel({ modelPath = "https://u0ons3wvpixqh0xx.public.blob.vercel-storage.com/student.glb" }) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Preload assets
  useEffect(() => {
    const preloadAssets = async () => {
      try {
        // Preload the model when component mounts
        await useGLTF.preload(modelPath, undefined, undefined, loader => {
          loader.setDRACOLoader(dracoLoader);
        });
      } catch (err) {
        console.error('Error preloading model:', err);
        setError('Failed to load 3D model');
      } finally {
        setIsLoading(false);
      }
    };

    preloadAssets();
  }, [modelPath]);

  // Responsive scaling based on viewport width
  const getModelScale = () => {
    if (typeof window !== 'undefined') {
      const width = window.innerWidth;
      if (width < 640) return 1.5;  // Mobile
      if (width < 1024) return 1.8; // Tablet
      return 2;                     // Desktop
    }
    return 2;
  };

  if (isLoading) return <SkeletonLoader />;
  if (error) return <div className="text-red-600 p-4">{error}</div>;

  return (
    <div className="model-wrapper relative w-full h-full rounded-xl overflow-hidden bg-gradient-to-br from-sky-50 to-white">
      <ErrorBoundary>
        <React.Suspense fallback={null}>
          <Canvas 
            style={{ height: "500px" }}
            camera={{ position: [0, 0, 5], fov: 45 }}
            dpr={Math.min(window.devicePixelRatio, 2)} // Cap DPR at 2 for performance
            gl={{ antialias: true, alpha: true }}
            performance={{ min: 0.5 }} // Lower performance on slower devices
          >
            <ambientLight intensity={0.8} />
            <directionalLight position={[5, 5, 5]} intensity={1} castShadow />
            <directionalLight position={[-5, 5, 2]} intensity={0.5} />
            <PresentationControls
              global
              snap
              rotation={[0, 0, 0]}
              polar={[-Math.PI / 4, Math.PI / 4]}
              azimuth={[-Math.PI / 4, Math.PI / 4]}
            >
              <Model modelPath={modelPath} scale={getModelScale()} />
            </PresentationControls>
            <Environment preset="city" />
            <OrbitControls 
              enableZoom={false}
              enablePan={false}
              minPolarAngle={Math.PI / 4}
              maxPolarAngle={Math.PI / 2}
              enableDamping
              dampingFactor={0.05}
            />
          </Canvas>
        </React.Suspense>
        <div className="absolute bottom-4 right-4 bg-white bg-opacity-70 backdrop-blur-sm px-3 py-2 rounded-lg text-sm text-sky-800 shadow-sm">
          <p>Drag to rotate model</p>
        </div>
      </ErrorBoundary>
    </div>
  );
}