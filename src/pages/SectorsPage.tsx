import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionReveal from "@/components/SectionReveal";
import { Link } from "react-router-dom";
import transportImg from "@/assets/sector-transport.jpg";
import waterImg from "@/assets/sector-water.jpg";
import resourcesImg from "@/assets/sector-resources.jpg";
import socialImg from "@/assets/sector-social.jpg";
import defenceImg from "@/assets/sector-defence.jpg";
import railImg from "@/assets/sector-rail.jpg";

const sectors = [
  { id: "transport", title: "Transport & Roads", image: transportImg, description: "Highway upgrades, interchanges, rail corridors and multi-modal transport hubs.", detail: "We have extensive experience in major road and transport infrastructure projects across Australia, including highway duplications, interchange upgrades, and integrated transport hub developments. Our governance frameworks ensure these complex, high-visibility projects are delivered safely, on time, and within budget." },
  { id: "water", title: "Water & Utilities", image: waterImg, description: "Water treatment, pipelines, pump stations and utility infrastructure programs.", detail: "Our water infrastructure experience spans treatment plants, distribution networks, pump stations, and sewer upgrades. We understand the unique challenges of brownfield utility projects where maintaining service continuity is critical during construction." },
  { id: "resources", title: "Resources & Energy", image: resourcesImg, description: "Mining infrastructure, gas processing, renewables and heavy industrial facilities.", detail: "From iron ore processing facilities to gas plants and renewable energy installations, we bring structured project governance to resource sector developments. Our experience includes remote site logistics, fly-in-fly-out workforce management, and complex regulatory environments." },
  { id: "social", title: "Social Infrastructure", image: socialImg, description: "Health, education, justice, and community facilities for government clients.", detail: "We deliver project management services for hospitals, schools, justice facilities, and community centres. These projects demand stakeholder engagement, compliance with government standards, and sensitivity to community impacts during construction." },
  { id: "defence", title: "Defence", image: defenceImg, description: "Secure facility construction, base upgrades and compliance-critical defence projects.", detail: "Our defence project experience includes security-classified facility upgrades, base redevelopments, and compliance-critical projects. We maintain appropriate security clearances and understand the unique governance requirements of the Defence estate." },
  { id: "urban-rail", title: "Urban Rail", image: railImg, description: "Rail corridor extensions, station builds, and signalling infrastructure.", detail: "Urban rail projects are among the most complex infrastructure undertakings, involving multiple contractor interfaces, community impacts, and stringent safety requirements. Our program-level governance ensures these high-profile investments are delivered successfully." },
];

const SectorsPage = () => (
  <>
    <Navbar />
    <main>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <img src={transportImg} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-slate-navy/85" />
        <div className="relative z-10 text-center px-6">
          <p className="text-micro uppercase tracking-[0.2em] text-vivid-amber mb-4">Sector Experience</p>
          <h1 className="text-hero text-white">Where We Operate</h1>
          <p className="text-body-lg text-white/70 max-w-2xl mx-auto mt-4">
            Delivering governance across Australia's most demanding sectors
          </p>
        </div>
      </section>

      {/* Sectors grid */}
      <section className="section-light section-padding">
        <div className="container mx-auto px-6 space-y-20">
          {sectors.map((sector, i) => (
            <SectionReveal key={sector.id}>
              <div id={sector.id} className="scroll-mt-24 grid lg:grid-cols-2 gap-12 items-center">
                <div className={`rounded-xl overflow-hidden aspect-[16/10] ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                  <img src={sector.image} alt={sector.title} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                  <h2 className="text-h2 text-slate-navy mb-4">{sector.title}</h2>
                  <p className="text-body-lg text-slate-navy/70 mb-4">{sector.description}</p>
                  <p className="text-slate-navy/60 leading-relaxed">{sector.detail}</p>
                  <Link to="/connect" className="btn-pop mt-8 inline-block">Discuss This Sector</Link>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </section>
    </main>
    <Footer />
  </>
);

export default SectorsPage;
