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
  Calendar,
  Plus,
  Search,
  Filter,
  Phone,
  Edit,
  Eye,
  CheckCircle,
  AlertCircle,
  ChevronDown,
  ChevronUp,
  ArrowUpDown,
  User,
  Clock
} from "lucide-react"
import { Calendar as CalendarComponent } from "@/components/ui/calendar"
import { format } from "date-fns"
import { ptBR } from "date-fns/locale"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

const Agendamentos = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [filterStatus, setFilterStatus] = useState("todos")
  const [sortConfig, setSortConfig] = useState<{ key: string; direction: 'ascending' | 'descending' } | null>(null)
  const [date, setDate] = useState<Date | undefined>(new Date())

  const agendamentos = [
    {
      id: 1,
      cliente: "Maria Silva Santos",
      imovel: "Apartamento - Jardins",
      data: "2025-02-15",
      horario: "14:00",
      tipo: "Visita",
      status: "confirmado",
      corretor: "Carlos Mendes",
      contato: "(11) 99999-9999",
      observacoes: "Cliente interessado em apartamentos com 3 quartos"
    },
    {
      id: 2,
      cliente: "João Carlos Oliveira",
      imovel: "Casa - Moema",
      data: "2025-02-16",
      horario: "10:30",
      tipo: "Assinatura",
      status: "pendente",
      corretor: "Ana Paula",
      contato: "(11) 88888-8888",
      observacoes: "Levar documentos do contrato"
    },
    {
      id: 3,
      cliente: "Ana Paula Costa",
      imovel: "Terreno - Alphaville",
      data: "2025-02-14",
      horario: "16:00",
      tipo: "Visita",
      status: "cancelado",
      corretor: "Carlos Mendes",
      contato: "(11) 77777-7777",
      observacoes: "Verificar documentação do terreno"
    },
    {
      id: 4,
      cliente: "Pedro Henrique Lima",
      imovel: "Casa de Luxo - Morumbi",
      data: "2025-02-17",
      horario: "11:00",
      tipo: "Visita",
      status: "confirmado",
      corretor: "Fernanda Rodrigues",
      contato: "(11) 66666-6666",
      observacoes: "Cliente VIP - Atendimento especial"
    },
    {
      id: 5,
      cliente: "Fernanda Rodrigues",
      imovel: "Apartamento - Brooklin",
      data: "2025-02-18",
      horario: "15:30",
      tipo: "Reunião",
      status: "pendente",
      corretor: "Ana Paula",
      contato: "(11) 55555-5555",
      observacoes: "Apresentar proposta de financiamento"
    },
    {
      id: 6,
      cliente: "Carlos Eduardo Souza",
      imovel: "Comercial - Centro",
      data: "2025-02-19",
      horario: "09:00",
      tipo: "Visita",
      status: "confirmado",
      corretor: "Fernanda Rodrigues",
      contato: "(21) 44444-4444",
      observacoes: "Verificar vagas de garagem"
    },
    {
      id: 7,
      cliente: "Juliana Almeida",
      imovel: "Apartamento - Pinheiros",
      data: "2025-02-20",
      horario: "17:00",
      tipo: "Assinatura",
      status: "pendente",
      corretor: "Carlos Mendes",
      contato: "(31) 33333-3333",
      observacoes: "Levar 2 vias do contrato"
    }
  ]

  const getStatusBadge = (status: string) => {
    const styles = {
      "confirmado": "bg-success/20 text-success",
      "pendente": "bg-warning/20 text-warning",
      "cancelado": "bg-destructive/20 text-destructive",
      "realizado": "bg-primary/20 text-primary"
    }
    
    const labels = {
      "confirmado": "Confirmado",
      "pendente": "Pendente", 
      "cancelado": "Cancelado",
      "realizado": "Realizado"
    }

    const icons = {
      "confirmado": CheckCircle,
      "pendente": Clock,
      "cancelado": AlertCircle,
      "realizado": CheckCircle
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
      "Visita": "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
      "Assinatura": "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
      "Reunião": "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
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

  const sortedAndFilteredAgendamentos = [...agendamentos].filter(agendamento => {
    const matchesSearch = agendamento.cliente.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         agendamento.imovel.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         agendamento.contato.includes(searchTerm)
    
    const matchesFilter = filterStatus === "todos" || agendamento.status === filterStatus
    
    return matchesSearch && matchesFilter
  }).sort((a, b) => {
    if (!sortConfig) return 0
    
    if (sortConfig.key === 'data') {
      const dateA = new Date(`${a.data} ${a.horario}`)
      const dateB = new Date(`${b.data} ${b.horario}`)
      return sortConfig.direction === 'ascending' 
        ? dateA.getTime() - dateB.getTime() 
        : dateB.getTime() - dateA.getTime()
    }
    
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
        <Calendar className="h-8 w-8 text-primary" />
        <div>
          <h1 className="text-3xl font-bold">Gerenciamento de Agendamentos</h1>
          <p className="text-muted-foreground">
            Gerencie visitas, reuniões e assinaturas de contratos
          </p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="text-center">
              <p className="text-xl md:text-2xl font-bold text-primary">{agendamentos.length}</p>
              <p className="text-xs md:text-sm text-muted-foreground">Total de Agendamentos</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-center">
              <p className="text-xl md:text-2xl font-bold text-success">
                {agendamentos.filter(a => a.status === 'confirmado').length}
              </p>
              <p className="text-xs md:text-sm text-muted-foreground">Confirmados</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-center">
              <p className="text-xl md:text-2xl font-bold text-warning">
                {agendamentos.filter(a => a.status === 'pendente').length}
              </p>
              <p className="text-xs md:text-sm text-muted-foreground">Pendentes</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-center">
              <p className="text-xl md:text-2xl font-bold text-destructive">
                {agendamentos.filter(a => a.status === 'cancelado').length}
              </p>
              <p className="text-xs md:text-sm text-muted-foreground">Cancelados</p>
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
                  placeholder="Buscar por cliente, imóvel ou telefone..."
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
                  <SelectItem value="confirmado">Confirmado</SelectItem>
                  <SelectItem value="pendente">Pendente</SelectItem>
                  <SelectItem value="cancelado">Cancelado</SelectItem>
                  <SelectItem value="realizado">Realizado</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Dialog>
              <DialogTrigger asChild>
                <Button className="w-full md:w-auto">
                  <Plus className="h-4 w-4 mr-2" />
                  Novo Agendamento
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle>Cadastrar Novo Agendamento</DialogTitle>
                </DialogHeader>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-4">
                  {/* Coluna 1 - Informações Básicas */}
                  <div className="space-y-4 md:col-span-1">
                    <div className="space-y-2">
                      <Label htmlFor="cliente">Cliente *</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione" />
                        </SelectTrigger>
                        <SelectContent>
                          {agendamentos.map((agendamento) => (
                            <SelectItem key={agendamento.id} value={agendamento.cliente}>
                              {agendamento.cliente}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="imovel">Imóvel *</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione" />
                        </SelectTrigger>
                        <SelectContent>
                          {Array.from(new Set(agendamentos.map(a => a.imovel))).map((imovel, index) => (
                            <SelectItem key={index} value={imovel}>
                              {imovel}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="corretor">Corretor *</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione" />
                        </SelectTrigger>
                        <SelectContent>
                          {Array.from(new Set(agendamentos.map(a => a.corretor))).map((corretor, index) => (
                            <SelectItem key={index} value={corretor}>
                              {corretor}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Coluna 2 - Data/Horário */}
                  <div className="space-y-4 md:col-span-1">
                    <div className="space-y-2">
                      <Label>Data *</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className="w-full justify-start text-left font-normal"
                          >
                            <Calendar className="mr-2 h-4 w-4" />
                            {date ? format(date, "PPP", { locale: ptBR }) : <span>Selecione a data</span>}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <CalendarComponent
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            initialFocus
                            locale={ptBR}
                          />
                        </PopoverContent>
                      </Popover>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="horario">Horário *</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione" />
                        </SelectTrigger>
                        <SelectContent>
                          {['08:00', '09:00', '10:00', '11:00', '14:00', '15:00', '16:00', '17:00'].map((horario) => (
                            <SelectItem key={horario} value={horario}>
                              {horario}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="tipo">Tipo *</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Visita">Visita</SelectItem>
                          <SelectItem value="Assinatura">Assinatura</SelectItem>
                          <SelectItem value="Reunião">Reunião</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="status">Status *</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="confirmado">Confirmado</SelectItem>
                          <SelectItem value="pendente">Pendente</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Coluna 3 - Observações */}
                  <div className="space-y-4 md:col-span-1">
                    <div className="space-y-2 h-full">
                      <Label htmlFor="observacoes">Observações</Label>
                      <Textarea 
                        id="observacoes" 
                        placeholder="Informações relevantes sobre o agendamento..." 
                        className="h-[calc(100%-28px)] min-h-[200px]"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col-reverse md:flex-row justify-end gap-3 pt-4">
                  <Button variant="outline" className="w-full md:w-auto">Cancelar</Button>
                  <Button className="w-full md:w-auto">Salvar Agendamento</Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </CardContent>
      </Card>

      {/* Agendamentos Table */}
      <Card>
        <CardHeader>
          <CardTitle>Lista de Agendamentos ({sortedAndFilteredAgendamentos.length})</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <Table className="min-w-[900px] md:w-full">
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
                  <TableHead>Imóvel</TableHead>
                  <TableHead>
                    <Button 
                      variant="ghost" 
                      onClick={() => requestSort('data')}
                      className="p-0 hover:bg-transparent"
                    >
                      Data/Horário
                      {getSortIcon('data')}
                    </Button>
                  </TableHead>
                  <TableHead>Tipo</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Corretor</TableHead>
                  <TableHead>Ações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {sortedAndFilteredAgendamentos.map((agendamento) => (
                  <TableRow key={agendamento.id}>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarFallback>
                            {agendamento.cliente.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">{agendamento.cliente}</p>
                          <div className="flex items-center gap-1 text-xs md:text-sm text-muted-foreground">
                            <Phone className="h-3 w-3" />
                            {agendamento.contato}
                          </div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <p className="font-medium">{agendamento.imovel.split(' - ')[0]}</p>
                      <p className="text-xs md:text-sm text-muted-foreground">
                        {agendamento.imovel.split(' - ')[1]}
                      </p>
                    </TableCell>
                    <TableCell>
                      <p className="font-medium">
                        {format(new Date(agendamento.data), 'PPP', { locale: ptBR })}
                      </p>
                      <p className="text-xs md:text-sm text-muted-foreground">
                        {agendamento.horario}
                      </p>
                    </TableCell>
                    <TableCell>
                      {getTipoBadge(agendamento.tipo)}
                    </TableCell>
                    <TableCell>
                      {getStatusBadge(agendamento.status)}
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Avatar className="h-6 w-6">
                          <AvatarFallback>
                            {agendamento.corretor.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <span className="text-sm">{agendamento.corretor}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex gap-1 md:gap-2">
                        <Button variant="ghost" size="sm" title="Visualizar" className="h-8 w-8 p-0">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm" title="Editar" className="h-8 w-8 p-0">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm" title="Confirmar" className="h-8 w-8 p-0">
                          <CheckCircle className="h-4 w-4" />
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

export default Agendamentos