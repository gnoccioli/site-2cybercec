import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-tech.jpg";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-secondary">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Segurança Digital{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Inteligente
                </span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Soluções completas em segurança da informação para proteger seu negócio na era digital. 
                Consultoria especializada, proteção robusta e automação segura para 
                empresas da Região Metropolitana de Ribeirão Preto.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="shadow-medium">
                Conheça Nossos Serviços
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary">15+</div>
                <div className="text-sm text-muted-foreground">Anos de Experiência</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary">200+</div>
                <div className="text-sm text-muted-foreground">Projetos Entregues</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">Segurança Garantida</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-primary rounded-3xl transform rotate-6"></div>
            <img
              src={heroImage}
              alt="Tecnologia e Inovação"
              className="relative rounded-3xl shadow-large w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;