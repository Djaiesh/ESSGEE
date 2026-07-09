import Footer from "@/components/Footer";
import ConnectSection from "@/components/ConnectSection";
import connectHero from "@/assets/contact_realistic.png";
import Seo from "@/components/Seo";
import { site } from "@/data/siteContent";

const ContactPage = () => (
  <>
    <Seo
      title="Contact"
      path="/contact"
      description="Let's start a conversation. Whether you are pursuing growth, entering a new market, strengthening governance or delivering a major initiative, ESSGEE Projects can help."
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
    </main>
    <Footer />
  </>
);

export default ContactPage;
