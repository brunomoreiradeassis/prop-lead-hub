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
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  FileText,
  Plus,
  Search,
  Download,
  Eye,
  Edit,
  Upload,
  File,
  CheckCircle,
  Clock,
  AlertCircle
} from "lucide-react"

const Contratos = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [filterStatus, setFilterStatus] = useState("todos")

  const contratos = [
    {
      id: 1,
      numero: "CNT-2024-001",
      cliente: "Maria Silva Santos",
      imovel: "Rua das Flores, 123",
      tipo: "Compra e Venda",
      valor: 650000,
      status: "assinado",
      dataVencimento: "2024-02-15",
      documentos: [
        { nome: "Contrato Principal", tipo: "PDF", tamanho: "2.1 MB" },
        { nome: "Documentos Pessoais", tipo: "PDF", tamanho: "1.8 MB" },
        { nome: "Certidões", tipo: "PDF", tamanho: "3.2 MB" }
      ]
    },
    {
      id: 2,
      numero: "CNT-2024-002",
      cliente: "João Carlos Oliveira",
      imovel: "Av. Paulista, 1000",
      tipo: "Financiamento",
      valor: 1200000,
      status: "pendente",
      dataVencimento: "2024-02-20",
      documentos: [
        { nome: "Proposta Financiamento", tipo: "PDF", tamanho: "1.5 MB" },
        { nome: "Comprovantes Renda", tipo: "PDF", tamanho: "2.8 MB" }
      ]
    },
    {
      id: 3,
      numero: "CNT-2024-003",
      cliente: "Ana Paula Costa",
      imovel: "Rua Ipanema, 45",
      tipo: "Locação",
      valor: 3500,
      status: "revisao",
      dataVencimento: "2024-02-10",
      documentos: [
        { nome: "Contrato Locação", tipo: "PDF", tamanho: "1.2 MB" },
        { nome: "Fiador", tipo: "PDF", tamanho: "2.1 MB" }
      ]
    },
    {
      id: 4,
      numero: "CNT-2024-004",
      cliente: "Pedro Henrique Lima",
      imovel: "Rua das Palmeiras, 78",
      tipo: "Compra e Venda",
      valor: 520000,
      status: "vencido",
      dataVencimento: "2024-01-30",
      documentos: [
        { nome: "Minuta Contrato", tipo: "PDF", tamanho: "1.7 MB" }
      ]
    }
  ]

  const getStatusBadge = (status: string) => {
    const styles = {
      "assinado": "bg-success/20 text-success",
      "pendente": "bg-warning/20 text-warning",
      "revisao": "bg-primary/20 text-primary",
      "vencido": "bg-destructive/20 text-destructive"
    }
    
    const labels = {
      "assinado": "Assinado",
      "pendente": "Pendente",
      "revisao": "Em Revisão",
      "vencido": "Vencido"
    }

    const icons = {
      "assinado": CheckCircle,
      "pendente": Clock,
      "revisao": AlertCircle,
      "vencido": AlertCircle
    }

    const Icon = icons[status as keyof typeof icons]

    return (
      <Badge className={styles[status as keyof typeof styles]}>
        <Icon className="h-3 w-3 mr-1" />
        {labels[status as keyof typeof labels]}
      </Badge>
    )
  }

  const filteredContratos = contratos.filter(contrato => {
    const matchesSearch = contrato.numero.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         contrato.cliente.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         contrato.imovel.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesFilter = filterStatus === "todos" || contrato.status === filterStatus
    
    return matchesSearch && matchesFilter
  })

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <FileText className="h-8 w-8 text-primary" />
          <div>
            <h1 className="text-3xl font-bold">Contratos e Documentos</h1>
            <p className="text-muted-foreground">
              Gerencie contratos e documentação
            </p>
          </div>
        </div>
        
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Novo Contrato
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-3xl">
            <DialogHeader>
              <DialogTitle>Gerar Novo Contrato</DialogTitle>
            </DialogHeader>
            <div className="grid grid-cols-2 gap-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="cliente">Cliente</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione o cliente" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="maria">Maria Silva Santos</SelectItem>
                    <SelectItem value="joao">João Carlos Oliveira</SelectItem>
                    <SelectItem value="ana">Ana Paula Costa</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="imovel">Imóvel</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione o imóvel" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="flores">Rua das Flores, 123</SelectItem>
                    <SelectItem value="paulista">Av. Paulista, 1000</SelectItem>
                    <SelectItem value="ipanema">Rua Ipanema, 45</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="tipo">Tipo de Contrato</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione o tipo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="compravenda">Compra e Venda</SelectItem>
                    <SelectItem value="financiamento">Financiamento</SelectItem>
                    <SelectItem value="locacao">Locação</SelectItem>
                    <SelectItem value="permuta">Permuta</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="valor">Valor (R$)</Label>
                <Input id="valor" type="number" placeholder="650000" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="vencimento">Data de Vencimento</Label>
                <Input id="vencimento" type="date" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="comissao">Comissão (%)</Label>
                <Input id="comissao" type="number" placeholder="6" />
              </div>
              <div className="col-span-2 space-y-2">
                <Label htmlFor="clausulas">Cláusulas Especiais</Label>
                <Textarea id="clausulas" placeholder="Adicione cláusulas especiais se necessário..." />
              </div>
              <div className="col-span-2 space-y-2">
                <Label>Documentos Anexos</Label>
                <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-4 text-center">
                  <Upload className="h-6 w-6 mx-auto mb-2 text-muted-foreground" />
                  <p className="text-sm text-muted-foreground">
                    Faça upload dos documentos necessários
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-end gap-3">
              <Button variant="outline">Cancelar</Button>
              <Button>Gerar Contrato</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-primary">47</p>
              <p className="text-sm text-muted-foreground">Total de Contratos</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-success">32</p>
              <p className="text-sm text-muted-foreground">Assinados</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-warning">12</p>
              <p className="text-sm text-muted-foreground">Pendentes</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-destructive">3</p>
              <p className="text-sm text-muted-foreground">Vencidos</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Contract Templates */}
      <Card>
        <CardHeader>
          <CardTitle>Modelos de Contrato</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Button variant="outline" className="h-20 flex-col">
              <FileText className="h-6 w-6 mb-2" />
              Compra e Venda
            </Button>
            <Button variant="outline" className="h-20 flex-col">
              <FileText className="h-6 w-6 mb-2" />
              Financiamento
            </Button>
            <Button variant="outline" className="h-20 flex-col">
              <FileText className="h-6 w-6 mb-2" />
              Locação
            </Button>
            <Button variant="outline" className="h-20 flex-col">
              <FileText className="h-6 w-6 mb-2" />
              Permuta
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Filters */}
      <Card>
        <CardHeader>
          <CardTitle>Filtros e Busca</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Buscar por número, cliente ou imóvel..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <div className="w-full md:w-48">
              <Select value={filterStatus} onValueChange={setFilterStatus}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="todos">Todos os Status</SelectItem>
                  <SelectItem value="assinado">Assinado</SelectItem>
                  <SelectItem value="pendente">Pendente</SelectItem>
                  <SelectItem value="revisao">Em Revisão</SelectItem>
                  <SelectItem value="vencido">Vencido</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Contracts Table */}
      <Card>
        <CardHeader>
          <CardTitle>Lista de Contratos ({filteredContratos.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Contrato</TableHead>
                <TableHead>Cliente / Imóvel</TableHead>
                <TableHead>Valor</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Documentos</TableHead>
                <TableHead>Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredContratos.map((contrato) => (
                <TableRow key={contrato.id}>
                  <TableCell>
                    <div>
                      <p className="font-medium">{contrato.numero}</p>
                      <p className="text-sm text-muted-foreground">{contrato.tipo}</p>
                      <p className="text-xs text-muted-foreground">
                        Venc: {new Date(contrato.dataVencimento).toLocaleDateString('pt-BR')}
                      </p>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div>
                      <p className="font-medium">{contrato.cliente}</p>
                      <p className="text-sm text-muted-foreground">{contrato.imovel}</p>
                    </div>
                  </TableCell>
                  <TableCell>
                    <p className="font-bold">
                      R$ {contrato.valor.toLocaleString('pt-BR')}
                    </p>
                  </TableCell>
                  <TableCell>
                    {getStatusBadge(contrato.status)}
                  </TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      {contrato.documentos.map((doc, index) => (
                        <div key={index} className="flex items-center gap-2 text-xs">
                          <File className="h-3 w-3" />
                          <span className="truncate max-w-32">{doc.nome}</span>
                          <Badge variant="outline" className="text-xs">{doc.tamanho}</Badge>
                        </div>
                      ))}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-1">
                      <Button variant="ghost" size="sm">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Download className="h-4 w-4" />
                      </Button>
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

export default Contratos