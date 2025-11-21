import { ExternalLink, Store, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const VitrineSection = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <Store className="h-8 w-8" />,
      title: "Catálogo Completo",
      description: "Veja todos os produtos disponíveis em tempo real",
    },
    {
      icon: <Sparkles className="h-8 w-8" />,
      title: "Produtos Premium",
      description: "Equipamentos testados e certificados com garantia",
    },
    {
      icon: <ExternalLink className="h-8 w-8" />,
      title: "Acesso Direto",
      description: "Navegue pela nossa vitrine digital atualizada",
    },
  ];

  return (
    <section id="vitrine-section" className="section-padding bg-gradient-to-b from-background to-muted/20">
      <div className="container-custom">
        <div className="text-center space-y-4 mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Nossa Vitrine Digital
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore nosso catálogo completo de produtos seminovos e recondicionados.
            Acesse nossa vitrine para ver preços, especificações e disponibilidade em tempo real.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group hover:border-primary transition-all duration-300 hover-lift"
            >
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-16 h-16 mx-auto rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            onClick={() => navigate("/vitrine")}
            className="group text-lg px-8 py-6 shadow-elegant hover:shadow-glow transition-all duration-300"
          >
            Acessar Vitrine Digital
            <ExternalLink className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default VitrineSection;
