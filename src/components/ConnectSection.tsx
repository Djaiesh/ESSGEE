import { useState, useRef } from "react";
import SectionReveal from "./SectionReveal";
import { MapPin, Phone, Mail, Linkedin, Download } from "lucide-react";

const ConnectSection = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", company: "", message: "", honeypot: "" });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const lastSubmit = useRef(0);

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

  return (
    <section id="connect" className="section-dark section-padding" aria-labelledby="connect-heading">
      <div className="container mx-auto px-6">
        <SectionReveal>

          <h2 id="connect-heading" className="text-h2 text-white text-center mb-16">
            Confidential Discussion
          </h2>
        </SectionReveal>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact info */}
          <SectionReveal>
            <div className="space-y-8">
              <div>
                <h3 className="font-display text-2xl font-semibold text-white mb-2">Satya Gady</h3>
                <p className="text-vivid-amber font-medium">Principal & Director</p>
              </div>

              <div className="space-y-4">
                <a href="tel:+61400000000" className="flex items-center gap-3 text-white/70 hover:text-vivid-amber transition-colors">
                  <Phone className="w-5 h-5 text-vivid-amber" />
                  <span>+61 400 000 000</span>
                </a>
                <a href="mailto:satya@essgeeprojects.com.au" className="flex items-center gap-3 text-white/70 hover:text-vivid-amber transition-colors">
                  <Mail className="w-5 h-5 text-vivid-amber" />
                  <span>satya@essgeeprojects.com.au</span>
                </a>
                <div className="flex items-center gap-3 text-white/70">
                  <MapPin className="w-5 h-5 text-vivid-amber" />
                  <span>Perth, Western Australia</span>
                </div>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white/70 hover:text-vivid-amber transition-colors">
                  <Linkedin className="w-5 h-5 text-vivid-amber" />
                  <span>LinkedIn Profile</span>
                </a>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => { console.log("[ESSGEE Download] Capability Statement requested"); alert("Capability Statement download would start here."); }}
                  className="btn-outline flex items-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  Download Capability Statement
                </button>
              </div>
            </div>
          </SectionReveal>

          {/* Contact form */}
          <SectionReveal delay={0.15}>
            {submitted ? (
              <div className="flex items-center justify-center h-full">
                <div className="text-center">
                  <p className="text-2xl font-display text-white mb-3">Thank you.</p>
                  <p className="text-white/60">We'll be in touch within one business day.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
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

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="text-micro text-white/50 block mb-1.5">Name *</label>
                    <input
                      id="name" type="text" required maxLength={100}
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-deep-azure/50 transition-colors"
                      value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="text-micro text-white/50 block mb-1.5">Email *</label>
                    <input
                      id="email" type="email" required maxLength={255}
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-deep-azure/50 transition-colors"
                      value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="phone" className="text-micro text-white/50 block mb-1.5">Phone</label>
                    <input
                      id="phone" type="tel" maxLength={20}
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-deep-azure/50 transition-colors"
                      value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="text-micro text-white/50 block mb-1.5">Company</label>
                    <input
                      id="company" type="text" maxLength={100}
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-deep-azure/50 transition-colors"
                      value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="text-micro text-white/50 block mb-1.5">Message *</label>
                  <textarea
                    id="message" required rows={4} maxLength={1000}
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-deep-azure/50 transition-colors resize-none"
                    value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                  />
                </div>

                {error && <p className="text-sm text-vivid-amber">{error}</p>}

                <button type="submit" className="btn-pop w-full sm:w-auto">
                  Send Enquiry
                </button>
              </form>
            )}
          </SectionReveal>
        </div>
      </div>
    </section>
  );
};

export default ConnectSection;
