import Navbar from "@/components/Navbar";
import Contact from "@/pages/Contact";
import HomePage from "@/pages/HomePage";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex h-screen bg-[#435055] text-white" style={{fontFamily: "Huntsman"}}>
      <Navbar />
      <HomePage />
    </main>
  );
}
