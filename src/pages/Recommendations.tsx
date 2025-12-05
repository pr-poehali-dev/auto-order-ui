import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";

const Recommendations = () => {
  const recommendations = [
    {
      id: 1,
      sku: "МЛК-001",
      name: "Молоко 3.2% 1л",
      currentStock: 45,
      forecast: 280,
      recommendedOrder: 350,
      supplier: "Молочный Дом",
      priority: "high",
      reason: "Рост спроса +35%"
    },
    {
      id: 2,
      sku: "ХЛБ-024",
      name: "Хлеб белый 500г",
      currentStock: 120,
      forecast: 450,
      recommendedOrder: 400,
      supplier: "Хлебный Мир",
      priority: "medium",
      reason: "Стандартный прогноз"
    },
    {
      id: 3,
      sku: "МСО-156",
      name: "Говядина охл. 1кг",
      currentStock: 12,
      forecast: 85,
      recommendedOrder: 100,
      supplier: "Мясокомбинат №1",
      priority: "critical",
      reason: "Риск дефицита"
    },
    {
      id: 4,
      sku: "ОВЩ-089",
      name: "Картофель 2кг",
      currentStock: 230,
      forecast: 320,
      recommendedOrder: 150,
      supplier: "АгроПродукт",
      priority: "low",
      reason: "Достаточный запас"
    }
  ];

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case "critical":
        return <Badge variant="destructive">Критично</Badge>;
      case "high":
        return <Badge className="bg-warning text-white">Высокий</Badge>;
      case "medium":
        return <Badge variant="secondary">Средний</Badge>;
      case "low":
        return <Badge variant="outline">Низкий</Badge>;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Рекомендации к заказу</h1>
          <p className="text-muted-foreground mt-1">Проверьте и утвердите автоматические рекомендации системы</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" size="lg">
            <Icon name="RefreshCw" className="mr-2" size={18} />
            Пересчитать
          </Button>
          <Button size="lg">
            <Icon name="Check" className="mr-2" size={18} />
            Утвердить выбранные
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Всего рекомендаций</CardTitle>
          </CardHeader>
          <CardContent>
            <span className="text-3xl font-bold font-mono">47</span>
          </CardContent>
        </Card>

        <Card className="border-destructive/50">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Критичных</CardTitle>
          </CardHeader>
          <CardContent>
            <span className="text-3xl font-bold font-mono text-destructive">8</span>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Общая сумма</CardTitle>
          </CardHeader>
          <CardContent>
            <span className="text-3xl font-bold font-mono">2.4М ₽</span>
          </CardContent>
        </Card>

        <Card className="border-primary/50">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Проверено</CardTitle>
          </CardHeader>
          <CardContent>
            <span className="text-3xl font-bold font-mono text-primary">23/47</span>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Icon name="ClipboardList" size={20} />
            Список рекомендаций
          </CardTitle>
          <CardDescription>
            Система рассчитала оптимальные объёмы заказа на основе прогноза спроса
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-12"></TableHead>
                <TableHead>SKU</TableHead>
                <TableHead>Наименование</TableHead>
                <TableHead className="text-right">Остаток</TableHead>
                <TableHead className="text-right">Прогноз</TableHead>
                <TableHead className="text-right">К заказу</TableHead>
                <TableHead>Поставщик</TableHead>
                <TableHead>Приоритет</TableHead>
                <TableHead>Причина</TableHead>
                <TableHead className="text-right">Действия</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {recommendations.map((item) => (
                <TableRow key={item.id} className="hover:bg-muted/50">
                  <TableCell>
                    <Checkbox />
                  </TableCell>
                  <TableCell className="font-mono text-sm">{item.sku}</TableCell>
                  <TableCell className="font-medium">{item.name}</TableCell>
                  <TableCell className="text-right font-mono">{item.currentStock}</TableCell>
                  <TableCell className="text-right font-mono">{item.forecast}</TableCell>
                  <TableCell className="text-right font-mono font-bold">{item.recommendedOrder}</TableCell>
                  <TableCell className="text-sm">{item.supplier}</TableCell>
                  <TableCell>{getPriorityBadge(item.priority)}</TableCell>
                  <TableCell className="text-sm text-muted-foreground">{item.reason}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex gap-2 justify-end">
                      <Button variant="ghost" size="sm">
                        <Icon name="Edit" size={16} />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Icon name="Info" size={16} />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default Recommendations;
