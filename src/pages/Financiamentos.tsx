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
  AlertCircle,
  Handshake,
  Users
} from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const Financiamentos = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [simulationData, setSimulationData] = useState({
    valorImovel: "",
    valorEntrada: "",
    prazo: "",
    banco: ""
  })
  const [activeTab, setActiveTab] = useState("financiamentos")

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

  const consorcios = [
    {
      id: 1,
      cliente: "Carlos Eduardo Mendes",
      grupo: "BB Imóveis 1234",
      valorCota: 750000,
      prazo: 180,
      parcela: 4166,
      status: "contemplado",
      progresso: 100,
      lance: "Sorteio",
      dataContemplacao: "15/05/2025"
    },
    {
      id: 2,
      cliente: "Fernanda Oliveira",
      grupo: "Caixa Residencial 5678",
      valorCota: 500000,
      prazo: 150,
      parcela: 3333,
      status: "regular",
      progresso: 45,
      lance: "Lance Livre",
      dataContemplacao: null
    },
    {
      id: 3,
      cliente: "Roberto Santos",
      grupo: "Itaú Casa Própria 9012",
      valorCota: 980000,
      prazo: 160,
      parcela: 6125,
      status: "pendente",
      progresso: 30,
      lance: "Lance Fixo",
      dataContemplacao: null
    },
    {
      id: 4,
      cliente: "Juliana Pereira",
      grupo: "Santander Habitação 3456",
      valorCota: 650000,
      prazo: 170,
      parcela: 3823,
      status: "inadimplente",
      progresso: 60,
      lance: "Lance Livre",
      dataContemplacao: null
    }
  ]

  const bancos = [
    { nome: "Banco do Brasil", taxa: "8.99%", prazoMax: 420 },
    { nome: "Caixa Econômica", taxa: "9.25%", prazoMax: 360 },
    { nome: "Itaú", taxa: "9.50%", prazoMax: 420 },
    { nome: "Bradesco", taxa: "9.75%", prazoMax: 360 },
    { nome: "Santander", taxa: "10.10%", prazoMax: 420 }
  ]

  const administradoras = [
    { nome: "BB Consórcios", taxas: "0,5% a.m.", prazoMax: 180 },
    { nome: "Caixa Consórcios", taxas: "0,55% a.m.", prazoMax: 150 },
    { nome: "Itaú Consórcios", taxas: "0,6% a.m.", prazoMax: 160 },
    { nome: "Bradesco Consórcios", taxas: "0,52% a.m.", prazoMax: 170 },
    { nome: "Santander Consórcios", taxas: "0,58% a.m.", prazoMax: 170 }
  ]

  const getStatusBadge = (status: string, type: string = 'financiamento') => {
    const styles = {
      financiamento: {
        "aprovado": "bg-success/20 text-success",
        "analise": "bg-warning/20 text-warning", 
        "pendente": "bg-primary/20 text-primary",
        "recusado": "bg-destructive/20 text-destructive"
      },
      consorcio: {
        "contemplado": "bg-success/20 text-success",
        "regular": "bg-primary/20 text-primary",
        "pendente": "bg-warning/20 text-warning",
        "inadimplente": "bg-destructive/20 text-destructive"
      }
    }
    
    const labels = {
      financiamento: {
        "aprovado": "Aprovado",
        "analise": "Em Análise",
        "pendente": "Pendente",
        "recusado": "Recusado"
      },
      consorcio: {
        "contemplado": "Contemplado",
        "regular": "Regular",
        "pendente": "Pendente",
        "inadimplente": "Inadimplente"
      }
    }

    const icons = {
      financiamento: {
        "aprovado": CheckCircle,
        "analise": Clock,
        "pendente": AlertCircle,
        "recusado": XCircle
      },
      consorcio: {
        "contemplado": CheckCircle,
        "regular": TrendingUp,
        "pendente": Clock,
        "inadimplente": XCircle
      }
    }

    const Icon = icons[type as keyof typeof icons][status as keyof typeof icons.financiamento]

    return (
      <Badge className={styles[type as keyof typeof styles][status as keyof typeof styles.financiamento]}>
        <Icon className="h-3 w-3 mr-1" />
        {labels[type as keyof typeof labels][status as keyof typeof labels.financiamento]}
      </Badge>
    )
  }

  const calcularParcela = (valor: number, taxa: number, prazo: number) => {
    const taxaMensal = taxa / 100 / 12
    const parcela = (valor * taxaMensal * Math.pow(1 + taxaMensal, prazo)) / 
                   (Math.pow(1 + taxaMensal, prazo) - 1)
    return parcela
  }

  const calcularParcelaConsorcio = (valor: number, prazo: number) => {
    return valor / prazo
  }

  const filteredFinanciamentos = financiamentos.filter(financiamento =>
    financiamento.cliente.toLowerCase().includes(searchTerm.toLowerCase()) ||
    financiamento.imovel.toLowerCase().includes(searchTerm.toLowerCase()) ||
    financiamento.banco.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const filteredConsorcios = consorcios.filter(consorcio =>
    consorcio.cliente.toLowerCase().includes(searchTerm.toLowerCase()) ||
    consorcio.grupo.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <CreditCard className="h-8 w-8 text-primary" />
          <div>
            <h1 className="text-3xl font-bold">Financiamentos & Consórcios</h1>
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
                <DialogTitle>Simulador de Financiamento/Consórcio</DialogTitle>
              </DialogHeader>
              <Tabs defaultValue="financiamento" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="financiamento">Financiamento</TabsTrigger>
                  <TabsTrigger value="consorcio">Consórcio</TabsTrigger>
                </TabsList>
                <TabsContent value="financiamento">
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
                </TabsContent>
                <TabsContent value="consorcio">
                  <div className="grid grid-cols-2 gap-4 py-4">
                    <div className="space-y-2">
                      <Label htmlFor="valorCota">Valor da Cota (R$)</Label>
                      <Input 
                        id="valorCota" 
                        type="number" 
                        placeholder="500000"
                        value={simulationData.valorImovel}
                        onChange={(e) => setSimulationData({...simulationData, valorImovel: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="prazoConsorcio">Prazo (meses)</Label>
                      <Select value={simulationData.prazo} onValueChange={(value) => setSimulationData({...simulationData, prazo: value})}>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione o prazo" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="120">120 meses (10 anos)</SelectItem>
                          <SelectItem value="150">150 meses (12,5 anos)</SelectItem>
                          <SelectItem value="180">180 meses (15 anos)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="administradora">Administradora</Label>
                      <Select value={simulationData.banco} onValueChange={(value) => setSimulationData({...simulationData, banco: value})}>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione a administradora" />
                        </SelectTrigger>
                        <SelectContent>
                          {administradoras.map((admin) => (
                            <SelectItem key={admin.nome} value={admin.nome}>
                              {admin.nome} - Taxa: {admin.taxas}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    
                    {simulationData.valorImovel && simulationData.prazo && (
                      <div className="col-span-2 mt-4 p-4 bg-accent rounded-lg">
                        <h3 className="font-semibold mb-2">Resultado da Simulação:</h3>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <p>Valor da Cota:</p>
                            <p className="font-bold text-lg">
                              R$ {Number(simulationData.valorImovel).toLocaleString('pt-BR')}
                            </p>
                          </div>
                          <div>
                            <p>Parcela Estimada:</p>
                            <p className="font-bold text-lg text-primary">
                              R$ {calcularParcelaConsorcio(
                                Number(simulationData.valorImovel),
                                Number(simulationData.prazo)
                              ).toLocaleString('pt-BR', {minimumFractionDigits: 2})}
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </TabsContent>
              </Tabs>
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
              <p className="text-2xl font-bold text-warning">18</p>
              <p className="text-sm text-muted-foreground">Consórcios Ativos</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-success">5</p>
              <p className="text-sm text-muted-foreground">Contemplados</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Partners Section */}
      <Tabs defaultValue="bancos">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="bancos">Parceiros Bancários</TabsTrigger>
          <TabsTrigger value="consorcios">Administradoras de Consórcio</TabsTrigger>
        </TabsList>
        <TabsContent value="bancos">
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
        </TabsContent>
        <TabsContent value="consorcios">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Handshake className="h-5 w-5" />
                Administradoras de Consórcio
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                {administradoras.map((admin, index) => (
                  <div key={index} className="p-4 border rounded-lg text-center">
                    <h3 className="font-medium text-sm mb-2">{admin.nome}</h3>
                    <p className="text-lg font-bold text-primary">{admin.taxas}</p>
                    <p className="text-xs text-muted-foreground">Taxa administrativa</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Prazo máx: {admin.prazoMax} meses
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Search */}
      <Card>
        <CardHeader>
          <CardTitle>Buscar {activeTab === 'financiamentos' ? 'Financiamentos' : 'Consórcios'}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder={`Buscar por cliente, ${activeTab === 'financiamentos' ? 'imóvel ou banco' : 'grupo ou administradora'}...`}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </CardContent>
      </Card>

      {/* Main Content Tabs */}
      <Tabs defaultValue="financiamentos" onValueChange={(value) => setActiveTab(value)}>
        <TabsList>
          <TabsTrigger value="financiamentos" className="flex items-center gap-2">
            <CreditCard className="h-4 w-4" />
            Financiamentos
          </TabsTrigger>
          <TabsTrigger value="consorcios" className="flex items-center gap-2">
            <Handshake className="h-4 w-4" />
            Consórcios
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="financiamentos">
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
                        {getStatusBadge(financiamento.status, 'financiamento')}
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
        </TabsContent>
        
        <TabsContent value="consorcios">
          <Card>
            <CardHeader>
              <CardTitle>Lista de Consórcios ({filteredConsorcios.length})</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Cliente / Grupo</TableHead>
                    <TableHead>Valores</TableHead>
                    <TableHead>Condições</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Progresso</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredConsorcios.map((consorcio) => (
                    <TableRow key={consorcio.id}>
                      <TableCell>
                        <div>
                          <p className="font-medium">{consorcio.cliente}</p>
                          <p className="text-sm text-muted-foreground">{consorcio.grupo}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="space-y-1 text-sm">
                          <p>Valor da Cota: <strong>R$ {consorcio.valorCota.toLocaleString('pt-BR')}</strong></p>
                          <p>Parcela: R$ {consorcio.parcela.toLocaleString('pt-BR')}</p>
                          {consorcio.dataContemplacao && (
                            <p className="text-success font-medium">
                              Contemplado em: {consorcio.dataContemplacao}
                            </p>
                          )}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="space-y-1 text-sm">
                          <p>Prazo: {consorcio.prazo} meses</p>
                          <p>Mecanismo: {consorcio.lance}</p>
                          <p>Parcelas pagas: {Math.round(consorcio.prazo * (consorcio.progresso/100))}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        {getStatusBadge(consorcio.status, 'consorcio')}
                      </TableCell>
                      <TableCell>
                        <div className="space-y-2">
                          <Progress value={consorcio.progresso} className="w-20" />
                          <p className="text-xs text-muted-foreground">
                            {consorcio.progresso}% concluído
                          </p>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default Financiamentos