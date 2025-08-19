import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { AlertTriangle, Shield, Clock, MapPin, User } from "lucide-react";

const ThreatAlerts = () => {
  const alerts = [
    {
      id: 1,
      type: "Intrusion Attempt",
      severity: "high",
      source: "192.168.1.45",
      target: "Web Server",
      time: "2 minutes ago",
      location: "External",
      user: "Unknown",
      description: "Multiple failed SSH login attempts detected"
    },
    {
      id: 2,
      type: "Suspicious Traffic",
      severity: "medium",
      source: "10.0.1.23",
      target: "Database Server",
      time: "8 minutes ago",
      location: "Internal",
      user: "john.doe",
      description: "Unusual data transfer patterns observed"
    },
    {
      id: 3,
      type: "Port Scan",
      severity: "medium",
      source: "203.45.67.89",
      target: "Network Range",
      time: "15 minutes ago",
      location: "External",
      user: "Unknown",
      description: "Systematic port scanning activity detected"
    },
    {
      id: 4,
      type: "Malware Detection",
      severity: "high",
      source: "10.0.1.15",
      target: "Workstation #3",
      time: "23 minutes ago",
      location: "Internal",
      user: "jane.smith",
      description: "Potential trojan activity in user directory"
    },
    {
      id: 5,
      type: "Anomalous Behavior",
      severity: "low",
      source: "10.0.1.67",
      target: "File Server",
      time: "1 hour ago",
      location: "Internal",
      user: "admin",
      description: "After-hours access to sensitive files"
    }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "high": return "border-destructive bg-destructive/20 text-destructive";
      case "medium": return "border-warning bg-warning/20 text-warning";
      case "low": return "border-primary bg-primary/20 text-primary";
      default: return "border-muted bg-muted/20 text-muted-foreground";
    }
  };

  const getSeverityIcon = (severity: string) => {
    return severity === "high" ? 
      <AlertTriangle className="h-3 w-3 animate-pulse-cyber" /> : 
      <Shield className="h-3 w-3" />;
  };

  return (
    <Card className="border-destructive/20 h-[500px]">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <AlertTriangle className="h-5 w-5 text-destructive animate-pulse-cyber" />
          Threat Alerts
        </CardTitle>
        <CardDescription>
          Real-time security incidents and anomaly detection
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[380px]">
          <div className="space-y-4">
            {alerts.map((alert) => (
              <div 
                key={alert.id} 
                className="p-4 border border-muted/20 rounded-lg hover:border-primary/40 transition-colors duration-300 bg-gradient-to-r from-card to-muted/5"
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className={`${getSeverityColor(alert.severity)} text-xs`}>
                      {getSeverityIcon(alert.severity)}
                      {alert.severity.toUpperCase()}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      {alert.type}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    {alert.time}
                  </div>
                </div>
                
                <h4 className="font-semibold text-sm mb-2">{alert.description}</h4>
                
                <div className="grid grid-cols-2 gap-2 text-xs text-muted-foreground mb-3">
                  <div className="flex items-center gap-1">
                    <span className="font-medium">Source:</span> {alert.source}
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="font-medium">Target:</span> {alert.target}
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    {alert.location}
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="h-3 w-3" />
                    {alert.user}
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="border-primary text-primary-foreground bg-primary/10 hover:bg-primary/20 text-xs h-7"
                  >
                    Investigate
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="border-destructive text-destructive-foreground bg-destructive/10 hover:bg-destructive/20 text-xs h-7"
                  >
                    Block Source
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="border-muted text-muted-foreground bg-muted/10 hover:bg-muted/20 text-xs h-7"
                  >
                    Dismiss
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
};

export default ThreatAlerts;