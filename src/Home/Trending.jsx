import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { ChevronLeft, ChevronRight } from "lucide-react";

const products = [
    { 
      id: 1, 
      image: "https://tse1.mm.bing.net/th?id=OIP.k9W3mcCclopv01zbnhBbnQHaDt&pid=Api", 
      title: "Apple iPhone X", 
      subtitle: "Latest model with 5G", 
      price: "₦150,000", 
      slashedPrice: "₦180,000" ,
      //link: '/product/:productId'
    },
    { 
      id: 2, 
      image: "https://tse3.mm.bing.net/th?id=OIP.FCB33TXqP_3eepbjjans_AHaHa&pid=Api", 
      title: "Wireless Headphones", 
      subtitle: "Noise-canceling", 
      price: "₦15,000", 
      slashedPrice: "₦20,000" 
    },
    { 
      id: 3, 
      image: "https://tse1.mm.bing.net/th?id=OIP.XD2SaCn9tIASciyu0NPkhAHaFB&pid=Api", 
      title: "Gaming Laptop", 
      subtitle: "16GB RAM, RTX 3070", 
      price: "₦3,750,000", 
      slashedPrice: "₦4,200,000" 
    },
    { 
      id: 4, 
      image: "https://tse4.mm.bing.net/th?id=OIP._zov5r4BGpt37SU8-nDH9gHaDg&pid=Api", 
      title: "Smart Watch", 
      subtitle: "Fitness tracking", 
      price: "₦45,000", 
      slashedPrice: "₦55,000" 
    },
    { 
      id: 5, 
      image: "https://tse4.mm.bing.net/th?id=OIP.RiVwAXAvFWLxgfOFgmsYAAHaHa&pid=Api", 
      title: "Bluetooth Speaker", 
      subtitle: "Deep bass", 
      price: "₦15,800", 
      slashedPrice: "₦20,000" 
    },
    { 
      id: 6, 
      image: "https://tse3.mm.bing.net/th?id=OIP.fexQtKP-DjROZv8dOCXKGAHaHa&pid=Api", 
      title: "4K Smart TV", 
      subtitle: "65-inch Ultra HD", 
      price: "₦1,500,000", 
      slashedPrice: "₦1,800,000" 
    }
  ];
  

const Trending = () => {
    const navigate = useNavigate(); // Initialize useNavigate

   const [currentIndex, setCurrentIndex] = useState(0);
  const extendedProducts = [...products, ...products]; // Duplicate to create an infinite effect

  useEffect(() => {
    const timer = setInterval(() => {
      moveNext();
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const moveNext = () => {
    if (currentIndex === products.length) {
      // Instantly reset without transition for seamless looping
      setCurrentIndex(0);
    } else {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const movePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? products.length - 1 : prev - 1));
  };

  

  return (
    <section className="py-12 px-6">
    <h2 className="text-2xl font-bold text-center mb-6">🔥 Trending Products</h2>

    <div className="relative container mx-auto max-w-5xl overflow-hidden">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${(currentIndex % products.length) * 100}%)`,
        }}
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
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={moveNext}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  </section>
  );
};

export default Trending;
