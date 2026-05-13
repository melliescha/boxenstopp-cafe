import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Search, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { faqBlocks, allFaqs } from "@/data/faqData";

const FAQ = () => {
  const [query, setQuery] = useState("");

  // Inject FAQPage JSON-LD with all 44 Q&As
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: allFaqs.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: f.answer,
        },
      })),
    };
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "faq-page-schema";
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);
    return () => {
      const existing = document.head.querySelector('script[id="faq-page-schema"]');
      if (existing) document.head.removeChild(existing);
    };
  }, []);

  const q = query.trim().toLowerCase();

  const filteredBlocks = useMemo(() => {
    if (!q) return faqBlocks;
    return faqBlocks
      .map((b) => ({
        ...b,
        items: b.items.filter(
          (i) =>
            i.question.toLowerCase().includes(q) ||
            i.answer.toLowerCase().includes(q),
        ),
      }))
      .filter((b) => b.items.length > 0);
  }, [q]);

  const handleNav = (id: string) => {
    const el = document.getElementById(`block-${id}`);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <Layout>
      <SEO
        title="Häufige Fragen | Bistro Boxenstopp Hergatz im Westallgäu"
        description="Alle Antworten rund um euren Besuch im Bistro Boxenstopp: Anfahrt, Öffnungszeiten, Speisen, Partner, Radfahrer Infos und mehr."
        path="/faq"
      />

      {/* Hero */}
      <section
        className="py-16 md:py-20"
        style={{ backgroundColor: "#FEF4EC" }}
      >
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <p className="font-medium tracking-[0.2em] uppercase text-sm mb-3" style={{ color: "#9E7C4E" }}>
            FAQ
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4" style={{ color: "#164472" }}>
            Häufig gestellte Fragen
          </h1>
          <div className="divider-bronze mb-5" />
          <p className="text-base md:text-lg" style={{ color: "#6B4A2E" }}>
            Alle Antworten rund um euren Besuch bei uns. Falls eine Frage fehlt, ruft uns einfach an: 0171 7622620.
          </p>

          {/* Search */}
          <div className="mt-8 relative max-w-xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5" style={{ color: "#9E7C4E" }} />
            <Input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Frage oder Stichwort suchen…"
              className="pl-12 h-12 bg-white border-2 rounded-full text-base"
              style={{ borderColor: "#EDE0D0" }}
              aria-label="FAQ durchsuchen"
            />
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-[260px_1fr] gap-6 lg:gap-10 max-w-6xl mx-auto min-w-0">
            {/* TOC: horizontal scroll on mobile, sticky sidebar on desktop */}
            <aside className="lg:sticky lg:top-24 lg:self-start min-w-0">
              <div
                className="rounded-xl p-3 lg:p-5"
                style={{ backgroundColor: "#FEF4EC", border: "1px solid #EDE0D0" }}
              >
                <h2
                  className="font-serif text-lg font-semibold mb-3 hidden lg:block"
                  style={{ color: "#164472" }}
                >
                  Themen
                </h2>
                <nav aria-label="FAQ Themen">
                  <ul
                    className="flex lg:flex-col gap-2 lg:gap-1 overflow-x-auto lg:overflow-visible -mx-3 lg:mx-0 px-3 lg:px-0 pb-1 lg:pb-0 snap-x snap-mandatory lg:snap-none"
                    style={{ WebkitOverflowScrolling: "touch", scrollbarWidth: "thin" }}
                  >
                    {faqBlocks.map((b) => (
                      <li key={b.id} className="shrink-0 lg:shrink snap-start">
                        <button
                          type="button"
                          onClick={() => handleNav(b.id)}
                          className="text-left whitespace-nowrap lg:whitespace-normal text-sm font-medium px-3 py-2 min-h-[44px] rounded-lg transition-colors w-full hover:bg-white focus-visible:bg-white"
                          style={{ color: "#164472" }}
                        >
                          <span className="mr-2" aria-hidden="true">{b.icon}</span>
                          {b.title}
                        </button>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </aside>

            {/* Blocks */}
            <div className="space-y-12 min-w-0">
              {filteredBlocks.length === 0 && (
                <p className="text-center italic" style={{ color: "#6B4A2E" }}>
                  Keine Treffer für „{query}". Versuch ein anderes Stichwort oder ruf uns an: 0171 7622620.
                </p>
              )}

              {filteredBlocks.map((block) => (
                <div key={block.id} id={`block-${block.id}`} className="scroll-mt-24">
                  <h2
                    className="font-serif text-2xl md:text-3xl font-bold mb-5 flex items-center gap-3"
                    style={{ color: "#164472" }}
                  >
                    <span aria-hidden>{block.icon}</span>
                    {block.title}
                  </h2>
                  <Accordion
                    type="single"
                    collapsible
                    className="bg-white rounded-xl px-3 sm:px-5 md:px-6 shadow-sm"
                    style={{ border: "1px solid #EDE0D0" }}
                  >
                    {block.items.map((item, idx) => (
                      <AccordionItem key={idx} value={`${block.id}-${idx}`}>
                        <AccordionTrigger
                          className="text-left font-medium hover:no-underline"
                          style={{ color: "#164472" }}
                        >
                          {item.question}
                        </AccordionTrigger>
                        <AccordionContent
                          className="leading-relaxed text-base"
                          style={{ color: "#6B4A2E" }}
                        >
                          {item.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FAQ;
