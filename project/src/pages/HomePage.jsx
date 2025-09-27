import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, Environment } from "@react-three/drei";
import { Suspense, useState } from "react";
import Model from "../components/Model";
import DefaultCube from "../components/DefaultCube";
import ImageCube from "../components/ImageCube";

export default function HomePage() {
  // Optional state for switching models
  const [modelPath, setModelPath] = useState(null);

  return (
    <div className="page home">
      <h1>ONATIT RESOURCES VENTURES LTD</h1>

      {/* 3D Canvas */}
      <div className="canvas-container">
        <Canvas shadows>
          <PerspectiveCamera makeDefault position={[3, 3, 5]} />
          <OrbitControls enablePan enableZoom enableRotate />

          <ambientLight intensity={0.4} />
          <directionalLight position={[5, 10, 5]} intensity={1.2} castShadow />

          <Suspense fallback={null}>
            {modelPath ? <Model url={modelPath}  /> : <ImageCube />}
           
          </Suspense>

          <Environment preset="sunset" />
        
        </Canvas>
        <p className="footer-copy">&copy; 2025 ONATIT. All rights reserved.</p>
      </div>
    </div>
  );
}
