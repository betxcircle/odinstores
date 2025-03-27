import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom"; // Import useNavigate


const products = [
  {
    id: 19,
    image: "https://tse2.mm.bing.net/th?id=OIP.MyyeGr0WB3q0ILv1PYC7GgHaHa&pid=Api",
    title: "Royal 98\" QLED Google TV (RTV98QG8T)",
    subtitle: "Massive 98-inch QLED display with Google TV",
    description: "Experience cinematic brilliance with the Royal 98\" QLED Google TV, featuring a frameless bezel and a sharp QLED display that offers crystal-clear images. Equipped with HDR10 technology and Dolby Digital Plus for immersive audio, it also includes built-in Chromecast and voice control for effortless navigation. Additional features comprise VRR 144Hz gaming support, DVB-T2 technology for digital TV reception, Bluetooth connectivity, energy-saving mode, and a free wall bracket for easy installation.",
    price: 3500000,
    slashedPrice: 3800000,
  },
  {
    id: 20,
    image: "https://tse1.mm.bing.net/th?id=OIP.jtozxdsIQUWMg8Y2Qp7nxwHaHa&pid=Api",
    title: "Royal 2HP Penrose Air Inverter AC (PA18RSA-INV)",
    subtitle: "Energy-efficient inverter air conditioner",
    description: "The Royal 2HP Penrose Air Inverter AC offers super quick cooling with R32 environment-friendly gas. Its 180-degree spinning wind cooling ensures even air distribution, while the intelligent dusting switch maintains clean air. Enjoy up to 70% energy savings with features like Prime Guard for component longevity and a 20-year warranty on the inverter compressor.",
    price: 750000,
    slashedPrice: 800000,
  },
  {
    id: 21,
    image: "https://tse1.mm.bing.net/th?id=OIP.54f7h3cbTPsrbwIftUgVzQHaHa&pid=Api",
    title: "Royal 75cm Built-In Gas Hob (RBGH75G5B)",
    subtitle: "Modern gas hob with precise control",
    description: "Upgrade your kitchen with the Royal 75cm Built-In Gas Hob, featuring five burners for versatile cooking. Safety is enhanced with a flame safety device that cuts off gas if the flame goes out. The auto-electric ignition provides easy lighting, while the sleek stainless steel panel, tempered black glass surface, and round cast iron pan supports add elegance. Metallic knobs offer precise flame control.",
    price: 250000,
    slashedPrice: 300000,
  },
  {
    id: 22,
    image: "https://tse2.mm.bing.net/th?id=OIP.xEONv8llvtwqiiKfNJV7HAAAAA&pid=Api",
    title: "Royal 34-Litre Microwave (RMW34SMP)",
    subtitle: "Spacious microwave with multiple cooking modes",
    description: "The Royal 34-Litre Microwave offers simplicity and efficiency with a digital control panel and six power levels to tailor performance to your cooking needs. Ideal for reheating, defrosting, and quick meals, it features speed cooking and operates at 1000W. Its silver color adds a modern touch to any kitchen.",
    price: 180000,
    slashedPrice: 200000,
  },
  {
    id: 23,
    image: "https://tse3.mm.bing.net/th?id=OIP.d_cGIIQpyygAviQtVbYBtAAAAA&pid=Api",
    title: "Royal 78-Litre Built-In Oven (RBIE078S)",
    subtitle: "Large-capacity oven for baking and roasting",
    description: "The Royal 78-Litre Built-In Oven provides ample space for all your baking and roasting needs. Designed for modern kitchens, it offers multiple cooking functions and precise temperature control, ensuring delicious results every time. Its sleek design seamlessly integrates into your kitchen cabinetry.",
    price: 350000,
    slashedPrice: 400000,
  },
  {
    id: 24,
    image: "https://tse3.mm.bing.net/th?id=OIP.S-YajmMrDcJ1u6Lul9Qo_AHaOs&pid=Api",
    title: "HISENSE 306L Beverage Display Cooler",
    subtitle: "Spacious 306-liter capacity cooler",
    description: "The HISENSE 306L Beverage Display Cooler offers a generous 306-liter capacity, perfect for storing a variety of beverages. Its transparent display and adjustable shelves make organization easy, while the efficient cooling system ensures your drinks are always at the optimal temperature.",
    price: 649990,
    slashedPrice: 700000,
  },
  {
    id: 25,
    image: "https://tse4.mm.bing.net/th?id=OIP.GdcY_x10uf_VQxrIws5cEAHaEb&pid=Api",
    title: "LG Double Door Inverter Refrigerator, 471L",
    subtitle: "Deodorizer and energy-efficient technology",
    description: "The LG Double Door Inverter Refrigerator with a 471-liter capacity combines spacious storage with energy efficiency. Features include a deodorizer to keep your food fresh, multiple compartments for organized storage, and inverter technology for consistent cooling while saving energy.",
    price: 999990,
    slashedPrice: 1200000,
  },
  {
    id: 26,
    image: "https://tse3.mm.bing.net/th?id=OIP.7hFd6Qc-Li8Vo3yKfZxNmwHaFj&pid=Api",
    title: "SHARP 1HP Split AC 9000BTU-AH-A9ZTENP1",
    subtitle: "Superior cooling with energy efficiency",
    description: "The SHARP 1HP Split AC 9000BTU-AH-A9ZTENP1 delivers efficient cooling for smaller spaces. Designed for energy savings, it operates quietly and features a sleek design that complements any room décor. Its advanced filtration system ensures clean and fresh air circulation.",
    price: 379990,
    slashedPrice: 450000,
  },
  {
    id: 27,
    image: "https://tse2.mm.bing.net/th?id=OIP.xzPnblXFR6_Fl-Fy__JYdAHaHa&pid=Api",
    title: "SHARP 2HP Split AC 18000BTU – AH-A18ZTENP1",
    subtitle: "Powerful cooling for larger spaces",
    description: "The SHARP 2HP Split AC 18000BTU – AH-A18ZTENP1 is designed for larger spaces, providing powerful and efficient cooling. It features advanced technology for energy savings, a quiet operation, and an elegant design that enhances any interior. The unit also includes a multi-stage filtration system for improved air quality.",
    price: 599900,
    slashedPrice: 700000
  },
]
  
  

const NewArrivals = () => {
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
  <h2 className="text-2xl font-bold text-center mb-6">🔥🚀 New Arrivals</h2>

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

export default NewArrivals;