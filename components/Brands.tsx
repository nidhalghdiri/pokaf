import React from "react";

const Brands = () => {
  return (
    <section id="brands" className="py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Our Brands</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {brands.map((brand) => (
            <div key={brand.id} className="text-center">
              <img
                src={brand.logo}
                alt={brand.name}
                className="mx-auto h-24 mb-4"
              />
              <h3 className="text-xl font-semibold">{brand.name}</h3>
              <p className="text-gray-600">{brand.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
const brands = [
  {
    id: 1,
    name: "Brand 1",
    logo: "/brand1.png",
    description: "Description of Brand 1.",
  },
  {
    id: 2,
    name: "Brand 2",
    logo: "/brand2.png",
    description: "Description of Brand 2.",
  },
  {
    id: 3,
    name: "Brand 3",
    logo: "/brand3.png",
    description: "Description of Brand 3.",
  },
];

export default Brands;
