"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaTimes,
  FaCheckCircle,
  FaSeedling,
  FaInfoCircle,
  FaRegImages,
  FaRegListAlt,
  FaUtensils,
  FaRecycle,
} from "react-icons/fa";

interface Product {
  id: number;
  name: string;
  images: string[];
  description: string;
  details: {
    ingredients: string[];
    allergens: string[];
    nutritionFacts: {
      servingSize: string;
      calories: number;
      totalFat: string;
      sodium: string;
      carbohydrates: string;
      protein: string;
    };
    storageInstructions: string;
    sustainability: string;
  };
}

const ProductSlider = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  const products: Product[] = [
    {
      id: 1,
      name: "رقائق بطاطس مقرمشة",
      images: ["/images/prod1.png", "/images/prod2.png", "/images/prod3.png"],
      description: "رقائق بطاطس مقرمشة ومصنوعة من البطاطس الطبيعية بنسبة 100%.",
      details: {
        ingredients: ["بطاطس طبيعية", "زيت نباتي", "ملح"],
        allergens: ["يحتوي على زيت فول الصويا"],
        nutritionFacts: {
          servingSize: "28غ",
          calories: 150,
          totalFat: "10غ",
          sodium: "170ملغ",
          carbohydrates: "15غ",
          protein: "2غ",
        },
        storageInstructions:
          "يُحفظ في مكان بارد وجاف بعيدًا عن أشعة الشمس المباشرة.",
        sustainability:
          "التغليف مصنوع من مواد قابلة لإعادة التدوير بنسبة 100%.",
      },
    },
    {
      id: 2,
      name: "رقائق حارة",
      images: ["/images/prod2.png", "/images/prod3.png", "/images/prod4.png"],
      description:
        "رقائق حارة بنكهة الفلفل الحار لتضيف الإثارة لوجباتك الخفيفة.",
      details: {
        ingredients: ["بطاطس طبيعية", "زيت نباتي", "توابل حارة", "ملح"],
        allergens: ["لا يحتوي على مسببات حساسية"],
        nutritionFacts: {
          servingSize: "28غ",
          calories: 160,
          totalFat: "9غ",
          sodium: "200ملغ",
          carbohydrates: "18غ",
          protein: "2غ",
        },
        storageInstructions: "يُحفظ في مكان بارد وجاف بعيدًا عن الرطوبة.",
        sustainability: "التغليف صديق للبيئة وقابل لإعادة التدوير.",
      },
    },
    {
      id: 3,
      name: "رقائق بالجبن",
      images: ["/images/prod3.png", "/images/prod4.png", "/images/prod2.png"],
      description: "رقائق غنية بنكهة الجبن الطبيعي لتجربة مذاق لا تُنسى.",
      details: {
        ingredients: ["بطاطس طبيعية", "زيت نباتي", "مسحوق جبن", "ملح"],
        allergens: ["يحتوي على منتجات الألبان"],
        nutritionFacts: {
          servingSize: "28غ",
          calories: 170,
          totalFat: "11غ",
          sodium: "220ملغ",
          carbohydrates: "16غ",
          protein: "3غ",
        },
        storageInstructions: "يُحفظ في عبوة محكمة الإغلاق بعد الفتح.",
        sustainability: "التغليف مصنوع من مواد مستدامة.",
      },
    },
    {
      id: 4,
      name: "رقائق بنكهة الباربكيو",
      images: ["/images/prod4.png", "/images/prod3.png", "/images/prod2.png"],
      description:
        "رقائق بنكهة الباربكيو الغنية واللذيذة تناسب جميع المناسبات.",
      details: {
        ingredients: ["بطاطس طبيعية", "زيت نباتي", "توابل الباربكيو", "ملح"],
        allergens: ["لا يحتوي على مسببات حساسية"],
        nutritionFacts: {
          servingSize: "28غ",
          calories: 155,
          totalFat: "9غ",
          sodium: "210ملغ",
          carbohydrates: "17غ",
          protein: "2غ",
        },
        storageInstructions: "يُحفظ بعيدًا عن الحرارة والرطوبة.",
        sustainability: "التغليف قابل لإعادة التدوير وصديق للبيئة.",
      },
    },
  ];

  const openModal = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProduct(null), 300); // Delay clearing the product for smoother exit animation
  };

  return (
    <section id="products" className="py-12 bg-gray-100 font-cairo">
      <div className="container mx-auto px-4 text-center">
        <h2
          className="text-4xl font-cairo font-bold mb-8 text-gray-800"
          dir="rtl"
        >
          منتجاتنا
        </h2>
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{ delay: 3000 }}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          className="w-full max-w-6xl mx-auto"
        >
          {products.map((product) => (
            <SwiperSlide key={product.id} className="p-4">
              <div
                className="p-6 transition-transform transform hover:scale-105 cursor-pointer"
                onClick={() => openModal(product)}
              >
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-40 object-contain rounded-lg grayscale hover:grayscale-0 transition-all duration-300"
                />
                <h3
                  className="text-xl font-cairo font-semibold mt-4 text-gray-700"
                  dir="rtl"
                >
                  {product.name}
                </h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Modal */}
        <AnimatePresence>
          {isModalOpen && selectedProduct && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
              onClick={closeModal} // Close modal when clicking outside
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="bg-white rounded-lg shadow-2xl w-full max-w-6xl h-[90vh] overflow-hidden font-cairo relative"
                dir="rtl"
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
              >
                {/* Close Button */}
                <button
                  className="absolute top-4 left-4 text-gray-600 hover:text-gray-900 z-10"
                  onClick={closeModal}
                  aria-label="Close modal"
                >
                  <FaTimes size={24} />
                </button>

                <div className="grid grid-cols-1 md:grid-cols-2 h-full">
                  {/* Image Gallery Column */}
                  <div className="relative h-[80vh]">
                    <Swiper
                      modules={[Navigation, Thumbs]}
                      spaceBetween={10}
                      slidesPerView={1}
                      navigation
                      thumbs={{ swiper: thumbsSwiper }}
                      className="h-full"
                    >
                      {selectedProduct.images.map((image, index) => (
                        <SwiperSlide key={index}>
                          <img
                            src={image}
                            alt={`${selectedProduct.name} ${index + 1}`}
                            className="w-full h-64 object-contain mx-auto"
                          />
                        </SwiperSlide>
                      ))}
                    </Swiper>

                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-white bg-opacity-90">
                      <Swiper
                        onSwiper={setThumbsSwiper}
                        modules={[Thumbs]}
                        spaceBetween={10}
                        slidesPerView={4}
                        freeMode
                        watchSlidesProgress
                        className="thumbs-gallery"
                      >
                        {selectedProduct.images.map((image, index) => (
                          <SwiperSlide key={index}>
                            <img
                              src={image}
                              alt={`${selectedProduct.name} thumb ${index + 1}`}
                              className="w-full cursor-pointer rounded-lg border-2 border-transparent hover:border-blue-500 transition-all"
                            />
                          </SwiperSlide>
                        ))}
                      </Swiper>
                    </div>
                  </div>

                  {/* Details Column */}
                  <div className="p-8 overflow-y-auto h-full">
                    <motion.h2
                      className="text-3xl font-cairo font-bold mb-6 text-right"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      {selectedProduct.name}
                    </motion.h2>

                    <motion.p
                      className="text-gray-600 font-cairo mb-8 text-right"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      {selectedProduct.description}
                    </motion.p>

                    {/* Ingredients Section */}
                    <motion.div
                      className="mb-8"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                    >
                      <h3 className="flex items-center font-cairo text-xl font-semibold mb-4 text-right">
                        <FaSeedling className="mr-3 text-green-500" /> المكونات
                      </h3>
                      <ul className="list-disc list-inside space-y-2 text-right">
                        {selectedProduct.details.ingredients.map(
                          (ingredient, index) => (
                            <li
                              key={index}
                              className="text-gray-700 font-cairo"
                            >
                              {ingredient}
                            </li>
                          )
                        )}
                      </ul>
                    </motion.div>

                    {/* Allergens Section */}
                    <motion.div
                      className="mb-8"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      <h3 className="flex items-center font-cairo text-xl font-semibold mb-4 text-right">
                        <FaInfoCircle className="mr-3 text-blue-500" /> مسببات
                        الحساسية
                      </h3>
                      <p className="text-gray-700 font-cairo text-right">
                        {selectedProduct.details.allergens.join(", ") ||
                          "لا يوجد"}
                      </p>
                    </motion.div>

                    {/* Nutrition Facts */}
                    <motion.div
                      className="mb-8"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.6 }}
                    >
                      <h3 className="flex items-center text-xl font-cairo font-semibold mb-4 text-right">
                        <FaRegImages className="mr-3 text-orange-500" /> القيمة
                        الغذائية
                      </h3>
                      <div className="space-y-2 text-gray-700 font-cairo text-right">
                        <p>
                          حجم الحصة:{" "}
                          {selectedProduct.details.nutritionFacts.servingSize}
                        </p>
                        <p>
                          السعرات الحرارية:{" "}
                          {selectedProduct.details.nutritionFacts.calories}
                        </p>
                        <p>
                          إجمالي الدهون:{" "}
                          {selectedProduct.details.nutritionFacts.totalFat}
                        </p>
                        <p>
                          الصوديوم:{" "}
                          {selectedProduct.details.nutritionFacts.sodium}
                        </p>
                        <p>
                          الكربوهيدرات:{" "}
                          {selectedProduct.details.nutritionFacts.carbohydrates}
                        </p>
                        <p>
                          البروتين:{" "}
                          {selectedProduct.details.nutritionFacts.protein}
                        </p>
                      </div>
                    </motion.div>

                    {/* Sustainability */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.7 }}
                    >
                      <h3 className="flex items-center text-xl font-cairo font-semibold mb-4 text-right">
                        <FaRecycle className="mr-3 text-teal-500" /> الاستدامة
                      </h3>
                      <p className="text-gray-700 font-cairo text-right">
                        {selectedProduct.details.sustainability}
                      </p>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ProductSlider;
