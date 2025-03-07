"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import {
  FaRegLightbulb,
  FaHandshake,
  FaLeaf,
  FaCheckCircle,
} from "react-icons/fa";

const logos = [
  "/images/brand1.png",
  "/images/brand2.png",
  "/images/brand3.png",
];

export const AboutUs = () => {
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
      {/* <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/chips-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}

      {/* Overlay */}
      {/* <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div> */}
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-[70%_30%] gap-10 items-center">
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
            نحن شركة متخصصة في تصنيع رقائق البطاطس عالية الجودة ومنتجات الوجبات
            الخفيفة الأخرى. تكرس شركتنا جهودها لتزويد عملائنا بأفضل تجربة ممكنة
            لتناول الوجبات الخفيفة باستخدام أجود المكونات وأحدث تقنيات الإنتاج،
            حيث نقوم في منشأتنا بتوريد أجود أنواع البطاطس من المزارعين المحليين
            أو الموردين الموثوق بهم. يتم بعد ذلك غسل البطاطس وتقشيرها وتقطيعها
            إلى شرائح وطهيها في أجود أنواع الزيت، مما ينتج عنه رقائق مقرمشة
            ولذيذة، ويشمل خط إنتاجنا مجموعة متنوعة من رقائق البطاطس، بما في ذلك
            رقائق البطاطس المملحة الكلاسيكية، بالإضافة إلى مجموعة من رقائق
            البطاطس المنكهة ورقائق البطاطس المخبوزة ورقائق البطاطس المخبوزة
            ورقائق البطاطس النباتية وغيرها من الوجبات الخفيفة. صُمم كل منتج من
            منتجاتنا بعناية فائقة لتقديم تجربة فريدة ومرضية لتناول الوجبات
            الخفيفة، ونحن ملتزمون بتزويد عملائنا بمجموعة واسعة من الخيارات،
            ونعمل باستمرار على تطوير منتجات جديدة ومبتكرة لتلبية احتياجاتهم
            وتفضيلاتهم المتغيرة. سواءً كنت تبحث عن وجبة خفيفة كلاسيكية أو شيء
            جديد ومثير، فلدينا ما يناسب الجميع. تلتزم شركتنا بالاستدامة، ونسعى
            جاهدين لتقليل تأثيرنا على البيئة في كل مرحلة من مراحل الإنتاج. نحن
            ملتزمون بالحد من النفايات والحفاظ على الموارد واستخدام مواد تغليف
            صديقة للبيئة كلما أمكن ذلك، وفوق كل ذلك، نحن ملتزمون بتزويد عملائنا
            بأعلى مستوى من الجودة والخدمة. بدءاً من منشأتنا المتطورة ووصولاً إلى
            خبرتنا وتفانينا في العمل.
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

export const MissionVisionSection = () => {
  return (
    <section id="mission-vision" className="relative">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/potatos-video.mp4" type="video/mp4" />
        {/* <source src="/videos/production-line.webm" type="video/webm" /> */}
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>

      <div className="relative z-20 container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 text-white">
          {/* Mission Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="p-8 rounded-lg bg-black bg-opacity-20"
          >
            <FaHandshake className="text-4xl mb-6 text-[#bd1e2e]" />
            <h3 className="text-3xl font-cairo font-bold mb-4">مهمتنا</h3>
            <p className="leading-relaxed font-cairo">
              تتمثل مهمتنا في تزويد عملائنا بأعلى جودة متاحة من رقائق البطاطس
              ومنتجات الوجبات الخفيفة مع الالتزام بالمسؤولية الاجتماعية والوعي
              البيئي في كل ما نقوم به. نحن ملتزمون بالقيم الأساسية التالية:
            </p>
            <ul className="mt-4 space-y-2">
              <li className="flex font-cairo items-center gap-3">
                <FaCheckCircle className="text-green-400" />
                الجودة
              </li>
              <li className="flex font-cairo items-center gap-3">
                <FaCheckCircle className="text-green-400" />
                الابتكار
              </li>
              <li className="flex font-cairo items-center gap-3">
                <FaCheckCircle className="text-green-400" />
                الاستدامة
              </li>
              <li className="flex font-cairo items-center gap-3">
                <FaCheckCircle className="text-green-400" />
                رضا العملاء
              </li>
              <li className="flex font-cairo items-center gap-3">
                <FaCheckCircle className="text-green-400" />
                المسؤولية الاجتماعية
              </li>
            </ul>
          </motion.div>

          {/* Vision Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="p-8 rounded-lg bg-black bg-opacity-20"
          >
            <FaRegLightbulb className="text-4xl mb-6 text-[#bd1e2e]" />
            <h3 className="text-3xl font-cairo font-bold mb-4">رؤيتنا</h3>
            <p className=" font-cairo leading-relaxed">
              تتمثل رؤيتنا في أن نصبح الشركة الرائدة في مجال تصنيع رقائق البطاطس
              ومنتجات الوجبات الخفيفة عالية الجودة، مع الاعتراف بنا كشركة مسؤولة
              اجتماعياً وواعية بيئياً.
            </p>
            <ul className="mt-4 space-y-2">
              <li className="flex font-cairo items-center gap-3">
                <FaLeaf className="text-teal-400" />
                النمو
              </li>
              <li className="flex font-cairo items-center gap-3">
                <FaLeaf className="text-teal-400" />
                الجودة
              </li>
              <li className="flex font-cairo items-center gap-3">
                <FaLeaf className="text-teal-400" />
                الاستدامة
              </li>
              <li className="flex font-cairo items-center gap-3">
                <FaLeaf className="text-teal-400" />
                الابتكار
              </li>
              <li className="flex font-cairo items-center gap-3">
                <FaLeaf className="text-teal-400" />
                المسؤولية الاجتماعية
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
