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
  FileText
} from "lucide-react"

const Clientes = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [filterStatus, setFilterStatus] = useState("todos")

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
      cadastro: "2024-01-15"
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
      cadastro: "2024-01-10"
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
      cadastro: "2024-01-20"
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
      cadastro: "2024-01-12"
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
      cadastro: "2024-01-18"
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

    return (
      <Badge className={styles[status as keyof typeof styles]}>
        {labels[status as keyof typeof labels]}
      </Badge>
    )
  }

  const filteredClientes = clientes.filter(cliente => {
    const matchesSearch = cliente.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         cliente.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         cliente.cpf.includes(searchTerm)
    
    const matchesFilter = filterStatus === "todos" || cliente.status === filterStatus
    
    return matchesSearch && matchesFilter
  })

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Users className="h-8 w-8 text-primary" />
          <div>
            <h1 className="text-3xl font-bold">Gerenciamento de Clientes</h1>
            <p className="text-muted-foreground">
              Cadastre e gerencie seus clientes
            </p>
          </div>
        </div>
        
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Novo Cliente
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Cadastrar Novo Cliente</DialogTitle>
            </DialogHeader>
            <div className="grid grid-cols-2 gap-4 py-4">
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
              <div className="col-span-2 space-y-2">
                <Label htmlFor="observacoes">Observações</Label>
                <Textarea id="observacoes" placeholder="Observações adicionais..." />
              </div>
            </div>
            <div className="flex justify-end gap-3">
              <Button variant="outline">Cancelar</Button>
              <Button>Salvar Cliente</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-primary">247</p>
              <p className="text-sm text-muted-foreground">Total de Clientes</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-success">156</p>
              <p className="text-sm text-muted-foreground">Pré-aprovados</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-warning">45</p>
              <p className="text-sm text-muted-foreground">Em Análise</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-destructive">12</p>
              <p className="text-sm text-muted-foreground">Recusados</p>
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
          </div>
        </CardContent>
      </Card>

      {/* Clients Table */}
      <Card>
        <CardHeader>
          <CardTitle>Lista de Clientes ({filteredClientes.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Cliente</TableHead>
                <TableHead>Contato</TableHead>
                <TableHead>Renda</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Perfil</TableHead>
                <TableHead>Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredClientes.map((cliente) => (
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
                        <p className="text-sm text-muted-foreground">{cliente.cpf}</p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      <div className="flex items-center gap-1 text-sm">
                        <Mail className="h-3 w-3" />
                        {cliente.email}
                      </div>
                      <div className="flex items-center gap-1 text-sm">
                        <Phone className="h-3 w-3" />
                        {cliente.telefone}
                      </div>
                      <div className="flex items-center gap-1 text-sm">
                        <MapPin className="h-3 w-3" />
                        {cliente.cidade}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <p className="font-medium">
                      R$ {cliente.renda.toLocaleString('pt-BR')}
                    </p>
                  </TableCell>
                  <TableCell>
                    {getStatusBadge(cliente.status)}
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">
                      {cliente.perfil}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <FileText className="h-4 w-4" />
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

export default Clientes