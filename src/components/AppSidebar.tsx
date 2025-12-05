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
    title: "Рабочий стол проверки",
    icon: "ClipboardCheck",
    path: "/workspace"
  },
  {
    title: "Детали SKU",
    icon: "Search",
    path: "/sku-details"
  },
  {
    title: "Журнал заказов",
    icon: "FileText",
    path: "/orders"
  },
  {
    title: "Настройки",
    icon: "Settings",
    path: "/settings"
  }
];

export function AppSidebar() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <Sidebar>
      <SidebarHeader className="border-b border-sidebar-border p-6">
        <button 
          onClick={() => navigate('/')}
          className="flex items-center gap-3 w-full text-left hover:opacity-80 transition-opacity"
        >
          <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
            <Icon name="Package" size={24} className="text-primary-foreground" />
          </div>
          <div>
            <h2 className="font-bold text-lg text-sidebar-foreground">Автозаказ РЦ</h2>
            <p className="text-xs text-sidebar-foreground/60">Система автозаказа</p>
          </div>
        </button>
      </SidebarHeader>

      <SidebarContent className="px-3 py-4">
        <SidebarMenu>
          {menuItems.map((item) => (
            <SidebarMenuItem key={item.path}>
              <SidebarMenuButton
                onClick={() => navigate(item.path)}
                isActive={location.pathname === item.path}
                className="w-full py-3 px-4 rounded-lg transition-colors hover:bg-sidebar-accent data-[active=true]:bg-primary data-[active=true]:text-primary-foreground"
              >
                <Icon name={item.icon as any} size={20} />
                <span className="font-medium">{item.title}</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>

      <SidebarFooter className="border-t border-sidebar-border p-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-sidebar-accent flex items-center justify-center">
            <Icon name="User" size={20} className="text-sidebar-foreground" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium truncate text-sidebar-foreground">Иван Петров</p>
            <p className="text-xs text-sidebar-foreground/60">Администратор</p>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}