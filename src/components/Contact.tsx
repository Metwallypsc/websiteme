import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Linkedin, ArrowRight } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 bg-gradient-hero relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 w-64 h-64 bg-white rounded-full mix-blend-overlay filter blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-accent rounded-full mix-blend-overlay filter blur-xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2 border-white/20 text-white">
            📩 Let's Connect
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Ready to build something meaningful?
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Let's talk about how I can support your product journey — as a service, 
            as a coach, or as your partner in solving complex problems.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-white/10 backdrop-blur-md border-white/20 shadow-glow">
            <CardContent className="p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="text-white">
                  <h3 className="text-2xl font-bold mb-4">
                    Get in touch today
                  </h3>
                  <p className="text-white/80 mb-6 leading-relaxed">
                    Whether you need fractional product management, team mentorship, 
                    or strategic consultation, I'm here to help transform your product vision into reality.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-accent" />
                      <span className="text-white/90">Arhmetwally@outlook.com</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Linkedin className="h-5 w-5 text-accent" />
                      <span className="text-white/90">Connect on LinkedIn</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <Button 
                    size="lg" 
                    className="w-full bg-white text-primary hover:bg-white/90 shadow-lg transition-all duration-300 transform hover:scale-105"
                    onClick={() => window.open('mailto:Arhmetwally@outlook.com', '_blank')}
                  >
                    <Mail className="mr-2 h-5 w-5" />
                    Send Email
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="w-full border-white/30 text-white hover:bg-white/10 transition-all duration-300"
                    onClick={() => window.open('#', '_blank')}
                  >
                    <Linkedin className="mr-2 h-5 w-5" />
                    LinkedIn Profile
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="text-center mt-12">
            <p className="text-white/60 text-lg font-medium italic">
              "Your product deserves more than just management — it deserves momentum."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;