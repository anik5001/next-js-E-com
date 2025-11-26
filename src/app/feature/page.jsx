import { Clock, ShieldCheck, ShoppingBag, Truck } from "lucide-react";

const FEATURES = [
  {
    icon: <Truck className="w-8 h-8 text-blue-600" />,
    title: "Free Shipping",
    description: "On all orders over $50. Global delivery available.",
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-blue-600" />,
    title: "Secure Payment",
    description: "100% secure payment with 256-bit encryption.",
  },
  {
    icon: <Clock className="w-8 h-8 text-blue-600" />,
    title: "24/7 Support",
    description: "Dedicated support team ready to help you anytime.",
  },
  {
    icon: <ShoppingBag className="w-8 h-8 text-blue-600" />,
    title: "30-Day Returns",
    description: "Not satisfied? Return it within 30 days for free.",
  },
];

export default function Feature() {
  return (
    <section  className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 border border-slate-100 group"
            >
              <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
