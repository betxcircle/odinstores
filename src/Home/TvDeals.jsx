import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const products = [
  { 
    id: 13, 
    image: "https://tse3.mm.bing.net/th?id=OIP.XjAsi1ynCCJ86jWll0h-dQHaE8&pid=Api", 
    title: "Samsung 85\" UHD Ultra Slim LED TV", 
    subtitle: "85-inch 4K UHD with HDR10+ support", 
    price: 3500000, 
    slashedPrice: 4000000,
    description: "The Samsung 85-inch Crystal UHD DU7000 4K Tizen OS Smart TV offers breathtaking clarity with its Crystal Processor 4K, delivering content in stunning 4K resolution. With HDR10+ support, it provides a wider range of colors and brightness, enhancing every detail. Its slim, boundless screen design seamlessly integrates into any space, while the Samsung Tizen OS ensures a user-friendly interface for accessing your favorite apps and content. Additional features include PurColor for vibrant visuals, Q-Symphony for immersive sound, and Motion Xcelerator for smooth gameplay."
  },
  { 
    id: 14, 
    image: "https://tse1.mm.bing.net/th?id=OIP.Q5E-nr7CYzi-0IY-QghCHQHaHa&pid=Api", 
    title: "Hisense 50\" A6 Series Smart UHD 4K TV", 
    subtitle: "50-inch 4K UHD with Smart Features", 
    price: 469500, 
    slashedPrice: 500000,
    description: "The Hisense 50-inch A6 Series Smart UHD 4K TV delivers true 4K resolution for crisp and clear visuals. Equipped with Bluetooth, Netflix, YouTube, and the DSTV Now App, it offers a diverse entertainment experience. The HDR 10+ decoding enhances picture quality, while the VIDAA operating system ensures smooth navigation. Additional features include 4K upscaling, DTS Studio Sound for immersive audio, and multiple connectivity options with 2 USB ports and 3 HDMI inputs."
  },
  { 
    id: 15, 
    image: "https://tse3.mm.bing.net/th?id=OIP.kPBNIpnIpE3MS8ZuB9SFgAHaHa&pid=Api", 
    title: "Hikers 43\" Frameless Android Smart TV", 
    subtitle: "43-inch Full HD with Android Smart OS", 
    price: 198989, 
    slashedPrice: 220000,
    description: "The Hikers 43-inch Frameless Android Smart TV combines sleek design with smart functionality. Its frameless display offers an expansive viewing area, while the Full HD resolution ensures sharp and vibrant images. Powered by the Android Smart OS, it provides access to a wide range of apps and streaming services, enhancing your entertainment options."
  },
  { 
    id: 16, 
    image: "https://tse3.mm.bing.net/th?id=OIP.uhCQhNNFZFNoSFb8Kv_CvwHaFj&pid=Api", 
    title: "Samsung 65\" Quantum HDR Ultra HD Smart OLED TV", 
    subtitle: "65-inch OLED with Quantum HDR", 
    price: 5000000, 
    slashedPrice: 5500000,
    description: "The Samsung 65-inch Quantum HDR Ultra HD Smart OLED TV delivers exceptional picture quality with its OLED display and Quantum HDR technology. Experience deep blacks, vibrant colors, and enhanced contrast for a truly immersive viewing experience. Its smart capabilities allow seamless access to various streaming services and apps, making it a centerpiece for home entertainment."
  },
  { 
    id: 17, 
    image: "https://tse3.mm.bing.net/th?id=OIP.URNvM2X2AwclYzR7wXf69wHaHa&pid=Api", 
    title: "Amani 43” UHD ANDROID Smart TV", 
    subtitle: "43-inch UHD Smart TV with Android OS", 
    price: 198990, 
    slashedPrice: 250000,
    description: "The Amani 43-inch UHD Android Smart TV offers ultra-high-definition visuals for a captivating viewing experience. Equipped with the Android operating system, it provides access to numerous apps and streaming platforms. Its sleek design and smart features make it a versatile addition to any entertainment setup."
  },
  { 
    id: 18, 
    image: "https://tse3.mm.bing.net/th?id=OIP.59M02HBDG5EM-9ZmrrzsDAHaE6&pid=Api", 
    title: "LG 65\" SIGNATURE OLED R Rollable TV", 
    subtitle: "65-inch OLED Rollable TV with 4K Resolution", 
    price: 79698300, 
    slashedPrice: 80000000,
    description: "The LG 65-inch SIGNATURE OLED R Rollable TV represents the pinnacle of television innovation. Its rollable design allows the screen to retract into its base, offering a unique blend of form and function. With 4K resolution and OLED technology, it delivers stunning picture quality, while its advanced features and sleek design redefine the concept of a modern TV."
  }
];
  

const TvDeals = () => {
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
    <h2 className="text-2xl font-bold text-center mb-6"> 💎 Best TV Deals – Grab Yours Today</h2>
  
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

export default TvDeals;