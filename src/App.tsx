import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import { DashboardLayout } from "@/components/dashboard-layout";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Clientes from "./pages/Clientes";
import Agendamentos from "./pages/Agendamentos";
import Imoveis from "./pages/Imoveis";
import Consorcios from "./pages/Consorcios";
import Financiamentos from "./pages/Financiamentos";
import Contratos from "./pages/Contratos";
import Relatorios from "./pages/Relatorios";
import Configuracoes from "./pages/Configuracoes";
import Ajuda from "./pages/Ajuda";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem
      disableTransitionOnChange
    >
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/inicio" element={
              <DashboardLayout>
                <Index />
              </DashboardLayout>
            } />
            <Route path="/clientes" element={
              <DashboardLayout>
                <Clientes />
              </DashboardLayout>
            } />
            <Route path="/agendamentos" element={
              <DashboardLayout>
                <Agendamentos />
              </DashboardLayout>
            } />
            <Route path="/imoveis" element={
              <DashboardLayout>
                <Imoveis />
              </DashboardLayout>
            } />
            <Route path="/consorcios" element={
              <DashboardLayout>
                <Consorcios />
              </DashboardLayout>
            } />
            <Route path="/financiamentos" element={
              <DashboardLayout>
                <Financiamentos />
              </DashboardLayout>
            } />
            <Route path="/contratos" element={
              <DashboardLayout>
                <Contratos />
              </DashboardLayout>
            } />
            <Route path="/relatorios" element={
              <DashboardLayout>
                <Relatorios />
              </DashboardLayout>
            } />
            <Route path="/configuracoes" element={
              <DashboardLayout>
                <Configuracoes />
              </DashboardLayout>
            } />
            <Route path="/ajuda" element={
              <DashboardLayout>
                <Ajuda />
              </DashboardLayout>
            } />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;