import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Rocket, 
  Building, 
  Users, 
  GraduationCap, 
  Building2 
} from "lucide-react";

const WhoIsThisFor = () => {
  const audiences = [
    {
      icon: <Rocket className="h-8 w-8 text-accent" />,
      title: "Startups",
      description: "needing fractional PM leadership"
    },
    {
      icon: <Building className="h-8 w-8 text-accent" />,
      title: "Tech companies",
      description: "seeking to scale with structure"
    },
    {
      icon: <Users className="h-8 w-8 text-accent" />,
      title: "Agencies",
      description: "building regulated or high-risk products"
    },
    {
      icon: <GraduationCap className="h-8 w-8 text-accent" />,
      title: "New professionals",
      description: "entering the BA/Product world"
    },
    {
      icon: <Building2 className="h-8 w-8 text-accent" />,
      title: "Enterprises",
      description: "transitioning from waterfall to Agile"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            👨‍💻 Target Audience
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Who This Is For
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My services are designed for organizations and individuals at different stages 
            of their product journey, from early-stage startups to established enterprises.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {audiences.map((audience, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-1 bg-gradient-card border-border/50"
            >
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="p-4 bg-accent/10 rounded-full w-fit mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                    {audience.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-accent transition-colors">
                    {audience.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {audience.description}
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

export default WhoIsThisFor;