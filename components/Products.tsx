"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ProductSlider = () => {
  const products = [
    { id: 1, image: "/images/prod1.png", name: "Crunchy Chips" },
    { id: 2, image: "/images/prod2.png", name: "Spicy Chips" },
    { id: 3, image: "/images/prod3.png", name: "Cheese Chips" },
    { id: 4, image: "/images/prod4.png", name: "BBQ Chips" },
    { id: 5, image: "/images/prod3.png", name: "Cheese Chips" },
    { id: 6, image: "/images/prod2.png", name: "Cheese Chips" },
  ];

  return (
    <section id="products" className="py-12 bg-gray-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-8 text-gray-800">منتجاتنا</h2>
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
            1280: { slidesPerView: 4 }, // ✅ 4 items on large screens
          }}
          className="w-full max-w-6xl mx-auto"
        >
          {products.map((product) => (
            <SwiperSlide key={product.id} className="p-4">
              <div className="p-6 transition-transform transform hover:scale-105">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-auto object-cover rounded-lg"
                />
                <h3 className="text-xl font-semibold mt-4 text-gray-700">
                  {product.name}
                </h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ProductSlider;
