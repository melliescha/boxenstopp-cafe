import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import Reveal from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { socialLinks } from "@/config/social";
import { newsPosts } from "@/data/newsPosts";

const News = () => (
  <Layout>
    <SEO
      title="News & Aktuelles | Bistro Boxenstopp Hergatz"
      description="Aktuelles aus dem Bistro Boxenstopp in Hergatz: neue Produkte wie der Beeren-Flammkuchen, unser Sponsoring beim TSV Wohmbrechts und Neuigkeiten aus der Nachbarschaft."
      path="/news"
      image="/og-image.jpg"
    />

    <section className="border-b border-border bg-secondary/30 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-bronze">Aus dem Bistro</p>
        <h1 className="max-w-3xl font-serif text-4xl font-normal leading-tight tracking-[-0.02em] text-foreground md:text-6xl">
          News & Aktuelles aus Hergatz
        </h1>
        <p className="mt-6 max-w-2xl text-lg font-light leading-8 text-muted-foreground">
          Neue Produkte, Aktionen und Neuigkeiten aus der Nachbarschaft. Hier erfahrt ihr, was bei uns gerade passiert.
        </p>
      </div>
    </section>

    <section className="bg-background py-14 md:py-20">
      <div className="mx-auto max-w-6xl space-y-14 px-6 md:space-y-20">
        {newsPosts.map((post, index) => (
          <Reveal key={post.slug}>
            <article
              id={post.slug}
              className={`grid gap-8 border-b border-border pb-14 last:border-b-0 last:pb-0 ${
                post.image ? "md:grid-cols-[0.9fr_1.1fr] md:items-start" : ""
              }`}
            >
              {post.image && (
                <img
                  src={post.image}
                  alt={post.imageAlt ?? post.title}
                  className="aspect-[4/3] w-full object-cover"
                  loading={index === 0 ? "eager" : "lazy"}
                  width={1200}
                  height={900}
                />
              )}
              <div>
                <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-bronze">
                  <span>{post.category}</span>
                  <span className="text-muted-foreground/60">/</span>
                  <time dateTime={post.date} className="tabular-nums text-muted-foreground">
                    {post.dateLabel}
                  </time>
                </div>
                <h2 className="mt-4 font-serif text-2xl font-normal leading-tight tracking-[-0.02em] text-foreground md:text-4xl">
                  {post.title}
                </h2>
                <div className="mt-5 space-y-4 text-lg font-light leading-8 text-muted-foreground">
                  {post.body.map((paragraph) => (
                    <p key={paragraph.slice(0, 24)}>{paragraph}</p>
                  ))}
                </div>
                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <Button asChild size="lg">
                    <Link to="/speisekarte">Speisekarte ansehen</Link>
                  </Button>
                  {post.instagram && (
                    <Button asChild size="lg" variant="outline">
                      <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer">
                        Fotos auf Instagram
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>

    <section className="border-t border-border bg-secondary/30 py-14 md:py-20">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="font-serif text-2xl font-normal leading-tight tracking-[-0.02em] text-foreground md:text-4xl">
          Nichts verpassen
        </h2>
        <p className="mt-4 text-lg font-light leading-8 text-muted-foreground">
          Kurzfristige Neuigkeiten teilen wir zuerst auf Instagram. Kommt gerne vorbei, wir freuen uns auf euch.
        </p>
        <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
          <Button asChild size="lg" variant="outline">
            <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer">
              Instagram folgen
            </a>
          </Button>
          <Button asChild size="lg">
            <Link to="/kontakt">Anfahrt & Kontakt</Link>
          </Button>
        </div>
      </div>
    </section>
  </Layout>
);

export default News;
