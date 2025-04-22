import { motion } from "framer-motion";
import { Star, MessageSquare, CheckCircle } from "lucide-react";

const testimonials = [
  {
    content: "This course completely transformed my approach to e-commerce. In just 3 months, I was able to create a profitable store that now generates consistent income.",
    author: "Zanele L.",
    country: "South Africa",
    rating: 5
  },
  {
    content: "The advice on selecting winning products saved me thousands of dollars and valuable time. I would have made so many mistakes without this training.",
    author: "Thomas D.",
    country: "Canada",
    rating: 5
  },
  {
    content: "I've taken several dropshipping courses before, but none were as comprehensive and practical as this one. The step-by-step approach made it easy to follow.",
    author: "Sarah M.",
    country: "Morocco",
    rating: 5
  },
  {
    content: "The strategies for finding reliable suppliers and handling shipping times were worth the price alone. My customers are happy and my business is growing steadily.",
    author: "Kwabina T.",
    country: "Ghana",
    rating: 5
  }
];

const statistics = [
  { value: "98%", label: "Student Satisfaction" },
  { value: "4,700+", label: "Active Students" },
  { value: "50+", label: "Countries" },
  { value: "85%", label: "Success Rate" }
];

export default function InstructorSection() {
  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span 
            className="inline-block text-blue-800 font-semibold mb-3 uppercase tracking-wider text-sm"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Student Success Stories
          </motion.span>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-balance">
            What Our <span className="text-blue-800">Students</span> Say
          </h2>
          
          <p className="text-lg text-gray-600 mx-auto max-w-2xl">
            Don't just take our word for it. Hear from those who have already taken the course and transformed their e-commerce journey.
          </p>
        </div>

        <div className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {statistics.map((stat, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-xl p-6 shadow-md border border-gray-100 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <div className="text-3xl font-bold text-blue-800 mb-2">{stat.value}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 + (index * 0.1) }}
              >
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current text-yellow-400" />
                  ))}
                </div>
                <div className="relative">
                  <div className="absolute -top-2 -left-2 text-4xl text-blue-300 opacity-30">"</div>
                  <p className="text-gray-700 mb-4 italic relative z-10 pl-2">"{testimonial.content}"</p>
                </div>
                <div className="flex items-center mt-4">
                  <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold mr-3">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <p className="text-gray-700 font-medium">{testimonial.author}</p>
                    <p className="text-gray-500 text-sm">{testimonial.country}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="mt-16 bg-blue-50 p-8 rounded-xl border border-blue-100 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div className="flex items-start md:items-center flex-col md:flex-row">
              <div className="md:w-1/4 flex justify-center mb-6 md:mb-0">
                <MessageSquare className="h-20 w-20 text-blue-600" />
              </div>
              <div className="md:w-3/4">
                <h4 className="text-xl font-semibold text-blue-800 mb-4 flex items-center">
                  <CheckCircle className="h-5 w-5 mr-2 hidden md:inline" />
                  Limited Time Offer - 67% Off!
                </h4>
                <p className="text-blue-700 mb-4">
                  <span className="font-semibold">Don't miss this opportunity!</span> For only <span className="line-through text-red-500">$150</span> <span className="text-green-600 font-bold">$49</span>, 
                  get lifetime access to the course and future updates. The price will increase soon!
                </p>
                <a 
                  href="https://iymwglqv.mychariow.com/prd_dvzx0z/checkout" 
                  className="inline-block bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-white font-bold py-3 px-8 rounded-full transition duration-300 transform hover:-translate-y-1 shadow-md"
                >
                  Start Now
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}