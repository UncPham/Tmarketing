import Image from "next/image";

export default function Home() {
  return (
    <div className="relative w-full h-screen">
      <Image
        src="/background.jpg"
        alt="Background"
        fill
        className="object-cover"
        priority
      />
    </div>
  );
}
