import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

import {
  Users,
  Building2,
  Calendar,
  CreditCard,
  TrendingUp,
  ArrowUpRight,
  FileText,
  CheckCircle,
  Clock,
  AlertTriangle,
  Home,
  Plus
} from "lucide-react"
import { Link } from "react-router-dom"

const Index = () => {
  const recentActivities = [
    {
      id: 1,
      type: "cliente",
      message: "Novo cliente cadastrado: Maria Silva Santos",
      time: "2 min atrás",
      icon: Users
    },
    {
      id: 2,
      type: "agendamento",
      message: "Visita agendada para amanhã às 14:00",
      time: "15 min atrás",
      icon: Calendar
    },
    {
      id: 3,
      type: "financiamento",
      message: "Financiamento aprovado para João Carlos",
      time: "1 hora atrás",
      icon: CheckCircle
    },
    {
      id: 4,
      type: "imovel",
      message: "Novo imóvel cadastrado no Jardins",
      time: "2 horas atrás",
      icon: Building2
    }
  ]

  const pendingTasks = [
    {
      id: 1,
      title: "Ligar para cliente Ana Paula",
      priority: "alta",
      dueDate: "Hoje"
    },
    {
      id: 2,
      title: "Preparar documentos para assinatura",
      priority: "media",
      dueDate: "Amanhã"
    },
    {
      id: 3,
      title: "Agendar vistoria no imóvel Morumbi",
      priority: "baixa",
      dueDate: "Próxima semana"
    }
  ]

  const getPriorityBadge = (priority: string) => {
    const styles = {
      "alta": "bg-destructive/20 text-destructive",
      "media": "bg-warning/20 text-warning",
      "baixa": "bg-success/20 text-success"
    }
    
    return <Badge className={styles[priority as keyof typeof styles]}>{priority}</Badge>
  }

  return (
    <div className="p-6 space-y-6">
      {/* Welcome Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Home className="h-8 w-8 text-primary" />
          <div>
            <h1 className="text-3xl font-bold">Bem-vindo ao HomeFintech!</h1>
            <p className="text-muted-foreground">
              Aqui está um resumo do seu negócio hoje
            </p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-sm text-muted-foreground">Hoje</p>
          <p className="text-lg font-medium">{new Date().toLocaleDateString('pt-BR', { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })}</p>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-primary">253</p>
              <p className="text-sm text-muted-foreground">Clientes Ativos</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-success">89</p>
              <p className="text-sm text-muted-foreground">Imóveis Disponíveis</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-warning">7</p>
              <p className="text-sm text-muted-foreground">Agendamentos Hoje</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-primary">45</p>
              <p className="text-sm text-muted-foreground">Financiamentos Ativos</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Plus className="h-5 w-5" />
            Ações Rápidas
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link to="/clientes">
              <Button variant="outline" className="w-full h-20 flex flex-col gap-2">
                <Users className="h-6 w-6" />
                <span>Novo Cliente</span>
              </Button>
            </Link>
            <Link to="/imoveis">
              <Button variant="outline" className="w-full h-20 flex flex-col gap-2">
                <Building2 className="h-6 w-6" />
                <span>Cadastrar Imóvel</span>
              </Button>
            </Link>
            <Link to="/agendamentos">
              <Button variant="outline" className="w-full h-20 flex flex-col gap-2">
                <Calendar className="h-6 w-6" />
                <span>Agendar Visita</span>
              </Button>
            </Link>
            <Link to="/financiamentos">
              <Button variant="outline" className="w-full h-20 flex flex-col gap-2">
                <CreditCard className="h-6 w-6" />
                <span>Simular Financiamento</span>
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activities */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              Atividades Recentes
              <Button variant="ghost" size="sm" asChild>
                <Link to="/relatorios">
                  Ver tudo
                  <ArrowUpRight className="h-4 w-4 ml-1" />
                </Link>
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivities.map((activity) => {
                const IconComponent = activity.icon
                return (
                  <div key={activity.id} className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                    <div className="p-2 rounded-full bg-primary/10">
                      <IconComponent className="h-4 w-4 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-foreground">{activity.message}</p>
                      <p className="text-xs text-muted-foreground">{activity.time}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </CardContent>
        </Card>

        {/* Pending Tasks */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              Tarefas Pendentes
              <Badge variant="secondary">{pendingTasks.length}</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {pendingTasks.map((task) => (
                <div key={task.id} className="flex items-center justify-between p-3 rounded-lg border">
                  <div className="flex items-center gap-3">
                    <div className="p-1 rounded-full bg-muted">
                      <Clock className="h-3 w-3" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">{task.title}</p>
                      <p className="text-xs text-muted-foreground">{task.dueDate}</p>
                    </div>
                  </div>
                  {getPriorityBadge(task.priority)}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Performance Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5" />
            Visão Geral de Performance
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-success">+18%</div>
              <p className="text-sm text-muted-foreground">Novos clientes este mês</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">R$ 2.4M</div>
              <p className="text-sm text-muted-foreground">Volume de negócios</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-warning">87%</div>
              <p className="text-sm text-muted-foreground">Taxa de conversão</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default Index