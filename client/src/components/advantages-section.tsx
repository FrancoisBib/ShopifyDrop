import { motion } from "framer-motion";
import { Clock, DollarSign, Rocket, TrendingUp, Award, BarChart3 } from "lucide-react";

const advantages = [
  {
    icon: <Clock className="h-12 w-12" />,
    title: "Save Time",
    description: "All steps are clearly and concisely explained for quick implementation."
  },
  {
    icon: <DollarSign className="h-12 w-12" />,
    title: "Save Money",
    description: "Avoid common mistakes and unnecessary expenses with our expert advice."
  },
  {
    icon: <Rocket className="h-12 w-12" />,
    title: "Accelerate Your Results",
    description: "Proven strategies to reach your first $10,000 in sales quickly."
  },
  {
    icon: <TrendingUp className="h-12 w-12" />,
    title: "Sustainable Growth",
    description: "Build a business that develops over the long term with a solid foundation."
  },
  {
    icon: <Award className="h-12 w-12" />,
    title: "Recognized Expertise",
    description: "Training provided by experts who have proven themselves in dropshipping."
  },
  {
    icon: <BarChart3 className="h-12 w-12" />,
    title: "Precise Analysis",
    description: "Market and product analysis methods to identify the best opportunities."
  }
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

export default function AdvantagesSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Our Course</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover how our course can help you build a profitable and sustainable e-commerce business through Shopify dropshipping.
          </p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-xl p-8 transition-all duration-300 border border-gray-100 relative overflow-hidden group"
              variants={itemVariants}
            >
              <div className="absolute -right-12 -top-12 w-24 h-24 bg-blue-800/5 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
              <div className="mb-6 text-blue-800 relative">
                {advantage.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-blue-800 transition-colors">
                {advantage.title}
              </h3>
              <p className="text-gray-600">
                {advantage.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
        

      </div>
    </section>
  );
}