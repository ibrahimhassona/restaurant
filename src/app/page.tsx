import { Header, Hero, Menu, Reservation, About, Map, Footer } from "./sorting";
import { ComponentType } from "react";

interface MapComponentProps {
  // إذا كانت هناك خصائص أخرى يجب تعريفها هنا
}
import dynamic from "next/dynamic";


const DynamicMap:ComponentType<MapComponentProps> = dynamic(()=>import('../components/Map'),{
  ssr:false
})

export default function Home() {
  return (
    <main className="w-full max-w-[1440px] mx-auto overflow-hidden bg-white">
      <Header />
      <Hero />
      <Menu/>
      <Reservation/>
      <About/>
      <DynamicMap/>
      <Footer/>
    </main>
  );
}
