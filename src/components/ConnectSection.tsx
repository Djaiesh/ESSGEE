import { FormEvent, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { site } from "@/data/siteContent";
import ParallaxBackground from "./ParallaxBackground";

const ConnectSection = () => {
  const emailForm = useRef<HTMLFormElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [error, setError] = useState("");

  useScrollAnimation({ triggerRef: sectionRef, childrenSelector: ".connect-title", y: 20 });
  useScrollAnimation({ triggerRef: infoRef, childrenSelector: ".connect-info", stagger: 0.08, y: 20 });
  useScrollAnimation({ triggerRef: formRef, childrenSelector: ".connect-form-item", stagger: 0.06, y: 20 });

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    const form = emailForm.current;
    if (!form) return;
    const data = new FormData(form);
    if (data.get("website")) return;
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    if (!serviceId || !templateId || !publicKey) {
      setError("Email service is not configured yet. Please email Satya directly using the contact link.");
      return;
    }
    setStatus("submitting");
    try {
      await emailjs.sendForm(serviceId, templateId, form, { publicKey });
      form.reset();
      setStatus("success");
    } catch {
      setStatus("idle");
      setError("Your enquiry could not be sent. Please try again or email Satya directly.");
    }
  };

  const inputClasses = "w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/30 transition-all duration-300 focus:border-teal-accent focus:bg-white/10 focus:outline-none focus:ring-2 focus:ring-teal-accent/30";

  return (
    <section ref={sectionRef} id="connect" className="relative section-dark section-padding overflow-hidden" aria-labelledby="connect-heading">
      <ParallaxBackground variant="dark" />
      <div className="container mx-auto px-6 relative z-10">
        <p className="connect-title text-micro uppercase tracking-[0.2em] text-teal-accent mb-4">Direct Enquiry</p>
        <h2 id="connect-heading" className="connect-title text-h2 text-white mb-4">Let's Start a Conversation</h2>
        <p className="connect-title text-body-lg text-white/60 mb-14">Every enquiry is handled directly by Satya Gady. No intermediaries, no delays.</p>
        <div className="grid lg:grid-cols-2 gap-16">
          <div ref={infoRef} className="space-y-7">
            <div className="connect-info"><h3 className="font-display text-2xl text-white">Satya Gady</h3><p className="text-teal-accent">Founder & Principal Consultant</p></div>
            <a href={site.phoneHref} className="connect-info contact-link"><Phone /><span>{site.phoneDisplay}</span></a>
            <a href={`mailto:${site.email}`} className="connect-info contact-link"><Mail /><span>{site.email}</span></a>
            <div className="connect-info contact-link"><MapPin /><span>{site.location}</span></div>
            <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="connect-info contact-link"><Linkedin /><span>View LinkedIn Profile</span></a>
          </div>
          <div ref={formRef}>
            {status === "success" ? (
              <div className="rounded-xl border border-teal-accent/30 bg-teal-accent/10 p-8 text-center">
                <p className="font-display text-2xl text-white">Message Received.</p>
                <p className="mt-2 text-white/65">We will be in touch within one business day.</p>
              </div>
            ) : (
              <form ref={emailForm} onSubmit={handleSubmit} className="space-y-5">
                <input name="website" className="absolute -left-[9999px]" tabIndex={-1} autoComplete="off" aria-hidden="true" />
                <input type="hidden" name="submitted_at" value={new Date().toISOString()} />
                <div className="grid sm:grid-cols-2 gap-5">
                  <input required name="name" maxLength={100} className={inputClasses} placeholder="Name" aria-label="Name" />
                  <input required name="email" type="email" maxLength={255} className={inputClasses} placeholder="Email" aria-label="Email" />
                  <input name="phone" type="tel" maxLength={30} className={inputClasses} placeholder="Phone" aria-label="Phone" />
                  <input name="company" maxLength={100} className={inputClasses} placeholder="Company" aria-label="Company" />
                </div>
                <textarea required name="message" rows={5} maxLength={1000} className={`${inputClasses} resize-none`} placeholder="Message" aria-label="Message" />
                {error && <p role="alert" className="text-sm text-vivid-amber">{error}</p>}
                <button disabled={status === "submitting"} type="submit" className="btn-pop disabled:cursor-wait disabled:opacity-60">
                  {status === "submitting" ? "Sending..." : "Send Enquiry"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConnectSection;
