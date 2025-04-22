import { motion } from "framer-motion";
import { 
  Store, 
  Search, 
  Facebook, 
  Handshake, 
  ListTodo, 
  TrendingUp
} from "lucide-react";

const features = [
  {
    icon: <Store className="text-primary text-2xl" />,
    title: "Shopify Store Setup",
    description: "Learn how to set up a professional Shopify store with optimized checkout flow and conversion-focused design."
  },
  {
    icon: <Search className="text-primary text-2xl" />,
    title: "Product Research",
    description: "Discover proven methods to find winning products that will generate consistent sales and profits."
  },
  {
    icon: <Facebook className="text-primary text-2xl" />,
    title: "Facebook Ads Mastery",
    description: "Learn how to create, test and scale profitable Facebook ad campaigns to drive targeted traffic."
  },
  {
    icon: <Handshake className="text-primary text-2xl" />,
    title: "Supplier Relationships",
    description: "Build relationships with reliable suppliers and negotiate better prices and shipping times."
  },
  {
    icon: <ListTodo className="text-primary text-2xl" />,
    title: "Operations & Automation",
    description: "Set up systems to automate order fulfillment, customer service, and inventory management."
  },
  {
    icon: <TrendingUp className="text-primary text-2xl" />,
    title: "Scaling Strategies",
    description: "Learn proven methods to scale your store from $0 to $10,000+ per month in revenue."
  }
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-dark">What You'll Learn</h2>
          <p className="text-muted-foreground text-lg mt-4">
            Our comprehensive curriculum covers everything you need to build a successful dropshipping business
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-md p-8 transition duration-300 hover:shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * (index % 3), duration: 0.5 }}
            >
              <div className="w-14 h-14 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="#register" 
            className="inline-block bg-primary text-white px-8 py-4 rounded-md text-center hover:bg-opacity-90 transition duration-150 font-semibold"
          >
            Get Started Today
          </a>
        </div>
      </div>
    </section>
  );
}
