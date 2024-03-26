import Image from "next/image";
import Hero from "./components/hero/Hero";
import CarCatalogue from "./components/catalogue/CarCatalogue";

export default function Home() {
  return (
    <main className="mx-6 md:mx-14 lg:mx-16">
      <Hero />
      <CarCatalogue />
    </main>
  );
}
