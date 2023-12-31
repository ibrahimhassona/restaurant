import { Header, Hero, Menu, Reservation, About, Map, Footer } from "./sorting";

export default function Home() {
  return (
    <main className="w-full max-w-[1440px] mx-auto overflow-hidden bg-white">
      <Header />
      <Hero />
      <Menu/>
      <Reservation/>
      <About/>
      <Map/>
      <Footer/>
    </main>
  );
}
