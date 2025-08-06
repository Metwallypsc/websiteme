import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhoIsThisFor from "@/components/WhoIsThisFor";
import WhyWorkWithMe from "@/components/WhyWorkWithMe";
import Contact from "@/components/Contact";
import { LanguageProvider } from "@/contexts/LanguageContext";

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <Header />
        <Hero />
        <Services />
        <WhoIsThisFor />
        <WhyWorkWithMe />
        <Contact />
      </div>
    </LanguageProvider>
  );
};

export default Index;
