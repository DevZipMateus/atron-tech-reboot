import { Monitor, Cpu, Laptop, Server, Keyboard, Cable } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import productLaptops from "@/assets/product-laptops.jpg";
import productDesktops from "@/assets/product-desktops.jpg";

const Products = () => {
  const products = [
    {
      icon: <Monitor className="h-10 w-10" />,
      title: "Monitores",
      description: "Displays de alta qualidade para produtividade e entretenimento",
    },
    {
      icon: <Cpu className="h-10 w-10" />,
      title: "Desktops",
      description: "Mini, SFF e convencionais para diversas aplicações",
    },
    {
      icon: <Laptop className="h-10 w-10" />,
      title: "Notebooks e Macbooks",
      description: "Portáteis premium testados e certificados",
    },
    {
      icon: <Server className="h-10 w-10" />,
      title: "Servidores",
      description: "Equipamentos corporativos de alta performance",
    },
    {
      icon: <Keyboard className="h-10 w-10" />,
      title: "Periféricos",
      description: "Teclados, mouses, tablets e smartphones",
    },
    {
      icon: <Cable className="h-10 w-10" />,
      title: "Acessórios",
      description: "Cabos, adaptadores e componentes em geral",
    },
  ];

  return (
    <section id="produtos" className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Nossos produtos
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Equipamentos de informática seminovos e recondicionados, com
            qualidade garantida e preços acessíveis. Todos passam por rigoroso
            processo de certificação técnica.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <div className="rounded-xl overflow-hidden shadow-elegant">
            <img
              src={productLaptops}
              alt="Notebooks e Macbooks seminovos premium da ATRON TECH"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="rounded-xl overflow-hidden shadow-elegant">
            <img
              src={productDesktops}
              alt="Desktops e monitores recondicionados da ATRON TECH"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <Card
              key={index}
              className="group border-2 hover:border-primary transition-all duration-300 hover-lift cursor-pointer"
            >
              <CardContent className="p-6 space-y-4">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                  {product.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  {product.title}
                </h3>
                <p className="text-muted-foreground">{product.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-primary/5 border border-primary/20 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Qualidade garantida
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Todos os nossos produtos passam por inspeção técnica rigorosa,
            limpeza completa e testes de desempenho. Oferecemos garantia,
            suporte especializado e a melhor relação custo-benefício do mercado.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Products;
