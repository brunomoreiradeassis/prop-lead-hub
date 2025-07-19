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
  Building2,
  Plus,
  Search,
  Filter,
  MapPin,
  Edit,
  Eye,
  Camera,
  Upload
} from "lucide-react"

const Imoveis = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [filterStatus, setFilterStatus] = useState("todos")

  const imoveis = [
    {
      id: 1,
      endereco: "Rua das Flores, 123 - Jardins",
      cidade: "São Paulo",
      tipo: "Apartamento",
      quartos: 3,
      banheiros: 2,
      vagas: 2,
      area: 85,
      valor: 650000,
      status: "disponivel",
      proprietario: "Maria Silva",
      fotos: 8
    },
    {
      id: 2,
      endereco: "Av. Paulista, 1000 - Bela Vista",
      cidade: "São Paulo",
      tipo: "Cobertura",
      quartos: 4,
      banheiros: 3,
      vagas: 3,
      area: 120,
      valor: 1200000,
      status: "negociacao",
      proprietario: "João Santos",
      fotos: 12
    },
    {
      id: 3,
      endereco: "Rua Ipanema, 45 - Copacabana",
      cidade: "Rio de Janeiro",
      tipo: "Apartamento",
      quartos: 2,
      banheiros: 1,
      vagas: 1,
      area: 65,
      valor: 850000,
      status: "vendido",
      proprietario: "Ana Costa",
      fotos: 6
    },
    {
      id: 4,
      endereco: "Rua das Palmeiras, 78 - Savassi",
      cidade: "Belo Horizonte",
      tipo: "Casa",
      quartos: 4,
      banheiros: 3,
      vagas: 4,
      area: 180,
      valor: 520000,
      status: "disponivel",
      proprietario: "Pedro Lima",
      fotos: 15
    },
    {
      id: 5,
      endereco: "Quadra 102, Casa 15 - Asa Norte",
      cidade: "Brasília",
      tipo: "Casa",
      quartos: 3,
      banheiros: 2,
      vagas: 2,
      area: 150,
      valor: 480000,
      status: "financiado",
      proprietario: "Fernanda Rodrigues",
      fotos: 10
    }
  ]

  const getStatusBadge = (status: string) => {
    const styles = {
      "disponivel": "bg-success/20 text-success",
      "negociacao": "bg-warning/20 text-warning",
      "vendido": "bg-primary/20 text-primary",
      "financiado": "bg-destructive/20 text-destructive"
    }
    
    const labels = {
      "disponivel": "Disponível",
      "negociacao": "Em Negociação",
      "vendido": "Vendido",
      "financiado": "Financiado"
    }

    return (
      <Badge className={styles[status as keyof typeof styles]}>
        {labels[status as keyof typeof labels]}
      </Badge>
    )
  }

  const filteredImoveis = imoveis.filter(imovel => {
    const matchesSearch = imovel.endereco.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         imovel.cidade.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         imovel.tipo.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesFilter = filterStatus === "todos" || imovel.status === filterStatus
    
    return matchesSearch && matchesFilter
  })

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Building2 className="h-8 w-8 text-primary" />
          <div>
            <h1 className="text-3xl font-bold">Cadastro de Imóveis</h1>
            <p className="text-muted-foreground">
              Gerencie seu portfólio de imóveis
            </p>
          </div>
        </div>
        
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Novo Imóvel
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Cadastrar Novo Imóvel</DialogTitle>
            </DialogHeader>
            <div className="grid grid-cols-2 gap-4 py-4">
              <div className="col-span-2 space-y-2">
                <Label htmlFor="endereco">Endereço Completo</Label>
                <Input id="endereco" placeholder="Rua, número, bairro" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="cidade">Cidade</Label>
                <Input id="cidade" placeholder="São Paulo" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="tipo">Tipo de Imóvel</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione o tipo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="apartamento">Apartamento</SelectItem>
                    <SelectItem value="casa">Casa</SelectItem>
                    <SelectItem value="cobertura">Cobertura</SelectItem>
                    <SelectItem value="terreno">Terreno</SelectItem>
                    <SelectItem value="comercial">Comercial</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="quartos">Quartos</Label>
                <Input id="quartos" type="number" placeholder="3" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="banheiros">Banheiros</Label>
                <Input id="banheiros" type="number" placeholder="2" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="vagas">Vagas de Garagem</Label>
                <Input id="vagas" type="number" placeholder="2" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="area">Área (m²)</Label>
                <Input id="area" type="number" placeholder="85" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="valor">Valor (R$)</Label>
                <Input id="valor" type="number" placeholder="650000" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="proprietario">Proprietário</Label>
                <Input id="proprietario" placeholder="Nome do proprietário" />
              </div>
              <div className="col-span-2 space-y-2">
                <Label htmlFor="descricao">Descrição</Label>
                <Textarea id="descricao" placeholder="Descrição detalhada do imóvel..." />
              </div>
              <div className="col-span-2 space-y-2">
                <Label>Fotos do Imóvel</Label>
                <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center">
                  <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                  <p className="text-sm text-muted-foreground">
                    Clique para fazer upload ou arraste as fotos aqui
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-end gap-3">
              <Button variant="outline">Cancelar</Button>
              <Button>Salvar Imóvel</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-primary">89</p>
              <p className="text-sm text-muted-foreground">Total de Imóveis</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-success">62</p>
              <p className="text-sm text-muted-foreground">Disponíveis</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-warning">15</p>
              <p className="text-sm text-muted-foreground">Em Negociação</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-destructive">12</p>
              <p className="text-sm text-muted-foreground">Vendidos</p>
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
                  placeholder="Buscar por endereço, cidade ou tipo..."
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
                  <SelectItem value="disponivel">Disponível</SelectItem>
                  <SelectItem value="negociacao">Em Negociação</SelectItem>
                  <SelectItem value="vendido">Vendido</SelectItem>
                  <SelectItem value="financiado">Financiado</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Properties Grid/Table */}
      <Card>
        <CardHeader>
          <CardTitle>Portfólio de Imóveis ({filteredImoveis.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Imóvel</TableHead>
                <TableHead>Características</TableHead>
                <TableHead>Valor</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Proprietário</TableHead>
                <TableHead>Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredImoveis.map((imovel) => (
                <TableRow key={imovel.id}>
                  <TableCell>
                    <div>
                      <p className="font-medium">{imovel.endereco}</p>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <MapPin className="h-3 w-3" />
                        {imovel.cidade}
                      </div>
                      <p className="text-sm text-muted-foreground">{imovel.tipo}</p>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="space-y-1 text-sm">
                      <p>{imovel.quartos} quartos • {imovel.banheiros} banheiros</p>
                      <p>{imovel.vagas} vagas • {imovel.area}m²</p>
                      <div className="flex items-center gap-1">
                        <Camera className="h-3 w-3" />
                        {imovel.fotos} fotos
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <p className="font-bold text-lg">
                      R$ {imovel.valor.toLocaleString('pt-BR')}
                    </p>
                  </TableCell>
                  <TableCell>
                    {getStatusBadge(imovel.status)}
                  </TableCell>
                  <TableCell>
                    <p className="text-sm">{imovel.proprietario}</p>
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
                        <Camera className="h-4 w-4" />
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

export default Imoveis