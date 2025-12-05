import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const Settings = () => {
  const suppliers = [
    {
      id: 1,
      name: "Молочный Дом",
      deliveryDays: "ПН, СР, ПТ",
      leadTimeMin: 2,
      leadTimeMax: 3,
      minOrder: 10000,
      packaging: 12,
      preference: 1
    },
    {
      id: 2,
      name: "Хлебный Мир",
      deliveryDays: "Ежедневно",
      leadTimeMin: 1,
      leadTimeMax: 1,
      minOrder: 5000,
      packaging: 24,
      preference: 1
    },
    {
      id: 3,
      name: "Мясокомбинат №1",
      deliveryDays: "ВТ, ЧТ",
      leadTimeMin: 3,
      leadTimeMax: 5,
      minOrder: 25000,
      packaging: 10,
      preference: 1
    },
    {
      id: 4,
      name: "АгроПродукт",
      deliveryDays: "ПН, ЧТ",
      leadTimeMin: 2,
      leadTimeMax: 4,
      minOrder: 15000,
      packaging: 20,
      preference: 2
    }
  ];

  const exceptions = [
    {
      id: 1,
      sku: "ПРМ-045",
      name: "Колбаса премиум",
      category: "Мясо",
      reason: "manual",
      comment: "Требуется ручной контроль качества"
    },
    {
      id: 2,
      sku: "СЗН-089",
      name: "Арбузы",
      category: "Овощи/Фрукты",
      reason: "seasonal",
      comment: "Сезонный товар с нестабильным спросом"
    },
    {
      id: 3,
      sku: "НАП-123",
      name: "Квас специальный",
      category: "Напитки",
      reason: "withdrawal",
      comment: "Планируется вывод из ассортимента"
    }
  ];

  const auditLog = [
    {
      date: "05.12.2024 14:30",
      user: "Иван Петров",
      action: "Изменил минимальную партию для категории 'Молочные продукты'",
      oldValue: "50 шт.",
      newValue: "100 шт."
    },
    {
      date: "04.12.2024 11:15",
      user: "Мария Сидорова",
      action: "Добавил исключение для SKU 'ПРМ-045'",
      oldValue: "—",
      newValue: "Ручное управление"
    },
    {
      date: "03.12.2024 09:20",
      user: "Иван Петров",
      action: "Изменил коэффициент агрессивности для категории 'Хлеб'",
      oldValue: "Нейтральный",
      newValue: "Консервативный"
    }
  ];

  const getReasonBadge = (reason: string) => {
    switch (reason) {
      case "manual":
        return <Badge variant="outline">Ручное управление</Badge>;
      case "seasonal":
        return <Badge className="bg-warning text-white">Сезонный товар</Badge>;
      case "withdrawal":
        return <Badge variant="destructive">На выводе</Badge>;
      case "supplier":
        return <Badge variant="secondary">Проблемы с поставщиком</Badge>;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-3xl font-bold tracking-tight">Настройки и администрирование</h1>
        <p className="text-muted-foreground mt-1">Управление правилами системы, исключениями, каталогом</p>
      </header>

      <Tabs defaultValue="rules" className="w-full">
        <TabsList>
          <TabsTrigger value="rules">
            <Icon name="Settings" size={16} className="mr-2" />
            Правила автозаказа
          </TabsTrigger>
          <TabsTrigger value="suppliers">
            <Icon name="TruckIcon" size={16} className="mr-2" />
            Каталог поставщиков
          </TabsTrigger>
          <TabsTrigger value="exceptions">
            <Icon name="Ban" size={16} className="mr-2" />
            Реестр исключений
          </TabsTrigger>
          <TabsTrigger value="monitoring">
            <Icon name="Activity" size={16} className="mr-2" />
            Мониторинг модели
          </TabsTrigger>
        </TabsList>

        <TabsContent value="rules" className="space-y-6 mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Globe" size={20} />
                Глобальные настройки
              </CardTitle>
              <CardDescription>
                Основные параметры работы системы автозаказа
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label>Дни недели для формирования заказов</Label>
                  <div className="flex gap-2">
                    {['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'].map((day) => (
                      <Button
                        key={day}
                        variant={['ПН', 'СР', 'ПТ'].includes(day) ? 'default' : 'outline'}
                        size="sm"
                        className="flex-1"
                      >
                        {day}
                      </Button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="deadline">Дедлайн формирования заказов</Label>
                  <Input id="deadline" type="time" defaultValue="14:00" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="minAmount">Минимальная сумма заказа (₽)</Label>
                  <Input id="minAmount" type="number" defaultValue="5000" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="forecastPeriod">Период прогноза (дней)</Label>
                  <Input id="forecastPeriod" type="number" defaultValue="14" />
                </div>
              </div>

              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <p className="font-medium">Автоматическое утверждение заказов</p>
                  <p className="text-sm text-muted-foreground">
                    Автоматически утверждать заказы без отклонений
                  </p>
                </div>
                <Switch />
              </div>

              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <p className="font-medium">Отправка уведомлений</p>
                  <p className="text-sm text-muted-foreground">
                    Email-уведомления о критичных ситуациях
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Layers" size={20} />
                Настройки по категориям товаров
              </CardTitle>
              <CardDescription>
                Индивидуальные параметры для разных групп товаров
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { category: "Молочные продукты", forecast: 14, method: "XYZ-анализ", aggr: "Нейтральный" },
                  { category: "Хлебобулочные", forecast: 7, method: "Тренд", aggr: "Консервативный" },
                  { category: "Мясо и птица", forecast: 14, method: "XYZ-анализ", aggr: "Агрессивный" }
                ].map((cat) => (
                  <div key={cat.category} className="grid grid-cols-4 gap-4 p-4 border rounded-lg">
                    <div>
                      <p className="font-medium">{cat.category}</p>
                    </div>
                    <div>
                      <Label className="text-xs">Период прогноза</Label>
                      <Input type="number" defaultValue={cat.forecast} className="mt-1" />
                    </div>
                    <div>
                      <Label className="text-xs">Метод расчета</Label>
                      <Select defaultValue={cat.method}>
                        <SelectTrigger className="mt-1">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="XYZ-анализ">XYZ-анализ</SelectItem>
                          <SelectItem value="Тренд">Тренд</SelectItem>
                          <SelectItem value="Сезонность">Сезонность</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label className="text-xs">Агрессивность</Label>
                      <Select defaultValue={cat.aggr}>
                        <SelectTrigger className="mt-1">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Консервативный">Консервативный</SelectItem>
                          <SelectItem value="Нейтральный">Нейтральный</SelectItem>
                          <SelectItem value="Агрессивный">Агрессивный</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="suppliers" className="space-y-6 mt-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="TruckIcon" size={20} />
                    Каталог поставщиков
                  </CardTitle>
                  <CardDescription>
                    Условия работы с каждым поставщиком
                  </CardDescription>
                </div>
                <Button>
                  <Icon name="Plus" className="mr-2" size={18} />
                  Добавить поставщика
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow className="bg-muted/50">
                    <TableHead>Поставщик</TableHead>
                    <TableHead>Дни поставок</TableHead>
                    <TableHead>Lead Time (дн.)</TableHead>
                    <TableHead className="text-right">Мин. партия (₽)</TableHead>
                    <TableHead className="text-right">Кратность упак.</TableHead>
                    <TableHead>Приоритет</TableHead>
                    <TableHead className="text-right">Действия</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {suppliers.map((supplier) => (
                    <TableRow key={supplier.id}>
                      <TableCell className="font-medium">{supplier.name}</TableCell>
                      <TableCell className="text-sm">{supplier.deliveryDays}</TableCell>
                      <TableCell className="font-mono text-sm">
                        {supplier.leadTimeMin === supplier.leadTimeMax 
                          ? supplier.leadTimeMin 
                          : `${supplier.leadTimeMin}-${supplier.leadTimeMax}`}
                      </TableCell>
                      <TableCell className="text-right font-mono">{supplier.minOrder.toLocaleString()}</TableCell>
                      <TableCell className="text-right font-mono">{supplier.packaging}</TableCell>
                      <TableCell>
                        <Badge variant={supplier.preference === 1 ? 'default' : 'secondary'}>
                          {supplier.preference}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex gap-1 justify-end">
                          <Button variant="ghost" size="sm">
                            <Icon name="Edit" size={16} />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Icon name="Trash2" size={16} />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="exceptions" className="space-y-6 mt-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Ban" size={20} />
                    Реестр исключений
                  </CardTitle>
                  <CardDescription>
                    Товары, исключенные из автозаказа
                  </CardDescription>
                </div>
                <Button>
                  <Icon name="Plus" className="mr-2" size={18} />
                  Добавить исключение
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow className="bg-muted/50">
                    <TableHead>SKU / Название</TableHead>
                    <TableHead>Категория</TableHead>
                    <TableHead>Причина</TableHead>
                    <TableHead>Комментарий</TableHead>
                    <TableHead className="text-right">Действия</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {exceptions.map((exception) => (
                    <TableRow key={exception.id}>
                      <TableCell>
                        <div>
                          <p className="font-mono text-sm font-medium">{exception.sku}</p>
                          <p className="text-sm">{exception.name}</p>
                        </div>
                      </TableCell>
                      <TableCell className="text-sm">{exception.category}</TableCell>
                      <TableCell>{getReasonBadge(exception.reason)}</TableCell>
                      <TableCell className="text-sm text-muted-foreground max-w-xs">
                        {exception.comment}
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex gap-1 justify-end">
                          <Button variant="ghost" size="sm">
                            <Icon name="Edit" size={16} />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Icon name="Trash2" size={16} />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="monitoring" className="space-y-6 mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="TrendingUp" size={20} />
                Точность прогнозов
              </CardTitle>
              <CardDescription>
                Сравнение прогнозов с фактическими продажами
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-64 flex items-center justify-center border-2 border-dashed rounded-lg">
                <div className="text-center text-muted-foreground">
                  <Icon name="BarChart3" size={48} className="mx-auto mb-2 opacity-50" />
                  <p>График точности прогнозов будет отображаться здесь</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="History" size={20} />
                Лог изменений настроек
              </CardTitle>
              <CardDescription>
                История изменений системных настроек
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {auditLog.map((log, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 border rounded-lg">
                    <Icon name="FileEdit" size={20} className="text-muted-foreground mt-0.5" />
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <p className="font-medium">{log.action}</p>
                        <span className="text-xs text-muted-foreground">{log.date}</span>
                      </div>
                      <div className="flex items-center gap-4 text-sm">
                        <span className="text-muted-foreground">
                          Было: <span className="font-mono">{log.oldValue}</span>
                        </span>
                        <Icon name="ArrowRight" size={14} />
                        <span className="text-muted-foreground">
                          Стало: <span className="font-mono font-medium">{log.newValue}</span>
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">
                        Изменил: {log.user}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Settings;
