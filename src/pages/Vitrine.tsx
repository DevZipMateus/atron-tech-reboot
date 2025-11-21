import { useEffect, useState } from "react";
import Header from "@/components/Header";

const Vitrine = () => {
  const [iframeHeight, setIframeHeight] = useState("800px");

  useEffect(() => {
    const calculateHeight = () => {
      // Altura da janela - 80px (header) - 63px (badge inferior)
      const height = window.innerHeight - 80 - 63;
      setIframeHeight(`${height}px`);
    };

    calculateHeight();
    window.addEventListener("resize", calculateHeight);
    
    // Carregar o script do badge MonteSite
    const script = document.createElement("script");
    script.src = "https://vaabpicspdbolvutnscp.supabase.co/functions/v1/get-footer-iframe";
    script.async = true;
    document.body.appendChild(script);
    
    return () => {
      window.removeEventListener("resize", calculateHeight);
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="h-screen overflow-hidden flex flex-col">
      <Header />
      <main className="flex-1 w-full" style={{ marginTop: "80px" }}>
        <iframe
          src="https://lafelseminovos.egestor.com.br/vitrine/"
          style={{
            width: "100%",
            height: iframeHeight,
            border: "none",
          }}
          title="Demonstração de Vitrine"
        />
      </main>
      {/* Badge MonteSite */}
      <div id="montesite-footer-badge"></div>
    </div>
  );
};

export default Vitrine;
