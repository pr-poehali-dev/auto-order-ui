import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useState } from "react";

const SkuDetails = () => {
  const [safetyStock, setSafetyStock] = useState([10]);
  const [forecastAggressiveness, setForecastAggressiveness] = useState([50]);
  const [minOrderQty, setMinOrderQty] = useState(50);

  const skuData = {
    sku: "МЛК-001",
    name: "Молоко 3.2% 1л",
    category: "Молочные продукты",
    currentStock: 45,
    forecast: 35,
    safetyStock: 10,
    inTransit: 0,
    seasonalityAdjustment: 5,
    recommendedOrder: 45
  };

  const history = [
    {
      date: "25.11.2024",
      systemRecommendation: 320,
      managerAction: 350,
      reason: "Ожидается акция",
      result: "✅ Избежали дефицита"
    },
    {
      date: "18.11.2024",
      systemRecommendation: 280,
      managerAction: 280,
      reason: "—",
      result: "✅ Оптимально"
    },
    {
      date: "11.11.2024",
      systemRecommendation: 400,
      managerAction: 300,
      reason: "Консервативный подход",
      result: "⚠️ Был дефицит 2 дня"
    },
    {
      date: "04.11.2024",
      systemRecommendation: 250,
      managerAction: 250,
      reason: "—",
      result: "✅ Оптимально"
    }
  ];

  const stockForecast = [
    { day: 1, stock: 45, forecast: 42 },
    { day: 3, stock: 38, forecast: 35 },
    { day: 5, stock: 28, forecast: 25 },
    { day: 7, stock: 18, forecast: 15 },
    { day: 10, stock: 8, forecast: 5, rop: true },
    { day: 14, stock: 50, forecast: 48 },
    { day: 21, stock: 35, forecast: 32 },
    { day: 28, stock: 22, forecast: 20 },
    { day: 30, stock: 15, forecast: 12 }
  ];

  const maxStock = Math.max(...stockForecast.map(d => d.stock));

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Button variant="ghost" size="sm" onClick={() => window.history.back()}>
              <Icon name="ArrowLeft" size={16} className="mr-1" />
              Назад
            </Button>
          </div>
          <h1 className="text-3xl font-bold tracking-tight">Детальная карточка SKU</h1>
          <p className="text-muted-foreground mt-1">Глубокий анализ и тонкая настройка товара</p>
        </div>
        <Button size="lg">
          <Icon name="Save" className="mr-2" size={18} />
          Сохранить изменения
        </Button>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-2xl">{skuData.name}</CardTitle>
              <CardDescription className="mt-2 flex items-center gap-4">
                <span className="font-mono font-medium">{skuData.sku}</span>
                <Badge variant="outline">{skuData.category}</Badge>
              </CardDescription>
            </div>
            <div className="text-right">
              <p className="text-sm text-muted-foreground">Текущий остаток</p>
              <p className="text-3xl font-bold font-mono">{skuData.currentStock}</p>
            </div>
          </div>
        </CardHeader>
      </Card>

      <Tabs defaultValue="calculation" className="w-full">
        <TabsList>
          <TabsTrigger value="calculation">
            <Icon name="Calculator" size={16} className="mr-2" />
            Расчет заказа
          </TabsTrigger>
          <TabsTrigger value="history">
            <Icon name="History" size={16} className="mr-2" />
            История и данные
          </TabsTrigger>
        </TabsList>

        <TabsContent value="calculation" className="space-y-6 mt-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Calculator" size={20} />
                  Формула расчета
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 font-mono text-sm">
                  <div className="p-4 bg-primary/5 border border-primary/20 rounded-lg">
                    <p className="font-bold text-lg mb-3">Рекомендованный заказ = <span className="text-primary">{skuData.recommendedOrder} шт.</span></p>
                  </div>
                  
                  <div className="space-y-2 pl-4 border-l-2 border-muted">
                    <div className="flex items-center justify-between p-2 bg-muted/30 rounded">
                      <span>Прогноз на 14 дней</span>
                      <span className="font-bold">+{skuData.forecast} шт.</span>
                    </div>
                    <div className="flex items-center justify-between p-2 bg-muted/30 rounded">
                      <span>Страховой запас</span>
                      <span className="font-bold">+{safetyStock[0]} шт.</span>
                    </div>
                    <div className="flex items-center justify-between p-2 bg-destructive/10 rounded">
                      <span>Текущий остаток</span>
                      <span className="font-bold text-destructive">-{skuData.currentStock} шт.</span>
                    </div>
                    <div className="flex items-center justify-between p-2 bg-destructive/10 rounded">
                      <span>Заказ в пути</span>
                      <span className="font-bold text-destructive">-{skuData.inTransit} шт.</span>
                    </div>
                    <div className="flex items-center justify-between p-2 bg-success/10 rounded">
                      <span>Поправка на сезонность</span>
                      <span className="font-bold text-success">+{skuData.seasonalityAdjustment} шт.</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Sliders" size={20} />
                  Параметры заказа
                </CardTitle>
                <CardDescription>
                  Настройте параметры для пересчета рекомендации
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Label>Страховой запас</Label>
                    <span className="text-sm font-mono font-bold">{safetyStock[0]} дней</span>
                  </div>
                  <Slider
                    value={safetyStock}
                    onValueChange={setSafetyStock}
                    min={0}
                    max={30}
                    step={1}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>0 дней</span>
                    <span>30 дней</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Label>Коэф. агрессивности прогноза</Label>
                    <Badge variant="outline">
                      {forecastAggressiveness[0] < 33 ? 'Консервативный' : 
                       forecastAggressiveness[0] < 67 ? 'Нейтральный' : 'Агрессивный'}
                    </Badge>
                  </div>
                  <Slider
                    value={forecastAggressiveness}
                    onValueChange={setForecastAggressiveness}
                    min={0}
                    max={100}
                    step={1}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>Консервативный</span>
                    <span>Нейтральный</span>
                    <span>Агрессивный</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="minOrder">Минимальная партия</Label>
                  <Input
                    id="minOrder"
                    type="number"
                    value={minOrderQty}
                    onChange={(e) => setMinOrderQty(Number(e.target.value))}
                    className="font-mono"
                  />
                  <p className="text-xs text-muted-foreground">
                    Система автоматически округлит до этого значения
                  </p>
                </div>

                <Button className="w-full" size="lg">
                  <Icon name="RefreshCw" className="mr-2" size={18} />
                  Пересчитать рекомендацию
                </Button>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="TrendingUp" size={20} />
                Визуализация остатков
              </CardTitle>
              <CardDescription>
                Прогноз уровня остатков на следующие 30 дней
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative h-64">
                <div className="absolute inset-0 flex items-end justify-between gap-2">
                  {stockForecast.map((point) => (
                    <div key={point.day} className="flex-1 flex flex-col items-center gap-2 relative group">
                      <div className="w-full flex flex-col justify-end h-56">
                        <div 
                          className="w-full bg-primary/20 rounded-t transition-all duration-300 relative"
                          style={{ height: `${(point.forecast / maxStock) * 100}%`, minHeight: '8px' }}
                        >
                          <div 
                            className="w-full bg-primary rounded-t absolute bottom-0"
                            style={{ height: `${(point.stock / point.forecast) * 100}%`, minHeight: '4px' }}
                          />
                          {point.rop && (
                            <div className="absolute left-0 right-0 -top-1 border-t-2 border-dashed border-destructive">
                              <Badge variant="destructive" className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs">
                                ROP
                              </Badge>
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="text-xs text-center">
                        <div className="font-medium">День {point.day}</div>
                        <div className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity absolute bottom-full mb-2 bg-popover border rounded px-2 py-1 whitespace-nowrap">
                          Факт: {point.stock} / Прогноз: {point.forecast}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-center gap-6 mt-6 pt-4 border-t">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded bg-primary"></div>
                  <span className="text-xs text-muted-foreground">Факт. остаток</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded bg-primary/20"></div>
                  <span className="text-xs text-muted-foreground">Прогноз</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-2 border-t-2 border-dashed border-destructive"></div>
                  <span className="text-xs text-muted-foreground">Точка заказа (ROP)</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="history" className="space-y-6 mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="BarChart3" size={20} />
                График продаж и заказов
              </CardTitle>
              <CardDescription>
                Динамика за последние 6 месяцев
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-64 flex items-center justify-center border-2 border-dashed rounded-lg">
                <div className="text-center text-muted-foreground">
                  <Icon name="BarChart3" size={48} className="mx-auto mb-2 opacity-50" />
                  <p>График продаж будет отображаться здесь</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="History" size={20} />
                История рекомендаций vs Реальные действия
              </CardTitle>
              <CardDescription>
                Анализ точности системы и решений менеджера
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Дата</TableHead>
                    <TableHead className="text-right">Рекомендация системы</TableHead>
                    <TableHead className="text-right">Действие менеджера</TableHead>
                    <TableHead>Причина отклонения</TableHead>
                    <TableHead>Итог</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {history.map((record, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{record.date}</TableCell>
                      <TableCell className="text-right font-mono">{record.systemRecommendation} шт.</TableCell>
                      <TableCell className="text-right font-mono font-bold">
                        {record.managerAction} шт.
                        {record.managerAction !== record.systemRecommendation && (
                          <span className="ml-2 text-warning text-xs">
                            ({record.managerAction > record.systemRecommendation ? '+' : ''}
                            {record.managerAction - record.systemRecommendation})
                          </span>
                        )}
                      </TableCell>
                      <TableCell className="text-sm text-muted-foreground">{record.reason}</TableCell>
                      <TableCell>{record.result}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <Card className="border-primary/50 bg-primary/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <Icon name="Lightbulb" size={18} />
                Обучение системы
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-start gap-3">
                <Checkbox id="learn" />
                <div className="flex-1">
                  <label htmlFor="learn" className="text-sm font-medium cursor-pointer">
                    Учитывать мое решение при будущих расчетах для этого SKU
                  </label>
                  <p className="text-xs text-muted-foreground mt-1">
                    Система проанализирует ваше решение и учтет его при следующих рекомендациях для этого товара
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SkuDetails;
