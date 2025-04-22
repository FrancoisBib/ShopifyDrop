import { useState } from "react";
import { motion } from "framer-motion";
import { Gift, ShieldCheck } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { insertRegistrationSchema } from "@shared/schema";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const formSchema = insertRegistrationSchema.extend({
  email: z.string().email("Veuillez entrer une adresse email valide"),
  fullName: z.string().min(3, "Veuillez entrer votre nom complet"),
  phone: z.string().nullable().optional(),
  package: z.string({
    required_error: "Veuillez sélectionner une formule",
  }),
});

const bonuses = [
  {
    title: "Bonus #1: Guide d'Optimisation des Conversions",
    description: "Transformez les visiteurs en clients avec nos tactiques d'optimisation éprouvées"
  },
  {
    title: "Bonus #2: Scripts de Négociation Fournisseurs",
    description: "Obtenez de meilleurs prix et délais de livraison avec nos modèles de communication"
  },
  {
    title: "Bonus #3: Plan de Lancement sur 30 Jours",
    description: "Calendrier étape par étape pour lancer votre boutique et commencer à vendre"
  }
];

export default function RegistrationSection() {
  const { toast } = useToast();
  
  // Transtypage explicite du formulaire pour garantir que le champ phone reste une string
  const form = useForm<{
    fullName: string;
    email: string;
    phone: string;
    package: string;
  }>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      package: "pro",
    },
  });

  const registerMutation = useMutation({
    mutationFn: (data: z.infer<typeof formSchema>) => {
      return apiRequest("POST", "/api/register", data);
    },
    onSuccess: () => {
      toast({
        title: "Inscription réussie !",
        description: "Merci de vous être inscrit au cours de dropshipping Shopify !",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Échec de l'inscription",
        description: error instanceof Error ? error.message : "Une erreur s'est produite lors de l'inscription.",
        variant: "destructive",
      });
    },
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    registerMutation.mutate(data);
  }

  return (
    <section id="register" className="py-16 md:py-24 bg-primary bg-opacity-5">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">
                Réservez votre place maintenant
              </h2>
              
              <p className="text-muted-foreground mb-6">
                Faites le premier pas vers la création de votre entreprise e-commerce rentable. Les inscriptions sont actuellement ouvertes – réservez votre place avant la fermeture des inscriptions.
              </p>
              
              <div className="space-y-6 mb-8">
                {bonuses.map((bonus, index) => (
                  <div key={index} className="flex items-start">
                    <div className="text-[#f49342] mt-1"><Gift size={18} /></div>
                    <div className="ml-4">
                      <p className="font-semibold">{bonus.title}</p>
                      <p className="text-muted-foreground">{bonus.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="bg-white p-6 rounded-lg border border-gray-200 mb-6">
                <div className="flex items-center">
                  <img 
                    className="w-16 h-16 rounded-full" 
                    src="https://randomuser.me/api/portraits/men/72.jpg" 
                    alt="Témoignage d'étudiant" 
                  />
                  <div className="ml-4">
                    <p className="italic text-muted-foreground">
                      "Je travaillais plus de 60 heures par semaine dans mon emploi salarié. Six mois après avoir suivi cette formation, j'ai démissionné pour gérer mon entreprise de dropshipping à plein temps. La meilleure décision que j'aie jamais prise."
                    </p>
                    <p className="font-semibold mt-2">Mathieu Dubois</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
                <h3 className="text-2xl font-bold text-dark mb-6">Inscrivez-vous Maintenant</h3>
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormField
                      control={form.control}
                      name="fullName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nom Complet</FormLabel>
                          <FormControl>
                            <Input placeholder="Votre nom" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Adresse Email</FormLabel>
                          <FormControl>
                            <Input placeholder="votre@email.fr" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Numéro de Téléphone (optionnel)</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Votre numéro de téléphone" 
                              value={field.value || ''} 
                              onChange={field.onChange}
                              onBlur={field.onBlur}
                              disabled={field.disabled}
                              name={field.name}
                              ref={field.ref}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="package"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Sélectionnez une Formule</FormLabel>
                          <Select 
                            onValueChange={field.onChange} 
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Sélectionnez une formule" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="basic">Formule Basique - 297€</SelectItem>
                              <SelectItem value="pro">Formule Pro - 497€</SelectItem>
                              <SelectItem value="elite">Formule Elite - 997€</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-[#f49342] text-white py-7 font-semibold text-lg hover:bg-opacity-90 transition duration-150"
                      disabled={registerMutation.isPending}
                    >
                      {registerMutation.isPending ? "Envoi en cours..." : "Réserver Votre Place"}
                    </Button>
                    
                    <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground mt-4">
                      <ShieldCheck className="h-4 w-4 text-green-500" />
                      <p>Paiement sécurisé. Garantie satisfait ou remboursé pendant 30 jours.</p>
                    </div>
                  </form>
                </Form>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
