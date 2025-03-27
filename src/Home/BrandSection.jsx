import React from 'react';

const brands = [
  { name: 'OPPO', logo: './oppo.png' },
  { name: 'Apple', logo: './apple.png' },
  { name: 'Samsung', logo: './samsung.png' },
  { name: 'Infinix', logo: './infinix.png' },
  { name: 'Baseus', logo: './Baseus_LOGO.jpg' },
  { name: 'Tecno', logo: './tecno.png' },
  { name: 'Binatone', logo: './BINATONE_LOGO.jpg' },
  { name: 'Nokia', logo: './nokia.png' },
  { name: 'Vivo', logo: './vivo.png' },
  { name: 'Itel', logo: './itel.jpg' },
];

const BrandSection = () => {
  return (
    <section className="py-12 px-6">
      <h2 className="text-2xl font-bold text-center mb-6">Our Partner Brands</h2>
      <div className="container mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {brands.map((brand, index) => (
          <div key={index} className="flex justify-center items-center">
            <img
              src={brand.logo}
              alt={`${brand.name} Logo`}
              className="h-16 md:h-20 object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default BrandSection;
