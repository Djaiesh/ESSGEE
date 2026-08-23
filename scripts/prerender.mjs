import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { createServer } from "vite";

const routes = [
  "/",
  "/about",
  "/services",
  "/sectors",
  "/founder",
  "/insights",
  "/insights/bridging-strategy-governance-and-delivery",
  "/insights/sustainability-through-strategy",
  "/insights/systems-and-compliance-through-effective-delivery",
  "/contact",
];

const projectRoot = process.cwd();
const outputDirectory = resolve(projectRoot, "dist");
const template = await readFile(resolve(outputDirectory, "index.html"), "utf8");
const vite = await createServer({
  appType: "custom",
  ssr: { noExternal: ["react-helmet-async"] },
  server: { middlewareMode: true },
});

try {
  const { render } = await vite.ssrLoadModule("/src/entry-server.tsx");

  for (const route of routes) {
    const { html, helmet } = render(route);
    if (!helmet) throw new Error(`SEO metadata was not generated for ${route}`);

    const head = [
      '<meta charset="UTF-8" />',
      '<meta name="viewport" content="width=device-width, initial-scale=1.0" />',
      '<link rel="icon" type="image/jpeg" href="/favicon.jpeg" />',
      '<link rel="apple-touch-icon" href="/favicon.jpeg" />',
      '<link rel="preconnect" href="https://fonts.googleapis.com">',
      '<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>',
      '<meta name="author" content="ESSGEE Projects" />',
      '<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />',
      '<meta name="theme-color" content="#0B1D3A" />',
      '<meta name="geo.region" content="AU-NSW" />',
      '<meta name="geo.placename" content="Sydney" />',
      helmet.title.toString(),
      helmet.meta.toString(),
      helmet.link.toString(),
      helmet.script.toString(),
    ].join("\n  ");

    const page = template
      .replace(/<head>[\s\S]*?<\/head>/, `<head>\n  ${head}\n</head>`)
      .replace('<div id="root"></div>', `<div id="root">${html}</div>`);

    const outputPath = route === "/"
      ? resolve(outputDirectory, "index.html")
      : resolve(outputDirectory, route.slice(1), "index.html");
    await mkdir(dirname(outputPath), { recursive: true });
    await writeFile(outputPath, page);
  }
} finally {
  await vite.close();
}
