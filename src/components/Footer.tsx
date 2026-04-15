import { Phone, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground text-primary-foreground/70 py-12">
    <div className="container">
      <div className="grid sm:grid-cols-3 gap-8 mb-8">
        <div>
          <h3 className="text-xl font-heading font-bold text-primary-foreground mb-3">Smile Care</h3>
          <p className="text-sm font-body leading-relaxed">
            Ludhiana's trusted family dental clinic. Painless Root Canal in Ludhiana, Dental Implants, Cosmetic Dentistry & more.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-primary-foreground mb-3 font-body">Quick Links</h4>
          <ul className="space-y-2 text-sm font-body">
            {["About", "Treatments", "Gallery", "FAQ", "Contact"].map((l) => (
              <li key={l}><a href={`#${l.toLowerCase()}`} className="hover:text-primary-foreground transition-colors">{l}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-primary-foreground mb-3 font-body">Reach Us</h4>
          <div className="space-y-2 text-sm font-body">
            <p className="flex items-start gap-2"><MapPin className="w-4 h-4 mt-0.5 shrink-0" /> 123, Ferozepur Road, Near Clock Tower, Ludhiana</p>
            <p className="flex items-center gap-2"><Phone className="w-4 h-4 shrink-0" /> +91 98765 43210</p>
          </div>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 pt-6 text-center text-xs font-body">
        <p>© 2026 Smile Care Dental Clinic, Ludhiana. All Rights Reserved.</p>
        <p className="mt-1">Best Dentist in Ludhiana | Family Dental Clinic in Ludhiana | Dental Clinic Near You</p>
      </div>
    </div>
  </footer>
);

export default Footer;
