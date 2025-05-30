// import Image from "next/image";

export default function Home() {
  return (
    <div className="relative w-full h-screen">
      <img 
      src="/background.jpg" 
      alt="Background" 
      className="object-cover" 
      style={{ position: 'absolute', height: '100%', width: '100%', left: 0, top: 0, right: 0, bottom: 0, color: 'transparent' }} />
    </div>
  );
}
