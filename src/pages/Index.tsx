// pages/index.tsx
import { StatsCard } from "@/components/stats-card";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Users,
  Building2,
  CreditCard,
  TrendingUp,
  Calendar,
  Plus,
  FileText,
  AlertTriangle,
  Shield,
  Award,
  Clock,
  CheckCircle,
  Handshake
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { SimuladorFinanciamento } from "@/components/simulador-financiamento";

const Index = () => {
  const navigate = useNavigate();

  const stats = [
    {
      title: "Total de Clientes",
      value: "247",
      icon: Users,
      trend: { value: 12, isPositive: true }
    },
    {
      title: "Imóveis Cadastrados",
      value: "89",
      icon: Building2,
      trend: { value: 8, isPositive: true }
    },
    {
      title: "Financiamentos Ativos",
      value: "34",
      icon: CreditCard,
      trend: { value: 15, isPositive: true }
    },
    {
      title: "Taxa de Conversão",
      value: "68%",
      icon: TrendingUp,
      trend: { value: 3, isPositive: true }
    }
  ];

  const bankPartners = [
    { name: "Banco do Brasil", taxa: "8.99%", prazo: "420 meses" },
    { name: "Caixa Econômica", taxa: "9.25%", prazo: "360 meses" },
    { name: "Itaú", taxa: "9.50%", prazo: "420 meses" },
    { name: "Bradesco", taxa: "9.75%", prazo: "360 meses" },
    { name: "Santander", taxa: "10.10%", prazo: "420 meses" }
  ];

  const consortiumPartners = [
    { 
      name: "Consórcio BB Imóveis", 
      vantagens: ["Taxas reduzidas", "Sorteios mensais", "Lance livre"],
      prazo: "180 meses",
      participantes: "15.000+"
    },
    { 
      name: "Consórcio Caixa", 
      vantagens: ["Crédito até R$ 2MM", "Administração pela Caixa", "Contemplação por lance"],
      prazo: "150 meses",
      participantes: "12.500+"
    },
    { 
      name: "Consórcio Itaú", 
      vantagens: ["Seguro inclusivo", "Assistência residencial", "Cartão de benefícios"],
      prazo: "160 meses",
      participantes: "8.000+"
    }
  ];

  const recentActivities = [
    {
      id: 1,
      type: "cliente",
      message: "Novo cliente: Maria Silva cadastrada",
      time: "Há 2 horas",
      status: "success"
    },
    {
      id: 2,
      type: "financiamento",
      message: "Financiamento aprovado para João Santos",
      time: "Há 4 horas",
      status: "success"
    },
    {
      id: 3,
      type: "documento",
      message: "Documentos pendentes - Cliente Pedro",
      time: "Há 1 dia",
      status: "warning"
    },
    {
      id: 4,
      type: "imovel",
      message: "Novo imóvel cadastrado na Zona Sul",
      time: "Há 2 dias",
      status: "info"
    }
  ];

  return (
    <div className="space-y-8">
      {/* Hero Section - Apresentação da Financiadora */}
      <div className="relative bg-gradient-primary rounded-xl p-8 border">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex-1">
            <h1 className="text-4xl font-bold text-foreground mb-2">HomeFintech</h1>
            <p className="text-xl text-muted-foreground mb-4">
              Sua parceira completa em soluções imobiliárias
            </p>
            <p className="text-muted-foreground mb-6 max-w-2xl">
              Há mais de 15 anos no mercado, a HomeFintech é especializada em financiamento imobiliário 
              e consórcios, oferecendo as melhores condições do mercado. Nossa plataforma conecta você 
              aos principais bancos e consórcios do país.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-success" />
                <span className="text-sm font-medium">100% Seguro</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5 text-success" />
                <span className="text-sm font-medium">Premiada</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-success" />
                <span className="text-sm font-medium">Aprovação Rápida</span>
              </div>
              <div className="flex items-center gap-2">
                <Handshake className="h-5 w-5 text-success" />
                <span className="text-sm font-medium">Consórcios Especiais</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="bg-card rounded-lg p-4 shadow-medium">
              <div className="text-center">
                <p className="text-2xl font-bold text-success">R$ 850M+</p>
                <p className="text-sm text-muted-foreground">Financiados em 2025</p>
              </div>
            </div>
            <div className="bg-card rounded-lg p-4 shadow-medium">
              <div className="text-center">
                <p className="text-2xl font-bold text-primary">98%</p>
                <p className="text-sm text-muted-foreground">Taxa de Aprovação</p>
              </div>
            </div>
            <div className="bg-card rounded-lg p-4 shadow-medium">
              <div className="text-center">
                <p className="text-2xl font-bold text-warning">R$ 320M+</p>
                <p className="text-sm text-muted-foreground">Em consórcios</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Painel de Controle</h2>
          <p className="text-muted-foreground">
            Gerencie seus clientes, financiamentos e consórcios
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Calendar className="h-4 w-4 mr-2" />
            Hoje
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <StatsCard key={index} {...stat} />
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Bank Partners */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CreditCard className="h-5 w-5" />
              Parceiros Bancários
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {bankPartners.map((bank, index) => (
                <div key={index} className="flex items-center justify-between p-4 rounded-lg border bg-card">
                  <div>
                    <p className="font-medium">{bank.name}</p>
                    <p className="text-sm text-muted-foreground">Taxa a partir de {bank.taxa}</p>
                  </div>
                  <div className="text-right">
                    <Badge variant="outline">{bank.prazo}</Badge>
                    <p className="text-xs text-muted-foreground mt-1">Prazo máximo</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Consortium Partners */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Handshake className="h-5 w-5" />
              Consórcios Imobiliários
            </CardTitle>
            <p className="text-sm text-muted-foreground font-normal">
              Adquira seu imóvel sem juros através de nossos consórcios
            </p>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {consortiumPartners.map((consortium, index) => (
                <div key={index} className="p-4 rounded-lg border bg-card">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-medium">{consortium.name}</p>
                      <div className="mt-2 space-y-1">
                        {consortium.vantagens.map((vantagem, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-success" />
                            <p className="text-sm text-muted-foreground">{vantagem}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge variant="outline">{consortium.prazo}</Badge>
                      <p className="text-xs text-muted-foreground mt-1">{consortium.participantes} participantes</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="w-full mt-3">
                    Saiba mais
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Ações Rápidas</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button className="w-full justify-start" variant="outline" onClick={() => navigate('/clientes')}>
              <Users className="h-4 w-4 mr-2" />
              Cadastrar Cliente
            </Button>
            <Button className="w-full justify-start" variant="outline" onClick={() => navigate('/imoveis')}>
              <Building2 className="h-4 w-4 mr-2" />
              Adicionar Imóvel
            </Button>
            <SimuladorFinanciamento variant="outline" className="w-full justify-start" />
            <Button className="w-full justify-start" variant="outline" onClick={() => navigate('/consorcios')}>
              <Handshake className="h-4 w-4 mr-2" />
              Simular Consórcio
            </Button>
            <Button className="w-full justify-start" variant="outline" onClick={() => navigate('/relatorios')}>
              <FileText className="h-4 w-4 mr-2" />
              Gerar Relatório
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activities & Pending Tasks */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Atividades Recentes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivities.map((activity) => (
                <div key={activity.id} className="flex items-center gap-3 p-3 rounded-lg border">
                  <div className={`h-2 w-2 rounded-full ${
                    activity.status === 'success' ? 'bg-success' :
                    activity.status === 'warning' ? 'bg-warning' : 'bg-primary'
                  }`} />
                  <div className="flex-1">
                    <p className="text-sm font-medium">{activity.message}</p>
                    <p className="text-xs text-muted-foreground">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-warning" />
              Tarefas Pendentes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 border rounded-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium text-sm">Documentos a Revisar</h3>
                    <p className="text-xs text-muted-foreground">Pendentes hoje</p>
                  </div>
                  <p className="text-2xl font-bold text-warning">8</p>
                </div>
              </div>
              <div className="p-4 border rounded-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium text-sm">Aprovações Aguardando</h3>
                    <p className="text-xs text-muted-foreground">Em análise</p>
                  </div>
                  <p className="text-2xl font-bold text-primary">12</p>
                </div>
              </div>
              <div className="p-4 border rounded-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium text-sm">Lances de Consórcio</h3>
                    <p className="text-xs text-muted-foreground">Para avaliação</p>
                  </div>
                  <p className="text-2xl font-bold text-success">5</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;