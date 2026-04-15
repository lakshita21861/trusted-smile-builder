import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "Is root canal treatment painful?", a: "Not at all! At Smile Care, we use advanced rotary instruments and modern anaesthesia so you feel zero pain. Most patients are surprised at how comfortable the procedure is." },
  { q: "How much does teeth whitening cost in Ludhiana?", a: "Professional teeth whitening at our clinic starts from ₹5,000. We offer multiple options including in-clinic laser whitening for the best results." },
  { q: "Do you offer EMI or payment plans?", a: "Yes! We offer easy EMI options and accept all major insurance plans. We believe premium dental care should be accessible to everyone." },
  { q: "What age is right for braces?", a: "Children can be evaluated for braces from age 7-8. However, it's never too late — we successfully treat adults with braces and clear aligners too." },
  { q: "How often should I visit the dentist?", a: "We recommend a check-up every 6 months for optimal oral health. Regular cleanings prevent costly problems down the line." },
  { q: "Is the clinic open on Sundays?", a: "Yes! Smile Care Dental Clinic is open all 7 days. We understand busy schedules, so we offer morning and evening slots for your convenience." },
];

const FAQSection = () => (
  <section id="faq" className="py-20 md:py-28 bg-warm-bg">
    <div className="container">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <p className="text-sm font-semibold text-primary tracking-widest uppercase mb-3 font-body">FAQ</p>
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-muted-foreground font-body">Dental Clinic Near You — Get Your Answers Here</p>
      </div>

      <div className="max-w-2xl mx-auto">
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="bg-card rounded-xl border border-border px-6 shadow-soft">
              <AccordionTrigger className="text-left font-body font-semibold text-foreground text-sm hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground font-body leading-relaxed">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  </section>
);

export default FAQSection;
