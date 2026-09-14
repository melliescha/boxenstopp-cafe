import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import Reveal from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { socialLinks } from "@/config/social";
import { newsPosts } from "@/data/newsPosts";

const [featured, ...rest] = newsPosts;

const News = () => (
  <Layout>
    <SEO
      title="News & Aktuelles | Bistro Boxenstopp Hergatz"
      description="Blog und Neuigkeiten aus dem Bistro Boxenstopp in Hergatz: neuer Beeren-Flammkuchen, Sponsoring beim TSV Wohmbrechts und Aktuelles aus der Nachbarschaft."
      path="/news"
      image="/og-image.jpg"
    />

    <section className="border-b border-border bg-secondary/30 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-bronze">Blog</p>
        <h1 className="max-w-3xl font-serif text-4xl font-normal leading-tight tracking-[-0.02em] text-foreground md:text-6xl">
          News & Aktuelles aus dem Bistro Boxenstopp
        </h1>
        <p className="mt-6 max-w-2xl text-lg font-light leading-8 text-muted-foreground">
          Neue Produkte, Aktionen und Neuigkeiten aus der Nachbarschaft. Jeder Beitrag verlinkt auf die passenden Fotos in unserem Instagram-Kanal.
        </p>
      </div>
    </section>

    {featured && (
      <section className="border-b border-border bg-background py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <article className="grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-center">
              {featured.image && (
                <img
                  src={featured.image}
                  alt={featured.imageAlt ?? featured.title}
                  className="aspect-[16/10] w-full object-cover"
                  width={1200}
                  height={750}
                />
              )}
              <div>
                <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-bronze">
                  <span>{featured.category}</span>
                  <span className="text-muted-foreground/60">/</span>
                  <time dateTime={featured.date} className="tabular-nums text-muted-foreground">
                    {featured.dateLabel}
                  </time>
                </div>
                <h2 className="mt-4 font-serif text-3xl font-normal leading-tight tracking-[-0.02em] text-foreground md:text-5xl">
                  {featured.title}
                </h2>
                <div className="mt-5 space-y-4 text-lg font-light leading-8 text-muted-foreground">
                  {featured.body.map((paragraph) => (
                    <p key={paragraph.slice(0, 24)}>{paragraph}</p>
                  ))}
                </div>
                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <Button asChild size="lg">
                    <Link to="/speisekarte">Speisekarte ansehen</Link>
                  </Button>
                  {featured.instagramUrl && (
                    <Button asChild size="lg" variant="outline">
                      <a href={featured.instagramUrl} target="_blank" rel="noopener noreferrer">
                        Beitrag auf Instagram
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </article>
          </Reveal>
        </div>
      </section>
    )}

    {rest.length > 0 && (
      <section className="bg-background py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <p className="mb-8 text-xs font-semibold uppercase tracking-[0.2em] text-bronze">Weitere Beiträge</p>
          <div className="grid gap-x-10 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((post) => (
              <Reveal key={post.slug}>
                <article id={post.slug} className="flex h-full flex-col border-t border-border pt-6">
                  {post.image && (
                    <img
                      src={post.image}
                      alt={post.imageAlt ?? post.title}
                      className="mb-6 aspect-[4/3] w-full object-cover"
                      loading="lazy"
                      width={900}
                      height={675}
                    />
                  )}
                  <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-bronze">
                    <span>{post.category}</span>
                    <span className="text-muted-foreground/60">/</span>
                    <time dateTime={post.date} className="tabular-nums text-muted-foreground">
                      {post.dateLabel}
                    </time>
                  </div>
                  <h3 className="mt-3 font-serif text-2xl font-normal leading-tight tracking-[-0.02em] text-foreground">
                    {post.title}
                  </h3>
                  <p className="mt-3 text-base font-light leading-7 text-muted-foreground">{post.excerpt}</p>
                  {post.instagramUrl && (
                    <a
                      href={post.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                    >
                      Beitrag auf Instagram ansehen
                      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </a>
                  )}
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    )}

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
