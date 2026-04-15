import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  { name: "Priya Malhotra", text: "I was terrified of root canals, but Dr. Sharma made it completely painless. Best dental experience ever! Highly recommend Smile Care to everyone in Ludhiana.", rating: 5 },
  { name: "Gurpreet Singh", text: "Got my dental implants done here. The clinic is super clean, staff is polite, and the results are amazing. Truly the best dentist in Ludhiana.", rating: 5 },
  { name: "Anita Bhatia", text: "My kids love coming here — the doctor is so gentle with children. We've been patients for 5 years now. The whole family trusts Smile Care.", rating: 5 },
  { name: "Rahul Kapoor", text: "Affordable, professional, and top-quality work. My smile makeover changed my confidence completely. Thank you, Dr. Sharma!", rating: 5 },
];

const TestimonialsSection = () => (
  <section className="py-20 md:py-28 bg-warm-bg">
    <div className="container">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <p className="text-sm font-semibold text-primary tracking-widest uppercase mb-3 font-body">Patient Reviews</p>
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
          What Our Patients Say
        </h2>
        <p className="text-muted-foreground font-body">Real reviews from real patients in Ludhiana.</p>
      </div>

      <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="p-6 rounded-2xl bg-card shadow-soft"
          >
            <div className="flex gap-0.5 mb-3">
              {Array.from({ length: t.rating }).map((_, j) => (
                <Star key={j} className="w-4 h-4 fill-gold text-gold" />
              ))}
            </div>
            <p className="text-sm text-foreground/80 font-body leading-relaxed mb-4">"{t.text}"</p>
            <p className="text-sm font-semibold text-foreground font-body">{t.name}</p>
            <p className="text-xs text-muted-foreground font-body">Patient, Ludhiana</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
