import { motion } from "framer-motion";
import { Shield, Clock, CreditCard, Star, Users, Zap } from "lucide-react";

const reasons = [
  { icon: Shield, title: "100% Sterilised", desc: "International-grade sterilisation and hygiene protocols." },
  { icon: Clock, title: "On-Time Appointments", desc: "We respect your time — minimal wait, maximum care." },
  { icon: Zap, title: "Latest Technology", desc: "Digital X-rays, laser dentistry & painless tools." },
  { icon: CreditCard, title: "Affordable Plans", desc: "Transparent pricing with EMI & insurance options." },
  { icon: Users, title: "10,000+ Patients", desc: "Trusted by families across Ludhiana & Punjab." },
  { icon: Star, title: "4.9★ Google Rating", desc: "Consistently rated the best dental clinic in Ludhiana." },
];

const TrustSection = () => (
  <section className="py-20 md:py-28 bg-primary text-primary-foreground">
    <div className="container">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <p className="text-sm font-semibold tracking-widest uppercase mb-3 font-body opacity-80">Why Patients Trust Us</p>
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
          Trusted Dentist in Ludhiana — Here's Why
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {reasons.map((r, i) => (
          <motion.div
            key={r.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="p-6 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10 backdrop-blur-sm"
          >
            <r.icon className="w-8 h-8 mb-4 opacity-90" />
            <h3 className="text-lg font-heading font-semibold mb-2">{r.title}</h3>
            <p className="text-sm opacity-75 font-body leading-relaxed">{r.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustSection;
