import { motion } from "framer-motion";
import { Users } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="about bg-blue-50 py-16 px-6">
      <div className="container mx-auto text-center max-w-3xl">
        {/* Utiliser l'icône au lieu d'une photo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Users className="text-blue-600 h-16 w-16 mx-auto mb-6" />
          <h2 className="text-3xl font-semibold mb-6 text-gray-800">À Propos du Formateur</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Avec 5 ans de succès dans l'e-commerce et plusieurs boutiques prospères, j'ai aidé plus de 50 entrepreneurs à lancer et développer leurs entreprises de dropshipping. Grâce à ma collaboration avec FormaXpert, je partage maintenant mes stratégies éprouvées pour aider les africains à débuter leur parcours dans le dropshipping.
          </p>
        </motion.div>
      </div>
    </section>
  );
}