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

        <div className="max-w-4xl mx-auto">
          {/* Contact Info */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;