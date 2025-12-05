import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import Icon from "@/components/ui/icon";
import { Progress } from "@/components/ui/progress";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

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
      case "critical": return "bg-[#9333EA]";
      case "high": return "bg-[#A855F7]";
      case "medium": return "bg-[#C084FC]";
      case "low": return "bg-[#E9D5FF]";
      default: return "bg-muted";
    }
  };

  const maxAmount = Math.max(...deliverySchedule.map(d => d.amount));

  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-3xl font-bold tracking-tight">Дашборд Автозаказа</h1>
        <p className="text-muted-foreground mt-1">Общий мониторинг и управление приоритетами</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className={`transition-all duration-300 hover:shadow-lg hover:scale-[1.02] cursor-pointer ${kpiData.ordersToCheck > 20 ? 'border-destructive/50 bg-destructive/5' : ''}`}>
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Заказов к проверке сегодня
              </CardTitle>
              <Icon name="ShoppingCart" size={18} className={`transition-transform duration-300 hover:scale-110 ${kpiData.ordersToCheck > 20 ? "text-destructive" : "text-primary"}`} />
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex items-baseline gap-2">
              <span className={`text-4xl font-bold font-mono transition-colors duration-300 ${kpiData.ordersToCheck > 20 ? 'text-destructive' : 'text-foreground'}`}>
                {kpiData.ordersToCheck}
              </span>
              {kpiData.ordersToCheck > 20 && (
                <Badge variant="destructive" className="animate-pulse">
                  КРИТИЧНО
                </Badge>
              )}
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              {kpiData.ordersToCheck > 20 ? 'Требуется срочная обработка' : 'Требуется проверка'}
            </p>
          </CardContent>
        </Card>

        <Card className="border-warning/50 bg-warning/5 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] cursor-pointer">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Потенциальный OOS (7 дней)
              </CardTitle>
              <Icon name="AlertCircle" size={18} className="text-warning transition-transform duration-300 hover:scale-110" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-bold font-mono text-warning transition-colors duration-300">{kpiData.oosRisk}</span>
              <span className="text-sm text-muted-foreground">SKU</span>
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              Риск дефицита на складе
            </p>
          </CardContent>
        </Card>

        <Card className="border-primary/50 bg-primary/5 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] cursor-pointer">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Охват автозаказа
              </CardTitle>
              <Icon name="Target" size={18} className="text-primary transition-transform duration-300 hover:scale-110" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-bold font-mono text-primary transition-colors duration-300">{kpiData.coverage}%</span>
            </div>
            <Progress value={kpiData.coverage} className="mt-3 h-2 transition-all duration-300" />
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
                      className={`w-full rounded-t transition-all duration-300 hover:opacity-80 hover:scale-105 hover:shadow-lg cursor-pointer ${getStatusColor(day.status)}`}
                      style={{ 
                        height: day.amount ? `${(day.amount / maxAmount) * 100}%` : '2px',
                        minHeight: day.amount ? '20px' : '2px'
                      }}
                    >
                      <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-popover border border-border rounded px-2 py-1 text-xs whitespace-nowrap font-mono z-10 shadow-lg">
                        {day.amount > 0 ? `${(day.amount / 1000).toFixed(0)}к ₽` : '—'}
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-xs font-medium group-hover:text-primary transition-colors">{day.day}</div>
                    <div className="text-xs text-muted-foreground">{day.date}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-center gap-6 mt-6 pt-4 border-t border-border">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded bg-[#9333EA]"></div>
                <span className="text-xs text-muted-foreground">Критично</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded bg-[#A855F7]"></div>
                <span className="text-xs text-muted-foreground">Высокая</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded bg-[#C084FC]"></div>
                <span className="text-xs text-muted-foreground">Средняя</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded bg-[#E9D5FF]"></div>
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
                  className={`transition-all duration-300 hover:shadow-md hover:scale-[1.02] cursor-pointer ${alert.type === "warning" ? "border-warning bg-warning/10 hover:bg-warning/20" : "border-primary bg-primary/10 hover:bg-primary/20"}`}
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

          <Card className="bg-primary/10 border-primary">
            <CardHeader>
              <CardTitle className="text-base flex items-center gap-2">
                <Icon name="Zap" size={18} />
                Быстрые действия
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full justify-start" size="lg">
                <Icon name="RefreshCw" className="mr-2" size={18} />
                Сформировать рекомендации на сегодня
              </Button>
              <Button 
                variant="outline" 
                className="w-full justify-start" 
                size="lg"
                onClick={() => navigate('/workspace')}
              >
                <Icon name="ClipboardCheck" className="mr-2" size={18} />
                Перейти к проверке
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      <Card className="border-muted">
        <CardContent className="pt-6">
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <div className="flex items-center gap-4">
              <span>Последнее обновление: 05.12.2024, 14:23</span>
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
  );
};

export default Dashboard;