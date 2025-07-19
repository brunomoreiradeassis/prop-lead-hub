import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Progress } from "@/components/ui/progress"
import {
  CreditCard,
  Plus,
  Search,
  Calculator,
  Banknote,
  TrendingUp,
  Clock,
  CheckCircle,
  XCircle,
  AlertCircle
} from "lucide-react"

const Financiamentos = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [simulationData, setSimulationData] = useState({
    valorImovel: "",
    valorEntrada: "",
    prazo: "",
    banco: ""
  })

  const financiamentos = [
    {
      id: 1,
      cliente: "Maria Silva Santos",
      imovel: "Rua das Flores, 123",
      valor: 650000,
      entrada: 130000,
      financiado: 520000,
      banco: "Caixa Econômica",
      taxa: 9.25,
      prazo: 360,
      parcela: 4250,
      status: "aprovado",
      progresso: 85
    },
    {
      id: 2,
      cliente: "João Carlos Oliveira",
      imovel: "Av. Paulista, 1000",
      valor: 1200000,
      entrada: 240000,
      financiado: 960000,
      banco: "Banco do Brasil",
      taxa: 8.99,
      prazo: 420,
      parcela: 7890,
      status: "analise",
      progresso: 45
    },
    {
      id: 3,
      cliente: "Ana Paula Costa",
      imovel: "Rua Ipanema, 45",
      valor: 850000,
      entrada: 170000,
      financiado: 680000,
      banco: "Itaú",
      taxa: 9.50,
      prazo: 360,
      parcela: 5560,
      status: "pendente",
      progresso: 25
    },
    {
      id: 4,
      cliente: "Pedro Henrique Lima",
      imovel: "Rua das Palmeiras, 78",
      valor: 520000,
      entrada: 104000,
      financiado: 416000,
      banco: "Bradesco",
      taxa: 9.75,
      prazo: 300,
      parcela: 4120,
      status: "recusado",
      progresso: 100
    }
  ]

  const bancos = [
    { nome: "Banco do Brasil", taxa: "8.99%", prazoMax: 420 },
    { nome: "Caixa Econômica", taxa: "9.25%", prazoMax: 360 },
    { nome: "Itaú", taxa: "9.50%", prazoMax: 420 },
    { nome: "Bradesco", taxa: "9.75%", prazoMax: 360 },
    { nome: "Santander", taxa: "10.10%", prazoMax: 420 }
  ]

  const getStatusBadge = (status: string) => {
    const styles = {
      "aprovado": "bg-success/20 text-success",
      "analise": "bg-warning/20 text-warning", 
      "pendente": "bg-primary/20 text-primary",
      "recusado": "bg-destructive/20 text-destructive"
    }
    
    const labels = {
      "aprovado": "Aprovado",
      "analise": "Em Análise",
      "pendente": "Pendente",
      "recusado": "Recusado"
    }

    const icons = {
      "aprovado": CheckCircle,
      "analise": Clock,
      "pendente": AlertCircle,
      "recusado": XCircle
    }

    const Icon = icons[status as keyof typeof icons]

    return (
      <Badge className={styles[status as keyof typeof styles]}>
        <Icon className="h-3 w-3 mr-1" />
        {labels[status as keyof typeof labels]}
      </Badge>
    )
  }

  const calcularParcela = (valor: number, taxa: number, prazo: number) => {
    const taxaMensal = taxa / 100 / 12
    const parcela = (valor * taxaMensal * Math.pow(1 + taxaMensal, prazo)) / 
                   (Math.pow(1 + taxaMensal, prazo) - 1)
    return parcela
  }

  const filteredFinanciamentos = financiamentos.filter(financiamento =>
    financiamento.cliente.toLowerCase().includes(searchTerm.toLowerCase()) ||
    financiamento.imovel.toLowerCase().includes(searchTerm.toLowerCase()) ||
    financiamento.banco.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <CreditCard className="h-8 w-8 text-primary" />
          <div>
            <h1 className="text-3xl font-bold">Financiamentos</h1>
            <p className="text-muted-foreground">
              Simulações, aprovações e acompanhamento
            </p>
          </div>
        </div>
        
        <div className="flex gap-2">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">
                <Calculator className="h-4 w-4 mr-2" />
                Simulador
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>Simulador de Financiamento</DialogTitle>
              </DialogHeader>
              <div className="grid grid-cols-2 gap-4 py-4">
                <div className="space-y-2">
                  <Label htmlFor="valorImovel">Valor do Imóvel (R$)</Label>
                  <Input 
                    id="valorImovel" 
                    type="number" 
                    placeholder="650000"
                    value={simulationData.valorImovel}
                    onChange={(e) => setSimulationData({...simulationData, valorImovel: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="valorEntrada">Valor da Entrada (R$)</Label>
                  <Input 
                    id="valorEntrada" 
                    type="number" 
                    placeholder="130000"
                    value={simulationData.valorEntrada}
                    onChange={(e) => setSimulationData({...simulationData, valorEntrada: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="prazo">Prazo (meses)</Label>
                  <Select value={simulationData.prazo} onValueChange={(value) => setSimulationData({...simulationData, prazo: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione o prazo" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="240">240 meses (20 anos)</SelectItem>
                      <SelectItem value="300">300 meses (25 anos)</SelectItem>
                      <SelectItem value="360">360 meses (30 anos)</SelectItem>
                      <SelectItem value="420">420 meses (35 anos)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="banco">Banco</Label>
                  <Select value={simulationData.banco} onValueChange={(value) => setSimulationData({...simulationData, banco: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione o banco" />
                    </SelectTrigger>
                    <SelectContent>
                      {bancos.map((banco) => (
                        <SelectItem key={banco.nome} value={banco.nome}>
                          {banco.nome} - {banco.taxa}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                {simulationData.valorImovel && simulationData.valorEntrada && simulationData.prazo && simulationData.banco && (
                  <div className="col-span-2 mt-4 p-4 bg-accent rounded-lg">
                    <h3 className="font-semibold mb-2">Resultado da Simulação:</h3>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p>Valor Financiado:</p>
                        <p className="font-bold text-lg">
                          R$ {(Number(simulationData.valorImovel) - Number(simulationData.valorEntrada)).toLocaleString('pt-BR')}
                        </p>
                      </div>
                      <div>
                        <p>Parcela Estimada:</p>
                        <p className="font-bold text-lg text-primary">
                          R$ {calcularParcela(
                            Number(simulationData.valorImovel) - Number(simulationData.valorEntrada),
                            9.25,
                            Number(simulationData.prazo)
                          ).toLocaleString('pt-BR', {minimumFractionDigits: 2})}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="flex justify-end gap-3">
                <Button variant="outline">Nova Simulação</Button>
                <Button>Solicitar Aprovação</Button>
              </div>
            </DialogContent>
          </Dialog>
          
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Nova Solicitação
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-primary">34</p>
              <p className="text-sm text-muted-foreground">Financiamentos Ativos</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-success">22</p>
              <p className="text-sm text-muted-foreground">Aprovados</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-warning">8</p>
              <p className="text-sm text-muted-foreground">Em Análise</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-destructive">4</p>
              <p className="text-sm text-muted-foreground">Recusados</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Bank Partners */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Banknote className="h-5 w-5" />
            Parceiros Bancários
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {bancos.map((banco, index) => (
              <div key={index} className="p-4 border rounded-lg text-center">
                <h3 className="font-medium text-sm mb-2">{banco.nome}</h3>
                <p className="text-lg font-bold text-primary">{banco.taxa}</p>
                <p className="text-xs text-muted-foreground">Taxa a partir de</p>
                <p className="text-xs text-muted-foreground mt-1">
                  Prazo máx: {banco.prazoMax} meses
                </p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Search */}
      <Card>
        <CardHeader>
          <CardTitle>Buscar Financiamentos</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Buscar por cliente, imóvel ou banco..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </CardContent>
      </Card>

      {/* Financiamentos Table */}
      <Card>
        <CardHeader>
          <CardTitle>Lista de Financiamentos ({filteredFinanciamentos.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Cliente / Imóvel</TableHead>
                <TableHead>Valores</TableHead>
                <TableHead>Banco / Condições</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Progresso</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredFinanciamentos.map((financiamento) => (
                <TableRow key={financiamento.id}>
                  <TableCell>
                    <div>
                      <p className="font-medium">{financiamento.cliente}</p>
                      <p className="text-sm text-muted-foreground">{financiamento.imovel}</p>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="space-y-1 text-sm">
                      <p>Imóvel: <strong>R$ {financiamento.valor.toLocaleString('pt-BR')}</strong></p>
                      <p>Entrada: R$ {financiamento.entrada.toLocaleString('pt-BR')}</p>
                      <p>Financiado: R$ {financiamento.financiado.toLocaleString('pt-BR')}</p>
                      <p className="text-primary font-medium">
                        Parcela: R$ {financiamento.parcela.toLocaleString('pt-BR')}
                      </p>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="space-y-1 text-sm">
                      <p className="font-medium">{financiamento.banco}</p>
                      <p>Taxa: {financiamento.taxa}% a.a.</p>
                      <p>Prazo: {financiamento.prazo} meses</p>
                    </div>
                  </TableCell>
                  <TableCell>
                    {getStatusBadge(financiamento.status)}
                  </TableCell>
                  <TableCell>
                    <div className="space-y-2">
                      <Progress value={financiamento.progresso} className="w-20" />
                      <p className="text-xs text-muted-foreground">
                        {financiamento.progresso}% concluído
                      </p>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

export default Financiamentos