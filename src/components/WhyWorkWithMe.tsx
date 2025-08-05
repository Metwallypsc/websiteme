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
    <section className="py-20 bg-gradient-to-b from-muted to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            ✅ Why Choose Me
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Why Work With Me?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            With over 12 years of experience across diverse industries, I bring a unique 
            combination of technical expertise, business acumen, and human-centered leadership.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {advantages.map((advantage, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-1 bg-gradient-card border-border/50"
            >
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="p-4 bg-success/10 rounded-full w-fit mx-auto mb-4 group-hover:bg-success/20 transition-colors">
                    {advantage.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-success transition-colors">
                    {advantage.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {advantage.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyWorkWithMe;