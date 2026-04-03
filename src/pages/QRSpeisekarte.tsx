import FlipbookMenu from "@/components/FlipbookMenu";
import logoIcon from "@/assets/logo-icon.png";

const QRSpeisekarte = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Minimal header */}
      <div className="py-4 px-6 flex items-center justify-center gap-2">
        <img src={logoIcon} alt="" className="h-8 w-auto" />
        <span className="font-serif text-lg font-bold text-foreground">Speisekarte</span>
      </div>

      {/* Flipbook */}
      <div className="flex-1 px-2 sm:px-6 pb-4">
        <FlipbookMenu />
      </div>

      {/* Footer link */}
      <div className="py-3 text-center">
        <a
          href="https://bistro-boxenstopp.de"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-bronze hover:underline"
        >
          Zur Website → bistro-boxenstopp.de
        </a>
      </div>
    </div>
  );
};

export default QRSpeisekarte;
