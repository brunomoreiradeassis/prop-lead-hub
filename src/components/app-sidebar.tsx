import * as React from "react"
import { NavLink, useLocation } from "react-router-dom"
import {
  Home,
  Users,
  Building2,
  CreditCard,
  FileText,
  BarChart3,
  Settings,
  HelpCircle,
  Building,
  List,
  IdCard,
  Star,
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  useSidebar,
} from "@/components/ui/sidebar"

const menuItems = [
  {
    title: "Início",
    url: "/inicio",
    icon: Home,
    description: "Visão geral do sistema"
  },
  {
    title: "Dashboard",
    url: "/relatorios",
    icon: BarChart3,
    description: "Análises e métricas"
  },
  {
    title: "Clientes",
    url: "/clientes",
    icon: Users,
    description: "Gerenciar clientes"
  },
  {
    title: "Agendamentos",
    url: "/agendamentos",
    icon: List,
    description: "Gerenciar agendamentos"
  },
  {
    title: "Imóveis",
    url: "/imoveis", 
    icon: Building2,
    description: "Cadastro de imóveis"
  },
  {
    title: "Consórcios",
    url: "/consorcios",
    icon: IdCard,
    description: "Gerenciamento de consórcios"
  },
  {
    title: "Financiamentos",
    url: "/financiamentos",
    icon: CreditCard,
    description: "Gerenciamento de financiamentos"
  },
  {
    title: "Contratos",
    url: "/contratos",
    icon: FileText,
    description: "Documentos e contratos"
  },
]

const bottomItems = [
  {
    title: "Configurações",
    url: "/configuracoes",
    icon: Settings,
  },
  {
    title: "Ajuda",
    url: "/ajuda",
    icon: HelpCircle,
  },
];

export function AppSidebar() {
  const { state } = useSidebar()
  const location = useLocation()
  const currentPath = location.pathname
  const isCollapsed = state === "collapsed"

  const isActive = (path: string) => {
    if (path === "/inicio") {
      return currentPath === "/inicio"
    }
    return currentPath.startsWith(path)
  }

  const getNavCls = (path: string) => {
    const active = isActive(path)
    return active 
      ? "bg-accent text-accent-foreground font-medium" 
      : "hover:bg-accent/50 transition-colors"
  }

  return (
    <Sidebar 
      className={isCollapsed ? "w-16" : "w-64"} 
      collapsible="icon"
    >
      <SidebarHeader className="border-b border-sidebar-border">
        <div className="flex items-center gap-2 px-4 py-3">
          <Building className="h-8 w-8 text-sidebar-primary" />
          {!isCollapsed && (
            <div>
              <h1 className="text-lg font-bold text-sidebar-foreground">HomeFintech</h1>
              <p className="text-sm text-sidebar-foreground/70">CRM Imobiliário</p>
            </div>
          )}
        </div>
      </SidebarHeader>

      <SidebarContent className="overflow-y-auto">
        <SidebarGroup>
          {!isCollapsed && <SidebarGroupLabel>Menu Principal</SidebarGroupLabel>}
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={item.url} 
                      end={item.url === "/"} 
                      className={`flex items-center gap-3 p-2 rounded-md ${getNavCls(item.url)}`}
                      title={isCollapsed ? item.description : undefined}
                    >
                      <item.icon className="h-4 w-4 flex-shrink-0" />
                      {!isCollapsed && <span className="truncate">{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup className="mt-auto">
          <SidebarGroupContent>
            <SidebarMenu>
              {bottomItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={item.url} 
                      className={`flex items-center gap-3 p-2 rounded-md ${getNavCls(item.url)}`}
                      title={isCollapsed ? item.title : undefined}
                    >
                      <item.icon className="h-4 w-4 flex-shrink-0" />
                      {!isCollapsed && <span className="truncate">{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}