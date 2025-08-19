import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, Activity, Zap } from "lucide-react";

const TrafficAnalytics = () => {
  const trafficData = {
    inbound: "1.8 GB/s",
    outbound: "640 MB/s",
    packets: "2.4M/sec",
    connections: "15,847",
    trend: "+12%"
  };

  const protocols = [
    { name: "HTTPS", percentage: 45, color: "success" },
    { name: "HTTP", percentage: 25, color: "warning" },
    { name: "SSH", percentage: 15, color: "primary" },
    { name: "FTP", percentage: 8, color: "destructive" },
    { name: "Other", percentage: 7, color: "muted" }
  ];

  const recentActivity = [
    { time: "14:23:45", event: "Large file upload detected", size: "2.1 GB", protocol: "HTTPS" },
    { time: "14:22:31", event: "Bulk data transfer", size: "856 MB", protocol: "SSH" },
    { time: "14:21:18", event: "Database synchronization", size: "423 MB", protocol: "HTTPS" },
    { time: "14:20:05", event: "File server backup", size: "1.3 GB", protocol: "FTP" },
  ];

  return (
    <Card className="border-primary/20">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Activity className="h-5 w-5 text-primary animate-glow" />
          Traffic Analytics
        </CardTitle>
        <CardDescription>
          Real-time network traffic patterns and protocol analysis
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Traffic Overview */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="text-center p-3 border border-success/20 rounded-lg bg-success/5">
            <div className="text-lg font-bold text-success">{trafficData.inbound}</div>
            <div className="text-xs text-muted-foreground">Inbound Traffic</div>
          </div>
          <div className="text-center p-3 border border-warning/20 rounded-lg bg-warning/5">
            <div className="text-lg font-bold text-warning">{trafficData.outbound}</div>
            <div className="text-xs text-muted-foreground">Outbound Traffic</div>
          </div>
          <div className="text-center p-3 border border-primary/20 rounded-lg bg-primary/5">
            <div className="text-lg font-bold text-primary">{trafficData.packets}</div>
            <div className="text-xs text-muted-foreground">Packets/Sec</div>
          </div>
          <div className="text-center p-3 border border-cyber-accent/20 rounded-lg bg-cyber-accent/5">
            <div className="text-lg font-bold text-cyber-accent">{trafficData.connections}</div>
            <div className="text-xs text-muted-foreground">Active Connections</div>
          </div>
        </div>

        {/* Protocol Distribution */}
        <div>
          <h4 className="font-semibold mb-3 flex items-center gap-2">
            <Zap className="h-4 w-4 text-primary" />
            Protocol Distribution
          </h4>
          <div className="space-y-2">
            {protocols.map((protocol) => (
              <div key={protocol.name} className="flex items-center justify-between">
                <div className="flex items-center gap-3 min-w-0 flex-1">
                  <span className="text-sm font-medium">{protocol.name}</span>
                  <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                    <div 
                      className={`h-full transition-all duration-1000 ${
                        protocol.color === 'success' ? 'bg-success' :
                        protocol.color === 'warning' ? 'bg-warning' :
                        protocol.color === 'primary' ? 'bg-primary' :
                        protocol.color === 'destructive' ? 'bg-destructive' :
                        'bg-muted-foreground'
                      }`}
                      style={{ width: `${protocol.percentage}%` }}
                    />
                  </div>
                </div>
                <span className="text-sm text-muted-foreground ml-2">{protocol.percentage}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h4 className="font-semibold flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-success" />
              Recent High-Volume Activity
            </h4>
            <Badge variant="outline" className="border-success text-success-foreground bg-success/10">
              <TrendingUp className="h-3 w-3 mr-1" />
              {trafficData.trend}
            </Badge>
          </div>
          <div className="space-y-2">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-center justify-between p-2 border border-muted/20 rounded-lg bg-gradient-to-r from-card to-muted/5 hover:border-primary/40 transition-colors">
                <div>
                  <div className="text-sm font-medium">{activity.event}</div>
                  <div className="text-xs text-muted-foreground">{activity.time}</div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-bold text-primary">{activity.size}</div>
                  <div className="text-xs text-muted-foreground">{activity.protocol}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TrafficAnalytics;