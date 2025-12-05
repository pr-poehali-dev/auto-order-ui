import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Orders = () => {
  const orders = [
    {
      id: "ORD-2024-001",
      date: "05.12.2024",
      supplier: "Молочный Дом",
      items: 12,
      amount: 145000,
      status: "approved",
      delivery: "08.12.2024"
    },
    {
      id: "ORD-2024-002",
      date: "05.12.2024",
      supplier: "Хлебный Мир",
      items: 8,
      amount: 67000,
      status: "pending",
      delivery: "06.12.2024"
    },
    {
      id: "ORD-2024-003",
      date: "04.12.2024",
      supplier: "Мясокомбинат №1",
      items: 24,
      amount: 320000,
      status: "delivered",
      delivery: "05.12.2024"
    },
    {
      id: "ORD-2024-004",
      date: "04.12.2024",
      supplier: "АгроПродукт",
      items: 15,
      amount: 89000,
      status: "approved",
      delivery: "07.12.2024"
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "delivered":
        return <Badge className="bg-success">Доставлен</Badge>;
      case "approved":
        return <Badge className="bg-primary">Утвержден</Badge>;
      case "pending":
        return <Badge className="bg-warning text-white">Ожидает</Badge>;
      case "cancelled":
        return <Badge variant="destructive">Отменён</Badge>;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Заказы</h1>
          <p className="text-muted-foreground mt-1">История и управление заказами поставщикам</p>
        </div>
        <Button size="lg">
          <Icon name="Plus" className="mr-2" size={18} />
          Создать заказ
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Всего заказов</CardTitle>
          </CardHeader>
          <CardContent>
            <span className="text-3xl font-bold font-mono">247</span>
            <p className="text-xs text-muted-foreground mt-1">за месяц</p>
          </CardContent>
        </Card>

        <Card className="border-warning/50">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Ожидают</CardTitle>
          </CardHeader>
          <CardContent>
            <span className="text-3xl font-bold font-mono text-warning">18</span>
            <p className="text-xs text-muted-foreground mt-1">требуется проверка</p>
          </CardContent>
        </Card>

        <Card className="border-primary/50">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Утверждено</CardTitle>
          </CardHeader>
          <CardContent>
            <span className="text-3xl font-bold font-mono text-primary">34</span>
            <p className="text-xs text-muted-foreground mt-1">в обработке</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Сумма за месяц</CardTitle>
          </CardHeader>
          <CardContent>
            <span className="text-3xl font-bold font-mono">12.8М ₽</span>
            <p className="text-xs text-success mt-1">+8% к прошлому</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Icon name="FileText" size={20} />
            Список заказов
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="mb-4">
              <TabsTrigger value="all">Все заказы</TabsTrigger>
              <TabsTrigger value="pending">Ожидают</TabsTrigger>
              <TabsTrigger value="approved">Утверждены</TabsTrigger>
              <TabsTrigger value="delivered">Доставлены</TabsTrigger>
            </TabsList>
            <TabsContent value="all">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Номер заказа</TableHead>
                    <TableHead>Дата</TableHead>
                    <TableHead>Поставщик</TableHead>
                    <TableHead className="text-right">Позиций</TableHead>
                    <TableHead className="text-right">Сумма</TableHead>
                    <TableHead>Статус</TableHead>
                    <TableHead>Поставка</TableHead>
                    <TableHead className="text-right">Действия</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {orders.map((order) => (
                    <TableRow key={order.id} className="hover:bg-muted/50">
                      <TableCell className="font-mono font-medium">{order.id}</TableCell>
                      <TableCell className="text-sm">{order.date}</TableCell>
                      <TableCell className="font-medium">{order.supplier}</TableCell>
                      <TableCell className="text-right font-mono">{order.items}</TableCell>
                      <TableCell className="text-right font-mono font-bold">
                        {(order.amount / 1000).toFixed(0)}к ₽
                      </TableCell>
                      <TableCell>{getStatusBadge(order.status)}</TableCell>
                      <TableCell className="text-sm">{order.delivery}</TableCell>
                      <TableCell className="text-right">
                        <div className="flex gap-2 justify-end">
                          <Button variant="ghost" size="sm">
                            <Icon name="Eye" size={16} />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Icon name="Download" size={16} />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TabsContent>
            <TabsContent value="pending">
              <div className="text-center py-12 text-muted-foreground">
                <Icon name="Inbox" size={48} className="mx-auto mb-4 opacity-50" />
                <p>Заказы в статусе "Ожидают" будут отображаться здесь</p>
              </div>
            </TabsContent>
            <TabsContent value="approved">
              <div className="text-center py-12 text-muted-foreground">
                <Icon name="Inbox" size={48} className="mx-auto mb-4 opacity-50" />
                <p>Утверждённые заказы будут отображаться здесь</p>
              </div>
            </TabsContent>
            <TabsContent value="delivered">
              <div className="text-center py-12 text-muted-foreground">
                <Icon name="Inbox" size={48} className="mx-auto mb-4 opacity-50" />
                <p>Доставленные заказы будут отображаться здесь</p>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default Orders;
