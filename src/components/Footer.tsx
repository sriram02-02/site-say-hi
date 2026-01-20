import { Link } from "react-router-dom";
import { Facebook, Linkedin, Instagram } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-[#2c3545] text-white">
      <div className="container mx-auto px-3 sm:px-4 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Company Info */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">
              KH AGRO STOCKIST & EXPORTERS PVT. LTD.
            </h3>
            <p className="text-white/80 mb-4 sm:mb-6 text-sm sm:text-base">
              Your trusted partner for premium quality agricultural exports including rice, pulses, and authentic spices.
            </p>
            <div className="flex gap-4 justify-center sm:justify-start">
              <a 
                href="https://www.facebook.com/profile.php?id=61586798253044" 
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors" 
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="https://x.com/khagroexports" 
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors" 
                aria-label="X"
              >
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/khagroexports"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href="https://www.instagram.com/khagrofoods?igsh=MXdrMjdiOG5lc2Izdw==" 
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors" 
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Quick Links</h3>
            <ul className="space-y-1 sm:space-y-2">
              <li><Link to="/about" className="text-white/80 hover:text-accent transition-colors text-sm sm:text-base">About</Link></li>
              <li><Link to="/products" className="text-white/80 hover:text-accent transition-colors text-sm sm:text-base">Products</Link></li>
              <li><Link to="/team" className="text-white/80 hover:text-accent transition-colors text-sm sm:text-base">Team & Infrastructure</Link></li>
              <li><Link to="/blog" className="text-white/80 hover:text-accent transition-colors text-sm sm:text-base">Blog & News</Link></li>
              <li><Link to="/contact" className="text-white/80 hover:text-accent transition-colors text-sm sm:text-base">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center sm:text-left sm:col-span-2 md:col-span-1">
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Contact</h3>
            <div className="space-y-2 sm:space-y-3 text-white/80 text-sm sm:text-base">
              <p>
                Flat No. 304, Krisals County,<br />
                Syamala Nagar, Guntur -<br />
                522006, Andhra Pradesh,<br />
                India
              </p>
              <p><span className="font-semibold">Primary:</span> +91 9848938837</p>
              <p><span className="text-xs sm:text-sm">Alternate:</span> +91 9948547000</p>
              <p className="break-all">khagrofoods@gmail.com</p>
              <p className="break-all">khagroexporters@gmail.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-3 sm:px-4 py-3 sm:py-4">
          <p className="text-center text-white/60 text-xs sm:text-sm">
            © 2024 KH AGRO STOCKIST & EXPORTERS PVT. LTD. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
