import { useState, useRef } from "react";
import { MapPin, Phone, Mail, Linkedin, Download } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const ConnectSection = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", company: "", message: "", honeypot: "" });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const lastSubmit = useRef(0);
  
  const sectionRef = useRef<HTMLElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

  useScrollAnimation({ triggerRef: sectionRef, childrenSelector: ".connect-title", y: 20 });
  useScrollAnimation({ triggerRef: infoRef, childrenSelector: ".connect-info", stagger: 0.1, y: 20 });
  useScrollAnimation({ triggerRef: formRef, childrenSelector: ".connect-form-item", stagger: 0.08, y: 20 });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.honeypot) return;

    const now = Date.now();
    if (now - lastSubmit.current < 30000) {
      setError("Please wait before submitting again.");
      return;
    }

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError("Please fill in all required fields.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError("Please enter a valid email address.");
      return;
    }

    lastSubmit.current = now;
    console.log("[ESSGEE Contact Submission]", { name: form.name, email: form.email, phone: form.phone, company: form.company, message: form.message });
    setSubmitted(true);
    setError("");
  };

  const inputClasses = "w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-vivid-amber/50 focus:bg-white/10 focus:shadow-[0_0_15px_rgba(240,74,0,0.15)] transition-all duration-300";

  return (
    <section ref={sectionRef} id="connect" className="section-dark section-padding bg-slate-navy overflow-hidden" aria-labelledby="connect-heading">
      <div className="container mx-auto px-6">
        <h2 id="connect-heading" className="connect-title text-h2 text-white text-center mb-16">
          Confidential Discussion
        </h2>

        <div className="grid lg:grid-cols-2 gap-16 relative">
          {/* Subtle background glow behind the grid */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-vivid-amber/5 rounded-full blur-[120px] pointer-events-none" />

          {/* Contact info */}
          <div ref={infoRef} className="space-y-8 relative z-10">
            <div className="connect-info">
              <h3 className="font-display text-2xl font-semibold text-white mb-2">Satya Gady</h3>
              <p className="text-vivid-amber font-medium">Principal & Director</p>
            </div>

            <div className="space-y-5">
              <a href="tel:+61400000000" className="connect-info flex items-center gap-4 text-white/70 hover:text-white hover:translate-x-1 transition-all duration-300 group">
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-vivid-amber/50 group-hover:bg-vivid-amber/10 transition-colors">
                  <Phone className="w-4 h-4 text-vivid-amber" />
                </div>
                <span>+61 400 000 000</span>
              </a>
              <a href="mailto:satya@essgeeprojects.com.au" className="connect-info flex items-center gap-4 text-white/70 hover:text-white hover:translate-x-1 transition-all duration-300 group">
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-vivid-amber/50 group-hover:bg-vivid-amber/10 transition-colors">
                  <Mail className="w-4 h-4 text-vivid-amber" />
                </div>
                <span>satya@essgeeprojects.com.au</span>
              </a>
              <div className="connect-info flex items-center gap-4 text-white/70 group">
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-vivid-amber" />
                </div>
                <span>Perth, Western Australia</span>
              </div>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="connect-info flex items-center gap-4 text-white/70 hover:text-white hover:translate-x-1 transition-all duration-300 group">
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#0077b5]/50 group-hover:bg-[#0077b5]/10 transition-colors">
                  <Linkedin className="w-4 h-4 text-vivid-amber group-hover:text-[#0077b5]" />
                </div>
                <span>LinkedIn Profile</span>
              </a>
            </div>

            <div className="connect-info pt-6 border-t border-white/10">
              <button
                onClick={() => { console.log("[ESSGEE Download] Capability Statement requested"); alert("Capability Statement download would start here."); }}
                className="btn-outline border-white/20 text-white/80 hover:text-white hover:border-white hover:bg-white/5 flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                Download Capability Statement
              </button>
            </div>
          </div>

          {/* Contact form */}
          <div ref={formRef} className="relative z-10">
            {submitted ? (
              <div className="flex items-center justify-center h-full">
                <div className="text-center p-8 border border-vivid-amber/20 rounded-xl bg-vivid-amber/5">
                  <p className="text-2xl font-display text-white mb-3">Message Received.</p>
                  <p className="text-white/60">We'll be in touch within one business day.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                <input
                  type="text"
                  name="website"
                  value={form.honeypot}
                  onChange={(e) => setForm({ ...form, honeypot: e.target.value })}
                  className="absolute -left-[9999px]"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                />

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="connect-form-item group">
                    <label htmlFor="name" className="text-micro text-white/50 block mb-2 group-focus-within:text-vivid-amber transition-colors">Name *</label>
                    <input
                      id="name" type="text" required maxLength={100}
                      className={inputClasses}
                      value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                    />
                  </div>
                  <div className="connect-form-item group">
                    <label htmlFor="email" className="text-micro text-white/50 block mb-2 group-focus-within:text-vivid-amber transition-colors">Email *</label>
                    <input
                      id="email" type="email" required maxLength={255}
                      className={inputClasses}
                      value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="connect-form-item group">
                    <label htmlFor="phone" className="text-micro text-white/50 block mb-2 group-focus-within:text-vivid-amber transition-colors">Phone</label>
                    <input
                      id="phone" type="tel" maxLength={20}
                      className={inputClasses}
                      value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    />
                  </div>
                  <div className="connect-form-item group">
                    <label htmlFor="company" className="text-micro text-white/50 block mb-2 group-focus-within:text-vivid-amber transition-colors">Company</label>
                    <input
                      id="company" type="text" maxLength={100}
                      className={inputClasses}
                      value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })}
                    />
                  </div>
                </div>

                <div className="connect-form-item group">
                  <label htmlFor="message" className="text-micro text-white/50 block mb-2 group-focus-within:text-vivid-amber transition-colors">Message *</label>
                  <textarea
                    id="message" required rows={4} maxLength={1000}
                    className={`${inputClasses} resize-none`}
                    value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                  />
                </div>

                {error && <p className="text-sm text-vivid-amber connect-form-item">{error}</p>}

                <div className="connect-form-item pt-2">
                  <button type="submit" className="btn-pop w-full sm:w-auto relative overflow-hidden group">
                    <span className="relative z-10 transition-transform duration-300 inline-block group-hover:-translate-y-[1px]">Send Enquiry</span>
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConnectSection;
