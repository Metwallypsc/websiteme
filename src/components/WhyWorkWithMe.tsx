import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Award, 
  Heart, 
  MessageSquare, 
  Trophy, 
  Zap 
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const WhyWorkWithMe = () => {
  const { t } = useLanguage();
  
  const advantages = [
    {
      icon: <Award className="h-8 w-8 text-success" />,
      title: t('advantage1'),
      description: t('advantage1Desc')
    },
    {
      icon: <Heart className="h-8 w-8 text-success" />,
      title: t('advantage2'),
      description: t('advantage2Desc')
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-success" />,
      title: t('advantage3'),
      description: t('advantage3Desc')
    },
    {
      icon: <Trophy className="h-8 w-8 text-success" />,
      title: t('advantage4'),
      description: t('advantage4Desc')
    },
    {
      icon: <Zap className="h-8 w-8 text-success" />,
      title: t('advantage5'),
      description: t('advantage5Desc')
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">{t('whyTitle')}</h2>
          </div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            {t('whySubtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {advantages.map((advantage, index) => (
            <div key={index} className="text-center space-y-4">
              <div className="flex justify-center">
                <div className="p-3 bg-muted rounded-lg w-fit">
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