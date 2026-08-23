import { Helmet } from "react-helmet-async";
import { site } from "@/data/siteContent";

interface SeoProps {
  title: string;
  description: string;
  path?: string;
  noIndex?: boolean;
  /** Pass "article" for insight articles, defaults to "website" */
  type?: "website" | "article";
  /** Article publish date (ISO 8601) */
  publishedTime?: string;
  /** Article author name */
  articleAuthor?: string;
  /** JSON-LD structured data object(s) — will be serialized into a script tag */
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
}

const Seo = ({
  title,
  description,
  path = "",
  noIndex = false,
  type = "website",
  publishedTime,
  articleAuthor,
  jsonLd,
}: SeoProps) => {
  const url = `${site.url}${path}`;

  // Keyword-rich title map — specific pages get targeted, location-aware titles
  // Format: "Keyword Page Title | ESSGEE Projects" (keyword first = better CTR + ranking)
  const keywordTitles: Record<string, string> = {
    "/about":    "About ESSGEE Projects — Strategy, Governance & Delivery Advisory | Sydney",
    "/services": "Advisory Services — Strategy, Governance & Project Delivery | ESSGEE Projects",
    "/sectors":  "Infrastructure, Construction, Energy & Government Advisory | ESSGEE Projects",
    "/founder":  "Satya Gady MBA MGPM — Founder, Principal Consultant | ESSGEE Projects Sydney",
    "/insights": "Insights — Strategy, Governance & Delivery Perspectives | ESSGEE Projects",
    "/contact":  "Contact ESSGEE Projects — Strategic Advisory, Sydney Australia",
  };

  const fullTitle =
    title === site.shortName
      ? "ESSGEE Projects | Strategy, Governance & Delivery Advisory — Sydney, Australia"
      : (keywordTitles[path] ?? `${title} | ESSGEE Projects`);

  // Guard: Clamp description to 150 chars to prevent "Meta Description Over 155 Characters"
  // and "Meta Description Over 985 Pixels" audit issues (Google truncates at ~155 chars / ~985px)
  const safeDescription =
    description.length > 150
      ? description.slice(0, 147).trimEnd() + "..."
      : description;

  // Build breadcrumb JSON-LD from path
  const breadcrumbLd = path
    ? {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: site.url,
          },
          ...path
            .split("/")
            .filter(Boolean)
            .map((segment, index, arr) => ({
              "@type": "ListItem",
              position: index + 2,
              name: segment
                .replace(/-/g, " ")
                .replace(/\b\w/g, (c) => c.toUpperCase()),
              item: `${site.url}/${arr.slice(0, index + 1).join("/")}`,
            })),
        ],
      }
    : null;

  // Combine all JSON-LD objects
  const allJsonLd = [
    ...(breadcrumbLd ? [breadcrumbLd] : []),
    ...(jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : []),
  ];

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={safeDescription} />
      <link rel="canonical" href={url} />
      {noIndex && <meta name="robots" content="noindex, follow" />}

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={safeDescription} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={`${site.url}${site.socialImage}`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="ESSGEE Projects — Sustainability Through Strategy" />
      <meta property="og:site_name" content="ESSGEE Projects" />
      <meta property="og:locale" content="en_AU" />

      {/* Article-specific OG tags */}
      {type === "article" && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {type === "article" && articleAuthor && (
        <meta property="article:author" content={articleAuthor} />
      )}

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={safeDescription} />
      <meta name="twitter:image" content={`${site.url}${site.socialImage}`} />
      <meta name="twitter:image:alt" content="ESSGEE Projects — Sustainability Through Strategy" />

      {/* JSON-LD Structured Data */}
      {allJsonLd.map((ld, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(ld)}
        </script>
      ))}
    </Helmet>
  );
};

export default Seo;
