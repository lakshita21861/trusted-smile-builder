import { motion } from "framer-motion";
import { Phone, CalendarCheck } from "lucide-react";
import heroImg from "@/assets/hero-dental.jpg";

const HeroSection = () => (
  <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img src={heroImg} alt="Modern dental clinic in Ludhiana" width={1920} height={1080} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/60 to-foreground/20" />
    </div>

    <div className="container relative z-10">
      <div className="max-w-2xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-primary-foreground/80 text-sm font-semibold tracking-widest uppercase mb-4 font-body"
        >
          Best Dentist in Ludhiana · Family Dental Clinic
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground leading-tight mb-6"
        >
          Comfortable, Modern Dental Care for Your Family
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
          className="text-lg text-primary-foreground/80 font-body mb-8 max-w-lg"
        >
          Trusted by 10,000+ patients in Ludhiana. Painless treatments, caring staff, and the smile you deserve — all under one roof.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-wrap gap-4"
        >
          <a href="#contact" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-primary text-primary-foreground font-semibold text-base hover:shadow-elevated transition-all">
            <CalendarCheck className="w-5 h-5" />
            Book Your Consultation Today
          </a>
          <a href="tel:+919876543210" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-primary-foreground/10 backdrop-blur border border-primary-foreground/20 text-primary-foreground font-semibold text-base hover:bg-primary-foreground/20 transition-all">
            <Phone className="w-5 h-5" />
            Call Now
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-10 flex items-center gap-6 text-primary-foreground/70 text-sm font-body"
        >
          <span className="flex items-center gap-1.5">⭐ 4.9 Google Rating</span>
          <span>|</span>
          <span>15+ Years Experience</span>
          <span>|</span>
          <span>Open 7 Days</span>
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;
