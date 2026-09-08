import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { CALCOM_URL, initInlineWidget } from "@/lib/cal";

// Loads Cal.com lazily, only once this section actually scrolls into view -
// there's no reason to pull in the embed script for visitors who never
// reach the contact page's booking widget.
const CalInlineEmbed = () => {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = containerRef.current;
    if (!node || !CALCOM_URL) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView || !containerRef.current) return;
    initInlineWidget(containerRef.current);
  }, [inView]);

  if (!CALCOM_URL) {
    return null;
  }

  return (
    <div
      ref={containerRef}
      className="min-h-[650px] w-full rounded-2xl border border-slate-200 bg-white overflow-hidden"
      aria-label={t("bookACall")}
    >
      {!inView && (
        <div className="flex h-[650px] items-center justify-center text-sm text-slate-400">
          {t("calendarLoading")}
        </div>
      )}
    </div>
  );
};

export default CalInlineEmbed;
