import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Server, Wifi, Monitor, Smartphone, Shield } from "lucide-react";
import networkTopologyImg from "@/assets/network-topology.jpg";

const NetworkTopology = () => {
  const devices = [
    { id: 1, type: "server", name: "Main Server", status: "secure", x: 20, y: 30 },
    { id: 2, type: "router", name: "Core Router", status: "secure", x: 50, y: 20 },
    { id: 3, type: "workstation", name: "Admin PC", status: "secure", x: 70, y: 40 },
    { id: 4, type: "mobile", name: "Mobile Device", status: "warning", x: 30, y: 60 },
    { id: 5, type: "server", name: "Database", status: "secure", x: 80, y: 70 },
    { id: 6, type: "workstation", name: "Workstation #1", status: "threat", x: 15, y: 75 },
  ];

  const getDeviceIcon = (type: string) => {
    switch (type) {
      case "server": return <Server className="h-4 w-4" />;
      case "router": return <Wifi className="h-4 w-4" />;
      case "workstation": return <Monitor className="h-4 w-4" />;
      case "mobile": return <Smartphone className="h-4 w-4" />;
      default: return <Shield className="h-4 w-4" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "secure": return "border-success bg-success/20 text-success";
      case "warning": return "border-warning bg-warning/20 text-warning animate-pulse-cyber";
      case "threat": return "border-destructive bg-destructive/20 text-destructive animate-pulse-cyber";
      default: return "border-muted bg-muted/20 text-muted-foreground";
    }
  };

  return (
    <Card className="border-primary/20 h-[500px]">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Wifi className="h-5 w-5 text-primary" />
          Network Topology
        </CardTitle>
        <CardDescription>
          Real-time visualization of network devices and connections
        </CardDescription>
      </CardHeader>
      <CardContent className="relative h-[400px] overflow-hidden">
        {/* Background Network Image */}
        <div 
          className="absolute inset-0 opacity-30 bg-cover bg-center rounded-lg"
          style={{ backgroundImage: `url(${networkTopologyImg})` }}
        />
        
        {/* Animated Grid Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-cyber-accent/5 rounded-lg">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] animate-pulse" />
        </div>
        
        {/* Connection Lines */}
        <svg className="absolute inset-0 w-full h-full">
          {devices.map((device, index) => 
            devices.slice(index + 1).map((otherDevice) => (
              <line
                key={`${device.id}-${otherDevice.id}`}
                x1={`${device.x}%`}
                y1={`${device.y}%`}
                x2={`${otherDevice.x}%`}
                y2={`${otherDevice.y}%`}
                stroke="hsl(var(--primary))"
                strokeWidth="1"
                opacity="0.3"
                className="animate-pulse"
              />
            ))
          )}
        </svg>
        
        {/* Device Nodes */}
        {devices.map((device) => (
          <div
            key={device.id}
            className="absolute transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer"
            style={{ left: `${device.x}%`, top: `${device.y}%` }}
          >
            <div className={`
              w-12 h-12 rounded-full border-2 flex items-center justify-center
              transition-all duration-300 hover:scale-110
              ${getStatusColor(device.status)}
            `}>
              {getDeviceIcon(device.type)}
            </div>
            
            {/* Device Info Tooltip */}
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="bg-card border border-primary/20 rounded-lg p-2 shadow-lg min-w-max">
                <div className="font-semibold text-sm">{device.name}</div>
                <div className="flex items-center gap-2 mt-1">
                  <Badge variant="outline" className={`text-xs ${getStatusColor(device.status)}`}>
                    {device.status.toUpperCase()}
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        ))}
        
        {/* Scanning Animation */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-transparent via-primary to-transparent opacity-60 animate-scan-line" />
        </div>
      </CardContent>
    </Card>
  );
};

export default NetworkTopology;