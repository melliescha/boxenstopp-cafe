import QRCode from "react-qr-code";
import logoIcon from "@/assets/logo-icon.png";

const QRCodePage = () => {
  const url = "https://bistro-boxenstopp.de/qr-speisekarte";

  const handlePrint = () => window.print();

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      <div className="text-center max-w-md mx-auto">
        {/* Printable area */}
        <div className="print-area inline-block">
          <div
            className="p-6 rounded-2xl inline-block"
            style={{ border: "3px solid #9e7c4e" }}
          >
            <div className="bg-[#fef4ec] p-4 rounded-xl">
              <QRCode
                value={url}
                size={200}
                fgColor="#164472"
                bgColor="#fef4ec"
                level="H"
              />
            </div>
          </div>

          <div className="mt-6">
            <img src={logoIcon} alt="Bistro Boxenstopp Logo" className="h-10 w-auto mx-auto mb-2" />
            <p className="font-serif text-xl font-bold text-foreground">
              Scanne mich für die Speisekarte
            </p>
            <p className="font-serif text-sm text-muted-foreground mt-1">Bistro Boxenstopp</p>
          </div>
        </div>

        {/* Print button */}
        <div className="mt-8 no-print">
          <button
            onClick={handlePrint}
            className="bg-accent text-accent-foreground px-6 py-2.5 rounded-lg font-medium text-sm hover:opacity-90 transition-opacity"
          >
            QR-Code drucken
          </button>
          <p className="text-xs text-muted-foreground mt-3">
            Optimiert für 8×8 cm Tischaufsteller
          </p>
        </div>
      </div>
    </div>
  );
};

export default QRCodePage;
