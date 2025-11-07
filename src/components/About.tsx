import { Target, Eye, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const values = [
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: "Missão",
      description:
        "Reinventar a forma como as pessoas consomem tecnologia, oferecendo equipamentos seminovos premium com garantia, qualidade e suporte especializado — tornando o consumo inteligente uma escolha natural.",
    },
    {
      icon: <Eye className="h-8 w-8 text-secondary" />,
      title: "Visão",
      description:
        "Ser referência nacional em tecnologia sustentável, oferecendo produtos de alto desempenho e baixo impacto ambiental, conectando inovação, acessibilidade e consciência ecológica.",
    },
    {
      icon: <Heart className="h-8 w-8 text-accent" />,
      title: "Valores",
      description:
        "Sustentabilidade, inovação acessível, transparência, responsabilidade tecnológica e experiência do cliente são os pilares que guiam cada decisão da ATRON TECH.",
    },
  ];

  return (
    <section id="sobre" className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Sobre a ATRON TECH
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            A Atron Tech nasceu com o propósito de transformar a relação entre
            pessoas e tecnologia. Em um mundo onde a inovação avança
            rapidamente, acreditamos que é possível ter alto desempenho, design
            e confiabilidade, sem precisar abrir mão da sustentabilidade e do
            consumo consciente.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {values.map((value, index) => (
            <Card
              key={index}
              className="border-2 hover:border-primary/50 transition-all duration-300 hover-lift"
            >
              <CardContent className="p-6 space-y-4">
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 rounded-2xl p-8 md:p-12 border border-primary/20">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground">
              Nossa história
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Especializada em produtos de informática seminovos, a Atron Tech
              oferece equipamentos que passam por um rigoroso processo de
              seleção, revisão e certificação técnica, garantindo qualidade,
              durabilidade e a melhor experiência de uso.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Nosso compromisso é entregar tecnologia acessível, moderna e
              ecologicamente responsável, promovendo uma nova forma de consumo —
              inteligente, sustentável e econômica.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
