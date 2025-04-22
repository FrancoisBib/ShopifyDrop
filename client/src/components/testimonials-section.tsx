import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    text: "Grâce à cette formation, j'ai créé ma boutique en moins d'une semaine et réalisé mes premières ventes en seulement 10 jours. Incroyable !",
    author: "Sarah L., 28 ans",
    rating: 5
  },
  {
    text: "J'ai adoré la clarté des explications et le support réactif. J'ai maintenant une source de revenus complémentaires stable.",
    author: "Michel K., 35 ans",
    rating: 4
  },
  {
    text: "Les modules sur la recherche de produits et les publicités Facebook ont complètement changé la donne. Mon taux de conversion a doublé !",
    author: "Emma R., 31 ans",
    rating: 5
  },
  {
    text: "En tant que débutant complet, j'ai trouvé cette formation incroyablement facile à suivre. Les instructions pas à pas ont rendu la création de ma boutique Shopify très simple.",
    author: "David P., 42 ans",
    rating: 5
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24 container mx-auto px-6">
      <motion.div 
        className="text-center max-w-3xl mx-auto mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Ce Que Disent Nos Élèves</h2>
        <p className="text-gray-600 text-lg">
          Découvrez les témoignages de ceux qui ont suivi notre formation et transformé leur vie
        </p>
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <motion.div 
            key={index}
            className="bg-white p-8 rounded-lg shadow-md border-l-4 border-blue-500"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <p className="text-gray-600 italic mb-4">"{testimonial.text}"</p>
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className={`h-5 w-5 mr-1 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`} 
                />
              ))}
              <strong className="text-gray-800 font-semibold ml-2">- {testimonial.author}</strong>
            </div>
          </motion.div>
        ))}
      </div>
      
      <motion.div 
        className="mt-12 bg-blue-50 p-6 rounded-lg max-w-2xl mx-auto text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <h3 className="text-xl font-semibold text-blue-800 mb-3">Satisfaction Garantie</h3>
        <p className="text-blue-700">
          Plus de 95% de nos étudiants sont satisfaits de la formation et la recommandent à leurs proches.
          Rejoignez les milliers d'entrepreneurs qui ont transformé leur vie grâce à notre méthode.
        </p>
      </motion.div>
    </section>
  );
}