import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";

const OrderJournal = () => {
  const orders = [
    {
      id: "ORD-2024-157",
      date: "05.12.2024",
      supplier: "Молочный Дом",
      status: "confirmed",
      amount: 145000,
      creationType: "auto",
      items: 12,
      delivery: "08.12.2024"
    },
    {
      id: "ORD-2024-156",
      date: "05.12.2024",
      supplier: "Хлебный Мир",
      status: "sent",
      amount: 67000,
      creationType: "mixed",
      items: 8,
      delivery: "07.12.2024"
    },
    {
      id: "ORD-2024-155",
      date: "04.12.2024",
      supplier: "Мясокомбинат №1",
      status: "draft",
      amount: 320000,
      creationType: "manual",
      items: 24,
      delivery: "09.12.2024"
    },
    {
      id: "ORD-2024-154",
      date: "04.12.2024",
      supplier: "АгроПродукт",
      status: "confirmed",
      amount: 89000,
      creationType: "auto",
      items: 15,
      delivery: "06.12.2024"
    },
    {
      id: "ORD-2024-153",
      date: "03.12.2024",
      supplier: "Молочный Дом",
      status: "awaiting",
      amount: 178000,
      creationType: "auto",
      items: 18,
      delivery: "05.12.2024"
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "draft":
        return <Badge variant="outline">Черновик</Badge>;
      case "sent":
        return <Badge className="bg-primary">Отправлен</Badge>;
      case "confirmed":
        return <Badge className="bg-warning text-white">Подтвержден поставщиком</Badge>;
      case "awaiting":
        return <Badge className="bg-success">Ожидается поставка</Badge>;
      default:
        return null;
    }
  };

  const getCreationTypeBadge = (type: string) => {
    switch (type) {
      case "auto":
        return <Badge variant="secondary" className="gap-1">
          <Icon name="Zap" size={12} />
          Авто
        </Badge>;
      case "manual":
        return <Badge variant="outline" className="gap-1">
          <Icon name="User" size={12} />
          Ручной
        </Badge>;
      case "mixed":
        return <Badge className="bg-warning/80 text-white gap-1">
          <Icon name="GitMerge" size={12} />
          Смешанный
        </Badge>;
      default:
        return null;
    }
  };

  const statuses = [
    { value: "draft", label: "Черновик", count: 3, icon: "FileEdit" },
    { value: "sent", label: "Отправлен", count: 12, icon: "Send" },
    { value: "confirmed", label: "Подтвержден", count: 24, icon: "CheckCircle" },
    { value: "awaiting", label: "Ожидается поставка", count: 8, icon: "Clock" }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Журнал заказов</h1>
          <p className="text-muted-foreground mt-1">Контроль исполнения, история, документооборот</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" size="lg">
            <Icon name="Download" className="mr-2" size={18} />
            Экспорт
          </Button>
          <Button size="lg">
            <Icon name="Plus" className="mr-2" size={18} />
            Создать заказ
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {statuses.map((status) => (
          <Card key={status.value} className="cursor-pointer hover:border-primary/50 transition-colors">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {status.label}
                </CardTitle>
                <Icon name={status.icon as any} size={18} className="text-muted-foreground" />
              </div>
            </CardHeader>
            <CardContent>
              <span className="text-3xl font-bold font-mono">{status.count}</span>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <Icon name="FileText" size={20} />
              Процесс заказа
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between gap-4 py-6">
            {[
              { label: "Сформирован", icon: "FileEdit", active: true },
              { label: "Отправлен", icon: "Send", active: true },
              { label: "Подтвержден", icon: "CheckCircle", active: true },
              { label: "Ожидается поставка", icon: "Clock", active: false }
            ].map((step, index, arr) => (
              <>
                <div key={step.label} className="flex flex-col items-center gap-2 flex-1">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                    step.active ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
                  }`}>
                    <Icon name={step.icon as any} size={24} />
                  </div>
                  <span className="text-xs text-center font-medium">{step.label}</span>
                </div>
                {index < arr.length - 1 && (
                  <div className={`h-1 flex-1 ${step.active ? 'bg-primary' : 'bg-muted'}`} />
                )}
              </>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Icon name="List" size={20} />
            Все заказы
          </CardTitle>
          <CardDescription>
            История сформированных заказов с фильтрацией
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4 mb-6">
            <div className="flex-1">
              <Input 
                placeholder="Поиск по номеру заказа или поставщику..." 
                className="w-full"
              />
            </div>
            <Select defaultValue="all">
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Статус" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Все статусы</SelectItem>
                <SelectItem value="draft">Черновик</SelectItem>
                <SelectItem value="sent">Отправлен</SelectItem>
                <SelectItem value="confirmed">Подтвержден</SelectItem>
                <SelectItem value="awaiting">Ожидается</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="all">
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Источник" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Все источники</SelectItem>
                <SelectItem value="auto">Автозаказ</SelectItem>
                <SelectItem value="manual">Ручной</SelectItem>
                <SelectItem value="mixed">Смешанный</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="border rounded-lg overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="bg-muted/50">
                  <TableHead>№ Заказа</TableHead>
                  <TableHead>Дата</TableHead>
                  <TableHead>Поставщик</TableHead>
                  <TableHead className="text-right">Позиций</TableHead>
                  <TableHead className="text-right">Сумма</TableHead>
                  <TableHead>Способ создания</TableHead>
                  <TableHead>Статус</TableHead>
                  <TableHead>Поставка</TableHead>
                  <TableHead className="text-right">Действия</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {orders.map((order) => (
                  <TableRow key={order.id} className="hover:bg-muted/30">
                    <TableCell className="font-mono font-medium">{order.id}</TableCell>
                    <TableCell className="text-sm">{order.date}</TableCell>
                    <TableCell className="font-medium">{order.supplier}</TableCell>
                    <TableCell className="text-right font-mono">{order.items}</TableCell>
                    <TableCell className="text-right font-mono font-bold">
                      {(order.amount / 1000).toFixed(0)}к ₽
                    </TableCell>
                    <TableCell>{getCreationTypeBadge(order.creationType)}</TableCell>
                    <TableCell>{getStatusBadge(order.status)}</TableCell>
                    <TableCell className="text-sm">{order.delivery}</TableCell>
                    <TableCell className="text-right">
                      <div className="flex gap-1 justify-end">
                        <Button variant="ghost" size="sm" title="Просмотр состава">
                          <Icon name="Eye" size={16} />
                        </Button>
                        <Button variant="ghost" size="sm" title="Отправить поставщику">
                          <Icon name="Send" size={16} />
                        </Button>
                        <Button variant="ghost" size="sm" title="Печать заказа">
                          <Icon name="Printer" size={16} />
                        </Button>
                        <Button variant="ghost" size="sm" title="Клонировать">
                          <Icon name="Copy" size={16} />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <div className="flex items-center justify-between mt-4">
            <p className="text-sm text-muted-foreground">
              Показано 5 из 247 заказов
            </p>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" disabled>
                <Icon name="ChevronLeft" size={16} />
              </Button>
              <Button variant="outline" size="sm">1</Button>
              <Button variant="outline" size="sm">2</Button>
              <Button variant="outline" size="sm">3</Button>
              <Button variant="outline" size="sm">
                <Icon name="ChevronRight" size={16} />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default OrderJournal;
