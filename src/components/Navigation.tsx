import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/sree-nandi-logo.jpeg";
import { Cart } from "@/components/Cart";

export const Navigation = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const location = useLocation();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    const onResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false);
    };
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    document.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    window.addEventListener("scroll", onScroll);

    document.body.style.overflow = mobileOpen ? "hidden" : "";

    return () => {
      document.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("scroll", onScroll);
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
    setMobileOpen(false);
  }, [location.pathname]);

  const navItems = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/products", label: "Products" },
    { to: "/team", label: "Team" },
    { to: "/blog", label: "Blog" },
  ];

  return (
    <motion.nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-background/98 backdrop-blur-lg shadow-md border-b border-border" 
          : "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group min-w-0">
            <motion.img
              src={logo}
              alt="Sree Nandi Logo"
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg object-cover flex-shrink-0"
              loading="lazy"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            />
            <span className="font-bold text-xs sm:text-sm md:text-lg text-primary group-hover:text-primary/80 transition-colors truncate">
              <span className="hidden sm:inline">KH AGRO STOCKIST & EXPORTERS PVT. LTD.</span>
              <span className="sm:hidden">KH AGRO</span>
            </span>
          </Link>

          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <Link key={item.to} to={item.to}>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button 
                      variant="ghost"
                      className={`relative overflow-hidden ${
                        location.pathname === item.to ? "text-primary font-semibold" : ""
                      }`}
                    >
                      {item.label}
                      {location.pathname === item.to && (
                        <motion.div 
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                          layoutId="activeTab"
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                      )}
                    </Button>
                  </motion.div>
                </Link>
              ))}
              <Link to="/contact">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button className="bg-accent hover:bg-accent/90 shadow-lg shadow-accent/20">
                    Contact
                  </Button>
                </motion.div>
              </Link>
            </div>

            {/* Mobile hamburger toggle */}
            <motion.button
              type="button"
              aria-controls="mobile-navigation"
              aria-expanded={mobileOpen}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              onClick={() => setMobileOpen((s) => !s)}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-sm hover:bg-muted/60 focus:outline-none focus:ring-2 focus:ring-ring"
              whileTap={{ scale: 0.9 }}
            >
              <span className="sr-only">{mobileOpen ? "Close navigation" : "Open navigation"}</span>
              <svg
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                {mobileOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M3 12h18M3 6h18M3 18h18" />
                )}
              </svg>
            </motion.button>

            <Cart />
          </div>
        </div>
      </div>

      {/* Mobile sliding panel */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-navigation"
            ref={menuRef}
            className="md:hidden bg-background/98 backdrop-blur-lg border-t border-border"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="px-4 py-3 space-y-2">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.to}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link to={item.to} onClick={() => setMobileOpen(false)}>
                    <Button 
                      variant="ghost" 
                      className={`w-full justify-start py-3 ${
                        location.pathname === item.to ? "text-primary font-semibold bg-primary/5" : ""
                      }`}
                    >
                      {item.label}
                    </Button>
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navItems.length * 0.05 }}
              >
                <Link to="/contact" onClick={() => setMobileOpen(false)}>
                  <Button className="w-full bg-accent hover:bg-accent/90 py-3">Contact</Button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
