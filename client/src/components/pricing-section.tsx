import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { cn } from "@/lib/utils";

const pricingPlans = [
  {
    name: "Basic Package",
    price: "$297",
    description: "One-time payment",
    features: [
      { included: true, text: "Full Course Access (25+ Hours)" },
      { included: true, text: "Product Research Templates" },
      { included: true, text: "Shopify Store Setup Guide" },
      { included: true, text: "Supplier Contact Scripts" },
      { included: false, text: "Private Community Access" },
      { included: false, text: "Weekly Group Coaching" },
      { included: false, text: "Done-For-You Ad Templates" }
    ],
    popular: false
  },
  {
    name: "Pro Package",
    price: "$497",
    description: "One-time payment",
    features: [
      { included: true, text: "Everything in Basic Package" },
      { included: true, text: "Private Community Access" },
      { included: true, text: "Weekly Group Coaching (6 months)" },
      { included: true, text: "Done-For-You Ad Templates" },
      { included: true, text: "Winning Product Database" },
      { included: false, text: "1-on-1 Store Review" },
      { included: false, text: "Advanced Scaling Strategies" }
    ],
    popular: true
  },
  {
    name: "Elite Package",
    price: "$997",
    description: "One-time payment",
    features: [
      { included: true, text: "Everything in Pro Package" },
      { included: true, text: "1-on-1 Store Review & Optimization" },
      { included: true, text: "3 Private Coaching Calls" },
      { included: true, text: "Advanced Scaling Strategies" },
      { included: true, text: "Early Access to New Content" },
      { included: true, text: "Lifetime Updates" },
    ],
    popular: false
  }
];

export default function PricingSection() {
  return (
    <section id="pricing" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-dark">Affordable Investment, Unlimited Potential</h2>
          <p className="text-muted-foreground text-lg mt-4">Choose the plan that works best for your business goals</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              className={cn(
                "rounded-lg p-8 border border-gray-200 transition duration-300 hover:shadow-md",
                plan.popular ? "bg-white border-2 border-primary shadow-xl relative transform md:scale-105 z-10" : "bg-gray-50"
              )}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-[#f49342] text-white px-4 py-1 rounded-bl-lg rounded-tr-lg font-medium text-sm">
                  MOST POPULAR
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <p className="text-4xl font-bold">{plan.price}</p>
                <p className="text-muted-foreground">{plan.description}</p>
              </div>
              
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    {feature.included ? (
                      <>
                        <Check className="text-[#008060] mt-1" size={16} />
                        <span className="ml-3">{feature.text}</span>
                      </>
                    ) : (
                      <>
                        <X className="text-gray-400 mt-1" size={16} />
                        <span className="ml-3 text-gray-400">{feature.text}</span>
                      </>
                    )}
                  </li>
                ))}
              </ul>
              
              <a 
                href="#register" 
                className={cn(
                  "block w-full py-3 rounded-md text-center font-semibold transition duration-150",
                  plan.popular 
                    ? "bg-[#f49342] text-white hover:bg-opacity-90"
                    : "bg-white border border-primary text-primary hover:bg-primary hover:text-white"
                )}
              >
                {plan.popular ? "Enroll Now" : "Get Started"}
              </a>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center text-muted-foreground">
          <p className="font-medium">All packages come with our 30-day money-back guarantee</p>
          <p className="mt-2">
            If you don't see value in the course within 30 days, we'll refund your investment - no questions asked.
          </p>
        </div>
      </div>
    </section>
  );
}
