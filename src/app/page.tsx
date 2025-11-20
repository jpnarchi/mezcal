import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import OwlSection from "@/components/OwlSection";
import BottleSlider from "@/components/BottleSlider";
import ProductSection from "@/components/ProductSection";
import StorySection from "@/components/StorySection";
import CocktailSection from "@/components/CocktailSection";
import SustainabilitySection from "@/components/SustainabilitySection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-montelobos-dark">
      <Navbar />
      <Hero />
      {/* Separator */}
      <div className="w-full h-6 bg-black"></div>
      <OwlSection />
      <div className="w-full h-4 bg-black"></div>
      <BottleSlider />
      {/* <ProductSection />
      <StorySection />
      <CocktailSection />
      <SustainabilitySection /> */}
      <Footer />
    </main>
  );
}
