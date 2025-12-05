import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Orders = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-2">
        <div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
            <button className="hover:text-foreground transition-colors">&lt; Свернуть</button>
          </div>
          <h1 className="text-3xl font-bold tracking-tight">Управление заказами</h1>
          <p className="text-muted-foreground mt-1">Отслеживайте и управляйте всеми заказами</p>
        </div>
      </div>

      <Tabs defaultValue="dashboard" className="w-full">
        <TabsList className="bg-transparent border-b rounded-none w-full justify-start p-0 h-auto">
          <TabsTrigger 
            value="dashboard" 
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-4 py-3"
          >
            <Icon name="LayoutDashboard" size={16} className="mr-2" />
            Дашборд
          </TabsTrigger>
          <TabsTrigger 
            value="list" 
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-4 py-3"
          >
            <Icon name="List" size={16} className="mr-2" />
            Список заказов
          </TabsTrigger>
          <TabsTrigger 
            value="analytics" 
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-4 py-3"
          >
            <Icon name="BarChart3" size={16} className="mr-2" />
            Аналитика
          </TabsTrigger>
        </TabsList>

        <TabsContent value="dashboard" className="mt-6 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Быстрые действия</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Button size="lg" className="w-full justify-start h-auto py-4 px-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center">
                      <Icon name="Plus" size={20} />
                    </div>
                    <span className="font-semibold">Создать заказ</span>
                  </div>
                </Button>
                <Button variant="outline" size="lg" className="w-full justify-start h-auto py-4 px-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
                      <Icon name="Repeat" size={20} />
                    </div>
                    <span className="font-semibold">Внутреннее перемещение</span>
                  </div>
                </Button>
                <Button variant="outline" size="lg" className="w-full justify-start h-auto py-4 px-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
                      <Icon name="FileText" size={20} />
                    </div>
                    <span className="font-semibold">Сформировать отчёт</span>
                  </div>
                </Button>
              </div>
            </CardContent>
          </Card>

          <div>
            <h2 className="text-xl font-semibold mb-4">Ключевые показатели</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Остатки на складе</p>
                      <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-bold">15</span>
                        <span className="text-sm text-muted-foreground">поз.</span>
                      </div>
                    </div>
                    <div className="w-10 h-10 rounded-lg bg-warning/10 flex items-center justify-center">
                      <Icon name="AlertTriangle" size={20} className="text-warning" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Срок годности товаров</p>
                      <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-bold">3 дн.</span>
                        <span className="text-sm text-warning">Внимание</span>
                      </div>
                    </div>
                    <div className="w-10 h-10 rounded-lg bg-warning/10 flex items-center justify-center">
                      <Icon name="Clock" size={20} className="text-warning" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Ближайшая доставка</p>
                      <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-bold">0</span>
                        <span className="text-sm text-muted-foreground">Сегодня</span>
                      </div>
                    </div>
                    <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
                      <Icon name="Truck" size={20} className="text-muted-foreground" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-success/50">
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Качество поставок</p>
                      <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-bold text-success">92%</span>
                        <Badge className="bg-success text-white">Отлично</Badge>
                      </div>
                    </div>
                    <div className="w-10 h-10 rounded-lg bg-success/10 flex items-center justify-center">
                      <Icon name="CheckCircle2" size={20} className="text-success" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card className="lg:col-span-2">
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Активные заказы</CardTitle>
                  <CardDescription className="mt-1">Заказы в процессе выполнения</CardDescription>
                </div>
                <Button variant="ghost" size="sm">
                  <Icon name="ArrowRight" size={16} />
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { id: 1, name: "Активные заказы", count: 24, change: "+12%", icon: "ShoppingCart", color: "text-primary" },
                    { id: 2, name: "Ожидают утверждения", count: 8, change: "+3", icon: "Clock", color: "text-warning" },
                    { id: 3, name: "Доставка сегодня", count: 15, change: "100%", icon: "TruckIcon", color: "text-success" }
                  ].map((item) => (
                    <div key={item.id} className="flex items-center justify-between p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors cursor-pointer">
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-lg bg-background flex items-center justify-center ${item.color}`}>
                          <Icon name={item.icon as any} size={24} />
                        </div>
                        <div>
                          <p className="font-medium">{item.name}</p>
                          <p className="text-sm text-muted-foreground">{item.change} от предыдущей недели</p>
                        </div>
                      </div>
                      <span className="text-3xl font-bold">{item.count}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Bell" size={20} />
                  Уведомления
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="p-3 rounded-lg border border-destructive/20 bg-destructive/5">
                  <div className="flex items-start gap-3">
                    <Icon name="AlertCircle" size={18} className="text-destructive mt-0.5" />
                    <div className="flex-1">
                      <p className="text-sm font-medium">Просрочено 2 заказа</p>
                      <p className="text-xs text-muted-foreground mt-1">Требуется срочное внимание</p>
                    </div>
                  </div>
                </div>
                <div className="p-3 rounded-lg border">
                  <div className="flex items-start gap-3">
                    <Icon name="Info" size={18} className="text-primary mt-0.5" />
                    <div className="flex-1">
                      <p className="text-sm font-medium">Новый заказ от поставщика</p>
                      <p className="text-xs text-muted-foreground mt-1">5 минут назад</p>
                    </div>
                  </div>
                </div>
                <div className="p-3 rounded-lg border">
                  <div className="flex items-start gap-3">
                    <Icon name="CheckCircle" size={18} className="text-success mt-0.5" />
                    <div className="flex-1">
                      <p className="text-sm font-medium">Доставка завершена</p>
                      <p className="text-xs text-muted-foreground mt-1">15 минут назад</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span>Последние заказы</span>
                <Icon name="ArrowRight" size={18} />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[
                  { id: "ORD-001", supplier: "Молочный Дом", amount: "145 000 ₽", status: "approved", date: "05.12.2024" },
                  { id: "ORD-002", supplier: "Хлебный Мир", amount: "67 000 ₽", status: "pending", date: "05.12.2024" },
                  { id: "ORD-003", supplier: "Мясокомбинат №1", amount: "320 000 ₽", status: "delivered", date: "04.12.2024" }
                ].map((order) => (
                  <div key={order.id} className="flex items-center justify-between p-4 rounded-lg border hover:border-primary/50 transition-colors cursor-pointer">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
                        <Icon name="FileText" size={20} />
                      </div>
                      <div>
                        <p className="font-mono font-medium">{order.id}</p>
                        <p className="text-sm text-muted-foreground">{order.supplier}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-6">
                      <span className="font-mono font-semibold">{order.amount}</span>
                      <Badge variant={order.status === "delivered" ? "default" : order.status === "approved" ? "secondary" : "outline"}>
                        {order.status === "delivered" ? "Доставлен" : order.status === "approved" ? "Утвержден" : "Ожидает"}
                      </Badge>
                      <span className="text-sm text-muted-foreground w-24">{order.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="list" className="mt-6">
          <Card>
            <CardContent className="pt-6">
              <div className="text-center py-12 text-muted-foreground">
                <Icon name="FileText" size={48} className="mx-auto mb-4 opacity-50" />
                <p className="text-lg">Список заказов будет отображаться здесь</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics" className="mt-6">
          <Card>
            <CardContent className="pt-6">
              <div className="text-center py-12 text-muted-foreground">
                <Icon name="BarChart3" size={48} className="mx-auto mb-4 opacity-50" />
                <p className="text-lg">Аналитика заказов будет отображаться здесь</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Orders;
