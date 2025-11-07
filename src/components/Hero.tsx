import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
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
    <section
      id="inicio"
      className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden"
      style={{ background: "var(--gradient-hero)" }}
    >
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 lg:space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
              </span>
              <span className="text-sm font-medium text-foreground">
                Consumo inteligente e sustentável
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              ATRON TECH
            </h1>

            <h2 className="text-xl md:text-2xl lg:text-3xl text-muted-foreground leading-relaxed">
              Reinventamos a forma como as pessoas consomem tecnologia,
              oferecendo equipamentos seminovos premium com garantia, qualidade
              e suporte especializado
            </h2>

            <p className="text-lg text-secondary font-semibold">
              Tecnologia que renova. Planeta que respira.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                onClick={() => scrollToSection("produtos")}
                className="group bg-primary hover:bg-accent text-primary-foreground shadow-lg hover:shadow-xl transition-all"
              >
                Ver produtos
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("contato")}
                className="border-primary/60 text-primary hover:bg-primary hover:text-primary-foreground transition-all"
              >
                Entrar em contato
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative lg:h-[500px] flex items-center justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-3xl"></div>
              <img
                src="/logo.png"
                alt="ATRON TECH Logo"
                className="relative z-10 w-full h-auto drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
