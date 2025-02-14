import Brands from "@/components/Brands";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Products />
    </div>
  );
}
