import { motion } from "framer-motion";

export const Stats = () => {
  return (
    <section className="py-16 bg-secondary overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div 
          className="flex flex-col items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center">
            <motion.div 
              className="text-2xl md:text-3xl font-semibold text-primary"
              animate={{ 
                scale: [1, 1.02, 1],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Scroll to explore more
            </motion.div>
            <div className="text-sm md:text-base text-muted-foreground">
              Discover our products, services and stories
            </div>
          </div>

          <motion.button
            type="button"
            aria-label="Scroll down"
            onClick={() =>
              window.scrollBy({ top: Math.round(window.innerHeight * 0.8), behavior: "smooth" })
            }
            className="p-3 rounded-full bg-muted/60 hover:bg-muted/80 focus:outline-none focus:ring-2 focus:ring-ring"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.svg
              className="w-6 h-6 text-primary"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <path d="M6 9l6 6 6-6" />
            </motion.svg>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};
