// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// const categories = [
//     {
//       id: 1,
//       name: "Electronics",
//       image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/26/0996104/1.jpg?8010",
//       link: "https://www.jumia.com.ng/electronics/",
//     },
//     {
//       id: 2,
//       name: "Home Appliances",
//       image: "https://ng.jumia.is/cms/0-0-black-friday/2024/Thumbnails/appliances.png",
//       link: "https://www.jumia.com.ng/home-appliances/",
//     },
//     {
//       id: 3,
//       name: "Phones",
//       image: "https://ng.jumia.is/cms/0-0-black-friday/2024/Thumbnails/phones.png",
//       link: "/phones",
//     },
//     {
//       id: 4,
//       name: "Gadgets",
//       image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/07/8976272/1.jpg?4148",
//       link: "https://www.jumia.com.ng/gadgets/",
//     },
//     {
//       id: 5,
//       name: "Laptops",
//       image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/19/8487963/1.jpg?7909",
//       link: "/product/:productId",
//     },
//   ];
  

// const FeaturedCategories = () => {
  
//   const [scrollPosition, setScrollPosition] = useState(0);

//   const scrollLeft = () => setScrollPosition((prev) => Math.max(prev - 1, 0));
//   const scrollRight = () => setScrollPosition((prev) => Math.min(prev + 1, categories.length - 3));

//   return (
//     <section className="py-10 px-6">
//     <h2 className="text-2xl font-bold mb-6 text-center"> Featured Categories </h2>
    
//     {/* Desktop Grid */}
//     <div className="hidden md:grid grid-cols-3 lg:grid-cols-6 gap-4">
//       {categories.map((cat) => (
//         <Link key={cat.id} to={cat.link} className="relative group cursor-pointer">
//           <img src={cat.image} alt={cat.name} className="w-full h-40 object-cover rounded-lg" />
//           <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
//             <h2 className="text-white text-lg font-semibold">{cat.name}</h2>
//           </div>
//         </Link>
//       ))}
//     </div>

//     {/* Mobile Scrollable Carousel */}
//     <div className="relative md:hidden flex overflow-x-scroll gap-4 no-scrollbar">
//       {categories.map((cat, index) => (
//         <Link
//           key={cat.id}
//           to={cat.link}
//           className={`flex-none w-40 transform transition duration-500 ${index >= scrollPosition && index < scrollPosition + 3 ? "opacity-100" : "opacity-50"}`}
//         >
//           <img src={cat.image} alt={cat.name} className="w-full h-32 object-cover rounded-lg" />
//           <h3 className="text-center mt-2 font-medium">{cat.name}</h3>
//         </Link>
//       ))}
//     </div>

//     {/* Mobile Controls */}
//     <div className="md:hidden flex justify-center mt-4 gap-4">
//       <button onClick={scrollLeft} className="p-2 bg-gray-300 rounded-full"><ChevronLeft /></button>
//       <button onClick={scrollRight} className="p-2 bg-gray-300 rounded-full"><ChevronRight /></button>
//     </div>
//   </section>
//   );
// };

// export default FeaturedCategories;
import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

const categories = [
  {
    id: 1,
    name: "Electronics",
    image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/26/0996104/1.jpg?8010",
    link: "/category/electronics",
  },
  {
    id: 2,
    name: "Home Appliances",
    image: "https://ng.jumia.is/cms/0-0-black-friday/2024/Thumbnails/appliances.png",
    link: "/category/Home Appliances",
  },
  {
    id: 3,
    name: "phones",
    image: "https://ng.jumia.is/cms/0-0-black-friday/2024/Thumbnails/phones.png",
    link: "/category/phones",
  },
  {
    id: 4,
    name: "Gadgets",
    image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/07/8976272/1.jpg?4148",
    link: "/category/gadgets",
  },
  {
    id: 5,
    name: "laptops",
    image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/19/8487963/1.jpg?7909",
    link: "/category/laptops",
  },
];
  

const FeaturedCategories = () => {
  
  const [scrollPosition, setScrollPosition] = useState(0);

  const scrollLeft = () => setScrollPosition((prev) => Math.max(prev - 1, 0));
  const scrollRight = () => setScrollPosition((prev) => Math.min(prev + 1, categories.length - 3));

  return (
    <section className="py-10 px-6">
    <h2 className="text-2xl font-bold mb-6 text-center"> Featured Categories </h2>
    
    {/* Desktop Grid */}
    <div className="hidden md:grid grid-cols-3 lg:grid-cols-6 gap-4">
      {categories.map((cat) => (
        <Link key={cat.id} to={cat.link} className="relative group cursor-pointer">
          <img src={cat.image} alt={cat.name} className="w-full h-40 object-cover rounded-lg" />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
            <h2 className="text-white text-lg font-semibold">{cat.name}</h2>
          </div>
        </Link>
      ))}
    </div>

    {/* Mobile Scrollable Carousel */}
    <div className="relative md:hidden flex overflow-x-scroll gap-4 no-scrollbar">
      {categories.map((cat, index) => (
        <Link
          key={cat.id}
          to={cat.link}
          className={`flex-none w-40 transform transition duration-500 ${index >= scrollPosition && index < scrollPosition + 3 ? "opacity-100" : "opacity-50"}`}
        >
          <img src={cat.image} alt={cat.name} className="w-full h-32 object-cover rounded-lg" />
          <h3 className="text-center mt-2 font-medium">{cat.name}</h3>
        </Link>
      ))}
    </div>

    {/* Mobile Controls */}
    <div className="md:hidden flex justify-center mt-4 gap-4">
      <button onClick={scrollLeft} className="p-2 bg-gray-300 rounded-full"><ChevronLeft /></button>
      <button onClick={scrollRight} className="p-2 bg-gray-300 rounded-full"><ChevronRight /></button>
    </div>
  </section>
  );
};

export default FeaturedCategories;
