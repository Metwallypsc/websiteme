import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Award, 
  Heart, 
  MessageSquare, 
  Trophy, 
  Zap 
} from "lucide-react";

const WhyWorkWithMe = () => {
  const advantages = [
    {
      icon: <Award className="h-8 w-8 text-success" />,
      title: "Deep industry expertise",
      description: "From SaaS to Blockchain to GRC"
    },
    {
      icon: <Heart className="h-8 w-8 text-success" />,
      title: "Human-first approach",
      description: "I align teams, not just features"
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-success" />,
      title: "Dual fluency",
      description: "I speak both \"tech\" and \"business\""
    },
    {
      icon: <Trophy className="h-8 w-8 text-success" />,
      title: "Proven track record",
      description: "Delivered successful products in highly complex domains"
    },
    {
      icon: <Zap className="h-8 w-8 text-success" />,
      title: "Fast ramp-up",
      description: "I integrate quickly and deliver value from day one"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-2xl">✅</span>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Why Work With Me?</h2>
          </div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            What sets me apart in the product management and business analysis space
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {advantages.map((advantage, index) => (
            <div key={index} className="text-center space-y-4">
              <div className="flex justify-center">
                <div className="p-3 bg-yellow-100 rounded-lg w-fit">
                  {advantage.icon}
                </div>
              </div>
              <div>
                <h3 className="text-sm font-semibold mb-1 text-slate-900">
                  {advantage.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {advantage.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyWorkWithMe;