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
  Users,
  Plus,
  Search,
  Filter,
  Phone,
  Mail,
  MapPin,
  Edit,
  Eye,
  FileText,
  CheckCircle,
  Clock,
  AlertCircle,
  ChevronDown,
  ChevronUp,
  ArrowUpDown
} from "lucide-react"

const Clientes = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [filterStatus, setFilterStatus] = useState("todos")
  const [sortConfig, setSortConfig] = useState<{ key: string; direction: 'ascending' | 'descending' } | null>(null)

  const clientes = [
    {
      id: 1,
      nome: "Maria Silva Santos",
      email: "maria.silva@email.com",
      telefone: "(11) 99999-9999",
      cpf: "123.456.789-00",
      renda: 8500,
      status: "pre-aprovado",
      perfil: "conservador",
      cidade: "São Paulo",
      cadastro: "2025-01-15",
      interesses: ["Apartamento", "Casa", "Terreno"]
    },
    {
      id: 2,
      nome: "João Carlos Oliveira",
      email: "joao.oliveira@email.com",
      telefone: "(11) 88888-8888",
      cpf: "987.654.321-00",
      renda: 12000,
      status: "aprovado",
      perfil: "moderado",
      cidade: "Rio de Janeiro",
      cadastro: "2025-01-10",
      interesses: ["Casa", "Comercial"]
    },
    {
      id: 3,
      nome: "Ana Paula Costa",
      email: "ana.costa@email.com",
      telefone: "(11) 77777-7777",
      cpf: "456.789.123-00",
      renda: 6500,
      status: "analise",
      perfil: "conservador",
      cidade: "Belo Horizonte",
      cadastro: "2025-01-20",
      interesses: ["Apartamento"]
    },
    {
      id: 4,
      nome: "Pedro Henrique Lima",
      email: "pedro.lima@email.com",
      telefone: "(11) 66666-6666",
      cpf: "789.123.456-00",
      renda: 15000,
      status: "recusado",
      perfil: "arrojado",
      cidade: "Brasília",
      cadastro: "2025-01-12",
      interesses: ["Casa de Luxo", "Terreno"]
    },
    {
      id: 5,
      nome: "Fernanda Rodrigues",
      email: "fernanda.rodrigues@email.com",
      telefone: "(11) 55555-5555",
      cpf: "321.654.987-00",
      renda: 9200,
      status: "pre-aprovado",
      perfil: "moderado",
      cidade: "Salvador",
      cadastro: "2025-01-18",
      interesses: ["Apartamento", "Casa"]
    },
    {
      id: 6,
      nome: "Carlos Eduardo Souza",
      email: "carlos.souza@email.com",
      telefone: "(21) 44444-4444",
      cpf: "654.321.987-00",
      renda: 11000,
      status: "aprovado",
      perfil: "moderado",
      cidade: "Rio de Janeiro",
      cadastro: "2025-01-22",
      interesses: ["Comercial", "Terreno"]
    },
    {
      id: 7,
      nome: "Juliana Almeida",
      email: "juliana.almeida@email.com",
      telefone: "(31) 33333-3333",
      cpf: "987.321.654-00",
      renda: 7500,
      status: "pre-aprovado",
      perfil: "conservador",
      cidade: "Belo Horizonte",
      cadastro: "2025-01-25",
      interesses: ["Apartamento"]
    }
  ]

  const getStatusBadge = (status: string) => {
    const styles = {
      "pre-aprovado": "bg-warning/20 text-warning",
      "aprovado": "bg-success/20 text-success",
      "analise": "bg-primary/20 text-primary",
      "recusado": "bg-destructive/20 text-destructive"
    }
    
    const labels = {
      "pre-aprovado": "Pré-aprovado",
      "aprovado": "Aprovado", 
      "analise": "Em Análise",
      "recusado": "Recusado"
    }

    const icons = {
      "pre-aprovado": CheckCircle,
      "aprovado": CheckCircle,
      "analise": Clock,
      "recusado": AlertCircle
    }

    const Icon = icons[status as keyof typeof icons]

    return (
      <Badge className={styles[status as keyof typeof styles]}>
        <Icon className="h-3 w-3 mr-1" />
        {labels[status as keyof typeof labels]}
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

  const sortedAndFilteredClientes = [...clientes].filter(cliente => {
    const matchesSearch = cliente.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         cliente.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         cliente.cpf.includes(searchTerm)
    
    const matchesFilter = filterStatus === "todos" || cliente.status === filterStatus
    
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
        <Users className="h-8 w-8 text-primary" />
        <div>
          <h1 className="text-3xl font-bold">Gerenciamento de Clientes</h1>
          <p className="text-muted-foreground">
            Cadastre e gerencie seus clientes
          </p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="text-center">
              <p className="text-xl md:text-2xl font-bold text-primary">253</p>
              <p className="text-xs md:text-sm text-muted-foreground">Total de Clientes</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-center">
              <p className="text-xl md:text-2xl font-bold text-success">162</p>
              <p className="text-xs md:text-sm text-muted-foreground">Pré-aprovados</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-center">
              <p className="text-xl md:text-2xl font-bold text-warning">47</p>
              <p className="text-xs md:text-sm text-muted-foreground">Em Análise</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-center">
              <p className="text-xl md:text-2xl font-bold text-destructive">15</p>
              <p className="text-xs md:text-sm text-muted-foreground">Recusados</p>
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
                  placeholder="Buscar por nome, e-mail ou CPF..."
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
                  <SelectItem value="pre-aprovado">Pré-aprovado</SelectItem>
                  <SelectItem value="aprovado">Aprovado</SelectItem>
                  <SelectItem value="analise">Em Análise</SelectItem>
                  <SelectItem value="recusado">Recusado</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Dialog>
              <DialogTrigger asChild>
                <Button className="w-full md:w-auto">
                  <Plus className="h-4 w-4 mr-2" />
                  Novo Cliente
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle>Cadastrar Novo Cliente</DialogTitle>
                </DialogHeader>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4">
                  <div className="space-y-2">
                    <Label htmlFor="nome">Nome Completo</Label>
                    <Input id="nome" placeholder="Digite o nome completo" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cpf">CPF</Label>
                    <Input id="cpf" placeholder="000.000.000-00" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">E-mail</Label>
                    <Input id="email" type="email" placeholder="email@exemplo.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="telefone">Telefone</Label>
                    <Input id="telefone" placeholder="(00) 00000-0000" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="renda">Renda Mensal</Label>
                    <Input id="renda" type="number" placeholder="0.00" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cidade">Cidade</Label>
                    <Input id="cidade" placeholder="Cidade do cliente" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="perfil">Perfil Financeiro</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione o perfil" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="conservador">Conservador</SelectItem>
                        <SelectItem value="moderado">Moderado</SelectItem>
                        <SelectItem value="arrojado">Arrojado</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="status">Status</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione o status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="pre-aprovado">Pré-aprovado</SelectItem>
                        <SelectItem value="aprovado">Aprovado</SelectItem>
                        <SelectItem value="analise">Em Análise</SelectItem>
                        <SelectItem value="recusado">Recusado</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <Label htmlFor="interesses">Interesses</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione os interesses" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Apartamento">Apartamento</SelectItem>
                        <SelectItem value="Casa">Casa</SelectItem>
                        <SelectItem value="Casa de Luxo">Casa de Luxo</SelectItem>
                        <SelectItem value="Terreno">Terreno</SelectItem>
                        <SelectItem value="Comercial">Comercial</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <Label htmlFor="observacoes">Observações</Label>
                    <Textarea id="observacoes" placeholder="Observações adicionais..." />
                  </div>
                </div>
                <div className="flex flex-col-reverse md:flex-row justify-end gap-3">
                  <Button variant="outline" className="w-full md:w-auto">Cancelar</Button>
                  <Button className="w-full md:w-auto">Salvar Cliente</Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </CardContent>
      </Card>

      {/* Clients Table */}
      <Card>
        <CardHeader>
          <CardTitle>Lista de Clientes ({sortedAndFilteredClientes.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table className="min-w-[800px] md:w-full">
              <TableHeader>
                <TableRow>
                  <TableHead>
                    <Button 
                      variant="ghost" 
                      onClick={() => requestSort('nome')}
                      className="p-0 hover:bg-transparent"
                    >
                      Cliente
                      {getSortIcon('nome')}
                    </Button>
                  </TableHead>
                  <TableHead>Contato</TableHead>
                  <TableHead>
                    <Button 
                      variant="ghost" 
                      onClick={() => requestSort('renda')}
                      className="p-0 hover:bg-transparent"
                    >
                      Renda
                      {getSortIcon('renda')}
                    </Button>
                  </TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Perfil</TableHead>
                  <TableHead>
                    <Button 
                      variant="ghost" 
                      onClick={() => requestSort('cadastro')}
                      className="p-0 hover:bg-transparent"
                    >
                      Cadastro
                      {getSortIcon('cadastro')}
                    </Button>
                  </TableHead>
                  <TableHead>Ações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {sortedAndFilteredClientes.map((cliente) => (
                  <TableRow key={cliente.id}>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarFallback>
                            {cliente.nome.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">{cliente.nome}</p>
                          <p className="text-xs md:text-sm text-muted-foreground">{cliente.cpf}</p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="space-y-1">
                        <div className="flex items-center gap-1 text-xs md:text-sm">
                          <Mail className="h-3 w-3" />
                          <span className="truncate max-w-[120px] md:max-w-none">{cliente.email}</span>
                        </div>
                        <div className="flex items-center gap-1 text-xs md:text-sm">
                          <Phone className="h-3 w-3" />
                          {cliente.telefone}
                        </div>
                        <div className="flex items-center gap-1 text-xs md:text-sm">
                          <MapPin className="h-3 w-3" />
                          {cliente.cidade}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <p className="font-medium text-sm md:text-base">
                        R$ {cliente.renda.toLocaleString('pt-BR')}
                      </p>
                    </TableCell>
                    <TableCell>
                      {getStatusBadge(cliente.status)}
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline" className="text-xs md:text-sm">
                        {cliente.perfil.charAt(0).toUpperCase() + cliente.perfil.slice(1)}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <p className="text-xs md:text-sm text-muted-foreground">
                        {new Date(cliente.cadastro).toLocaleDateString('pt-BR')}
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

export default Clientes