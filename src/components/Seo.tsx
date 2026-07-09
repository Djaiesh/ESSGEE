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
  const fullTitle =
    title === site.shortName
      ? "ESSGEE Projects | Sustainability Through Strategy"
      : `${title} | ESSGEE Projects`;

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
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      {noIndex && <meta name="robots" content="noindex, follow" />}

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={`${site.url}${site.socialImage}`} />
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
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${site.url}${site.socialImage}`} />

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
