import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Users, Award, Clock } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Users,
      title: "Equipe Especializada",
      description: "Profissionais certificados com vasta experiência em tecnologia"
    },
    {
      icon: Award,
      title: "Qualidade Garantida",
      description: "Processos certificados e metodologias reconhecidas no mercado"
    },
    {
      icon: Clock,
      title: "Suporte 24/7",
      description: "Atendimento contínuo para garantir a disponibilidade dos seus sistemas"
    }
  ];

  const achievements = [
    "Mais de 15 anos de experiência no mercado",
    "Clientes em toda região metropolitana de Ribeirão Preto",
    "Parceiros certificados das principais tecnologias do mercado",
    "Equipe especializada em diferentes áreas da TI",
    "Metodologias ágeis e processos otimizados"
  ];

  return (
    <section id="about" className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">
                Sobre a{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  2CyberSec
                </span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Somos uma empresa de tecnologia com foco em transformação digital, 
                oferecendo soluções inovadoras e personalizadas para empresas da 
                Região Metropolitana de Ribeirão Preto.
              </p>
              <p className="text-muted-foreground">
                Nossa missão é ajudar empresas a se adaptarem à era digital através 
                de soluções tecnológicas eficientes, seguras e escaláveis. Combinamos 
                experiência técnica com visão estratégica para entregar resultados 
                que realmente impactam o crescimento dos nossos clientes.
              </p>
            </div>

            <div className="space-y-3">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{achievement}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            {features.map((feature, index) => (
              <Card key={index} className="border-border/50">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;