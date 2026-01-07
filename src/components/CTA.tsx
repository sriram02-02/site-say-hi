import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const CTA = () => {
  return (
    <section className="py-20 bg-primary relative overflow-hidden">
      {/* Animated background shapes */}
      <motion.div 
        className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2"
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div 
        className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/2 translate-y-1/2"
        animate={{ 
          scale: [1, 1.3, 1],
          rotate: [360, 180, 0],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />
      <motion.div 
        className="absolute top-1/2 left-1/4 w-32 h-32 bg-accent/20 rounded-full blur-xl"
        animate={{ 
          y: [0, -30, 0],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ duration: 5, repeat: Infinity }}
      />
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-white mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Ready to Expand Your Business Globally?
        </motion.h2>
        <motion.p 
          className="text-white/90 max-w-2xl mx-auto mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Get in touch with our team of experts to discuss your import/export needs and discover how we can help grow your business internationally.
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Link to="/contact">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Button size="lg" className="bg-accent hover:bg-accent/90 shadow-lg shadow-accent/25">
                Get Started Today
              </Button>
            </motion.div>
          </Link>
          <Link to="/products">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-lg">
                Browse Products
              </Button>
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
