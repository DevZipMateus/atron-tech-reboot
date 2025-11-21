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
    
    return () => window.removeEventListener("resize", calculateHeight);
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
    </div>
  );
};

export default Vitrine;
