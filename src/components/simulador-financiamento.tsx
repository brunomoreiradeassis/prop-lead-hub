// src/components/simulador-financiamento.tsx
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Calculator, Banknote, Clock, AlertCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface SimuladorFinanciamentoProps {
  variant?: "outline" | "default" | "ghost" | "link" | "secondary" | "destructive";
  className?: string;
  buttonLabel?: string;
}

export const SimuladorFinanciamento = ({ 
  variant = "outline", 
  className = "",
  buttonLabel = "Simular Financiamento"
}: SimuladorFinanciamentoProps) => {
  const [simulationData, setSimulationData] = useState({
    valorImovel: "",
    valorEntrada: "",
    prazo: "",
    banco: ""
  });

  const [resultado, setResultado] = useState<{
    valorFinanciado: number;
    parcela: number;
    taxa: number;
  } | null>(null);

  const bancos = [
    { nome: "Banco do Brasil", taxa: 8.99, prazoMax: 420 },
    { nome: "Caixa Econômica", taxa: 9.25, prazoMax: 360 },
    { nome: "Itaú", taxa: 9.50, prazoMax: 420 },
    { nome: "Bradesco", taxa: 9.75, prazoMax: 360 },
    { nome: "Santander", taxa: 10.10, prazoMax: 420 }
  ];

  const calcularParcela = (valor: number, taxa: number, prazo: number) => {
    const taxaMensal = taxa / 100 / 12;
    const parcela = (valor * taxaMensal * Math.pow(1 + taxaMensal, prazo)) / 
                   (Math.pow(1 + taxaMensal, prazo) - 1);
    return parcela;
  };

  const handleSimular = () => {
    if (!simulationData.valorImovel || !simulationData.valorEntrada || !simulationData.prazo || !simulationData.banco) {
      return;
    }

    const bancoSelecionado = bancos.find(b => b.nome === simulationData.banco);
    if (!bancoSelecionado) return;

    const valorFinanciado = Number(simulationData.valorImovel) - Number(simulationData.valorEntrada);
    const parcela = calcularParcela(
      valorFinanciado,
      bancoSelecionado.taxa,
      Number(simulationData.prazo)
    );

    setResultado({
      valorFinanciado,
      parcela,
      taxa: bancoSelecionado.taxa
    });
  };

  const resetarSimulacao = () => {
    setSimulationData({
      valorImovel: "",
      valorEntrada: "",
      prazo: "",
      banco: ""
    });
    setResultado(null);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={variant} className={`flex items-center gap-2 ${className}`}>
          <Calculator className="h-4 w-4" />
          {buttonLabel}
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Calculator className="h-5 w-5" />
            Simulador de Financiamento
          </DialogTitle>
        </DialogHeader>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-4">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="valorImovel">Valor do Imóvel (R$)</Label>
              <Input
                id="valorImovel"
                type="number"
                placeholder="Ex: 650000"
                value={simulationData.valorImovel}
                onChange={(e) => setSimulationData({...simulationData, valorImovel: e.target.value})}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="valorEntrada">Valor da Entrada (R$)</Label>
              <Input
                id="valorEntrada"
                type="number"
                placeholder="Ex: 130000"
                value={simulationData.valorEntrada}
                onChange={(e) => setSimulationData({...simulationData, valorEntrada: e.target.value})}
              />
            </div>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="prazo">Prazo (meses)</Label>
              <Select 
                value={simulationData.prazo} 
                onValueChange={(value) => setSimulationData({...simulationData, prazo: value})}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Selecione o prazo" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="120">120 meses (10 anos)</SelectItem>
                  <SelectItem value="180">180 meses (15 anos)</SelectItem>
                  <SelectItem value="240">240 meses (20 anos)</SelectItem>
                  <SelectItem value="300">300 meses (25 anos)</SelectItem>
                  <SelectItem value="360">360 meses (30 anos)</SelectItem>
                  <SelectItem value="420">420 meses (35 anos)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="banco">Banco</Label>
              <Select 
                value={simulationData.banco} 
                onValueChange={(value) => setSimulationData({...simulationData, banco: value})}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Selecione o banco" />
                </SelectTrigger>
                <SelectContent>
                  {bancos.map((banco) => (
                    <SelectItem key={banco.nome} value={banco.nome}>
                      <div className="flex items-center gap-2">
                        <Banknote className="h-4 w-4" />
                        {banco.nome} - {banco.taxa}% a.a.
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {resultado && (
          <div className="mt-4 p-6 bg-secondary/20 rounded-lg border border-secondary">
            <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-primary" />
              Resultado da Simulação
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Valor Financiado</p>
                <p className="text-xl font-bold">
                  R$ {resultado.valorFinanciado.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                </p>
              </div>
              
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Parcela Mensal</p>
                <p className="text-xl font-bold text-primary">
                  R$ {resultado.parcela.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                </p>
              </div>
              
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Condições</p>
                <div className="flex gap-2">
                  <Badge variant="secondary" className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {simulationData.prazo} meses
                  </Badge>
                  <Badge variant="secondary">
                    {resultado.taxa}% a.a.
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="flex justify-between mt-6">
          <Button variant="outline" onClick={resetarSimulacao}>
            Limpar
          </Button>
          <Button onClick={handleSimular}>
            Simular
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};