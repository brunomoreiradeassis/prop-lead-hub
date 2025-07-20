import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Settings,
  User,
  Bell,
  Shield,
  Database,
  Palette,
  Globe,
  Save,
  Key
} from "lucide-react"

const Configuracoes = () => {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center gap-3">
        <Settings className="h-8 w-8 text-primary" />
        <div>
          <h1 className="text-3xl font-bold">Configurações</h1>
          <p className="text-muted-foreground">
            Gerencie as configurações do sistema
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Perfil do Usuário */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="h-5 w-5" />
              Perfil do Usuário
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="nome">Nome Completo</Label>
                <Input id="nome" defaultValue="Bruno Moreira de Assis" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">E-mail</Label>
                <Input id="email" type="email" defaultValue="brunomoreira640493@gmail.com" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="telefone">Telefone</Label>
                <Input id="telefone" defaultValue="(62) 99304-6419" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="creci">CRECI</Label>
                <Input id="creci" defaultValue="GO-123456" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="empresa">Empresa/Imobiliária</Label>
              <Input id="empresa" defaultValue="HomeFintech" />
            </div>
            <Button>
              <Save className="h-4 w-4 mr-2" />
              Salvar Perfil
            </Button>
          </CardContent>
        </Card>

        {/* Segurança */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              Segurança
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="senha-atual">Senha Atual</Label>
              <Input id="senha-atual" type="password" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="nova-senha">Nova Senha</Label>
              <Input id="nova-senha" type="password" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirmar-senha">Confirmar Senha</Label>
              <Input id="confirmar-senha" type="password" />
            </div>
            <Button className="w-full">
              <Key className="h-4 w-4 mr-2" />
              Alterar Senha
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Notificações */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Bell className="h-5 w-5" />
            Preferências de Notificação
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="font-medium">E-mail</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <Label htmlFor="email-cliente">Novos clientes</Label>
                  <Switch id="email-cliente" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="email-financiamento">Aprovações de financiamento</Label>
                  <Switch id="email-financiamento" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="email-documento">Documentos pendentes</Label>
                  <Switch id="email-documento" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="email-relatorio">Relatórios semanais</Label>
                  <Switch id="email-relatorio" />
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="font-medium">Push/SMS</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <Label htmlFor="push-urgente">Notificações urgentes</Label>
                  <Switch id="push-urgente" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="push-lembrete">Lembretes de reunião</Label>
                  <Switch id="push-lembrete" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="push-marketing">Marketing e promoções</Label>
                  <Switch id="push-marketing" />
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Configurações do Sistema */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Palette className="h-5 w-5" />
              Aparência
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="tema">Tema</Label>
              <Select defaultValue="system">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Claro</SelectItem>
                  <SelectItem value="dark">Escuro</SelectItem>
                  <SelectItem value="system">Sistema</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="idioma">Idioma</Label>
              <Select defaultValue="pt-br">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pt-br">Português (Brasil)</SelectItem>
                  <SelectItem value="en">English</SelectItem>
                  <SelectItem value="es">Español</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="fuso">Fuso Horário</Label>
              <Select defaultValue="brasilia">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="brasilia">Brasília (GMT-3)</SelectItem>
                  <SelectItem value="sao-paulo">São Paulo (GMT-3)</SelectItem>
                  <SelectItem value="manaus">Manaus (GMT-4)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Database className="h-5 w-5" />
              Backup e Dados
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <Label>Backup Automático</Label>
                <p className="text-sm text-muted-foreground">
                  Backup diário dos dados
                </p>
              </div>
              <Switch defaultChecked />
            </div>
            <Separator />
            <div className="space-y-2">
              <Label>Último Backup</Label>
              <p className="text-sm text-muted-foreground">
                19/01/2025 às 03:00
              </p>
            </div>
            <Button variant="outline" className="w-full">
              Fazer Backup Agora
            </Button>
            <Button variant="outline" className="w-full">
              Exportar Dados
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Configuracoes