import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const products = [
  {
    id: 7,
    image: "https://tse1.mm.bing.net/th?id=OIP.CW9_-pPezOIyi2v_eC3SngHaHa&pid=Api",
    title: "Ace Elec 14.1'' Laptop",
    subtitle: "Intel Celeron J4105, 16GB RAM, 128GB Storage",
    price: 209000,
    slashedPrice: 220000,
    description: "The Ace Elec 14.1'' Laptop features a Full HD IPS display, powered by an Intel Celeron Quad-Core CPU, 16GB LPDDR4 RAM, and 128GB storage. It supports TF card expansion up to 64GB, providing ample space for your needs."
  },
  {
    id: 8,
    image: "https://tse3.mm.bing.net/th?id=OIP.4Sncc2JD_MBjR1841P-tKQHaFI&pid=Api",
    title: "HP Stream 11 Laptop",
    subtitle: "Intel Celeron Quad Core, 64GB SSD, 4GB RAM",
    price: 140000,
    slashedPrice: 299000,
    description: "The HP Stream 11 Laptop is equipped with an Intel Celeron N4000 processor, 4GB DDR4 RAM, and 64GB eMMC storage. It features an 11.6” HD anti-glare display and offers long battery life in a thin and portable design."
  },
  {
    id: 9,
    image: "https://tse2.mm.bing.net/th?id=OIP.Ur1S3uZMJQlcCOi9Z-sg5wHaHa&pid=Api",
    title: "Infinix Hot 50i",
    subtitle: "256GB Storage, 4GB RAM",
    price: 160800,
    slashedPrice: 170800,
    description: "The Infinix Hot 50i boasts a 6.7-inch display, powered by the Helio G81 chipset. It comes with 256GB storage and 4GB RAM, running on Android 14 with XOS 14.5. The device features a 5000 mAh battery, ensuring extended usage."
  },
  {
    id: 10,
    image: "https://tse4.mm.bing.net/th?id=OIP.KstWiysm8p6mGX-8FZPMKgHaHa&pid=Api",
    title: "Samsung Galaxy A05",
    subtitle: "64GB Storage, 4GB RAM",
    price: 111500,
    slashedPrice: 120000,
    description: "The Samsung Galaxy A05 features a 6.7-inch PLS LCD display with a resolution of 720 x 1600 pixels. It is powered by an octa-core processor with 4GB RAM and 64GB internal storage, expandable via microSDXC. The device includes a dual-camera setup with a 50 MP main sensor and a 5000 mAh battery."
  },
  {
    id: 11,
    image: "https://tse3.mm.bing.net/th?id=OIP._VM_NPirnDMUF5p_tye2yAHaHa&pid=Api",
    title: "Dell Latitude 3540 Laptop",
    subtitle: "Intel Core i3, 4GB RAM, 320GB Storage",
    price: 147000,
    slashedPrice: 160000,
    description: "The Dell Latitude 3540 Laptop is powered by a 4th Generation Intel Core i3 ULV processor. It supports up to 8GB DDR3L memory and features two internally accessible DDR3L connectors. The laptop offers reliable performance suitable for everyday tasks."
  },
  {
    id: 12,
    image: "https://tse1.mm.bing.net/th?id=OIP.LIYE3jPli-XV0tkEqA7gyAHaJ-&pid=Api",
    title: "Poco C61",
    subtitle: "6.71-inch Display, 3GB RAM, 64GB ROM, Android 14",
    price: 91203,
    slashedPrice: 110000,
    description: "The Poco C61 features a 6.71-inch IPS LCD display with a resolution of 720 × 1650 pixels. It is powered by the MediaTek Helio G36 processor, coupled with 3GB RAM and 64GB internal storage. The device runs on Android 14 and houses a 5000 mAh battery for prolonged usage."
  }
];

  

const LimitedStockDeals = () => {

  const navigate = useNavigate(); // Initialize useNavigate

  const [currentIndex, setCurrentIndex] = useState(0);

  // Clone the first few items at the end for a smooth infinite effect
  const extendedProducts = [...products, ...products];

  // Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      moveNext();
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const moveNext = () => {
    setCurrentIndex((prev) => (prev + 1) % products.length);
  };

  const movePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  return (
<section className="py-12 px-6">
  <h2 className="text-2xl font-bold text-center mb-6">😎🚀 Limited-Stock Deals </h2>

  <div className="relative container mx-auto max-w-5xl overflow-hidden">
    <div
      className="flex transition-transform duration-700 ease-in-out"
      style={{ transform: `translateX(-${currentIndex * 100}%)` }}
    >
       {products.map((product) => (
          <div 
            key={product.id} 
            className="w-full sm:w-1/2 md:w-1/3 flex-shrink-0 p-2"
            onClick={() => navigate(`/product/${product.id}`)} // Navigate on click
          >
            <div className="bg-white shadow-md rounded-lg p-4 relative cursor-pointer hover:shadow-lg transition">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 object-cover rounded-md"
              />

            {/* Discount Badge */}
            <span className="absolute top-4 left-4 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
              10% OFF
            </span>

            {/* Product Details */}
            <h3 className="text-lg font-semibold mt-3">{product.title}</h3>
            <p className="text-gray-600 text-sm">{product.subtitle}</p>

            {/* Pricing */}
            <div className="flex items-center space-x-2 mt-2">
              <span className="text-xl font-bold text-blue-600">
                {product.price}
              </span>
              <span className="text-gray-400 line-through">
                {product.slashedPrice}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* Navigation Buttons */}
    <button
      onClick={movePrev}
      className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
    >
      <ChevronLeft size={24} />
    </button>

    <button
      onClick={moveNext}
      className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
    >
      <ChevronRight size={24} />
    </button>
  </div>
</section>
  );
};

export default LimitedStockDeals;