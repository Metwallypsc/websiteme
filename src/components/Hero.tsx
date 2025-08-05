import { Button } from "@/components/ui/button";
import { Mail, Linkedin } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full mix-blend-overlay filter blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent rounded-full mix-blend-overlay filter blur-xl animate-pulse delay-700"></div>
      </div>
      
      <div className="container mx-auto px-6 text-center text-white relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            🚀 Elevate Your Product,
            <br />
            <span className="bg-gradient-to-r from-white to-accent bg-clip-text text-transparent">
              Empower Your Team
            </span>
          </h1>
          
          <div className="mb-8">
            <p className="text-xl md:text-2xl mb-4 text-white/90">
              <strong>Hi, I'm Abdulrhman Metwally</strong>
            </p>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed">
              A seasoned Product Manager, Business Analyst, and Strategic Consultant with 12+ years 
              of hands-on experience building digital products in complex industries like GRC, 
              Blockchain, Telecom, Government, and SaaS.
            </p>
          </div>

          <p className="text-lg md:text-xl mb-10 text-white/80 leading-relaxed">
            Whether you're launching your first product, scaling a B2B platform, or navigating 
            enterprise digital transformation — I offer end-to-end expertise to help you deliver 
            the right solutions, faster.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 shadow-glow transition-all duration-300 transform hover:scale-105"
            >
              <Mail className="mr-2 h-5 w-5" />
              Contact Me
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white hover:text-primary transition-all duration-300"
            >
              <Linkedin className="mr-2 h-5 w-5" />
              LinkedIn Profile
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;