import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Mail, CalendarCheck } from "lucide-react";

const ContactSection = () => (
  <section id="contact" className="py-20 md:py-28">
    <div className="container">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <p className="text-sm font-semibold text-primary tracking-widest uppercase mb-3 font-body">Contact Us</p>
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
          Visit Smile Care Dental Clinic, Ludhiana
        </h2>
        <p className="text-muted-foreground font-body">Book Your Consultation Today — Walk-ins Welcome!</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            {[
              { icon: MapPin, title: "Location", lines: ["123, Ferozepur Road", "Near Clock Tower, Ludhiana", "Punjab — 141001"] },
              { icon: Phone, title: "Phone", lines: ["+91 98765 43210", "+91 01onal 2345678"] },
              { icon: Clock, title: "Timings", lines: ["Mon–Sat: 9:00 AM – 8:00 PM", "Sunday: 10:00 AM – 2:00 PM"] },
              { icon: Mail, title: "Email", lines: ["info@smilecareludhiana.com"] },
            ].map((c) => (
              <div key={c.title} className="p-5 rounded-xl bg-accent/50 border border-border">
                <c.icon className="w-5 h-5 text-primary mb-3" />
                <h4 className="text-sm font-semibold text-foreground font-body mb-1">{c.title}</h4>
                {c.lines.map((l, i) => (
                  <p key={i} className="text-xs text-muted-foreground font-body">{l}</p>
                ))}
              </div>
            ))}
          </div>

          <a href="#contact" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-primary text-primary-foreground font-semibold text-base hover:shadow-elevated transition-all">
            <CalendarCheck className="w-5 h-5" />
            Book Appointment Now
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl overflow-hidden shadow-card border border-border h-80 lg:h-auto min-h-[320px]"
        >
          <iframe
            title="Smile Care Dental Clinic Ludhiana Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d109456.91450027056!2d75.7726835!3d30.9009836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a837462345a7d%3A0x681f1b65a9a4e46d!2sLudhiana%2C%20Punjab!5e0!3m2!1sen!2sin!4v1700000000000"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </div>
    </div>
  </section>
);

export default ContactSection;
