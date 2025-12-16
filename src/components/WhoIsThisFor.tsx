import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Rocket, 
  Building, 
  Users, 
  GraduationCap, 
  Building2 
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const WhoIsThisFor = () => {
  const { t } = useLanguage();
  
  const audiences = [
    {
      icon: <Rocket className="h-8 w-8 text-accent" />,
      title: t('audience1'),
      description: t('audience1Desc')
    },
    {
      icon: <Building className="h-8 w-8 text-accent" />,
      title: t('audience2'),
      description: t('audience2Desc')
    },
    {
      icon: <Users className="h-8 w-8 text-accent" />,
      title: t('audience3'),
      description: t('audience3Desc')
    },
    {
      icon: <GraduationCap className="h-8 w-8 text-accent" />,
      title: t('audience4'),
      description: t('audience4Desc')
    },
    {
      icon: <Building2 className="h-8 w-8 text-accent" />,
      title: t('audience5'),
      description: t('audience5Desc')
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-2xl">👨‍💻</span>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">{t('whoTitle')}</h2>
          </div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            {t('whoSubtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {audiences.map((audience, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-lg transition-all duration-300 border border-slate-200 bg-white"
            >
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="p-3 bg-blue-50 rounded-lg w-fit mx-auto mb-4">
                    {audience.icon}
                  </div>
                  <h3 className="text-sm font-semibold mb-1 text-slate-900">
                    {audience.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
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