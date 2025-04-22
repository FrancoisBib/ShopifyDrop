import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, CheckCircle } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden min-h-screen flex flex-col justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
          backgroundPosition: "center 30%"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-700/95 via-blue-600/90 to-indigo-800/80"></div>
      </div>
      
      <div className="container mx-auto px-6 py-10 md:py-0 relative z-10 flex-grow flex items-center">
        <div className="grid md:grid-cols-5 gap-8 items-center">
          <motion.div 
            className="md:col-span-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div 
              initial={{ opacity: 0, y: 10 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-block mb-5 px-5 py-2 bg-blue-900 rounded-full shadow-md"
            >
              <p className="text-white text-sm font-bold tracking-wide">E-commerce Training 2025</p>
            </motion.div>
            
            <motion.h1 
              className="text-white text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Create Your Profitable <span className="text-yellow-400">Dropshipping Business</span>
            </motion.h1>
            
            <motion.p 
              className="text-white text-lg md:text-xl mt-7 opacity-95 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              Learn how to create, optimize and develop your online store <strong>without holding inventory</strong>. 
              This training will give you <strong>all the keys</strong> to offer a smooth experience, 
              build a strong brand and generate sales!
            </motion.p>
            
            <motion.div 
              className="mt-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <a 
                href="https://iymwglqv.mychariow.com/prd_dvzx0z/checkout" 
                className={cn(
                  "relative overflow-hidden bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-white px-10 py-5 rounded-full text-center group shadow-lg",
                  "hover:shadow-xl transition-all duration-300 font-bold text-lg flex items-center justify-center transform hover:-translate-y-1 inline-flex"
                )}
              >
                <span className="relative z-10">Start Now</span>
                <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shine" />
              </a>
              
              <div className="mt-6 flex items-center">
                <ShieldCheck className="text-green-400 h-5 w-5 mr-2 flex-shrink-0" />
                <p className="text-white text-base">
                  <span className="font-semibold">30-day money back guarantee</span> if you're not satisfied
                </p>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="md:col-span-2 hidden md:block"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white/20 shadow-xl">
              <h3 className="text-white text-lg font-bold mb-4">What you will learn:</h3>
              <ul className="space-y-3">
                {["Create a profitable store", "Find winning products", "Implement effective marketing", "Automate your business"].map((item, i) => (
                  <motion.li 
                    key={i} 
                    className="flex items-start"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 + (i * 0.1), duration: 0.5 }}
                  >
                    <CheckCircle className="text-green-400 h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-white">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent z-10"></div>
    </section>
  );
}
