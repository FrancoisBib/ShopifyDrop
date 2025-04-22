import { useState } from "react";
import { motion } from "framer-motion";
import { HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Do I need any prior technical knowledge?",
    answer: "Absolutely not! This course is designed for beginners and guides you step by step, even if you've never created a website before."
  },
  {
    question: "What advertising budget should I plan to start with?",
    answer: "We show you how to start with a small budget (even $5-10 per day) and how to optimize it as your sales increase."
  },
  {
    question: "How much time do I need to commit per week?",
    answer: "It depends on your goals, but a few hours per week are enough to start seeing results. The course is accessible for life, so you can progress at your own pace."
  },
  {
    question: "Can I get a refund if I'm not satisfied?",
    answer: "Yes, we offer a 30-day satisfaction guarantee. If the course doesn't meet your expectations, contact us for a full refund."
  },
  {
    question: "Does dropshipping still work in 2025?",
    answer: "Absolutely! The market is constantly evolving, but our course is regularly updated to teach you strategies that work today. Many entrepreneurs continue to succeed with this business model."
  },
  {
    question: "How do I manage delivery times with suppliers?",
    answer: "We teach you strategies to minimize delivery issues, including how to select the right suppliers, how to communicate timeframes to your customers, and how to use alternatives like CJDropshipping for faster deliveries."
  }
];

export default function FaqSection() {
  const [openItem, setOpenItem] = useState<string | null>(null);

  return (
    <section id="faq" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Frequently Asked Questions</h2>
          <p className="text-gray-600 text-lg mt-4">
            Everything you need to know before starting your journey
          </p>
        </motion.div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 * index, duration: 0.5 }}
              >
                <AccordionItem value={`faq-${index}`} className="border border-gray-200 rounded-lg bg-white">
                  <AccordionTrigger className="px-5 py-4 hover:no-underline">
                    <div className="flex items-center w-full text-left">
                      <HelpCircle className="text-blue-500 h-5 w-5 flex-shrink-0 mr-3" />
                      <h3 className="font-semibold text-lg text-gray-800">{faq.question}</h3>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-5 pb-5 pt-2 text-gray-600 pl-11">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
          
          <motion.div 
            className="mt-12 bg-blue-50 p-6 rounded-lg text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h3 className="text-xl font-semibold text-blue-800 mb-2">Have more questions?</h3>
            <p className="text-blue-700 mb-4">
              Our team will be happy to help you. Don't hesitate to contact us.
            </p>
            <a 
              href="mailto:hiformaxpert@gmail.com" 
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-full transition duration-300"
            >
              Contact Us
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
