import Image from "next/image";
import Header from "./components/header";
import Herosection from "./components/hero-section";

export default function Home() {
  return (
    
    <main className="relative min-h-screen bg-gradient-to-tr from-black via-violet-950 to-pink-900 flex flex-col justify-center p-8 sm:p-6 lg:p-8 ">
       <Header />
       <Herosection />
    </main>
  );
}
