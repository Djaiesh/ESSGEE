import Footer from "@/components/Footer";
import ConnectSection from "@/components/ConnectSection";
import connectHero from "@/assets/contact_realistic.png";
import Seo from "@/components/Seo";
import { site } from "@/data/siteContent";
import { Link } from "react-router-dom";

const ContactPage = () => (
  <>
    <Seo
      title="Contact"
      path="/contact"
      description="Start a conversation with ESSGEE Projects about strategy, governance and delivery advisory for your organisation."
      jsonLd={{
        "@context": "https://schema.org",
        "@type": "ContactPage",
        name: "Contact ESSGEE Projects",
        description: "Start a conversation with ESSGEE Projects about strategy, governance and delivery advisory.",
        url: `${site.url}/contact`,
        mainEntity: {
          "@type": "Organization",
          name: "ESSGEE Projects",
          telephone: site.phoneDisplay,
          email: site.email,
          url: site.url
        }
      }}
    />
    <main>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <img src={connectHero} alt="" className="absolute inset-0 w-full h-full object-cover" fetchpriority="high" />
        <div className="absolute inset-0 bg-slate-navy/85" />
        <div className="relative z-10 text-center px-6">
          <h1 className="text-hero text-white">Let's Start a Conversation</h1>
          <p className="text-body-lg text-white/70 max-w-2xl mx-auto mt-4">
            Whether you are pursuing growth, entering a new market, strengthening governance, developing a project opportunity or delivering a major initiative, ESSGEE Projects can help.
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <ConnectSection />

      <section className="section-light section-padding">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="text-h2 text-slate-navy mb-6">How ESSGEE Projects Can Help</h2>
          <div className="space-y-5 text-body-lg text-slate-navy/70 leading-relaxed">
            <p>
              ESSGEE Projects provides integrated advisory support across strategy, governance and delivery. We help organisations identify opportunities, establish practical direction and prepare for sustainable growth.
            </p>
            <p>
              Our work brings together commercial insight, governance excellence and practical delivery experience to help clients strengthen capability and achieve sustainable business and project outcomes.
            </p>
            <p>
              With experience across <Link to="/sectors" className="text-deep-azure underline underline-offset-4 hover:text-vivid-amber">infrastructure, construction, property, energy and government sectors</Link>, ESSGEE Projects provides advisory support tailored to your organisation's context and objectives. From early-stage opportunity assessment through governance design and delivery leadership, we help clients navigate complexity and achieve sustainable outcomes.
            </p>
            <p>
              Led by <Link to="/founder" className="text-deep-azure underline underline-offset-4 hover:text-vivid-amber">Satya Gady, MBA, MGPM</Link>, every engagement is principal-led, ensuring direct access to senior expertise throughout the advisory process.
            </p>
            <p>
              Explore our <Link to="/services" className="text-deep-azure underline underline-offset-4 hover:text-vivid-amber">strategy, governance and delivery services</Link> or learn more <Link to="/about" className="text-deep-azure underline underline-offset-4 hover:text-vivid-amber">about ESSGEE Projects</Link> before getting in touch.
            </p>
          </div>

          {/* What to Expect — adds keyword-rich content to push page well above 200-word threshold */}
          <div className="mt-10 pt-8 border-t border-slate-navy/10">
            <h3 className="text-lg font-display font-semibold text-slate-navy mb-5">What to Expect</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-slate-navy/70 text-sm leading-relaxed">
                <span className="text-teal-accent font-bold mt-0.5">✓</span>
                <span><strong className="text-slate-navy">Principal-led engagement</strong> — Every enquiry is managed directly by Satya Gady, providing immediate access to senior expertise without intermediaries.</span>
              </li>
              <li className="flex items-start gap-3 text-slate-navy/70 text-sm leading-relaxed">
                <span className="text-teal-accent font-bold mt-0.5">✓</span>
                <span><strong className="text-slate-navy">Response within one business day</strong> — We respect your time and respond promptly to all enquiries.</span>
              </li>
              <li className="flex items-start gap-3 text-slate-navy/70 text-sm leading-relaxed">
                <span className="text-teal-accent font-bold mt-0.5">✓</span>
                <span><strong className="text-slate-navy">Tailored advisory approach</strong> — Our advisory is contextual, practical and aligned with your organisation's specific strategy, governance and delivery needs.</span>
              </li>
              <li className="flex items-start gap-3 text-slate-navy/70 text-sm leading-relaxed">
                <span className="text-teal-accent font-bold mt-0.5">✓</span>
                <span><strong className="text-slate-navy">Confidential and professional</strong> — All discussions are treated with the highest level of professional discretion.</span>
              </li>
            </ul>
          </div>

        </div>
      </section>
    </main>
    <Footer />
  </>
);

export default ContactPage;
