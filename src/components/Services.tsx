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
import { useLanguage } from "@/contexts/LanguageContext";

const Services = () => {
  const { t } = useLanguage();
  
  const services = [
    {
      icon: <Briefcase className="h-8 w-8 text-primary" />,
      title: t('service1Title'),
      subtitle: t('service1Subtitle'),
      features: [
        t('service1Feature1'),
        t('service1Feature2'),
        t('service1Feature3'),
        t('service1Feature4'),
        t('service1Feature5')
      ]
    },
    {
      icon: <FileText className="h-8 w-8 text-primary" />,
      title: t('service2Title'),
      subtitle: t('service2Subtitle'),
      features: [
        t('service2Feature1'),
        t('service2Feature2'),
        t('service2Feature3'),
        t('service2Feature4')
      ]
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: t('service3Title'),
      subtitle: t('service3Subtitle'),
      features: [
        t('service3Feature1'),
        t('service3Feature2'),
        t('service3Feature3'),
        t('service3Feature4')
      ]
    },
    {
      icon: <UserCheck className="h-8 w-8 text-primary" />,
      title: t('service4Title'),
      subtitle: t('service4Subtitle'),
      features: [
        t('service4Feature1'),
        t('service4Feature2'),
        t('service4Feature3'),
        t('service4Feature4')
      ]
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-primary" />,
      title: t('service5Title'),
      subtitle: t('service5Subtitle'),
      features: [
        t('service5Feature1'),
        t('service5Feature2'),
        t('service5Feature3')
      ]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-2xl">💼</span>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">{t('servicesTitle')}</h2>
          </div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            {t('servicesSubtitle')}
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