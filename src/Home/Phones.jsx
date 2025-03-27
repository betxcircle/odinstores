import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const phones = [
    { 
      id: 1, 
      name: "Samsung Galaxy S25 Ultra", 
      image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/12/8537104/1.jpg?5943", 
      price: "₦1,699,000", 
      discount: "Varies", 
    },
    { 
      id: 2, 
      name: "Samsung Galaxy A54 5G", 
      image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/28/2223353/1.jpg?9065", 
      price: "₦350,000", 
      discount: "5% Off", 
      url: "https://www.jamarahome.com/products/samsung-galaxy-a54-5g"
    },
    { 
      id: 3, 
      name: "OPPO Reno 13F Dual Sim", 
      image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/19/0449604/1.jpg?2986", 
      price: "₦650,000", 
      discount: "Varies", 
      url: "https://www.justfones.ng/oppo-reno-13f-dual-sim-12gb-ram-512gb-5g.html"
    },
    { 
      id: 4, 
      name: "Xiaomi Red Mi Pro", 
      image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/71/1560473/1.jpg?9428", 
      price: "₦463,807", 
      discount: "Varies", 
      url: "https://www.justfones.ng/xiaomi-15-ultra-dual-sim-16gb-ram-512gb-1tb-5g.html"
    },
    { 
      id: 5, 
      name: "Vivo X200 Pro Dual SIM", 
      image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/02/8842704/1.jpg?6109", 
      price: "₦2,450,000", 
      discount: "Varies", 
    },
    { 
      id: 6, 
      name: "Samsung Galaxy Z Fold 6 5G", 
      image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/30/4418963/1.jpg?5787", 
      price: "₦1,997,999", 
      discount: "Varies", 
      url: "https://www.jumia.com.ng/samsung-galaxy-z-fold-6-5g-7.6-12gb-256gb-rom-dual-sim-large-screen-256gb-263456789.html"
    },
  ];
  
  
  const Phones = () => {
    return (
      <section className="py-10 px-6">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Phones</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {phones.map((laptop) => (
              <div key={laptop.id} className="border rounded-lg p-4 shadow-md">
                <img src={laptop.image} alt={laptop.name} className="w-full h-40 object-contain mb-4" />
                <h3 className="text-lg font-semibold">{laptop.name}</h3>
                <p className="text-gray-600">{laptop.price} <span className="text-red-500 text-sm">{laptop.discount}</span></p>
                <button className="mt-2 bg-blue-500 text-white py-1 px-4 rounded">Shop Now</button>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Phones;
  