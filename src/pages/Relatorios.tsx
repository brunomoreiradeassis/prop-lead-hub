import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line
} from "recharts"
import {
  BarChart3,
  Download,
  Calendar,
  TrendingUp,
  TrendingDown,
  Users,
  Building2,
  CreditCard,
  DollarSign,
  Handshake
} from "lucide-react"

const Relatorios = () => {
  const vendaMensalData = [
    { mes: "Jan", vendas: 12, valor: 8500000, consorcios: 5 },
    { mes: "Fev", vendas: 15, valor: 10200000, consorcios: 7 },
    { mes: "Mar", vendas: 18, valor: 12300000, consorcios: 8 },
    { mes: "Abr", vendas: 14, valor: 9800000, consorcios: 6 },
    { mes: "Mai", vendas: 20, valor: 13500000, consorcios: 9 },
    { mes: "Jun", vendas: 22, valor: 15200000, consorcios: 10 },
    { mes: "Jul", vendas: 25, valor: 17800000, consorcios: 12 },
    { mes: "Ago", vendas: 23, valor: 16500000, consorcios: 11 },
    { mes: "Set", vendas: 27, valor: 18900000, consorcios: 13 },
    { mes: "Out", vendas: 24, valor: 16200000, consorcios: 11 },
    { mes: "Nov", vendas: 26, valor: 18100000, consorcios: 12 },
    { mes: "Dez", vendas: 29, valor: 20500000, consorcios: 14 }
  ]

  const statusClientesData = [
    { name: "Pré-aprovados", value: 45, color: "#f59e0b" },
    { name: "Aprovados", value: 32, color: "#10b981" },
    { name: "Em Análise", value: 18, color: "#3b82f6" },
    { name: "Recusados", value: 5, color: "#ef4444" }
  ]

  const tipoImovelData = [
    { tipo: "Apartamento", quantidade: 45, consorcios: 18 },
    { tipo: "Casa", quantidade: 28, consorcios: 12 },
    { tipo: "Cobertura", quantidade: 12, consorcios: 5 },
    { tipo: "Comercial", quantidade: 8, consorcios: 3 },
    { tipo: "Terreno", quantidade: 7, consorcios: 2 }
  ]

  const conversaoData = [
    { mes: "Jan", leads: 150, convertidos: 12, taxa: 8.0, consorcios: 5 },
    { mes: "Fev", leads: 180, convertidos: 15, taxa: 8.3, consorcios: 7 },
    { mes: "Mar", leads: 200, convertidos: 18, taxa: 9.0, consorcios: 8 },
    { mes: "Abr", leads: 165, convertidos: 14, taxa: 8.5, consorcios: 6 },
    { mes: "Mai", leads: 220, convertidos: 20, taxa: 9.1, consorcios: 9 },
    { mes: "Jun", leads: 245, convertidos: 22, taxa: 9.0, consorcios: 10 }
  ]

  const consorcioData = [
    { mes: "Jan", contratos: 5, valor: 1200000, contemplacoes: 2 },
    { mes: "Fev", contratos: 7, valor: 1750000, contemplacoes: 3 },
    { mes: "Mar", contratos: 8, valor: 2100000, contemplacoes: 4 },
    { mes: "Abr", contratos: 6, valor: 1500000, contemplacoes: 2 },
    { mes: "Mai", contratos: 9, valor: 2400000, contemplacoes: 5 },
    { mes: "Jun", contratos: 10, valor: 2800000, contemplacoes: 6 },
    { mes: "Jul", contratos: 12, valor: 3500000, contemplacoes: 7 },
    { mes: "Ago", contratos: 11, valor: 3200000, contemplacoes: 6 },
    { mes: "Set", contratos: 13, valor: 3800000, contemplacoes: 8 },
    { mes: "Out", contratos: 11, valor: 3300000, contemplacoes: 7 },
    { mes: "Nov", contratos: 12, valor: 3600000, contemplacoes: 8 },
    { mes: "Dez", contratos: 14, valor: 4200000, contemplacoes: 9 }
  ]

  const tipoConsorcioData = [
    { tipo: "Imobiliário", quantidade: 65, percentual: 65 },
    { tipo: "Automotivo", quantidade: 25, percentual: 25 },
    { tipo: "Serviços", quantidade: 10, percentual: 10 }
  ]

  const metrics = [
    {
      title: "Receita Total",
      value: "R$ 2.8M",
      change: "+15.2%",
      isPositive: true,
      icon: DollarSign
    },
    {
      title: "Vendas Realizadas",
      value: "247",
      change: "+12.5%",
      isPositive: true,
      icon: BarChart3
    },
    {
      title: "Taxa de Conversão",
      value: "8.7%",
      change: "+0.8%",
      isPositive: true,
      icon: TrendingUp
    },
    {
      title: "Ticket Médio",
      value: "R$ 685K",
      change: "-2.1%",
      isPositive: false,
      icon: CreditCard
    },
    {
      title: "Consórcios Ativos",
      value: "98",
      change: "+18.3%",
      isPositive: true,
      icon: Handshake
    }
  ]

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <BarChart3 className="h-8 w-8 text-primary" />
          <div>
            <h1 className="text-3xl font-bold">Dashboard</h1>
            <p className="text-muted-foreground">
              Métricas e insights do seu negócio
            </p>
          </div>
        </div>
        
        <div className="flex gap-2">
          <Select defaultValue="2025">
            <SelectTrigger className="w-32">
              <Calendar className="h-4 w-4 mr-2" />
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="2025">2025</SelectItem>
              <SelectItem value="2023">2023</SelectItem>
              <SelectItem value="2022">2022</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Exportar
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        {metrics.map((metric, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">{metric.title}</p>
                  <p className="text-2xl font-bold">{metric.value}</p>
                  <div className={`flex items-center gap-1 text-sm ${
                    metric.isPositive ? 'text-success' : 'text-destructive'
                  }`}>
                    {metric.isPositive ? (
                      <TrendingUp className="h-3 w-3" />
                    ) : (
                      <TrendingDown className="h-3 w-3" />
                    )}
                    {metric.change}
                  </div>
                </div>
                <metric.icon className="h-8 w-8 text-muted-foreground" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Charts Row 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Vendas Mensais */}
        <Card>
          <CardHeader>
            <CardTitle>Vendas Mensais - 2025</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={vendaMensalData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="mes" />
                <YAxis />
                <Tooltip 
                  formatter={(value, name) => [
                    name === 'vendas' ? value : 
                    name === 'consorcios' ? value : 
                    `R$ ${Number(value).toLocaleString('pt-BR')}`,
                    name === 'vendas' ? 'Vendas' : 
                    name === 'consorcios' ? 'Consórcios' : 'Valor'
                  ]}
                />
                <Legend />
                <Bar dataKey="vendas" fill="#3b82f6" name="Vendas Diretas" />
                <Bar dataKey="consorcios" fill="#8b5cf6" name="Consórcios" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Status dos Clientes */}
        <Card>
          <CardHeader>
            <CardTitle>Status dos Clientes</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={statusClientesData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {statusClientesData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Charts Row 2 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Tipos de Imóveis */}
        <Card>
          <CardHeader>
            <CardTitle>Portfólio por Tipo de Imóvel</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={tipoImovelData} layout="horizontal">
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" />
                <YAxis dataKey="tipo" type="category" width={80} />
                <Tooltip />
                <Legend />
                <Bar dataKey="quantidade" fill="#10b981" name="Vendas Diretas" />
                <Bar dataKey="consorcios" fill="#8b5cf6" name="Consórcios" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Taxa de Conversão */}
        <Card>
          <CardHeader>
            <CardTitle>Taxa de Conversão de Leads</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={conversaoData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="mes" />
                <YAxis />
                <Tooltip 
                  formatter={(value, name) => [
                    name === 'taxa' ? `${value}%` : value,
                    name === 'taxa' ? 'Taxa de Conversão' : 
                    name === 'leads' ? 'Leads' : 
                    name === 'convertidos' ? 'Convertidos' : 'Consórcios'
                  ]}
                />
                <Legend />
                <Line type="monotone" dataKey="taxa" stroke="#f59e0b" strokeWidth={2} name="Taxa %" />
                <Bar dataKey="leads" fill="#3b82f6" name="Leads" />
                <Bar dataKey="convertidos" fill="#10b981" name="Convertidos" />
                <Bar dataKey="consorcios" fill="#8b5cf6" name="Consórcios" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Charts Row 3 - Consórcios */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Performance de Consórcios */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Handshake className="h-5 w-5" />
              Performance de Consórcios
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={consorcioData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="mes" />
                <YAxis yAxisId="left" orientation="left" />
                <YAxis yAxisId="right" orientation="right" />
                <Tooltip 
                  formatter={(value, name) => [
                    name === 'contratos' ? value : 
                    name === 'contemplacoes' ? value : 
                    `R$ ${Number(value).toLocaleString('pt-BR')}`,
                    name === 'contratos' ? 'Contratos' : 
                    name === 'contemplacoes' ? 'Contemplações' : 'Valor'
                  ]}
                />
                <Legend />
                <Bar yAxisId="left" dataKey="contratos" fill="#8b5cf6" name="Contratos" />
                <Bar yAxisId="right" dataKey="contemplacoes" fill="#ec4899" name="Contemplações" />
                <Line yAxisId="left" type="monotone" dataKey="valor" stroke="#14b8a6" name="Valor (R$)" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Tipos de Consórcio */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Handshake className="h-5 w-5" />
              Distribuição por Tipo de Consórcio
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={tipoConsorcioData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="percentual"
                >
                  <Cell fill="#8b5cf6" />
                  <Cell fill="#a855f7" />
                  <Cell fill="#d946ef" />
                </Pie>
                <Tooltip formatter={(value) => [`${value}%`, "Percentual"]} />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Performance Summary */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              Performance de Clientes
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between">
              <span>Novos Clientes</span>
              <span className="font-bold">47</span>
            </div>
            <div className="flex justify-between">
              <span>Clientes Ativos</span>
              <span className="font-bold">247</span>
            </div>
            <div className="flex justify-between">
              <span>Taxa de Retenção</span>
              <span className="font-bold text-success">92%</span>
            </div>
            <div className="flex justify-between">
              <span>Tempo Médio de Negociação</span>
              <span className="font-bold">28 dias</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Building2 className="h-5 w-5" />
              Performance de Imóveis
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between">
              <span>Imóveis Vendidos</span>
              <span className="font-bold">34</span>
            </div>
            <div className="flex justify-between">
              <span>Tempo Médio no Mercado</span>
              <span className="font-bold">45 dias</span>
            </div>
            <div className="flex justify-between">
              <span>Preço Médio m²</span>
              <span className="font-bold">R$ 8.200</span>
            </div>
            <div className="flex justify-between">
              <span>Margem Média</span>
              <span className="font-bold text-success">6.2%</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Handshake className="h-5 w-5" />
              Performance de Consórcios
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between">
              <span>Contratos Ativos</span>
              <span className="font-bold">98</span>
            </div>
            <div className="flex justify-between">
              <span>Taxa de Contemplação</span>
              <span className="font-bold text-success">78%</span>
            </div>
            <div className="flex justify-between">
              <span>Valor Médio por Contrato</span>
              <span className="font-bold">R$ 285K</span>
            </div>
            <div className="flex justify-between">
              <span>Receita com Consórcios</span>
              <span className="font-bold">R$ 420K</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Relatorios