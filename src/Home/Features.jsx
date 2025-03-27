import { Truck, MessageCircle, CreditCard, Tag, ShieldCheck, Headphones } from "lucide-react";

const features = [
  { id: 1, icon: <Truck size={32} className="text-blue-500" />, title: "Fast Delivery", subtitle: "Get your products quickly with our express shipping." },
  { id: 2, icon: <MessageCircle size={32} className="text-green-500" />, title: "24/7 Support", subtitle: "We're here to help anytime you need assistance." },
  { id: 3, icon: <CreditCard size={32} className="text-purple-500" />, title: "Secure Payments", subtitle: "Safe and trusted payment methods for you." },
  { id: 4, icon: <Tag size={32} className="text-orange-500" />, title: "Best Prices", subtitle: "Unbeatable deals and discounts every day." },
  { id: 5, icon: <ShieldCheck size={32} className="text-red-500" />, title: "Trusted Quality", subtitle: "Guaranteed quality from verified sellers." },
  { id: 6, icon: <Headphones size={32} className="text-yellow-500" />, title: "Customer Service", subtitle: "Dedicated support team to assist you anytime." },
];

const Features = () => {
  return (
    <section className="py-12 px-4">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6">
        {features.map((feature, index) => (
          <div 
            key={feature.id} 
            className={`flex items-center p-4 bg-white shadow-md rounded-lg ${
              index < 3 ? "sm:justify-start" : "sm:justify-end"
            }`}
          >
            <div className="p-1 bg-gray-100 rounded-full">
              {feature.icon}
            </div>
            <div className="ml-2.5">
              <h5 className="text-lg font-semibold">{feature.title}</h5>
              <p className="text-gray-600 text-sm">{feature.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
