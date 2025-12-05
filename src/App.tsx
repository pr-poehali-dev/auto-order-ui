
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import Index from "./pages/Index";
import Recommendations from "./pages/Recommendations";
import Orders from "./pages/Orders";
import NotFound from "./pages/NotFound";
import Icon from "@/components/ui/icon";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <SidebarProvider defaultOpen>
          <AppSidebar />
          <SidebarInset>
            <header className="sticky top-0 z-10 flex h-16 items-center justify-between gap-4 border-b bg-card px-6">
              <SidebarTrigger />
              <div className="flex items-center gap-4">
                <button className="relative p-2 hover:bg-muted rounded-lg transition-colors">
                  <Icon name="Bell" size={20} />
                  <span className="absolute top-1 right-1 w-2 h-2 bg-destructive rounded-full"></span>
                </button>
                <div className="flex items-center gap-3 pl-4 border-l">
                  <div className="text-right">
                    <p className="text-sm font-medium">Иван Петров</p>
                    <p className="text-xs text-muted-foreground">Администратор</p>
                  </div>
                  <button className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors">
                    <Icon name="User" size={20} className="text-primary" />
                  </button>
                </div>
              </div>
            </header>
            <main className="flex-1 p-6 bg-background">
              <Routes>
                <Route path="/" element={<Orders />} />
                <Route path="/orders" element={<Orders />} />
                <Route path="/recommendations" element={<Recommendations />} />
                <Route path="/receiving" element={<div className="text-center py-12 text-muted-foreground"><p className="text-xl">Модуль "Приёмка" в разработке</p></div>} />
                <Route path="/warehouse" element={<div className="text-center py-12 text-muted-foreground"><p className="text-xl">Модуль "Склад" в разработке</p></div>} />
                <Route path="/writeoffs" element={<div className="text-center py-12 text-muted-foreground"><p className="text-xl">Модуль "Списания" в разработке</p></div>} />
                <Route path="/calendar" element={<div className="text-center py-12 text-muted-foreground"><p className="text-xl">Модуль "Календарь" в разработке</p></div>} />
                <Route path="/references" element={<div className="text-center py-12 text-muted-foreground"><p className="text-xl">Модуль "Справочники" в разработке</p></div>} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
          </SidebarInset>
        </SidebarProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;