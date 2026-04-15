import { useState } from "react";
import { Phone, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Treatments", href: "#treatments" },
  { label: "Gallery", href: "#gallery" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-md border-b border-border">
      <div className="container flex items-center justify-between h-16 md:h-20">
        <a href="#" className="flex items-center gap-2">
          <span className="text-2xl font-heading font-bold text-primary">Smile Care</span>
          <span className="hidden sm:inline text-sm text-muted-foreground font-body">Dental Clinic</span>
        </a>

        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((l) => (
            <a key={l.label} href={l.href} className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a href="tel:+919876543210" className="hidden md:flex items-center gap-2 text-sm font-semibold text-primary">
            <Phone className="w-4 h-4" />
            +91 98765 43210
          </a>
          <a href="#contact" className="hidden sm:inline-flex px-5 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:bg-teal-deep transition-colors">
            Book Appointment
          </a>
          <button onClick={() => setOpen(!open)} className="lg:hidden p-2 text-foreground">
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden overflow-hidden bg-card border-t border-border"
          >
            <div className="container py-4 flex flex-col gap-3">
              {navLinks.map((l) => (
                <a key={l.label} href={l.href} onClick={() => setOpen(false)} className="py-2 text-sm font-medium text-foreground/80 hover:text-primary">
                  {l.label}
                </a>
              ))}
              <a href="tel:+919876543210" className="flex items-center gap-2 py-2 text-sm font-semibold text-primary">
                <Phone className="w-4 h-4" /> +91 98765 43210
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
