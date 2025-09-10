import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Shield, 
  Settings, 
  Code, 
  Database, 
  Network, 
  BarChart3,
  ArrowRight,
  Lightbulb
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Lightbulb,
      title: "Consultoria em TI",
      description: "Estratégias personalizadas para otimizar sua infraestrutura tecnológica e processos de negócio.",
      features: ["Análise de infraestrutura", "Planejamento estratégico", "Otimização de recursos"]
    },
    {
      icon: Settings,
      title: "Transformação Digital",
      description: "Modernize seus processos e impulsione a inovação com soluções digitais avançadas.",
      features: ["Digitalização de processos", "Cloud Computing", "Integração de sistemas"]
    },
    {
      icon: Shield,
      title: "Segurança Digital",
      description: "Proteja seus dados e sistemas com as mais avançadas soluções de cibersegurança.",
      features: ["Firewall avançado", "Backup seguro", "Monitoramento 24/7"]
    },
    {
      icon: Settings,
      title: "Automação de Processos",
      description: "Automatize tarefas repetitivas e aumente a eficiência operacional da sua empresa.",
      features: ["RPA", "Workflows inteligentes", "Integração de APIs"]
    },
    {
      icon: BarChart3,
      title: "Análise de Sistemas",
      description: "Análise detalhada e otimização de sistemas para máxima performance e eficiência.",
      features: ["Auditoria de sistemas", "Performance tuning", "Relatórios detalhados"]
    },
    {
      icon: Code,
      title: "Desenvolvimento",
      description: "Aplicativos e sistemas customizados para atender às necessidades específicas do seu negócio.",
      features: ["Apps mobile", "Sistemas web", "Integração de APIs"]
    },
    {
      icon: Database,
      title: "Banco de Dados",
      description: "Gerenciamento, otimização e migração de bancos de dados para máxima performance.",
      features: ["Design de BD", "Otimização de queries", "Backup e recovery"]
    },
    {
      icon: Network,
      title: "Redes",
      description: "Infraestrutura de rede robusta e segura para conectar sua empresa com eficiência.",
      features: ["Configuração de redes", "Wi-Fi corporativo", "Monitoramento"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            Nossos <span className="bg-gradient-primary bg-clip-text text-transparent">Serviços</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Oferecemos soluções completas em tecnologia da informação para transformar 
            e modernizar seu negócio na era digital.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-medium transition-all duration-300 border-border/50 hover:border-primary/20">
              <CardHeader className="space-y-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-muted-foreground flex items-center">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="ghost" size="sm" className="mt-4 group/btn">
                  Saiba mais
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;