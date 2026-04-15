import { motion } from "framer-motion";
import { Stethoscope, Smile, ShieldCheck, Baby, Sparkles, Crosshair } from "lucide-react";

const treatments = [
  { icon: Stethoscope, title: "Painless Root Canal", desc: "Advanced rotary techniques for a comfortable, anxiety-free experience." },
  { icon: Crosshair, title: "Dental Implants", desc: "Permanent tooth replacement with world-class implant systems." },
  { icon: Sparkles, title: "Teeth Whitening", desc: "Professional in-clinic whitening for a brighter, confident smile." },
  { icon: Smile, title: "Smile Makeover", desc: "Veneers, bonding & complete cosmetic transformations." },
  { icon: ShieldCheck, title: "Braces & Aligners", desc: "Metal braces, ceramic braces & invisible aligners for all ages." },
  { icon: Baby, title: "Kids Dentistry", desc: "Gentle, fun dental care designed specially for children." },
];

const TreatmentsSection = () => (
  <section id="treatments" className="py-20 md:py-28">
    <div className="container">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <p className="text-sm font-semibold text-primary tracking-widest uppercase mb-3 font-body">Our Treatments</p>
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
          Complete Dental Care in Ludhiana
        </h2>
        <p className="text-muted-foreground font-body">
          From routine check-ups to advanced cosmetic procedures — everything your family needs, under one roof.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {treatments.map((t, i) => (
          <motion.div
            key={t.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="group p-6 rounded-2xl bg-card border border-border hover:shadow-card hover:border-primary/20 transition-all"
          >
            <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
              <t.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-lg font-heading font-semibold text-foreground mb-2">{t.title}</h3>
            <p className="text-sm text-muted-foreground font-body leading-relaxed">{t.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TreatmentsSection;
