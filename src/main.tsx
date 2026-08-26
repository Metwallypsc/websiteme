import { createRoot, hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import AppProviders from "./AppProviders";
import AppRoutes from "./App";
import "./index.css";

const container = document.getElementById("root")!;

const app = (
  <AppProviders>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </AppProviders>
);

// Prerendered pages ship with real markup inside #root - hydrate instead of
// re-rendering from scratch so there's no flash/layout shift for real users.
// The dev server (and any route the prerender step didn't cover) starts with
// an empty #root, so it falls back to a normal client render.
if (container.hasChildNodes()) {
  hydrateRoot(container, app);
} else {
  createRoot(container).render(app);
}
