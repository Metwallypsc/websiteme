import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  CV_TEXT,
  CV_STATS,
  CV_JOBS,
  CV_SKILLS,
  CV_SIDE,
  CV_EDUCATION,
  CV_COURSES,
  CV_CORE,
  CV_VOL,
  CV_FACTS,
  type Bi,
} from "@/data/cvData";

const CV = () => {
  const { language } = useLanguage();
  const pick = (v: Bi) => v[language];
  const t = CV_TEXT[language];

  const [openJobs, setOpenJobs] = useState<Record<number, boolean>>({ 0: true });
  const toggleJob = (i: number) =>
    setOpenJobs((prev) => ({ ...prev, [i]: !prev[i] }));

  return (
    <section className="bg-gradient-to-b from-slate-50 to-white py-16 md:py-20">
      <div className="container mx-auto px-6 max-w-5xl">

        {/* Hero */}
        <div className="flex flex-col items-center text-center gap-5">
          <div className="inline-flex items-center gap-2 border border-blue-200 bg-blue-50 text-blue-600 text-sm font-semibold px-4 py-1.5 rounded-full whitespace-nowrap">
            {t.badge}
          </div>
          <h1 className="m-0 text-4xl md:text-5xl font-extrabold leading-tight tracking-tight text-slate-900">
            {t.h1a}
          </h1>
          <div className="text-xl md:text-2xl font-bold text-blue-600 leading-snug">
            {t.h1b}
          </div>
          <p className="m-0 max-w-2xl text-lg leading-relaxed text-slate-600">
            {t.lede}
          </p>
          <div className="flex flex-wrap gap-3 justify-center mt-2 print:hidden">
            <button
              onClick={() => window.print()}
              className="inline-flex items-center gap-2 bg-blue-600 text-white text-sm font-semibold px-7 py-3.5 rounded-lg shadow-lg shadow-blue-600/20 hover:bg-blue-700 transition-colors"
            >
              {t.pdf}
            </button>
            <a
              href="#cv-contact"
              className="inline-flex items-center gap-2 bg-slate-900 text-white text-sm font-semibold px-7 py-3.5 rounded-lg hover:bg-slate-800 transition-colors"
            >
              {t.talk}
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className="grid gap-5 mt-14" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))" }}>
          {CV_STATS.map((s, i) => (
            <div key={i} className="bg-white border border-slate-200 rounded-2xl px-6 py-6 shadow-sm">
              <div className="text-3xl font-extrabold text-blue-600 tracking-tight">{s.n}</div>
              <div className="mt-1.5 text-sm font-semibold text-slate-900">{pick(s.label)}</div>
              <div className="mt-1 text-[13px] leading-relaxed text-slate-500">{pick(s.sub)}</div>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="bg-white border border-slate-200 rounded-2xl p-8 mt-7 shadow-sm">
          <h2 className="m-0 mb-3.5 text-xl font-bold text-slate-900">{t.summary}</h2>
          <p className="m-0 text-[17px] leading-loose text-slate-600">{t.summaryText}</p>
        </div>

        {/* Experience */}
        <div className="mt-16 md:mt-20">
          <div className="text-center mb-8">
            <h2 className="m-0 mb-2.5 text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
              {t.expTitle}
            </h2>
            <p className="m-0 text-base text-slate-600">{t.expSub}</p>
          </div>
          <div className="flex flex-col gap-3.5">
            {CV_JOBS.map((j, i) => {
              const open = !!openJobs[i];
              return (
                <div key={i} className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
                  <div
                    onClick={() => toggleJob(i)}
                    className="flex items-start gap-4 px-6 py-5 cursor-pointer hover:bg-slate-50 transition-colors"
                  >
                    <div className="shrink-0 w-11 h-11 rounded-[10px] bg-blue-50 text-blue-600 flex items-center justify-center text-sm font-bold">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-lg font-bold leading-snug text-slate-900">{pick(j.role)}</div>
                      <div className="mt-1 text-sm text-blue-600 font-semibold">{pick(j.company)}</div>
                      <div className="mt-1 text-sm text-slate-500">{pick(j.meta)}</div>
                    </div>
                    <div className="shrink-0 text-xs font-semibold text-slate-600 bg-slate-100 rounded-full px-3.5 py-1.5 whitespace-nowrap">
                      {pick(j.dates)}
                    </div>
                    <div className="shrink-0 w-7 h-7 rounded-lg bg-slate-100 text-slate-600 flex items-center justify-center text-sm font-bold">
                      {open ? "–" : "+"}
                    </div>
                  </div>
                  {open && (
                    <div className="px-6 pb-7 pt-1 border-t border-slate-100">
                      <p className="mt-5 text-[15px] leading-relaxed text-slate-600">{pick(j.blurb)}</p>
                      {j.products.length > 0 && (
                        <div className="mt-5 grid gap-4" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
                          {j.products.map((p, pi) => (
                            <div key={pi} className="bg-slate-50 border border-slate-200 rounded-xl p-5">
                              <div className="flex items-center gap-2.5 flex-wrap">
                                <span className="text-[15px] font-bold text-slate-900">{pick(p.name)}</span>
                                <span className="text-[11px] font-semibold text-blue-600 bg-blue-50 border border-blue-200 rounded-full px-2.5 py-0.5 whitespace-nowrap">
                                  {pick(p.tag)}
                                </span>
                              </div>
                              <p className="mt-2.5 text-sm leading-relaxed text-slate-600">{pick(p.desc)}</p>
                              <p className="mt-2.5 text-sm leading-relaxed text-slate-900">
                                <strong className="font-semibold">{t.myRole} </strong>
                                {pick(p.mine)}
                              </p>
                              <div className="mt-2.5 text-xs text-slate-500 font-mono">{p.tech}</div>
                            </div>
                          ))}
                        </div>
                      )}
                      {j.bullets.length > 0 && (
                        <ul className="mt-5 ps-5 flex flex-col gap-2.5 list-disc">
                          {j.bullets.map((b, bi) => (
                            <li key={bi} className="text-sm leading-relaxed text-slate-600">
                              {pick(b)}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Skills */}
        <div className="mt-16 md:mt-20">
          <div className="text-center mb-8">
            <h2 className="m-0 mb-2.5 text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
              {t.skillsTitle}
            </h2>
            <p className="m-0 text-base text-slate-600">{t.skillsSub}</p>
          </div>
          <div className="grid gap-5" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))" }}>
            {CV_SKILLS.map((g, i) => (
              <div key={i} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                <div className="text-base font-bold mb-4 text-slate-900">{pick(g.title)}</div>
                <div className="flex flex-wrap gap-2">
                  {g.items.map((item, ii) => (
                    <span key={ii} className="text-[13px] font-medium text-slate-700 bg-slate-100 border border-slate-200 rounded-lg px-3 py-1.5">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Freelance / personal projects */}
        <div className="mt-16 md:mt-20">
          <div className="text-center mb-8">
            <h2 className="m-0 mb-2.5 text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
              {t.otherTitle}
            </h2>
            <p className="m-0 text-base text-slate-600">{t.otherSub}</p>
          </div>
          <div className="grid gap-4" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}>
            {CV_SIDE.map((s, i) => (
              <div key={i} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                <div className="flex items-center gap-2.5 flex-wrap">
                  <span className="text-[15px] font-bold text-slate-900">{pick(s.name)}</span>
                  <span className="text-[11px] font-semibold text-blue-600 bg-blue-50 border border-blue-200 rounded-full px-2.5 py-0.5 whitespace-nowrap">
                    {pick(s.tag)}
                  </span>
                </div>
                <p className="mt-2.5 text-sm leading-relaxed text-slate-600">{pick(s.desc)}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Education + Professional development */}
        <div className="grid gap-5 mt-16 md:mt-20" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))" }}>
          <div className="bg-white border border-slate-200 rounded-2xl p-7 shadow-sm">
            <div className="text-lg font-bold mb-4 text-slate-900">{t.eduTitle}</div>
            <div className="flex flex-col gap-3.5">
              {CV_EDUCATION.map((e, i) => (
                <div key={i}>
                  <div className="text-[15px] font-semibold text-slate-900">{pick(e.name)}</div>
                  <div className="mt-0.5 text-sm text-slate-500">{pick(e.meta)}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white border border-slate-200 rounded-2xl p-7 shadow-sm">
            <div className="text-lg font-bold mb-2 text-slate-900">{t.courseTitle}</div>
            <p className="m-0 mb-4 text-sm leading-relaxed text-amber-700 bg-amber-50 border border-amber-200 rounded-lg px-3.5 py-3">
              {t.courseNote}
            </p>
            <div className="flex flex-wrap gap-2">
              {CV_COURSES.map((c, i) => (
                <span key={i} className="text-[13px] font-medium text-slate-700 bg-slate-100 border border-slate-200 rounded-lg px-3 py-1.5">
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Core competencies */}
        <div className="bg-white border border-slate-200 rounded-2xl p-7 mt-5 shadow-sm">
          <div className="text-lg font-bold mb-4 text-slate-900">{t.coreTitle}</div>
          <div className="flex flex-wrap gap-2">
            {CV_CORE.map((c, i) => (
              <span key={i} className="text-[13px] font-medium text-blue-700 bg-blue-50 border border-blue-100 rounded-lg px-3 py-1.5">
                {c}
              </span>
            ))}
          </div>
        </div>

        {/* Volunteering + Good to know */}
        <div className="grid gap-5 mt-5" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))" }}>
          <div className="bg-white border border-slate-200 rounded-2xl p-7 shadow-sm">
            <div className="text-lg font-bold mb-3.5 text-slate-900">{t.volTitle}</div>
            <ul className="m-0 ps-5 flex flex-col gap-2.5 list-disc">
              {CV_VOL.map((v, i) => (
                <li key={i} className="text-sm leading-relaxed text-slate-600">
                  {pick(v)}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white border border-slate-200 rounded-2xl p-7 shadow-sm">
            <div className="text-lg font-bold mb-3.5 text-slate-900">{t.factsTitle}</div>
            <ul className="m-0 ps-5 flex flex-col gap-2.5 list-disc">
              {CV_FACTS.map((f, i) => (
                <li key={i} className="text-sm leading-relaxed text-slate-600">
                  {pick(f)}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact CTA */}
        <div id="cv-contact" className="mt-16 bg-slate-900 rounded-[18px] px-8 md:px-10 py-12 md:py-14 text-center">
          <h2 className="m-0 mb-3.5 text-2xl md:text-3xl font-extrabold text-white tracking-tight">
            {t.ctaTitle}
          </h2>
          <p className="mx-auto mb-7 max-w-xl text-base leading-relaxed text-slate-300">
            {t.ctaText}
          </p>
          <div className="flex flex-wrap gap-3.5 justify-center print:hidden">
            <a
              href="mailto:Arhmetwally@outlook.com"
              className="inline-flex items-center gap-2 bg-yellow-400 text-slate-900 text-sm font-bold px-7 py-3.5 rounded-lg hover:bg-yellow-500 transition-colors"
            >
              {t.ctaMail}
            </a>
            <button
              onClick={() => window.print()}
              className="inline-flex items-center gap-2 bg-transparent text-white border border-slate-600 text-sm font-semibold px-7 py-3.5 rounded-lg hover:bg-slate-800 transition-colors"
            >
              {t.pdf}
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CV;
