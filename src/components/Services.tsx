import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Package, Truck, FileText, Shield, TrendingUp, ClipboardCheck } from "lucide-react";
import { motion } from "framer-motion";

export const Services = () => {
  const services = [
    {
      icon: Package,
      title: "Export Services",
      description: "Comprehensive export solutions including documentation, logistics coordination, and compliance management for global markets.",
    },
    {
      icon: TrendingUp,
      title: "Import Services",
      description: "Streamlined import processes with customs clearance, quality inspection, and timely delivery to your location.",
    },
    {
      icon: Truck,
      title: "Logistics Management",
      description: "End-to-end logistics solutions including warehousing, transportation, and supply chain optimization.",
    },
    {
      icon: FileText,
      title: "Documentation",
      description: "Complete documentation services including certificates, permits, and compliance paperwork for international trade.",
    },
    {
      icon: Shield,
      title: "Quality Inspection",
      description: "Rigorous quality control and inspection services to ensure products meet international standards and specifications.",
    },
    {
      icon: ClipboardCheck,
      title: "Trade Consulting",
      description: "Expert consultation on market entry strategies, trade regulations, and business development opportunities.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    },
  };

  return (
    <section className="py-20 bg-secondary overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive import and export solutions tailored to meet your business needs
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div key={index} variants={cardVariants}>
                <Card 
                  className="p-6 hover:shadow-xl transition-all duration-300 border-primary/10 hover:border-primary/30 group cursor-pointer h-full"
                >
                  <motion.div
                    className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link to="/services">
            <Button variant="outline" size="lg" className="hover:scale-105 transition-transform">
              View All Services
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
