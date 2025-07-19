import { StatsCard } from "@/components/stats-card"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Users,
  Building2,
  CreditCard,
  TrendingUp,
  Calendar,
  Plus,
  FileText,
  AlertTriangle
} from "lucide-react"

const Index = () => {
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
  ]

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
  ]

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
          <p className="text-muted-foreground">
            Bem-vindo ao seu painel de controle
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Calendar className="h-4 w-4 mr-2" />
            Hoje
          </Button>
          <Button size="sm">
            <Plus className="h-4 w-4 mr-2" />
            Novo Cliente
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
        {/* Recent Activities */}
        <Card className="lg:col-span-2">
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

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Ações Rápidas</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button className="w-full justify-start" variant="outline">
              <Users className="h-4 w-4 mr-2" />
              Cadastrar Cliente
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <Building2 className="h-4 w-4 mr-2" />
              Adicionar Imóvel
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <CreditCard className="h-4 w-4 mr-2" />
              Simular Financiamento
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <FileText className="h-4 w-4 mr-2" />
              Gerar Relatório
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Pending Tasks */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-warning" />
            Tarefas Pendentes
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 border rounded-lg">
              <h3 className="font-medium text-sm">Documentos a Revisar</h3>
              <p className="text-2xl font-bold text-warning">8</p>
              <p className="text-xs text-muted-foreground">Pendentes hoje</p>
            </div>
            <div className="p-4 border rounded-lg">
              <h3 className="font-medium text-sm">Aprovações Aguardando</h3>
              <p className="text-2xl font-bold text-primary">12</p>
              <p className="text-xs text-muted-foreground">Em análise</p>
            </div>
            <div className="p-4 border rounded-lg">
              <h3 className="font-medium text-sm">Reuniões Hoje</h3>
              <p className="text-2xl font-bold text-success">5</p>
              <p className="text-xs text-muted-foreground">Agendadas</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;
