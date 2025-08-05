import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Briefcase, 
  FileText, 
  Users, 
  UserCheck, 
  MessageSquare,
  ArrowRight 
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Briefcase className="h-8 w-8 text-primary" />,
      title: "Product Management as a Service (PMaaS)",
      subtitle: "Perfect for startups or growing teams needing experienced leadership without hiring full-time.",
      features: [
        "Own and manage your product roadmap",
        "Write and prioritize user stories & features",
        "Facilitate sprint planning and delivery",
        "Represent your company in technical discussions with vendors or dev teams",
        "Lead product discovery, validation, and release planning"
      ]
    },
    {
      icon: <FileText className="h-8 w-8 text-primary" />,
      title: "Business Analysis & Product Documentation",
      subtitle: "Translate business vision into clear, actionable requirements.",
      features: [
        "BRDs, PRDs, User Stories, Use Cases",
        "Functional and non-functional specs",
        "Stakeholder interviews and requirement elicitation",
        "Support for regulated industries like Digital Government, Insurance, GRC, and Blockchain"
      ]
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Team Building & Process Design",
      subtitle: "Build scalable processes and empower your people to deliver.",
      features: [
        "Build and structure in-house product/BA teams",
        "Create SOPs (Standard Operating Procedures) and SOOs (Sequences of Operations)",
        "Design scalable operating models for delivery teams",
        "Agile adoption and continuous improvement guidance"
      ]
    },
    {
      icon: <UserCheck className="h-8 w-8 text-primary" />,
      title: "Mentorship & Career Coaching for New Professionals",
      subtitle: "Support for individuals starting in Product or Business Analysis roles.",
      features: [
        "1:1 mentorship and practical onboarding",
        "Resume building and role readiness support",
        "Career navigation tips in tech industries",
        "Personalized feedback on career strategy"
      ]
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-primary" />,
      title: "Technical Liaison / Product-Vendor Communication",
      subtitle: "Your trusted voice when working with external dev houses, SaaS vendors, or freelancers.",
      features: [
        "Review proposals and contracts",
        "Facilitate communication between business and technical stakeholders",
        "Ensure alignment between your business goals and delivered software"
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            💼 My Services
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            End-to-End Product Excellence
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From strategy to execution, I provide comprehensive product management services 
            tailored to your unique business needs and industry requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-2 bg-gradient-card border-border/50"
            >
              <CardHeader className="pb-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground leading-relaxed">
                      {service.subtitle}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <ArrowRight className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                      <span className="text-card-foreground leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;