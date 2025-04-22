import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck } from "lucide-react";

export default function CTASection() {
  return (
    <section className="cta-section bg-gradient-to-r from-yellow-400 to-orange-500 text-center py-16 px-6 shadow-inner">
      <motion.div
        className="container mx-auto max-w-4xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Special Launch Offer!
        </h2>

        <p className="text-xl text-white mb-8">
          Access the complete course for only{" "}
          <span className="line-through text-red-500">$150</span>{" "}
          <strong className="text-green-600 text-2xl">$49</strong>
        </p>

        <p className="text-lg text-white mb-8 font-medium">
          Limited offer for the first 100 registrations
        </p>

        <motion.a
          href="https://iymwglqv.mychariow.com/prd_dvzx0z/checkout"
          className="relative overflow-hidden bg-white hover:bg-gray-100 text-blue-900 font-bold py-4 px-10 rounded-full shadow-md transition duration-300 transform hover:scale-105 flex items-center justify-center mx-auto inline-flex group"
          whileHover={{ y: -5 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="relative z-10 text-gray-800">Take Advantage of the Offer Now</span>
          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shine" />
        </motion.a>

        <div className="mt-6 flex justify-center items-center text-sm text-white">
          <ShieldCheck className="h-4 w-4 mr-2 text-green-400" />
          <span>30-day money back guarantee</span>
        </div>
      </motion.div>
    </section>
  );
}
