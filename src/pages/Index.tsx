import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import Icon from "@/components/ui/icon";
import { Progress } from "@/components/ui/progress";

const Index = () => {
  const kpiData = {
    ordersToCheck: 23,
    oosRisk: 12,
    coverage: 85
  };

  const alerts = [
    {
      id: 1,
      type: "warning",
      message: "У 5 товаров изменился основной поставщик. Требуется проверка параметров",
      icon: "AlertTriangle"
    },
    {
      id: 2,
      type: "info",
      message: "Резкий рост продаж по категории \"Молоко\". Рекомендуется проверить прогноз",
      icon: "TrendingUp"
    }
  ];

  const deliverySchedule = [
    { day: "ПН", date: "02.12", amount: 450000, status: "high" },
    { day: "ВТ", date: "03.12", amount: 280000, status: "medium" },
    { day: "СР", date: "04.12", amount: 620000, status: "critical" },
    { day: "ЧТ", date: "05.12", amount: 310000, status: "medium" },
    { day: "ПТ", date: "06.12", amount: 190000, status: "low" },
    { day: "СБ", date: "07.12", amount: 420000, status: "high" },
    { day: "ВС", date: "08.12", amount: 0, status: "none" }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "critical": return "bg-destructive";
      case "high": return "bg-warning";
      case "medium": return "bg-primary";
      case "low": return "bg-success";
      default: return "bg-muted";
    }
  };

  const maxAmount = Math.max(...deliverySchedule.map(d => d.amount));

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <header className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Автозаказ для РЦ</h1>
            <p className="text-muted-foreground mt-1">Дашборд управления закупками</p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" size="lg">
              <Icon name="Settings" className="mr-2" size={18} />
              Настройки
            </Button>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="border-destructive/50 bg-card/50">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Заказов к проверке
                </CardTitle>
                <Icon name="ShoppingCart" size={18} className="text-destructive" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold font-mono text-destructive">{kpiData.ordersToCheck}</span>
                {kpiData.ordersToCheck > 20 && (
                  <Badge variant="destructive" className="animate-pulse">
                    КРИТИЧНО
                  </Badge>
                )}
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                Требуется срочная обработка
              </p>
            </CardContent>
          </Card>

          <Card className="border-warning/50 bg-card/50">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Риск OOS (7 дней)
                </CardTitle>
                <Icon name="AlertCircle" size={18} className="text-warning" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold font-mono text-warning">{kpiData.oosRisk}</span>
                <span className="text-sm text-muted-foreground">SKU</span>
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                Возможные дефициты на складе
              </p>
            </CardContent>
          </Card>

          <Card className="border-primary/50 bg-card/50">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Охват автозаказа
                </CardTitle>
                <Icon name="Target" size={18} className="text-primary" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold font-mono text-primary">{kpiData.coverage}%</span>
              </div>
              <Progress value={kpiData.coverage} className="mt-3 h-2" />
              <p className="text-xs text-muted-foreground mt-2">
                SKU под управлением системы
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="TruckIcon" size={20} />
                График загрузки поставок
              </CardTitle>
              <CardDescription>
                Планирование поставок на следующую неделю
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-end justify-between gap-3 h-64">
                {deliverySchedule.map((day) => (
                  <div key={day.day} className="flex-1 flex flex-col items-center gap-2">
                    <div className="w-full flex flex-col justify-end h-48 relative group">
                      <div 
                        className={`w-full rounded-t transition-all duration-300 hover:opacity-80 cursor-pointer ${getStatusColor(day.status)}`}
                        style={{ 
                          height: day.amount ? `${(day.amount / maxAmount) * 100}%` : '2px',
                          minHeight: day.amount ? '20px' : '2px'
                        }}
                      >
                        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-popover border border-border rounded px-2 py-1 text-xs whitespace-nowrap font-mono z-10">
                          {day.amount > 0 ? `${(day.amount / 1000).toFixed(0)}к ₽` : '—'}
                        </div>
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-xs font-medium">{day.day}</div>
                      <div className="text-xs text-muted-foreground">{day.date}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-center gap-6 mt-6 pt-4 border-t border-border">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded bg-destructive"></div>
                  <span className="text-xs text-muted-foreground">Критично</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded bg-warning"></div>
                  <span className="text-xs text-muted-foreground">Высокая</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded bg-primary"></div>
                  <span className="text-xs text-muted-foreground">Средняя</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded bg-success"></div>
                  <span className="text-xs text-muted-foreground">Низкая</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Bell" size={20} />
                  Срочные алерты
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {alerts.map((alert) => (
                  <Alert 
                    key={alert.id}
                    className={alert.type === "warning" ? "border-warning bg-warning/10" : "border-primary bg-primary/10"}
                  >
                    <Icon 
                      name={alert.icon as any} 
                      size={18}
                      className={alert.type === "warning" ? "text-warning" : "text-primary"}
                    />
                    <AlertDescription className="text-sm ml-2">
                      {alert.message}
                    </AlertDescription>
                  </Alert>
                ))}
              </CardContent>
            </Card>

            <Card className="bg-accent/20 border-accent">
              <CardHeader>
                <CardTitle className="text-base flex items-center gap-2">
                  <Icon name="Zap" size={18} />
                  Быстрые действия
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full justify-start" size="lg">
                  <Icon name="RefreshCw" className="mr-2" size={18} />
                  Сформировать рекомендации
                </Button>
                <Button variant="outline" className="w-full justify-start" size="lg">
                  <Icon name="ClipboardCheck" className="mr-2" size={18} />
                  Перейти к проверке
                </Button>
                <Button variant="outline" className="w-full justify-start" size="lg">
                  <Icon name="FileText" className="mr-2" size={18} />
                  Отчёты и аналитика
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        <Card className="border-muted">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <div className="flex items-center gap-4">
                <span>Последнее обновление: 05.12.2025, 14:23</span>
                <span className="flex items-center gap-1">
                  <div className="w-2 h-2 rounded-full bg-success animate-pulse"></div>
                  Система активна
                </span>
              </div>
              <span>v2.1.0</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;
