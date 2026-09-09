import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Compass,
  TrendingUp,
  Search,
  Users,
  FileText,
  Navigation,
  Globe,
  CheckCircle,
  MessageSquare,
  Linkedin,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { openCalPopup } from "@/lib/cal";
import { trackEvent } from "@/lib/analytics";
import { LINKEDIN_URL } from "@/data/structuredData";

const WHATSAPP_NUMBER = "+201112654678";

const Mentorship = () => {
  const { t } = useLanguage();

  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    t("mentorshipWhatsappMessage")
  )}`;

  const handleBookSession = (source: string) => {
    trackEvent("book_a_call_click", { source });
    openCalPopup();
  };

  const handleWhatsAppClick = (source: string) => {
    trackEvent("whatsapp_click", { source });
  };

  const who = [
    { icon: <Compass className="h-6 w-6 text-blue-600" />, title: t("mentorshipWho1Title"), desc: t("mentorshipWho1Desc") },
    { icon: <TrendingUp className="h-6 w-6 text-blue-600" />, title: t("mentorshipWho2Title"), desc: t("mentorshipWho2Desc") },
    { icon: <Search className="h-6 w-6 text-blue-600" />, title: t("mentorshipWho3Title"), desc: t("mentorshipWho3Desc") },
  ];

  const whatYouGet = [
    {
      icon: <Users className="h-6 w-6 text-white" />,
      title: t("mentorshipGet1Title"),
      items: [t("mentorshipGet1Item1"), t("mentorshipGet1Item2"), t("mentorshipGet1Item3")],
    },
    {
      icon: <FileText className="h-6 w-6 text-white" />,
      title: t("mentorshipGet2Title"),
      items: [t("mentorshipGet2Item1"), t("mentorshipGet2Item2"), t("mentorshipGet2Item3")],
    },
    {
      icon: <Navigation className="h-6 w-6 text-white" />,
      title: t("mentorshipGet3Title"),
      items: [t("mentorshipGet3Item1"), t("mentorshipGet3Item2"), t("mentorshipGet3Item3")],
    },
    {
      icon: <Globe className="h-6 w-6 text-white" />,
      title: t("mentorshipGet4Title"),
      items: [t("mentorshipGet4Item1"), t("mentorshipGet4Item2"), t("mentorshipGet4Item3"), t("mentorshipGet4Item4")],
    },
  ];

  const followTags = [
    t("mentorshipFollowTag1"),
    t("mentorshipFollowTag2"),
    t("mentorshipFollowTag3"),
    t("mentorshipFollowTag4"),
  ];

  const howItWorks = [
    { title: t("mentorshipHow1Title"), desc: t("mentorshipHow1Desc") },
    { title: t("mentorshipHow2Title"), desc: t("mentorshipHow2Desc") },
    { title: t("mentorshipHow3Title"), desc: t("mentorshipHow3Desc") },
  ];

  return (
    <>
      {/* Hero */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <Badge variant="outline" className="mb-6 px-4 py-1.5 text-primary border-primary/20">
            {t("mentorshipBadge")}
          </Badge>
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight tracking-tight text-slate-900 mb-6">
            {t("mentorshipH1Prefix")}
            <span className="text-primary">{t("mentorshipH1Highlight")}</span>
            {t("mentorshipH1Suffix")}
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto mb-8">
            {t("mentorshipSubtitle")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg"
              onClick={() => handleBookSession("mentorship_hero")}
            >
              {t("mentorshipCtaBook")} →
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#mentorship-how-it-works">{t("mentorshipCtaHow")}</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Who this is for */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">{t("mentorshipWhoTitle")}</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">{t("mentorshipWhoSubtitle")}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {who.map((item, i) => (
              <Card key={i} className="border border-slate-200 bg-white">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-1.5">{item.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What you get */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">{t("mentorshipGetTitle")}</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">{t("mentorshipGetSubtitle")}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {whatYouGet.map((item, i) => (
              <div key={i} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <h3 className="text-base font-bold text-slate-900">{item.title}</h3>
                </div>
                <ul className="space-y-2">
                  {item.items.map((line, li) => (
                    <li key={li} className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                      <span className="text-sm text-slate-600 leading-relaxed">{line}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Follow along */}
          <div className="mt-8 max-w-5xl mx-auto bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
            <div className="flex flex-col md:flex-row md:items-center gap-6 justify-between">
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{t("mentorshipFollowTitle")}</h3>
                <p className="text-sm text-slate-600 leading-relaxed max-w-2xl mb-4">{t("mentorshipFollowText")}</p>
                <div className="flex flex-wrap gap-2">
                  {followTags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[13px] font-medium text-slate-700 bg-slate-100 border border-slate-200 rounded-lg px-3 py-1.5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <Button
                asChild
                className="bg-blue-600 hover:bg-blue-700 text-white shrink-0"
                onClick={() => trackEvent("linkedin_click", { source: "mentorship_follow" })}
              >
                <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-4 w-4" />
                  {t("mentorshipFollowCta")} →
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="mentorship-how-it-works" className="py-16 md:py-20 bg-white scroll-mt-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">{t("mentorshipHowTitle")}</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">{t("mentorshipHowSubtitle")}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {howItWorks.map((step, i) => (
              <Card key={i} className="border border-slate-200 bg-white">
                <CardContent className="p-6">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center text-sm font-bold mb-4">
                    {i + 1}
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-1.5">{step.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{step.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">{t("mentorshipCtaTitle")}</h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto leading-relaxed mb-8">{t("mentorshipCtaText")}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-white/90 shadow-lg transition-all duration-300"
              onClick={() => handleBookSession("mentorship_closing_cta")}
            >
              {t("mentorshipCtaBook")}
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-blue-600 hover:bg-white hover:!text-black transition-all duration-300 shadow-lg"
            >
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleWhatsAppClick("mentorship_closing_cta")}
              >
                <MessageSquare className="h-5 w-5" />
                {t("mentorshipCtaSend")}
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Mentorship;
