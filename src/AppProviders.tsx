import { ReactNode } from "react";
import { TooltipProvider } from "@/components/ui/tooltip";
import { HelmetProvider } from "react-helmet-async";

interface AppProvidersProps {
  children: ReactNode;
  // Passed only on the server; react-helmet-async uses it to extract the
  // collected <head> tags after renderToString() completes.
  helmetContext?: object;
}

const AppProviders = ({ children, helmetContext }: AppProvidersProps) => (
  <HelmetProvider context={helmetContext}>
    <TooltipProvider>{children}</TooltipProvider>
  </HelmetProvider>
);

export default AppProviders;
