import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  HelpCircle,
  Search,
  Book,
  Video,
  MessageSquare,
  Phone,
  Mail,
  ExternalLink
} from "lucide-react"

const Ajuda = () => {
  const faqCategories = [
    {
      title: "Primeiros Passos",
      questions: [
        {
          question: "Como cadastrar meu primeiro cliente?",
          answer: "Para cadastrar um cliente, vá até a seção 'Clientes' e clique em 'Novo Cliente'. Preencha as informações básicas como nome, CPF, e-mail, telefone e renda mensal. Você também pode adicionar observações e o perfil financeiro do cliente."
        },
        {
          question: "Como adicionar um novo imóvel?",
          answer: "Na seção 'Imóveis', clique em 'Novo Imóvel'. Preencha o endereço completo, características (quartos, banheiros, vagas), área, valor e faça upload das fotos. Certifique-se de incluir uma descrição detalhada para atrair mais interessados."
        },
        {
          question: "Como usar o simulador de financiamento?",
          answer: "Acesse 'Financiamentos' e clique em 'Simulador'. Insira o valor do imóvel, valor da entrada, prazo desejado e selecione o banco. O sistema calculará automaticamente a parcela estimada e você poderá solicitar aprovação diretamente."
        }
      ]
    },
    {
      title: "Financiamentos",
      questions: [
        {
          question: "Quais bancos são parceiros?",
          answer: "Trabalhamos com os principais bancos do mercado: Banco do Brasil, Caixa Econômica Federal, Itaú, Bradesco e Santander. Cada banco tem diferentes taxas e condições, permitindo encontrar a melhor opção para cada cliente."
        },
        {
          question: "Como acompanhar o status de aprovação?",
          answer: "Na seção 'Financiamentos', você pode ver o progresso de cada solicitação. Os status incluem: Pendente (documentação), Em Análise (banco analisando), Aprovado (liberado) e Recusado. Você receberá notificações sobre mudanças de status."
        },
        {
          question: "Quanto tempo demora a aprovação?",
          answer: "O tempo varia por banco e complexidade do caso. Em média: Caixa (15-30 dias), Banco do Brasil (20-35 dias), bancos privados (10-25 dias). Documentação completa acelera o processo."
        }
      ]
    },
    {
      title: "Contratos e Documentos",
      questions: [
        {
          question: "Como gerar um contrato?",
          answer: "Na seção 'Contratos', clique em 'Novo Contrato'. Selecione o cliente, imóvel, tipo de contrato (compra/venda, financiamento, locação) e o valor. O sistema gerará automaticamente o contrato baseado nos modelos pré-definidos."
        },
        {
          question: "Quais documentos são necessários?",
          answer: "Para financiamento: RG, CPF, comprovante de renda (3 últimos holerites), IR, certidões negativas. Para o imóvel: matrícula, IPTU, certidões cartório. Todos podem ser anexados digitalmente no sistema."
        },
        {
          question: "Como assinar digitalmente?",
          answer: "O sistema suporta assinatura digital certificada. Após gerar o contrato, envie para as partes via e-mail. Elas podem assinar usando certificado digital A1/A3 ou token ICP-Brasil diretamente na plataforma."
        }
      ]
    },
    {
      title: "Relatórios",
      questions: [
        {
          question: "Como exportar relatórios?",
          answer: "Na seção 'Relatórios', escolha o período desejado e clique em 'Exportar'. Você pode baixar em PDF (para apresentações) ou Excel (para análises). Os relatórios incluem vendas, comissões, conversão e performance."
        },
        {
          question: "Como interpretar as métricas?",
          answer: "Taxa de conversão = vendas/leads totais. Ticket médio = valor total vendas/número vendas. ROI marketing = (receita - investimento)/investimento. Tempo médio mercado = dias desde cadastro até venda do imóvel."
        }
      ]
    }
  ]

  const quickLinks = [
    {
      title: "Tutorial Completo",
      description: "Guia passo a passo para usar o sistema",
      icon: Book,
      link: "#"
    },
    {
      title: "Vídeo Aulas",
      description: "Aprenda com nossos vídeos tutoriais",
      icon: Video,
      link: "#"
    },
    {
      title: "API Documentation",
      description: "Documentação técnica para desenvolvedores",
      icon: ExternalLink,
      link: "#"
    }
  ]

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center gap-3">
        <HelpCircle className="h-8 w-8 text-primary" />
        <div>
          <h1 className="text-3xl font-bold">Central de Ajuda</h1>
          <p className="text-muted-foreground">
            Encontre respostas para suas dúvidas
          </p>
        </div>
      </div>

      {/* Search */}
      <Card>
        <CardContent className="p-6">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Pesquisar na central de ajuda..."
              className="pl-10"
            />
          </div>
        </CardContent>
      </Card>

      {/* Quick Links */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {quickLinks.map((link, index) => (
          <Card key={index} className="hover:shadow-medium transition-shadow cursor-pointer">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <link.icon className="h-8 w-8 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">{link.title}</h3>
                  <p className="text-sm text-muted-foreground">{link.description}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* FAQ Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-6">
          {faqCategories.slice(0, 2).map((category, categoryIndex) => (
            <Card key={categoryIndex}>
              <CardHeader>
                <CardTitle>{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible>
                  {category.questions.map((item, index) => (
                    <AccordionItem key={index} value={`item-${categoryIndex}-${index}`}>
                      <AccordionTrigger className="text-left">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-sm text-muted-foreground">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="space-y-6">
          {faqCategories.slice(2).map((category, categoryIndex) => (
            <Card key={categoryIndex + 2}>
              <CardHeader>
                <CardTitle>{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible>
                  {category.questions.map((item, index) => (
                    <AccordionItem key={index} value={`item-${categoryIndex + 2}-${index}`}>
                      <AccordionTrigger className="text-left">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-sm text-muted-foreground">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Contact Support */}
      <Card>
        <CardHeader>
          <CardTitle>Ainda precisa de ajuda?</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center gap-3 p-4 border rounded-lg">
              <MessageSquare className="h-6 w-6 text-primary" />
              <div>
                <h3 className="font-medium">Chat Online</h3>
                <p className="text-sm text-muted-foreground">Seg-Sex, 8h-18h</p>
                <Button variant="outline" size="sm" className="mt-2">
                  Iniciar Chat
                </Button>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 border rounded-lg">
              <Phone className="h-6 w-6 text-primary" />
              <div>
                <h3 className="font-medium">Telefone</h3>
                <p className="text-sm text-muted-foreground">(11) 3000-0000</p>
                <Badge variant="outline" className="mt-2">
                  Seg-Sex, 8h-18h
                </Badge>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 border rounded-lg">
              <Mail className="h-6 w-6 text-primary" />
              <div>
                <h3 className="font-medium">E-mail</h3>
                <p className="text-sm text-muted-foreground">suporte@financeimo.com</p>
                <Badge variant="outline" className="mt-2">
                  Resposta em 24h
                </Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* System Status */}
      <Card>
        <CardHeader>
          <CardTitle>Status do Sistema</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span>Plataforma Principal</span>
              <Badge className="bg-success/20 text-success">
                Operacional
              </Badge>
            </div>
            <div className="flex items-center justify-between">
              <span>Integração Bancária</span>
              <Badge className="bg-success/20 text-success">
                Operacional
              </Badge>
            </div>
            <div className="flex items-center justify-between">
              <span>API de Assinatura Digital</span>
              <Badge className="bg-success/20 text-success">
                Operacional
              </Badge>
            </div>
            <div className="flex items-center justify-between">
              <span>Backup Automático</span>
              <Badge className="bg-success/20 text-success">
                Operacional
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default Ajuda