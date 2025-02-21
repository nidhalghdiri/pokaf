import AboutUs from "@/components/About";
import Brands from "@/components/Brands";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <AboutUs />
      <Products />
      <Contact />
      <Footer />
    </div>
  );
}
