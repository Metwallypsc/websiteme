import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Briefcase, 
  FileText, 
  Users, 
  UserCheck, 
  MessageSquare,
  ArrowRight,
  CheckCircle
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
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-2xl">💼</span>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">My Services</h2>
          </div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Comprehensive product management and business analysis services tailored to your needs
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-lg transition-all duration-300 border border-slate-200 bg-white"
            >
              <CardHeader className="pb-4">
                <div className="text-center">
                  <div className="w-20 h-20 bg-slate-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                    {service.icon}
                  </div>
                  <CardTitle className="text-lg mb-2 text-slate-900">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-slate-600 text-sm leading-relaxed">
                    {service.subtitle}
                  </CardDescription>
                </div>
              </CardHeader>
              
              <CardContent className="pt-0">
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700 text-sm leading-relaxed">{feature}</span>
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