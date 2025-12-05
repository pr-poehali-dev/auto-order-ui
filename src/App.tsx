
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
            <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-6">
              <SidebarTrigger />
              <div className="flex-1" />
            </header>
            <main className="flex-1 p-6">
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/recommendations" element={<Recommendations />} />
                <Route path="/orders" element={<Orders />} />
                <Route path="/analytics" element={<div className="text-center py-12 text-muted-foreground"><p className="text-xl">Модуль "Аналитика" в разработке</p></div>} />
                <Route path="/suppliers" element={<div className="text-center py-12 text-muted-foreground"><p className="text-xl">Модуль "Поставщики" в разработке</p></div>} />
                <Route path="/sku" element={<div className="text-center py-12 text-muted-foreground"><p className="text-xl">Модуль "SKU Управление" в разработке</p></div>} />
                <Route path="/settings" element={<div className="text-center py-12 text-muted-foreground"><p className="text-xl">Настройки системы</p></div>} />
                <Route path="/help" element={<div className="text-center py-12 text-muted-foreground"><p className="text-xl">Справка и документация</p></div>} />
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