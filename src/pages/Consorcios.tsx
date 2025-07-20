import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
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
  Landmark,
  Plus,
  Search,
  Filter,
  Phone,
  Mail,
  Calendar,
  Edit,
  Eye,
  FileText,
  CheckCircle,
  Clock,
  AlertCircle,
  ChevronDown,
  ChevronUp,
  ArrowUpDown,
  Percent
} from "lucide-react"
import { format } from 'date-fns'
import { ptBR } from "date-fns/locale"

const Consorcios = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [filterStatus, setFilterStatus] = useState("todos")
  const [sortConfig, setSortConfig] = useState<{ key: string; direction: 'ascending' | 'descending' } | null>(null)

  const consorcios = [
    {
      id: 1,
      cliente: "Maria Silva Santos",
      cota: "A12345",
      tipo: "Imobiliário",
      valor: 250000,
      parcela: 1500,
      prazo: 180,
      contemplacao: "2025-05-15",
      status: "ativo",
      administradora: "Porto Seguro Consórcios",
      taxaConversao: 85,
      contato: "(11) 99999-9999"
    },
    {
      id: 2,
      cliente: "João Carlos Oliveira",
      cota: "B67890",
      tipo: "Automóvel",
      valor: 80000,
      parcela: 1200,
      prazo: 60,
      contemplacao: "2023-11-20",
      status: "contemplado",
      administradora: "Bradesco Consórcios",
      taxaConversao: 90,
      contato: "(11) 88888-8888"
    },
    {
      id: 3,
      cliente: "Ana Paula Costa",
      cota: "C54321",
      tipo: "Imobiliário",
      valor: 180000,
      parcela: 980,
      prazo: 240,
      contemplacao: null,
      status: "inativo",
      administradora: "Itaú Consórcios",
      taxaConversao: 80,
      contato: "(11) 77777-7777"
    },
    {
      id: 4,
      cliente: "Pedro Henrique Lima",
      cota: "D09876",
      tipo: "Automóvel",
      valor: 120000,
      parcela: 2000,
      prazo: 72,
      contemplacao: "2025-02-10",
      status: "contemplado",
      administradora: "Santander Consórcios",
      taxaConversao: 92,
      contato: "(11) 66666-6666"
    },
    {
      id: 5,
      cliente: "Fernanda Rodrigues",
      cota: "E11223",
      tipo: "Imobiliário",
      valor: 300000,
      parcela: 2200,
      prazo: 180,
      contemplacao: null,
      status: "ativo",
      administradora: "BB Consórcios",
      taxaConversao: 87,
      contato: "(11) 55555-5555"
    }
  ]

  const getStatusBadge = (status: string) => {
    const styles = {
      "ativo": "bg-primary/20 text-primary",
      "contemplado": "bg-success/20 text-success",
      "inativo": "bg-destructive/20 text-destructive",
      "cancelado": "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
    }
    
    const labels = {
      "ativo": "Ativo",
      "contemplado": "Contemplado", 
      "inativo": "Inativo",
      "cancelado": "Cancelado"
    }

    const icons = {
      "ativo": CheckCircle,
      "contemplado": CheckCircle,
      "inativo": AlertCircle,
      "cancelado": AlertCircle
    }

    const Icon = icons[status as keyof typeof icons]

    return (
      <Badge className={styles[status as keyof typeof styles]}>
        <Icon className="h-3 w-3 mr-1" />
        {labels[status as keyof typeof labels]}
      </Badge>
    )
  }

  const getTipoBadge = (tipo: string) => {
    const styles = {
      "Imobiliário": "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
      "Automóvel": "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
      "Serviços": "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
    }

    return (
      <Badge className={styles[tipo as keyof typeof styles]}>
        {tipo}
      </Badge>
    )
  }

  const requestSort = (key: string) => {
    let direction: 'ascending' | 'descending' = 'ascending'
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending'
    }
    setSortConfig({ key, direction })
  }

  const getSortIcon = (key: string) => {
    if (!sortConfig || sortConfig.key !== key) {
      return <ArrowUpDown className="h-3 w-3 ml-1" />
    }
    return sortConfig.direction === 'ascending' 
      ? <ChevronUp className="h-3 w-3 ml-1" /> 
      : <ChevronDown className="h-3 w-3 ml-1" />
  }

  const sortedAndFilteredConsorcios = [...consorcios].filter(consorcio => {
    const matchesSearch = consorcio.cliente.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         consorcio.cota.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         consorcio.contato.includes(searchTerm)
    
    const matchesFilter = filterStatus === "todos" || consorcio.status === filterStatus
    
    return matchesSearch && matchesFilter
  }).sort((a, b) => {
    if (!sortConfig) return 0
    
    if (a[sortConfig.key as keyof typeof a] < b[sortConfig.key as keyof typeof b]) {
      return sortConfig.direction === 'ascending' ? -1 : 1
    }
    if (a[sortConfig.key as keyof typeof a] > b[sortConfig.key as keyof typeof b]) {
      return sortConfig.direction === 'ascending' ? 1 : -1
    }
    return 0
  })

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center gap-3">
        <Landmark className="h-8 w-8 text-primary" />
        <div>
          <h1 className="text-3xl font-bold">Gerenciamento de Consórcios</h1>
          <p className="text-muted-foreground">
            Acompanhe os consórcios dos seus clientes
          </p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="text-center">
              <p className="text-xl md:text-2xl font-bold text-primary">{consorcios.length}</p>
              <p className="text-xs md:text-sm text-muted-foreground">Total de Consórcios</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-center">
              <p className="text-xl md:text-2xl font-bold text-success">
                {consorcios.filter(c => c.status === 'contemplado').length}
              </p>
              <p className="text-xs md:text-sm text-muted-foreground">Contemplados</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-center">
              <p className="text-xl md:text-2xl font-bold text-primary">
                {consorcios.filter(c => c.status === 'ativo').length}
              </p>
              <p className="text-xs md:text-sm text-muted-foreground">Ativos</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-center">
              <p className="text-xl md:text-2xl font-bold text-destructive">
                {consorcios.filter(c => c.status === 'inativo' || c.status === 'cancelado').length}
              </p>
              <p className="text-xs md:text-sm text-muted-foreground">Inativos/Cancelados</p>
            </div>
          </CardContent>
        </Card>
      </div>

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
                  placeholder="Buscar por cliente, cota ou telefone..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <div className="w-full md:w-48">
              <Select value={filterStatus} onValueChange={setFilterStatus}>
                <SelectTrigger>
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="todos">Todos os Status</SelectItem>
                  <SelectItem value="ativo">Ativo</SelectItem>
                  <SelectItem value="contemplado">Contemplado</SelectItem>
                  <SelectItem value="inativo">Inativo</SelectItem>
                  <SelectItem value="cancelado">Cancelado</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Dialog>
              <DialogTrigger asChild>
                <Button className="w-full md:w-auto">
                  <Plus className="h-4 w-4 mr-2" />
                  Novo Consórcio
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle>Cadastrar Novo Consórcio</DialogTitle>
                </DialogHeader>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4">
                  <div className="space-y-2">
                    <Label htmlFor="cliente">Cliente *</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione o cliente" />
                      </SelectTrigger>
                      <SelectContent>
                        {consorcios.map((consorcio) => (
                          <SelectItem key={consorcio.id} value={consorcio.cliente}>
                            {consorcio.cliente}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cota">Número da Cota *</Label>
                    <Input id="cota" placeholder="Ex: A12345" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="tipo">Tipo de Consórcio *</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione o tipo" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Imobiliário">Imobiliário</SelectItem>
                        <SelectItem value="Automóvel">Automóvel</SelectItem>
                        <SelectItem value="Serviços">Serviços</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="valor">Valor do Crédito *</Label>
                    <Input id="valor" type="number" placeholder="R$ 0,00" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="parcela">Valor da Parcela *</Label>
                    <Input id="parcela" type="number" placeholder="R$ 0,00" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="prazo">Prazo (meses) *</Label>
                    <Input id="prazo" type="number" placeholder="Ex: 180" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="taxaConversao">Taxa de Conversão (%)</Label>
                    <div className="relative">
                      <Input id="taxaConversao" type="number" placeholder="Ex: 85" />
                      <Percent className="absolute right-3 top-3 h-4 w-4 text-muted-foreground" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="administradora">Administradora *</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione a administradora" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Porto Seguro Consórcios">Porto Seguro</SelectItem>
                        <SelectItem value="Bradesco Consórcios">Bradesco</SelectItem>
                        <SelectItem value="Itaú Consórcios">Itaú</SelectItem>
                        <SelectItem value="Santander Consórcios">Santander</SelectItem>
                        <SelectItem value="BB Consórcios">Banco do Brasil</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="status">Status *</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione o status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ativo">Ativo</SelectItem>
                        <SelectItem value="contemplado">Contemplado</SelectItem>
                        <SelectItem value="inativo">Inativo</SelectItem>
                        <SelectItem value="cancelado">Cancelado</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contemplacao">Data de Contemplação</Label>
                    <Input id="contemplacao" type="date" />
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <Label htmlFor="observacoes">Observações</Label>
                    <Textarea id="observacoes" placeholder="Informações adicionais sobre o consórcio..." />
                  </div>
                </div>
                <div className="flex flex-col-reverse md:flex-row justify-end gap-3">
                  <Button variant="outline" className="w-full md:w-auto">Cancelar</Button>
                  <Button className="w-full md:w-auto">Salvar Consórcio</Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </CardContent>
      </Card>

      {/* Consórcios Table */}
      <Card>
        <CardHeader>
          <CardTitle>Lista de Consórcios ({sortedAndFilteredConsorcios.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table className="min-w-[1000px] md:w-full">
              <TableHeader>
                <TableRow>
                  <TableHead>
                    <Button 
                      variant="ghost" 
                      onClick={() => requestSort('cliente')}
                      className="p-0 hover:bg-transparent"
                    >
                      Cliente
                      {getSortIcon('cliente')}
                    </Button>
                  </TableHead>
                  <TableHead>Cota</TableHead>
                  <TableHead>Tipo</TableHead>
                  <TableHead>
                    <Button 
                      variant="ghost" 
                      onClick={() => requestSort('valor')}
                      className="p-0 hover:bg-transparent"
                    >
                      Valor
                      {getSortIcon('valor')}
                    </Button>
                  </TableHead>
                  <TableHead>Parcela</TableHead>
                  <TableHead>Prazo</TableHead>
                  <TableHead>Taxa</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Contemplação</TableHead>
                  <TableHead>Ações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {sortedAndFilteredConsorcios.map((consorcio) => (
                  <TableRow key={consorcio.id}>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarFallback>
                            {consorcio.cliente.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">{consorcio.cliente}</p>
                          <div className="flex items-center gap-1 text-xs md:text-sm text-muted-foreground">
                            <Phone className="h-3 w-3" />
                            {consorcio.contato}
                          </div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <p className="font-medium">{consorcio.cota}</p>
                    </TableCell>
                    <TableCell>
                      {getTipoBadge(consorcio.tipo)}
                    </TableCell>
                    <TableCell>
                      <p className="font-medium">
                        R$ {consorcio.valor.toLocaleString('pt-BR')}
                      </p>
                    </TableCell>
                    <TableCell>
                      <p className="font-medium">
                        R$ {consorcio.parcela.toLocaleString('pt-BR')}
                      </p>
                    </TableCell>
                    <TableCell>
                      <p className="text-sm">
                        {consorcio.prazo} meses
                      </p>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1">
                        <Percent className="h-3 w-3 text-muted-foreground" />
                        <span>{consorcio.taxaConversao}%</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      {getStatusBadge(consorcio.status)}
                    </TableCell>
                    <TableCell>
                      <p className="text-sm text-muted-foreground">
                        {consorcio.contemplacao ? format(new Date(consorcio.contemplacao), 'dd/MM/yyyy', { locale: ptBR }) : 'Não contemplado'}
                      </p>
                    </TableCell>
                    <TableCell>
                      <div className="flex gap-1 md:gap-2">
                        <Button variant="ghost" size="sm" title="Visualizar" className="h-8 w-8 p-0">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm" title="Editar" className="h-8 w-8 p-0">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm" title="Documentos" className="h-8 w-8 p-0">
                          <FileText className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default Consorcios