import { useState } from "react";
import Layout from "@/components/Layout";
import { Gift, Star, CreditCard, X } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface VoucherOption {
  title: string;
  value: string;
  description: string;
  icon: typeof Gift;
  badge?: string;
  customAmount?: boolean;
}

const voucherOptions: VoucherOption[] = [
  {
    title: "Kaffeepause",
    value: "15",
    description: "Zwei Kaffee und ein Stück Gebäck: die perfekte kleine Auszeit.",
    icon: Gift,
  },
  {
    title: "Genießer-Paket",
    value: "30",
    description: "Flammkuchen, Getränke und Nachtisch: genug für zwei.",
    icon: Star,
    badge: "Beliebt",
  },
  {
    title: "Wunschbetrag",
    value: "custom",
    description: "Du bestimmst den Betrag, der Beschenkte wählt selbst.",
    icon: CreditCard,
    customAmount: true,
  },
];

const Gutscheine = () => {
  const [showForm, setShowForm] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");
  const [customAmount, setCustomAmount] = useState(25);
  const [formData, setFormData] = useState({
    senderName: "",
    senderEmail: "",
    recipientName: "",
    message: "",
    agbAccepted: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const openForm = (value: string) => {
    setSelectedValue(value);
    setShowForm(true);
  };

  const finalAmount = selectedValue === "custom" ? customAmount : parseInt(selectedValue);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <Layout>
      {/* Hero */}
      <section
        className="py-20 md:py-28 text-center"
        style={{
          background: "linear-gradient(135deg, #164472 0%, #0f2f4f 100%)",
        }}
      >
        <div className="container mx-auto px-6 max-w-3xl">
          <Gift className="w-12 h-12 mx-auto mb-4" style={{ color: "#b8943e" }} />
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4" style={{ color: "#b8943e" }}>
            Verschenke einen Boxenstopp
          </h1>
          <p className="text-lg md:text-xl" style={{ color: "#fef4ec" }}>
            Der perfekte Gutschein für Genießer, Sportler und Radfahrer.
          </p>
        </div>
      </section>

      {/* Voucher Cards */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {voucherOptions.map((option) => (
              <div
                key={option.title}
                className="bg-card rounded-xl border border-border shadow-sm overflow-hidden flex flex-col relative"
              >
                {option.badge && (
                  <span
                    className="absolute top-4 right-4 text-xs font-semibold px-3 py-1 rounded-full"
                    style={{ backgroundColor: "#b8943e", color: "#ffffff" }}
                  >
                    {option.badge}
                  </span>
                )}
                <div className="aspect-square bg-secondary/50 flex items-center justify-center">
                  <option.icon className="w-16 h-16 text-bronze/40" />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-serif text-xl font-bold text-foreground mb-1">{option.title}</h3>
                  {!option.customAmount ? (
                    <p className="text-2xl font-bold text-bronze mb-3">{option.value} €</p>
                  ) : (
                    <div className="mb-3">
                      <input
                        type="range"
                        min={10}
                        max={100}
                        step={5}
                        value={customAmount}
                        onChange={(e) => setCustomAmount(parseInt(e.target.value))}
                        className="w-full accent-bronze"
                      />
                      <p className="text-2xl font-bold text-bronze text-center">{customAmount} €</p>
                    </div>
                  )}
                  <p className="text-sm text-muted-foreground mb-4 flex-1">{option.description}</p>
                  <button
                    onClick={() => openForm(option.customAmount ? "custom" : option.value)}
                    className="w-full bg-accent text-accent-foreground py-2.5 rounded-lg font-medium text-sm hover:opacity-90 transition-opacity"
                  >
                    Jetzt verschenken
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Voucher Preview */}
      <section className="py-12 bg-secondary/30">
        <div className="container mx-auto px-6 max-w-2xl text-center">
          <h2 className="font-serif text-2xl font-bold text-foreground mb-6">So sieht dein Gutschein aus</h2>
          <div
            className="rounded-xl border-2 p-8 mx-auto max-w-md"
            style={{ backgroundColor: "#fef4ec", borderColor: "#9e7c4e" }}
          >
            <p className="font-serif text-lg font-bold text-foreground mb-2">Bistro Boxenstopp</p>
            <div className="w-12 h-px mx-auto mb-4" style={{ backgroundColor: "#9e7c4e" }} />
            <p className="font-serif text-2xl font-bold text-foreground mb-2">Gutschein über 30 €</p>
            <p className="text-sm text-muted-foreground italic mb-4">"Für die besten Eltern der Welt!"</p>
            <p className="text-xs text-muted-foreground">
              Code: BST-XXXXX<br />
              Gültig bis: [Datum + 3 Jahre]
            </p>
          </div>
          <p className="text-xs text-muted-foreground mt-4">Beispieldarstellung. Der echte Gutschein wird per E-Mail als PDF versendet.</p>
        </div>
      </section>

      {/* Payment Info */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-6 max-w-2xl">
          <div className="bg-card rounded-xl border border-border p-6 text-center">
            <h3 className="font-serif text-lg font-bold text-foreground mb-3">Zahlungshinweis</h3>
            <p className="text-sm text-muted-foreground">
              Nach der Bestellung erhältst du eine E-Mail mit Zahlungsanweisungen (Überweisung).
              Der Gutschein wird nach Zahlungseingang per E-Mail zugestellt.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-6 max-w-2xl">
          <h2 className="font-serif text-2xl font-bold text-foreground text-center mb-8">Häufige Fragen</h2>
          <Accordion type="single" collapsible className="space-y-2">
            <AccordionItem value="validity" className="bg-card rounded-lg border border-border px-4">
              <AccordionTrigger className="text-sm font-medium">Wie lange ist der Gutschein gültig?</AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">
                Unsere Gutscheine sind 3 Jahre ab Kaufdatum gültig (gesetzliche Mindestgültigkeit).
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="local" className="bg-card rounded-lg border border-border px-4">
              <AccordionTrigger className="text-sm font-medium">Kann ich den Gutschein vor Ort kaufen?</AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">
                Ja! Komm einfach vorbei und wir stellen dir einen Gutschein direkt aus.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="redeem" className="bg-card rounded-lg border border-border px-4">
              <AccordionTrigger className="text-sm font-medium">Kann der Gutschein für alles eingelöst werden?</AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">
                Ja, der Gutschein gilt für alle Speisen und Getränke im Bistro Boxenstopp.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="revoke" className="bg-card rounded-lg border border-border px-4">
              <AccordionTrigger className="text-sm font-medium">Kann ich den Kauf widerrufen?</AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">
                Ja, du hast ein 14-tägiges Widerrufsrecht ab Kaufdatum. Details in unserer{" "}
                <a href="/widerruf" className="text-bronze underline">Widerrufsbelehrung</a>.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Legal */}
      <section className="py-8 bg-background">
        <div className="container mx-auto px-6 max-w-2xl text-center">
          <p className="text-xs text-muted-foreground/60">
            Gutscheine sind übertragbar und 3 Jahre ab Kaufdatum gültig. Es gelten unsere{" "}
            <a href="/agb" className="text-bronze underline">AGB</a>. Keine Barauszahlung möglich.
            Widerrufsrecht gemäß § 312g BGB:{" "}
            <a href="/widerruf" className="text-bronze underline">Widerrufsbelehrung</a>.
          </p>
        </div>
      </section>

      {/* Order Form Modal */}
      {showForm && (
        <div className="fixed inset-0 z-[60] bg-black/50 flex items-center justify-center p-4">
          <div className="bg-card rounded-xl max-w-lg w-full p-6 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => { setShowForm(false); setSubmitted(false); }}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
              aria-label="Schließen"
            >
              <X size={20} />
            </button>

            {submitted ? (
              <div className="text-center py-8">
                <Gift className="w-12 h-12 mx-auto text-bronze mb-4" />
                <h3 className="font-serif text-xl font-bold text-foreground mb-2">Vielen Dank!</h3>
                <p className="text-sm text-muted-foreground">
                  Deine Bestellung über {finalAmount} € wurde aufgenommen.
                  Du erhältst in Kürze eine E-Mail mit den Zahlungsinformationen.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h3 className="font-serif text-xl font-bold text-foreground mb-1">Gutschein bestellen</h3>
                <p className="text-sm text-bronze font-semibold mb-4">Wert: {finalAmount} €</p>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1">Dein Name *</label>
                    <input
                      required
                      type="text"
                      maxLength={100}
                      value={formData.senderName}
                      onChange={(e) => setFormData({ ...formData, senderName: e.target.value })}
                      className="w-full border border-border rounded-lg px-3 py-2 text-sm bg-background text-foreground"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1">Deine E-Mail *</label>
                    <input
                      required
                      type="email"
                      maxLength={255}
                      value={formData.senderEmail}
                      onChange={(e) => setFormData({ ...formData, senderEmail: e.target.value })}
                      className="w-full border border-border rounded-lg px-3 py-2 text-sm bg-background text-foreground"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1">Name des Beschenkten</label>
                    <input
                      type="text"
                      maxLength={100}
                      value={formData.recipientName}
                      onChange={(e) => setFormData({ ...formData, recipientName: e.target.value })}
                      className="w-full border border-border rounded-lg px-3 py-2 text-sm bg-background text-foreground"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1">Persönliche Nachricht</label>
                    <textarea
                      maxLength={200}
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full border border-border rounded-lg px-3 py-2 text-sm bg-background text-foreground resize-none"
                      placeholder="z.B. Alles Gute zum Geburtstag!"
                    />
                    <p className="text-xs text-muted-foreground mt-0.5">{formData.message.length}/200 Zeichen</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <input
                      required
                      type="checkbox"
                      checked={formData.agbAccepted}
                      onChange={(e) => setFormData({ ...formData, agbAccepted: e.target.checked })}
                      className="mt-1 accent-bronze"
                    />
                    <label className="text-xs text-muted-foreground">
                      Ich habe die{" "}
                      <a href="/agb" target="_blank" className="text-bronze underline">AGB</a> und die{" "}
                      <a href="/widerruf" target="_blank" className="text-bronze underline">Widerrufsbelehrung</a>{" "}
                      gelesen und akzeptiere sie. *
                    </label>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full mt-6 bg-accent text-accent-foreground py-3 rounded-lg font-medium text-sm hover:opacity-90 transition-opacity"
                >
                  Zahlungspflichtig bestellen: {finalAmount} €
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Gutscheine;
