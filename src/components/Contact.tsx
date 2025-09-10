import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Localização",
      details: ["Ribeirão Preto - SP", "Região Metropolitana"],
    },
    {
      icon: Phone,
      title: "Telefone",
      details: ["(16) 3170-2180"],
    },
    {
      icon: Mail,
      title: "Email",
      details: ["contato@2cybersec.com.br"],
    },
    {
      icon: Clock,
      title: "Horário",
      details: ["Segunda à Sexta: 8h às 18h"],
    },
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            Entre em <span className="bg-gradient-primary bg-clip-text text-transparent">Contato</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Pronto para transformar sua empresa? Entre em contato conosco e 
            descubra como podemos ajudar seu negócio a crescer.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle className="text-2xl">Solicite um Orçamento</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Nome</label>
                  <Input placeholder="Seu nome completo" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Empresa</label>
                  <Input placeholder="Nome da empresa" />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <Input type="email" placeholder="seu@email.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Telefone</label>
                  <Input placeholder="(16) 99999-9999" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Serviço de Interesse</label>
                <Input placeholder="Ex: Consultoria em TI, Segurança Digital..." />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Mensagem</label>
                <Textarea 
                  placeholder="Descreva seu projeto ou necessidade..."
                  className="min-h-[120px]"
                />
              </div>

              <Button size="lg" className="w-full shadow-medium">
                Enviar Mensagem
              </Button>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="border-border/50 hover:shadow-soft transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-lg font-semibold">{info.title}</h3>
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-muted-foreground">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            <Card className="border-primary/20 bg-gradient-secondary">
              <CardContent className="p-6 text-center space-y-4">
                <h3 className="text-xl font-semibold">Atendimento Especializado</h3>
                <p className="text-muted-foreground">
                  Nossa equipe está pronta para entender suas necessidades e 
                  propor a melhor solução em tecnologia para sua empresa.
                </p>
                <Button variant="outline" size="lg">
                  Agendar Reunião
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;