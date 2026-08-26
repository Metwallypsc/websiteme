import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { HelmetServerState } from "react-helmet-async";
import AppProviders from "./AppProviders";
import AppRoutes from "./App";

// Used only by scripts/prerender.mjs at build time - never shipped to the
// browser. Renders one route to a static HTML string plus the <head> tags
// react-helmet-async collected for it (title, meta, canonical, JSON-LD).
export function render(url: string): { html: string; helmet: HelmetServerState } {
  const helmetContext: { helmet?: HelmetServerState } = {};

  const html = ReactDOMServer.renderToString(
    <AppProviders helmetContext={helmetContext}>
      <StaticRouter location={url}>
        <AppRoutes />
      </StaticRouter>
    </AppProviders>
  );

  return { html, helmet: helmetContext.helmet! };
}
