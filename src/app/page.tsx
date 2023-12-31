import { StyleGuide, Header, Hero, Menu, Reservation, About, Map, Footer } from "./sorting";

export default function Home() {
  return (
    <main className="w-full max-w-[1440px] mx-auto overflow-hidden bg-white">
      <Header />
      <Hero />
      {/* <StyleGuide /> */}
      <Menu/>
      <Reservation/>
      <About/>
      <Map/>
      <Footer/>
      {/* <div className="h-[6000px]"></div> */}
    </main>
  );
}
