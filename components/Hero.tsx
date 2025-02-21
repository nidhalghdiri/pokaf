"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const images = [
  "/images/slide1.jpeg",
  "/images/slide2.jpeg",
  "/images/slide3.jpeg",
  "/images/slide4.jpeg",
  "/images/slide5.jpeg",
  "/images/slide6.jpeg",
]; // ✅ Add your actual image paths

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000); // ✅ Change every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full sm:h-[75vh] h-[50vh] flex items-center justify-center text-center overflow-hidden">
      {/* Background Image Slider */}
      <div className="absolute inset-0">
        {images.map((img, index) => (
          <motion.div
            key={index}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${img})` }}
            initial={{ opacity: 0 }}
            animate={{ opacity: index === currentImage ? 1 : 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          />
        ))}
        <div className="absolute inset-0 bg-black/30"></div>{" "}
        {/* ✅ Dark Overlay */}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto text-white px-6">
        <motion.h1
          className="sm:text-5xl text-2xl font-cairo font-extrabold drop-shadow-md"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          key={currentImage} // ✅ Re-animate on image change
        >
          شركة إنما الدار للصناعات ذ.م.م
        </motion.h1>

        <motion.p
          className="mt-4 sm:text-lg font-cairo text-sm text-gray-200"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          key={`text-${currentImage}`} // ✅ Re-animate on image change
        >
          ريادة في صناعة رقائق البطاطس بالابتكار والجودة.
        </motion.p>

        <motion.button
          className="mt-8 px-8 py-3 bg-[#bd1e2e] text-white font-semibold rounded-xl shadow-lg hover:bg-white-300 transition-all duration-300"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          Explore Our Brands
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;
