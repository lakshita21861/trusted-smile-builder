import { motion } from "framer-motion";
import smile1 from "@/assets/smile-1.jpg";
import smile2 from "@/assets/smile-2.jpg";
import smile3 from "@/assets/smile-3.jpg";

const images = [
  { src: smile1, alt: "Smile transformation at Smile Care Dental Clinic Ludhiana" },
  { src: smile2, alt: "Happy patient after teeth whitening in Ludhiana" },
  { src: smile3, alt: "Confident smile after dental treatment in Ludhiana" },
];

const GallerySection = () => (
  <section id="gallery" className="py-20 md:py-28">
    <div className="container">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <p className="text-sm font-semibold text-primary tracking-widest uppercase mb-3 font-body">Smile Gallery</p>
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
          Real Smiles, Real Transformations
        </h2>
        <p className="text-muted-foreground font-body">See the results our patients love. Every smile tells a story.</p>
      </div>

      <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {images.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="rounded-2xl overflow-hidden shadow-card group"
          >
            <img src={img.src} alt={img.alt} width={640} height={640} loading="lazy" className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500" />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default GallerySection;
