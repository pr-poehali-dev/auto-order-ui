
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import Dashboard from "./pages/Dashboard";
import Workspace from "./pages/Workspace";
import SkuDetails from "./pages/SkuDetails";
import OrderJournal from "./pages/OrderJournal";
import Settings from "./pages/Settings";
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
                <Route path="/" element={<Dashboard />} />
                <Route path="/workspace" element={<Workspace />} />
                <Route path="/sku-details" element={<SkuDetails />} />
                <Route path="/orders" element={<OrderJournal />} />
                <Route path="/settings" element={<Settings />} />
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