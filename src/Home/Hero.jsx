import { useState,useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const categories = [
  {id: 1, name: "Electronics", image: "./adBanner.png" },
  { id: 2,name: "Gadgets", image: "./adBanner2.png" },
  {id: 3,name: "Gadgets", image: "./adBanner3.png" },
];

const rightCategories = [
  { id: 4, name: "Phones", image: "./BlueAdBanner.png" },
  { id: 5, name: "Chargers", image: "./RedBanner.png" },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % categories.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + categories.length) % categories.length);

  const [slideIndex, setSlideIndex] = useState(0);
  // Auto-slide effect
  useEffect(() => {
    const timer = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex < categories.length - 1 ? prevIndex + 1 : 0));
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  // Manual Slide Control
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : categories.length - 1);
    } else {
      setSlideIndex(slideIndex < categories.length - 1 ? slideIndex + 1 : 0);
    }
  };
  return (
    <section className="py-10 px-6">
      <div className="container mx-auto grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 h-[350px]">
        
        {/* Left: Auto-Sliding Big Banner */}
        <div className="relative overflow-hidden rounded-lg md:col-span-2 lg:col-span-2 w-full h-full">
          <img
            src={categories[slideIndex].image}
            alt={categories[slideIndex].name}
            className="w-full h-full object-cover transition-transform duration-700"
          />
          {/* Left Button */}
          <button
            onClick={() => handleClick("left")}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition"
            aria-label="Previous Slide"
          >
            <ChevronLeft size={24} />
          </button>
          {/* Right Button */}
          <button
            onClick={() => handleClick("right")}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition"
            aria-label="Next Slide"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Right: Two Smaller Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
          {rightCategories.map((cat) => (
            <div key={cat.id} className="relative group cursor-pointer overflow-hidden rounded-lg">
              <img src={cat.image} alt={cat.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                <h2 className="text-white text-lg font-semibold">{cat.name}</h2>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>


  );
};

export default Hero;


  