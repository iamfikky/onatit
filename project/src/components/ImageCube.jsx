import { TextureLoader } from "three";
import { useLoader } from "@react-three/fiber";
import logo from "../assets/onatit.png";

export default function ImageCube() {
  const texture = useLoader(TextureLoader, logo);

  return (
    <mesh position={[3, 0, 0]}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
}
