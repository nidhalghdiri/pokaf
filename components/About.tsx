"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

const logos = [
  "/images/brand1.png",
  "/images/brand2.png",
  "/images/brand3.png",
];

const AboutUs = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Animation triggers only once
    threshold: 0.2, // Animation starts when 20% of the section is visible
  });
  const [currentLogo, setCurrentLogo] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLogo((prev) => (prev + 1) % logos.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  return (
    <section ref={ref} id="about-us" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Right Side - About Us Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-right"
        >
          <h2 className="text-4xl font-cairo font-bold mb-6 text-gray-800">
            من نحن
          </h2>
          <p className="text-lg font-cairo text-gray-600 leading-relaxed text-justify">
            نحن متخصصون في إنتاج رقائق البطاطس والوجبات الخفيفة عالية الجودة،
            باستخدام مكونات ممتازة وتقنيات إنتاج متقدمة. نقوم باختيار أفضل أنواع
            البطاطس من موردين موثوقين لصنع رقائق مقرمشة ولذيذة. تشمل منتجاتنا
            المتنوعة الرقائق المالحة الكلاسيكية، والمنكهة، والمخبوزة، بالإضافة
            إلى رقائق الخضروات لتلبية جميع الأذواق. يدفعنا الابتكار إلى تطوير
            منتجات جديدة تلبي الأذواق المتغيرة. نلتزم بالاستدامة من خلال تقليل
            النفايات، والحفاظ على الموارد، واستخدام عبوات صديقة للبيئة. بفضل
            منشأتنا الحديثة وفريقنا المتفاني، نضمن تجربة تناول وجبات خفيفة
            استثنائية لكل عميل.
          </p>
        </motion.div>
        {/* Left Side - Logos */}
        <div className="flex justify-center">
          <motion.img
            key={currentLogo}
            src={logos[currentLogo]}
            alt="Brand Logo"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="w-64 h-64 object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
