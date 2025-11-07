import { Phone, Mail, Instagram, MapPin, Clock } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="bg-foreground text-background">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Logo e Descrição */}
          <div className="space-y-4">
            <img
              src="/logo.png"
              alt="ATRON TECH"
              className="h-16 w-auto brightness-0 invert"
            />
            <p className="text-sm text-background/80 leading-relaxed">
              Tecnologia que renova. Planeta que respira.
            </p>
            <p className="text-sm text-background/80 leading-relaxed">
              Equipamentos seminovos premium com garantia e qualidade.
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links rápidos</h3>
            <ul className="space-y-2">
              {[
                { id: "inicio", label: "Início" },
                { id: "sobre", label: "Sobre" },
                { id: "produtos", label: "Produtos" },
                { id: "contato", label: "Contato" },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-sm text-background/80 hover:text-secondary transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://wa.me/5511971738528"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 text-sm text-background/80 hover:text-secondary transition-colors"
                >
                  <Phone className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <span>(11) 97173-8528</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:atrontech.ofc@gmail.com"
                  className="flex items-start gap-2 text-sm text-background/80 hover:text-secondary transition-colors"
                >
                  <Mail className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <span>atrontech.ofc@gmail.com</span>
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-background/80">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>CEP: 07097-420</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-background/80">
                <Clock className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>Seg-Qui: 8h-18h | Sex: 8h-17h</span>
              </li>
            </ul>
          </div>

          {/* Redes Sociais */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Redes sociais</h3>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/atrontech.ofc"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-secondary flex items-center justify-center transition-colors"
                aria-label="Instagram da ATRON TECH"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
            <div className="mt-6 space-y-2">
              <p className="text-sm text-background/80">
                <strong>CNPJ:</strong> 53.480.220/0001-26
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-background/20 my-8"></div>

        {/* Copyright */}
        <div className="text-center text-sm text-background/70">
          <p>
            © {currentYear} ATRON TECH - Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
