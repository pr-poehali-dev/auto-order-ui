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
  SidebarFooter,
} from "@/components/ui/sidebar";
import Icon from "@/components/ui/icon";
import { useLocation, useNavigate } from "react-router-dom";

const menuItems = [
  {
    title: "Дашборд",
    icon: "LayoutDashboard",
    path: "/"
  },
  {
    title: "Рекомендации",
    icon: "ClipboardCheck",
    path: "/recommendations"
  },
  {
    title: "Заказы",
    icon: "ShoppingCart",
    path: "/orders"
  },
  {
    title: "Аналитика",
    icon: "BarChart3",
    path: "/analytics"
  },
  {
    title: "Поставщики",
    icon: "TruckIcon",
    path: "/suppliers"
  },
  {
    title: "SKU Управление",
    icon: "Package",
    path: "/sku"
  }
];

const settingsItems = [
  {
    title: "Настройки",
    icon: "Settings",
    path: "/settings"
  },
  {
    title: "Помощь",
    icon: "HelpCircle",
    path: "/help"
  }
];

export function AppSidebar() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <Sidebar>
      <SidebarHeader className="border-b border-sidebar-border p-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
            <Icon name="Zap" size={24} className="text-primary-foreground" />
          </div>
          <div>
            <h2 className="font-bold text-lg">Автозаказ РЦ</h2>
            <p className="text-xs text-muted-foreground">v2.1.0</p>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Основные</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.path}>
                  <SidebarMenuButton
                    onClick={() => navigate(item.path)}
                    isActive={location.pathname === item.path}
                    className="w-full"
                  >
                    <Icon name={item.icon as any} size={18} />
                    <span>{item.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Система</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {settingsItems.map((item) => (
                <SidebarMenuItem key={item.path}>
                  <SidebarMenuButton
                    onClick={() => navigate(item.path)}
                    isActive={location.pathname === item.path}
                    className="w-full"
                  >
                    <Icon name={item.icon as any} size={18} />
                    <span>{item.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t border-sidebar-border p-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
            <Icon name="User" size={16} className="text-primary" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium truncate">Менеджер РЦ</p>
            <p className="text-xs text-muted-foreground">Центральный склад</p>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
