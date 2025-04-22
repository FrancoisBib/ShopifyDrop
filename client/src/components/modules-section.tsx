import { motion } from "framer-motion";
import { Star, Bookmark, CheckCircle2, ArrowRight, Gift } from "lucide-react";

const modules = [
  {
    number: "01",
    title: "Create a Shopify Store from A to Z",
    description: "Learn to set up your first professional Shopify store, from fundamentals to advanced configurations."
  },
  {
    number: "02",
    title: "Understand the Business Model",
    description: "Master the dropshipping business model, its advantages, limitations, and long-term profit potential."
  },
  {
    number: "03",
    title: "Identify Winning Products",
    description: "Discover techniques to identify products with high sales potential through market analysis and trend research."
  },
  {
    number: "04",
    title: "Find Reliable Suppliers",
    description: "Learn how to select the best suppliers on AliExpress and import their products into your store."
  },
  {
    number: "05",
    title: "Create a Strong Visual Identity",
    description: "Create a memorable brand with a professional logo and consistent graphic charter that inspires confidence."
  },
  {
    number: "06",
    title: "Import Customer Reviews",
    description: "Use review import tools to strengthen your products' credibility and improve conversion rates."
  },
  {
    number: "07",
    title: "Configure Payments and Shipping",
    description: "Optimize payment and shipping settings to offer a smooth shopping experience for your customers."
  },
  {
    number: "08",
    title: "Test Your Store",
    description: "Validate the entire customer journey and fix any issues before the official launch."
  },
  {
    number: "09",
    title: "Explore Alternatives",
    description: "Discover other platforms like CJDropshipping and Zendrop to diversify your supply sources."
  },
  {
    number: "10",
    title: "Create a Fashion Store with Trendsi",
    description: "Specialize in the fashion sector using Trendsi to exploit current trends."
  },
  {
    number: "11",
    title: "Connect Google Analytics",
    description: "Set up advanced analytics tools to understand visitor behavior and optimize your store."
  },
  {
    number: "12",
    title: "Launch Facebook Campaigns",
    description: "Master Facebook advertising campaigns to acquire qualified customers at a lower cost."
  }
];

// Séparation des modules en groupes pour l'affichage
const moduleGroups = [
  {
    title: "Foundations and Setup (Modules 1-4)",
    description: "Master the essential basics to start your dropshipping business with a solid foundation.",
    modules: modules.slice(0, 4)
  },
  {
    title: "Design and Configuration (Modules 5-8)",
    description: "Create an optimal user experience that inspires confidence and maximizes conversions.",
    modules: modules.slice(4, 8)
  },
  {
    title: "Optimization and Growth (Modules 9-12)",
    description: "Grow your business through advanced acquisition and analysis strategies.",
    modules: modules.slice(8, 12)
  }
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05
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

export default function ModulesSection() {
  return (
    <section id="modules" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <motion.span 
            className="inline-block text-blue-800 font-semibold mb-3 uppercase tracking-wider text-sm"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Complete Program
          </motion.span>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-balance">
            A Complete Course in <span className="text-blue-800">12 Modules</span>
          </h2>
          
          <p className="text-lg text-gray-600 mx-auto">
            A structured and progressive curriculum to take you from beginner to dropshipping expert in just a few weeks.
          </p>
        </motion.div>
        
        <div className="space-y-16">
          {moduleGroups.map((group, groupIndex) => (
            <div key={groupIndex} className="relative">
              <motion.div 
                className="mb-10 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * groupIndex }}
              >
                <div className="flex items-center mb-3">
                  <Bookmark className="text-blue-800 mr-2 h-5 w-5" />
                  <h3 className="text-2xl font-bold text-gray-800">{group.title}</h3>
                </div>
                <p className="text-gray-600">{group.description}</p>
              </motion.div>
              
              <motion.div
                className="space-y-4 max-w-4xl mx-auto"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
              >
                {group.modules.map((module, index) => (
                  <motion.div 
                    key={index}
                    className="bg-white rounded-xl border border-gray-100 shadow-md overflow-hidden group hover:shadow-lg hover:border-blue-800/20 transition-all duration-300"
                    variants={itemVariants}
                  >
                    <div className="p-6 relative">
                      <div className="absolute top-0 left-0 h-full w-1 bg-blue-800/80 transform scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-300"></div>
                      <div className="flex items-start">
                        <div className="w-14 h-14 bg-blue-800/10 rounded-xl flex items-center justify-center mr-5 shrink-0 group-hover:bg-blue-800/20 transition-colors">
                          <span className="text-blue-800 font-bold text-lg">{module.number}</span>
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-800 transition-colors mb-2">{module.title}</h3>
                          <p className="text-gray-600">{module.description}</p>
                        </div>
                      </div>
                      <div className="ml-[76px] mt-3 flex items-center text-blue-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <CheckCircle2 className="h-4 w-4 mr-2" />
                        <span className="text-sm font-medium">Included in your course</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
        
        <motion.div
          className="mt-16 p-8 bg-gradient-to-r from-blue-50 to-slate-50 rounded-xl max-w-4xl mx-auto border border-blue-100 shadow-md relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <div className="absolute -right-12 -top-12 w-40 h-40 bg-blue-200 rounded-full opacity-20"></div>
          <div className="flex items-start space-x-6 relative z-10">
            <div className="bg-white p-3 rounded-full shadow-md">
              <Gift className="text-green-600 h-8 w-8" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-green-600 mb-2">Exclusive Bonuses Included:</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle2 className="text-green-600 h-5 w-5 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-green-700">Complete Facebook Ads Training</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="text-green-600 h-5 w-5 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-green-700">TikTok Ads Strategy Guide</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
        

      </div>
    </section>
  );
}