import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhoIsThisFor from "@/components/WhoIsThisFor";
import WhyWorkWithMe from "@/components/WhyWorkWithMe";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <WhoIsThisFor />
      <WhyWorkWithMe />
      <Contact />
    </div>
  );
};

export default Index;
