import { motion } from "framer-motion";
import { Award, GraduationCap, Heart } from "lucide-react";
import doctorImg from "@/assets/doctor-portrait.jpg";

const AboutSection = () => (
  <section id="about" className="py-20 md:py-28 bg-warm-bg">
    <div className="container">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="rounded-2xl overflow-hidden shadow-card">
            <img src={doctorImg} alt="Dr. Rajesh Sharma - Best Dentist in Ludhiana" width={800} height={1024} loading="lazy" className="w-full h-auto object-cover" />
          </div>
          <div className="absolute -bottom-6 -right-4 md:right-8 bg-card rounded-xl shadow-elevated p-5">
            <p className="text-3xl font-heading font-bold text-primary">15+</p>
            <p className="text-sm text-muted-foreground font-body">Years of Experience</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-semibold text-primary tracking-widest uppercase mb-3 font-body">About Your Doctor</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
            Dr. Rajesh Sharma, BDS, MDS
          </h2>
          <p className="text-muted-foreground font-body leading-relaxed mb-6">
            With over 15 years of experience in advanced dental care, Dr. Rajesh Sharma is one of the most trusted dentists in Ludhiana. He specialises in painless root canals, dental implants, cosmetic dentistry, and complete family dental care.
          </p>
          <p className="text-muted-foreground font-body leading-relaxed mb-8">
            A graduate of the prestigious Government Dental College, Dr. Sharma has transformed thousands of smiles across Punjab. His gentle approach and use of the latest dental technology make every visit comfortable and stress-free.
          </p>

          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { icon: GraduationCap, label: "MDS — Govt. Dental College" },
              { icon: Award, label: "10,000+ Happy Patients" },
              { icon: Heart, label: "Gentle & Painless Care" },
            ].map((item) => (
              <div key={item.label} className="flex flex-col items-center text-center p-4 rounded-xl bg-accent">
                <item.icon className="w-6 h-6 text-accent-foreground mb-2" />
                <p className="text-xs font-semibold text-accent-foreground font-body">{item.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutSection;
