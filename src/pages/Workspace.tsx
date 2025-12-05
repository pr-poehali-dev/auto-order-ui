import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Workspace = () => {
  const recommendations = [
    {
      id: 1,
      sku: "BUN-001",
      name: "Булки для Воппера",
      category: "Бургеры",
      currentStock: 45,
      forecast: 280,
      inTransit: 0,
      rop: 150,
      recommendedOrder: 350,
      supplier: "ИВЛ",
      status: "new",
      alert: "high"
    },
    {
      id: 2,
      sku: "FRY-024",
      name: "Картофель фри замороженный",
      category: "Гарниры",
      currentStock: 120,
      forecast: 450,
      inTransit: 100,
      rop: 200,
      recommendedOrder: 400,
      supplier: "ИВЛ1",
      status: "new",
      alert: "normal"
    },
    {
      id: 3,
      sku: "PAT-156",
      name: "Котлета говяжья",
      category: "Бургеры",
      currentStock: 12,
      forecast: 85,
      inTransit: 0,
      rop: 50,
      recommendedOrder: 100,
      supplier: "ИВЛ2",
      status: "attention",
      alert: "critical"
    },
    {
      id: 4,
      sku: "SHK-089",
      name: "Смесь для молочного коктейля",
      category: "Напитки",
      currentStock: 230,
      forecast: 320,
      inTransit: 50,
      rop: 180,
      recommendedOrder: 150,
      supplier: "ИВЛ3",
      status: "new",
      alert: "normal"
    },
    {
      id: 5,
      sku: "CHS-042",
      name: "Сыр Чеддер ломтики",
      category: "Бургеры",
      currentStock: 78,
      forecast: 195,
      inTransit: 0,
      rop: 120,
      recommendedOrder: 180,
      supplier: "ИВЛ",
      status: "attention",
      alert: "high"
    }
  ];

  const getAlertBadge = (alert: string) => {
    switch (alert) {
      case "critical":
        return <Badge variant="destructive" className="ml-2">⚠️ Критично</Badge>;
      case "high":
        return <Badge className="bg-warning text-white ml-2">⚠️ Требует внимания</Badge>;
      default:
        return null;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "new":
        return <Badge variant="outline">Новый</Badge>;
      case "attention":
        return <Badge className="bg-warning text-white">Внимание</Badge>;
      case "paused":
        return <Badge variant="secondary">На паузе</Badge>;
      case "processing":
        return <Badge className="bg-primary">На доработке</Badge>;
      default:
        return null;
    }
  };

  const toApproval = recommendations.filter(r => r.status === 'new');
  const needsAttention = recommendations.filter(r => r.status === 'attention');

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Рабочий стол проверки</h1>
          <p className="text-muted-foreground mt-1">Ежедневная работа по утверждению заказов</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" size="lg">
            <Icon name="Download" className="mr-2" size={18} />
            Экспорт в Excel
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">К утверждению</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold font-mono text-success">{toApproval.length}</span>
              <Icon name="CheckCircle" size={20} className="text-success" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-warning/50">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Требует внимания</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold font-mono text-warning">{needsAttention.length}</span>
              <Icon name="AlertTriangle" size={20} className="text-warning" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">На паузе</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold font-mono">0</span>
              <Icon name="Pause" size={20} className="text-muted-foreground" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">На доработке</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold font-mono">0</span>
              <Icon name="RefreshCw" size={20} className="text-muted-foreground" />
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <Icon name="ClipboardList" size={20} />
              Рекомендации системы
            </CardTitle>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Icon name="Filter" className="mr-2" size={16} />
                Фильтры
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="mb-4">
              <TabsTrigger value="all">
                Все ({recommendations.length})
              </TabsTrigger>
              <TabsTrigger value="approval">
                ✅ К утверждению ({toApproval.length})
              </TabsTrigger>
              <TabsTrigger value="attention">
                ⚠️ Требует внимания ({needsAttention.length})
              </TabsTrigger>
              <TabsTrigger value="paused">
                ✏️ На паузе (0)
              </TabsTrigger>
              <TabsTrigger value="processing">
                🔄 На доработке (0)
              </TabsTrigger>
            </TabsList>

            <div className="mb-4 p-4 bg-muted/50 rounded-lg flex items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <Checkbox id="select-all" />
                <label htmlFor="select-all" className="text-sm font-medium cursor-pointer">
                  Выбрать все на странице
                </label>
              </div>
              <div className="flex gap-2">
                <Button size="sm">
                  <Icon name="Check" className="mr-2" size={16} />
                  Утвердить выбранное
                </Button>
                <Button variant="outline" size="sm">
                  <Icon name="X" className="mr-2" size={16} />
                  Отклонить
                </Button>
                <Button variant="outline" size="sm">
                  <Icon name="Clock" className="mr-2" size={16} />
                  Отложить
                </Button>
              </div>
            </div>

            <TabsContent value="all" className="mt-0">
              <div className="border rounded-lg overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-muted/50">
                      <TableHead className="w-12"></TableHead>
                      <TableHead>SKU / Название</TableHead>
                      <TableHead>Категория</TableHead>
                      <TableHead className="text-right">Тек. остаток</TableHead>
                      <TableHead className="text-right">Прогноз</TableHead>
                      <TableHead className="text-right">В пути</TableHead>
                      <TableHead className="text-right">ROP</TableHead>
                      <TableHead className="text-right">Реком. кол-во</TableHead>
                      <TableHead>Поставщик</TableHead>
                      <TableHead>Статус</TableHead>
                      <TableHead className="text-right">Действия</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {recommendations.map((item) => (
                      <TableRow key={item.id} className="hover:bg-muted/30">
                        <TableCell>
                          <Checkbox />
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <div>
                              <p className="font-mono text-sm font-medium">{item.sku}</p>
                              <p className="text-sm">{item.name}</p>
                            </div>
                            {getAlertBadge(item.alert)}
                          </div>
                        </TableCell>
                        <TableCell className="text-sm text-muted-foreground">{item.category}</TableCell>
                        <TableCell className="text-right font-mono">{item.currentStock}</TableCell>
                        <TableCell className="text-right font-mono">{item.forecast}</TableCell>
                        <TableCell className="text-right font-mono">{item.inTransit}</TableCell>
                        <TableCell className="text-right font-mono font-medium">{item.rop}</TableCell>
                        <TableCell className="text-right">
                          <Input 
                            type="number" 
                            defaultValue={item.recommendedOrder}
                            className="w-24 text-right font-mono font-bold"
                          />
                        </TableCell>
                        <TableCell>
                          <Select defaultValue={item.supplier}>
                            <SelectTrigger className="w-40">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="ИВЛ">ИВЛ</SelectItem>
                              <SelectItem value="ИВЛ1">ИВЛ1</SelectItem>
                              <SelectItem value="ИВЛ2">ИВЛ2</SelectItem>
                              <SelectItem value="ИВЛ3">ИВЛ3</SelectItem>
                            </SelectContent>
                          </Select>
                        </TableCell>
                        <TableCell>{getStatusBadge(item.status)}</TableCell>
                        <TableCell className="text-right">
                          <div className="flex gap-1 justify-end">
                            <Button variant="ghost" size="sm">
                              <Icon name="Info" size={16} />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Icon name="MessageSquare" size={16} />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </TabsContent>

            <TabsContent value="approval">
              <div className="text-center py-8 text-muted-foreground">
                <p>Рекомендации к утверждению будут отображаться здесь</p>
              </div>
            </TabsContent>

            <TabsContent value="attention">
              <div className="text-center py-8 text-muted-foreground">
                <p>Рекомендации, требующие внимания, будут отображаться здесь</p>
              </div>
            </TabsContent>

            <TabsContent value="paused">
              <div className="text-center py-8 text-muted-foreground">
                <p>Отложенные рекомендации будут отображаться здесь</p>
              </div>
            </TabsContent>

            <TabsContent value="processing">
              <div className="text-center py-8 text-muted-foreground">
                <p>Рекомендации на доработке будут отображаться здесь</p>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default Workspace;