import { motion } from "framer-motion";
import { CheckCircle, Store, Box, TrendingUp, Users, Search, Target } from "lucide-react";

const keyPoints = [
  {
    icon: <Store className="h-10 w-10" />,
    title: "Create Your Professional Store",
    description: "Learn to build a Shopify store that inspires trust and offers an optimal user experience."
  },
  {
    icon: <Box className="h-10 w-10" />,
    title: "Select Reliable Suppliers",
    description: "Discover how to identify and collaborate with the best suppliers to ensure quality and speed."
  },
  {
    icon: <Target className="h-10 w-10" />,
    title: "Master Digital Advertising",
    description: "Facebook and Google Ads strategies to acquire customers at a lower cost."
  },
  {
    icon: <Search className="h-10 w-10" />,
    title: "Find Winning Products",
    description: "Advanced techniques to identify products with high sales and profit margin potential."
  },
  {
    icon: <TrendingUp className="h-10 w-10" />,
    title: "Maximize Your ROI",
    description: "Optimize every dollar invested to generate an optimal return on investment."
  },
  {
    icon: <Users className="h-10 w-10" />,
    title: "Grow Your Audience",
    description: "Build a loyal customer base and turn them into brand ambassadors."
  }
];

export default function QuickOverview() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-14">
          <motion.span 
            className="inline-block text-blue-800 font-semibold mb-3 uppercase tracking-wider text-sm"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            What You'll Learn
          </motion.span>
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-900 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Transform Your Vision Into a <span className="text-blue-800">Profitable E-commerce Business</span>
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Our comprehensive course guides you through every step of the process, from creating your store to automating your business.
          </motion.p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {keyPoints.map((point, index) => (
            <motion.div
              key={index}
              className="p-8 rounded-xl border border-gray-100 hover:border-blue-800/20 bg-white hover:bg-blue-50/30 transition-all duration-300 flex flex-col h-full group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
              whileHover={{ y: -5 }}
            >
              <div className="mb-5 text-blue-800 p-3 bg-blue-800/10 rounded-lg inline-block">
                {point.icon}
              </div>
              
              <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-blue-800 transition-colors">
                {point.title}
              </h3>
              
              <p className="text-gray-600 flex-grow">
                {point.description}
              </p>
              
              <div className="mt-4 pt-4 border-t border-gray-100 text-blue-800 flex items-center opacity-0 group-hover:opacity-100 transition-opacity">
                <CheckCircle className="h-5 w-5 mr-2" />
                <span className="text-sm font-medium">Included in the course</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
        

      </div>
    </section>
  );
}