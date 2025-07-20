import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Building2, Users, Calendar, BarChart3, Eye, EyeOff, UserPlus, LogIn } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

const Login = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loginEmail, setLoginEmail] = useState("")
  const [loginPassword, setLoginPassword] = useState("")
  const navigate = useNavigate()
  const { toast } = useToast()

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (loginEmail === "admin123@gmail.com" && loginPassword === "admin@123") {
      toast({
        title: "Login realizado com sucesso!",
        description: "Bem-vindo ao HomeFintech CRM",
      })
      navigate("/inicio")
    } else {
      toast({
        title: "Erro no login",
        description: "Email ou senha incorretos",
        variant: "destructive"
      })
    }
  }

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault()
    toast({
      title: "Cadastro realizado!",
      description: "Agora você pode fazer login",
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 via-background to-secondary/10 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left Side - Branding */}
        <div className="text-center lg:text-left space-y-6">
          <div className="flex items-center justify-center lg:justify-start gap-3">
            <img 
              src="/favicon.ico" 
              alt="Logo" 
              className="h-16 w-16 text-primary" 
            />
            <div>
              <h1 className="text-4xl font-bold text-foreground">HomeFintech</h1>
              <p className="text-xl text-muted-foreground">CRM Imobiliário</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Transforme seu negócio imobiliário</h2>
            <p className="text-lg text-muted-foreground">
              Gerencie clientes, imóveis, agendamentos, consórcios e financiamentos em uma única plataforma.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <div className="flex items-center gap-3 p-4 rounded-lg bg-card border">
                <Users className="h-8 w-8 text-primary" />
                <div>
                  <h3 className="font-medium">Gestão de Clientes</h3>
                  <p className="text-sm text-muted-foreground">Cadastro completo</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-4 rounded-lg bg-card border">
                <Building2 className="h-8 w-8 text-primary" />
                <div>
                  <h3 className="font-medium">Portfólio de Imóveis</h3>
                  <p className="text-sm text-muted-foreground">Organização total</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-4 rounded-lg bg-card border">
                <Calendar className="h-8 w-8 text-primary" />
                <div>
                  <h3 className="font-medium">Agendamentos</h3>
                  <p className="text-sm text-muted-foreground">Nunca perca um compromisso</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-4 rounded-lg bg-card border">
                <BarChart3 className="h-8 w-8 text-primary" />
                <div>
                  <h3 className="font-medium">Relatórios</h3>
                  <p className="text-sm text-muted-foreground">Análises detalhadas</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Login/Register Form */}
        <Card className="w-full max-w-md mx-auto">
          <CardHeader className="text-center">
            <CardTitle>Acesse sua conta</CardTitle>
            <CardDescription>
              Entre com suas credenciais ou crie uma nova conta
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="login" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="login" className="flex items-center gap-2">
                  <LogIn className="h-4 w-4" />
                  Login
                </TabsTrigger>
                <TabsTrigger value="register" className="flex items-center gap-2">
                  <UserPlus className="h-4 w-4" />
                  Cadastro
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="login" className="space-y-4">
                <form onSubmit={handleLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="loginEmail">Email</Label>
                    <Input
                      id="loginEmail"
                      type="email"
                      placeholder="seu@email.com"
                      value={loginEmail}
                      onChange={(e) => setLoginEmail(e.target.value)}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="loginPassword">Senha</Label>
                    <div className="relative">
                      <Input
                        id="loginPassword"
                        type={showPassword ? "text" : "password"}
                        placeholder="Sua senha"
                        value={loginPassword}
                        onChange={(e) => setLoginPassword(e.target.value)}
                        required
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <EyeOff className="h-4 w-4" />
                        ) : (
                          <Eye className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                  </div>
                  
                  <Button type="submit" className="w-full">
                    <LogIn className="h-4 w-4 mr-2" />
                    Entrar
                  </Button>
                  
                  <div className="text-center mt-4">
                    <p className="text-sm text-muted-foreground">
                      Email de teste: <strong>admin123@gmail.com</strong>
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Senha de teste: <strong>admin@123</strong>
                    </p>
                  </div>
                </form>
              </TabsContent>
              
              <TabsContent value="register" className="space-y-4">
                <form onSubmit={handleRegister} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">Nome</Label>
                      <Input
                        id="firstName"
                        placeholder="Seu nome"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Sobrenome</Label>
                      <Input
                        id="lastName"
                        placeholder="Seu sobrenome"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="registerEmail">Email</Label>
                    <Input
                      id="registerEmail"
                      type="email"
                      placeholder="seu@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="registerPassword">Senha</Label>
                    <div className="relative">
                      <Input
                        id="registerPassword"
                        type={showPassword ? "text" : "password"}
                        placeholder="Crie uma senha segura"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <EyeOff className="h-4 w-4" />
                        ) : (
                          <Eye className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="company">Empresa (Opcional)</Label>
                    <Input
                      id="company"
                      placeholder="Nome da sua imobiliária"
                    />
                  </div>
                  
                  <Button type="submit" className="w-full">
                    <UserPlus className="h-4 w-4 mr-2" />
                    Criar Conta
                  </Button>
                </form>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Login