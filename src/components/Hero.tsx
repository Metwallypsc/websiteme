import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Linkedin } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50 pt-20">
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <Badge variant="outline" className="mb-6 px-4 py-2 text-primary border-primary/20">
            12+ Years Experience
          </Badge>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight text-slate-900">
            🚀 Elevate Your Product,
            <br />
            <span className="text-primary">
              Empower Your Team
            </span>
          </h1>
          
          <div className="mb-8 space-y-4">
            <p className="text-xl md:text-2xl mb-4 text-slate-700">
              Hi, I'm <strong>Abdulrhman Metwally</strong>, a seasoned Product Manager, Business Analyst, and 
              Strategic Consultant with 12+ years of hands-on experience building digital products in 
              complex industries like GRC, Blockchain, Telecom, Government, and SaaS.
            </p>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
              Whether you're launching your first product, scaling a B2B platform, or navigating 
              enterprise digital transformation — I offer end-to-end expertise to help you deliver 
              the right solutions, faster.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              size="lg" 
              className="bg-primary text-white hover:bg-primary/90 shadow-lg transition-all duration-300"
              onClick={() => window.open('mailto:Arhmetwally@outlook.com', '_blank')}
            >
              <Mail className="mr-2 h-5 w-5" />
              Get Started Today
              <span className="ml-2">→</span>
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-slate-300 text-slate-700 hover:bg-slate-100 transition-all duration-300"
              onClick={() => window.open('#', '_blank')}
            >
              <Linkedin className="mr-2 h-5 w-5" />
              View LinkedIn Profile
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;