// pages/Welcome.tsx
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import {
  BadgeCheck,
  Home,
  Banknote,
  Handshake,
  ShieldCheck,
  Award,
  Clock,
  CheckCircle,
  ArrowRight
} from "lucide-react";

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-4 leading-tight">
            HOMEFINTECH - SUA PARCEIRA COMPLETA EM SOLUÇÕES IMOBILIÁRIAS
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-blue-700 mb-6 leading-relaxed">
            REALIZE SEU SONHO DA CASA PRÓPRIA COM AS MELHORES CONDIÇÕES DO MERCADO
          </h2>
        </div>
        
        <div className="flex justify-center mb-8">
          <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-white px-6 py-3 rounded-full flex items-center gap-2 shadow-lg">
            <BadgeCheck className="h-5 w-5" />
            <span className="font-bold">🏆 HÁ MAIS DE 15 ANOS TRANSFORMANDO SONHOS EM REALIDADE</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <StatCard 
            icon={<Home className="h-8 w-8 text-blue-600" />} 
            value="R$ 850 MILHÕES" 
            label="financiados em 2025" 
            color="bg-blue-100"
          />
          <StatCard 
            icon={<Banknote className="h-8 w-8 text-green-600" />} 
            value="98%" 
            label="taxa de aprovação" 
            color="bg-green-100"
          />
          <StatCard 
            icon={<Handshake className="h-8 w-8 text-purple-600" />} 
            value="R$ 320 MILHÕES" 
            label="em consórcios ativos" 
            color="bg-purple-100"
          />
        </div>

        <Button 
          size="lg" 
          className="text-lg px-8 py-6 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-xl transition-all hover:scale-105"
          onClick={() => navigate('/')}
        >
          <ArrowRight className="mr-2 h-5 w-5" />
          ACESSAR PLATAFORMA
        </Button>
      </div>

      {/* Features Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h3 className="text-3xl font-bold mb-4 text-blue-800">
              🏦 FINANCIAMENTO BANCÁRIO
            </h3>
            <p className="text-xl text-blue-700">
              SIMULADOR INTELIGENTE COM APROVAÇÃO RÁPIDA
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <FeatureCard 
              icon="🔍" 
              title="SIMULADOR GRATUITO" 
              description="Calcule sua parcela em tempo real" 
              color="bg-blue-50"
            />
            <FeatureCard 
              icon="⚡" 
              title="APROVAÇÃO EM 48H" 
              description="Processo 100% digital" 
              color="bg-green-50"
            />
            <FeatureCard 
              icon="📊" 
              title="COMPARATIVO AUTOMÁTICO" 
              description="Encontre a melhor taxa" 
              color="bg-purple-50"
            />
            <FeatureCard 
              icon="🏠" 
              title="ACOMPANHAMENTO TOTAL" 
              description="Do pedido às chaves" 
              color="bg-yellow-50"
            />
          </div>

          <h4 className="text-xl font-semibold mb-6 text-blue-700 text-center">
            NOSSOS PARCEIROS BANCÁRIOS EXCLUSIVOS:
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            <BankCard 
              name="BANCO DO BRASIL" 
              rate="8,99% ao ano" 
              term="420 meses" 
              features={["Financiamento até 90%", "Aprovação em até 48h"]}
              color="bg-blue-100"
              iconColor="text-blue-600"
            />
            <BankCard 
              name="CAIXA ECONÔMICA" 
              rate="9,25% ao ano" 
              term="360 meses" 
              features={["Casa Verde e Amarela", "Subsídios governamentais"]}
              color="bg-green-100"
              iconColor="text-green-600"
            />
            <BankCard 
              name="ITAÚ UNIBANCO" 
              rate="9,50% ao ano" 
              term="420 meses" 
              features={["Renda a partir de R$ 2.000", "Processo 100% digital"]}
              color="bg-orange-100"
              iconColor="text-orange-600"
            />
            <BankCard 
              name="BRADESCO" 
              rate="9,75% ao ano" 
              term="360 meses" 
              features={["Seguro habitacional incluso", "Cartão sem anuidade"]}
              color="bg-red-100"
              iconColor="text-red-600"
            />
            <BankCard 
              name="SANTANDER" 
              rate="10,10% ao ano" 
              term="420 meses" 
              features={["Conta corrente gratuita", "Assessoria especializada"]}
              color="bg-yellow-100"
              iconColor="text-yellow-600"
            />
          </div>
        </div>
      </div>

      {/* Consortium Section */}
      <div className="bg-gradient-to-b from-blue-100 to-blue-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h3 className="text-3xl font-bold mb-4 text-blue-800">
              🤝 CONSÓRCIOS IMOBILIÁRIOS
            </h3>
            <p className="text-xl text-blue-700">
              SISTEMA COMPLETO DE GESTÃO
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-blue-100">
              <h4 className="text-xl font-semibold mb-4 text-blue-700">
                NOSSA PLATAFORMA EXCLUSIVA OFERECE:
              </h4>
              <ul className="space-y-3">
                <FeatureListItem icon="📊" text="SIMULADOR DE CONSÓRCIOS - Compare todas as opções" />
                <FeatureListItem icon="🎯" text="ACOMPANHAMENTO DE LANCES - Sistema de notificações" />
                <FeatureListItem icon="📈" text="GESTÃO DE CONTEMPLAÇÕES - Controle total do processo" />
                <FeatureListItem icon="💰" text="CALCULADORA DE ECONOMIA - Veja quanto economiza vs financiamento" />
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-blue-100">
              <h4 className="text-xl font-semibold mb-4 text-blue-700">
                POR QUE ESCOLHER CONSÓRCIO?
              </h4>
              <ul className="space-y-3">
                <FeatureListItem icon="❌" text="SEM JUROS - Você paga apenas o valor do bem + taxa administrativa" />
                <FeatureListItem icon="💰" text="LANCE LIVRE - Acelere sua contemplação quando quiser" />
                <FeatureListItem icon="🎯" text="SORTEIOS MENSAIS - Chance de ser contemplado todo mês" />
                <FeatureListItem icon="📈" text="VALORIZAÇÃO - Seu dinheiro protegido da inflação" />
                <FeatureListItem icon="🔒" text="FLEXIBILIDADE - Parcelas que cabem no seu orçamento" />
              </ul>
            </div>
          </div>

          <h4 className="text-xl font-semibold mb-6 text-blue-700 text-center">
            NOSSOS CONSÓRCIOS EXCLUSIVOS:
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ConsortiumCard 
              name="CONSÓRCIO BB IMÓVEIS" 
              credit="R$ 300.000 a R$ 2.000.000" 
              term="180 meses" 
              rate="0,50% ao mês"
              participants="15.000+"
              color="bg-blue-50"
            />
            <ConsortiumCard 
              name="CONSÓRCIO CAIXA HABITAÇÃO" 
              credit="R$ 200.000 a R$ 2.000.000" 
              term="150 meses" 
              rate="0,55% ao mês"
              participants="12.500+"
              color="bg-green-50"
            />
            <ConsortiumCard 
              name="CONSÓRCIO ITAÚ CASA PRÓPRIA" 
              credit="R$ 250.000 a R$ 1.500.000" 
              term="160 meses" 
              rate="0,60% ao mês"
              participants="8.000+"
              color="bg-purple-50"
            />
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12 text-blue-800">
            💬 CASOS DE SUCESSO REAIS
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <TestimonialCard 
              quote="Consegui meu financiamento em apenas 2 dias com a HomeFintech. Taxa de 8,99% no BB, R$ 2.500 de parcela para um imóvel de R$ 650.000. Muito melhor que outros bancos!"
              author="Maria Silva Santos, São Paulo - Financiamento Aprovado"
              color="bg-blue-50"
            />
            <TestimonialCard 
              quote="Fui contemplada no consórcio BB em apenas 8 meses com lance livre. Economizei mais de R$ 80.000 em juros comparado ao financiamento. Valeu muito a pena!"
              author="João Carlos Oliveira, Rio de Janeiro - Consórcio Contemplado"
              color="bg-green-50"
            />
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-700 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold mb-6">
              PRONTO PARA REALIZAR O SONHO DA CASA PRÓPRIA?
            </h3>
            <p className="text-xl mb-8">
              Nossos especialistas estão prontos para te ajudar a encontrar a melhor solução.
            </p>
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 bg-gradient-to-r from-yellow-400 to-yellow-500 text-blue-900 hover:from-yellow-500 hover:to-yellow-600 shadow-xl transition-all hover:scale-105"
              onClick={() => navigate('/')}
            >
              <ArrowRight className="mr-2 h-5 w-5" />
              ACESSAR PLATAFORMA AGORA
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Componentes auxiliares
const StatCard = ({ icon, value, label, color }: { 
  icon: React.ReactNode, 
  value: string, 
  label: string,
  color: string
}) => (
  <div className={`${color} p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-all`}>
    <div className="flex justify-center mb-3">{icon}</div>
    <p className="text-2xl font-bold text-blue-800 mb-1">{value}</p>
    <p className="text-gray-600 uppercase text-sm font-medium">{label}</p>
  </div>
);

const FeatureCard = ({ icon, title, description, color }: { 
  icon: string, 
  title: string, 
  description: string,
  color: string
}) => (
  <div className={`${color} p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all h-full`}>
    <p className="text-3xl mb-3">{icon}</p>
    <h4 className="font-bold text-lg mb-2 text-blue-800">{title}</h4>
    <p className="text-gray-600">{description}</p>
  </div>
);

const BankCard = ({ name, rate, term, features, color, iconColor }: { 
  name: string, 
  rate: string, 
  term: string, 
  features: string[],
  color: string,
  iconColor: string
}) => (
  <div className={`${color} p-4 rounded-lg shadow-sm hover:shadow-md transition-all h-full`}>
    <h5 className="font-bold text-lg mb-2 text-blue-800">{name}</h5>
    <p className="text-sm mb-1"><span className="font-semibold">Taxa:</span> {rate}</p>
    <p className="text-sm mb-3"><span className="font-semibold">Prazo:</span> {term}</p>
    <ul className="space-y-1">
      {features.map((feature, i) => (
        <li key={i} className="text-xs flex items-start">
          <CheckCircle className={`h-3 w-3 mr-1 mt-0.5 flex-shrink-0 ${iconColor}`} />
          {feature}
        </li>
      ))}
    </ul>
  </div>
);

const FeatureListItem = ({ icon, text }: { icon: string, text: string }) => (
  <li className="flex items-start py-2 border-b border-gray-100 last:border-0">
    <span className="mr-3 text-xl">{icon}</span>
    <span className="text-gray-700">{text}</span>
  </li>
);

const ConsortiumCard = ({ name, credit, term, rate, participants, color }: { 
  name: string, 
  credit: string, 
  term: string, 
  rate: string,
  participants: string,
  color: string
}) => (
  <div className={`${color} p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-all h-full`}>
    <h5 className="font-bold text-lg mb-3 text-blue-800">{name}</h5>
    <div className="space-y-2">
      <p className="text-sm"><span className="font-semibold">Crédito:</span> {credit}</p>
      <p className="text-sm"><span className="font-semibold">Prazo:</span> {term}</p>
      <p className="text-sm"><span className="font-semibold">Taxa:</span> {rate}</p>
      <p className="text-sm"><span className="font-semibold">Participantes:</span> {participants}</p>
    </div>
  </div>
);

const TestimonialCard = ({ quote, author, color }: { 
  quote: string, 
  author: string,
  color: string
}) => (
  <div className={`${color} p-6 rounded-xl border border-blue-100 hover:shadow-md transition-all h-full`}>
    <p className="italic mb-4 text-gray-800">"{quote}"</p>
    <p className="font-semibold text-blue-800">— {author}</p>
  </div>
);

export default Welcome;