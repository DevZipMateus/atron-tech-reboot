import { Phone, Mail, Clock, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      label: "Telefone",
      value: "(11) 97173-8528",
      link: "https://wa.me/5511971738528",
    },
    {
      icon: <Mail className="h-6 w-6" />,
      label: "E-mail",
      value: "atrontech.ofc@gmail.com",
      link: "mailto:atrontech.ofc@gmail.com",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      label: "Horário",
      value: "Seg-Qui: 8h-18h | Sex: 8h-17h",
      link: null,
    },
    {
      icon: <Instagram className="h-6 w-6" />,
      label: "Instagram",
      value: "@atrontech.ofc",
      link: "https://instagram.com/atrontech.ofc",
    },
  ];

  return (
    <section id="contato" className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Entre em contato
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Estamos prontos para atender você e encontrar a melhor solução em
            tecnologia sustentável para suas necessidades.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((info, index) => (
            <Card key={index} className="border-2 hover:border-primary/50 transition-all">
              <CardContent className="p-6 text-center space-y-3">
                <div className="w-14 h-14 mx-auto rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  {info.icon}
                </div>
                <h3 className="font-semibold text-foreground">{info.label}</h3>
                {info.link ? (
                  <a
                    href={info.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors block"
                  >
                    {info.value}
                  </a>
                ) : (
                  <p className="text-sm text-muted-foreground">{info.value}</p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-br from-primary via-secondary to-accent rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Fale conosco pelo WhatsApp
          </h3>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Tire suas dúvidas, solicite orçamentos ou conheça nossos produtos.
            Atendimento rápido e personalizado.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white text-primary hover:bg-white/90 shadow-lg hover:shadow-xl transition-all"
          >
            <a
              href="https://wa.me/5511971738528"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Phone className="mr-2 h-5 w-5" />
              Iniciar conversa
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
