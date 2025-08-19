import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Server, Monitor, Smartphone, Wifi, Shield, AlertTriangle, CheckCircle } from "lucide-react";

const DeviceStatus = () => {
  const devices = [
    {
      id: 1,
      name: "Core Router",
      type: "Network",
      ip: "192.168.1.1",
      status: "online",
      threat: "none",
      lastSeen: "Active",
      cpu: 23,
      memory: 45,
      icon: Wifi
    },
    {
      id: 2,
      name: "Main Database Server",
      type: "Server", 
      ip: "192.168.1.10",
      status: "online",
      threat: "none",
      lastSeen: "Active",
      cpu: 67,
      memory: 78,
      icon: Server
    },
    {
      id: 3,
      name: "Admin Workstation",
      type: "Workstation",
      ip: "192.168.1.25",
      status: "online",
      threat: "medium",
      lastSeen: "2 min ago",
      cpu: 45,
      memory: 62,
      icon: Monitor
    },
    {
      id: 4,
      name: "Employee Phone #7",
      type: "Mobile",
      ip: "192.168.1.87",
      status: "online",
      threat: "none",
      lastSeen: "5 min ago",
      cpu: 12,
      memory: 34,
      icon: Smartphone
    },
    {
      id: 5,
      name: "File Server",
      type: "Server",
      ip: "192.168.1.15",
      status: "offline",
      threat: "high",
      lastSeen: "12 min ago",
      cpu: 0,
      memory: 0,
      icon: Server
    },
    {
      id: 6,
      name: "Security Camera Hub",
      type: "IoT",
      ip: "192.168.1.200",
      status: "online",
      threat: "none",
      lastSeen: "Active",
      cpu: 8,
      memory: 15,
      icon: Shield
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "online": return "border-success bg-success/20 text-success";
      case "offline": return "border-destructive bg-destructive/20 text-destructive";
      default: return "border-muted bg-muted/20 text-muted-foreground";
    }
  };

  const getThreatColor = (threat: string) => {
    switch (threat) {
      case "none": return "border-success bg-success/20 text-success";
      case "low": return "border-primary bg-primary/20 text-primary";
      case "medium": return "border-warning bg-warning/20 text-warning";
      case "high": return "border-destructive bg-destructive/20 text-destructive";
      default: return "border-muted bg-muted/20 text-muted-foreground";
    }
  };

  const getThreatIcon = (threat: string) => {
    switch (threat) {
      case "none": return <CheckCircle className="h-3 w-3" />;
      case "high": return <AlertTriangle className="h-3 w-3 animate-pulse-cyber" />;
      default: return <Shield className="h-3 w-3" />;
    }
  };

  return (
    <Card className="border-primary/20">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Server className="h-5 w-5 text-primary" />
          Device Status Monitor
        </CardTitle>
        <CardDescription>
          Real-time monitoring of network devices and security status
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[380px]">
          <div className="space-y-3">
            {devices.map((device) => {
              const IconComponent = device.icon;
              return (
                <div 
                  key={device.id}
                  className="p-4 border border-muted/20 rounded-lg hover:border-primary/40 transition-colors duration-300 bg-gradient-to-r from-card to-muted/5"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${getStatusColor(device.status)}`}>
                        <IconComponent className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm">{device.name}</h4>
                        <p className="text-xs text-muted-foreground">{device.ip}</p>
                      </div>
                    </div>
                    <div className="flex flex-col gap-1">
                      <Badge variant="outline" className={`${getStatusColor(device.status)} text-xs`}>
                        {device.status.toUpperCase()}
                      </Badge>
                      <Badge variant="outline" className={`${getThreatColor(device.threat)} text-xs`}>
                        {getThreatIcon(device.threat)}
                        {device.threat.toUpperCase()}
                      </Badge>
                    </div>
                  </div>

                  {/* Resource Usage */}
                  <div className="grid grid-cols-2 gap-3 mb-3">
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span>CPU</span>
                        <span>{device.cpu}%</span>
                      </div>
                      <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                        <div 
                          className={`h-full transition-all duration-1000 ${
                            device.cpu > 80 ? 'bg-destructive' :
                            device.cpu > 60 ? 'bg-warning' :
                            'bg-success'
                          }`}
                          style={{ width: `${device.cpu}%` }}
                        />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span>Memory</span>
                        <span>{device.memory}%</span>
                      </div>
                      <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                        <div 
                          className={`h-full transition-all duration-1000 ${
                            device.memory > 80 ? 'bg-destructive' :
                            device.memory > 60 ? 'bg-warning' :
                            'bg-success'
                          }`}
                          style={{ width: `${device.memory}%` }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">
                      Last seen: {device.lastSeen}
                    </span>
                    <div className="flex gap-1">
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="border-primary text-primary-foreground bg-primary/10 hover:bg-primary/20 text-xs h-6 px-2"
                      >
                        Details
                      </Button>
                      {device.threat !== "none" && (
                        <Button 
                          size="sm" 
                          variant="outline" 
                          className="border-warning text-warning-foreground bg-warning/10 hover:bg-warning/20 text-xs h-6 px-2"
                        >
                          Quarantine
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
};

export default DeviceStatus;