import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { DollarSign, Package, TrendingUp, Mail } from 'lucide-react';

interface KPIData {
  title: string;
  value: string;
  change: string;
  trend: 'up' | 'down';
}

interface KPICardsProps {
  data: KPIData[];
}

const iconMap = {
  'Total Sales': DollarSign,
  'Active Licenses': Package,
  'Top Brand Revenue': TrendingUp,
  'Unread Emails': Mail
};

export const KPICards: React.FC<KPICardsProps> = ({ data }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {data.map((kpi, index) => {
        const Icon = iconMap[kpi.title as keyof typeof iconMap] || DollarSign;
        
        return (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">{kpi.title}</p>
                  <p className="text-2xl font-bold text-foreground">{kpi.value}</p>
                  <p className={`text-sm ${kpi.trend === 'up' ? 'text-green-600' : 'text-destructive'}`}>
                    {kpi.change}
                  </p>
                </div>
                <div className="p-3 rounded-full bg-muted">
                  <Icon className="h-6 w-6 text-foreground" />
                </div>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};
