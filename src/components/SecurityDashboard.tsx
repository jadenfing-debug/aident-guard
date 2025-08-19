import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Shield, AlertTriangle, Wifi, Server, Activity, Eye } from "lucide-react";
import NetworkTopology from "./NetworkTopology";
import ThreatAlerts from "./ThreatAlerts";
import TrafficAnalytics from "./TrafficAnalytics";
import DeviceStatus from "./DeviceStatus";
import securityShield from "@/assets/security-shield.jpg";

const SecurityDashboard = () => {
  return (
    <div className="min-h-screen bg-background p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
            <Shield className="h-6 w-6 text-primary animate-pulse-cyber" />
          </div>
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-cyber-accent bg-clip-text text-transparent">
              AIdentGuard
            </h1>
            <p className="text-muted-foreground">AI-Powered Network Security Operations Center</p>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <Badge variant="outline" className="border-success text-success-foreground bg-success/10">
            <Activity className="h-3 w-3 mr-1" />
            System Online
          </Badge>
          <Badge variant="outline" className="border-warning text-warning-foreground bg-warning/10">
            <AlertTriangle className="h-3 w-3 mr-1" />
            3 Alerts
          </Badge>
        </div>
      </div>

      {/* Security Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="border-primary/20 bg-gradient-to-br from-card to-primary/5">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Network Status</CardTitle>
            <Wifi className="h-4 w-4 text-success" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-success">Secure</div>
            <p className="text-xs text-muted-foreground">
              No active threats detected
            </p>
            <Progress value={95} className="mt-2 h-2" />
          </CardContent>
        </Card>

        <Card className="border-warning/20 bg-gradient-to-br from-card to-warning/5">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Devices</CardTitle>
            <Server className="h-4 w-4 text-warning" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">127</div>
            <p className="text-xs text-muted-foreground">
              +12 from last hour
            </p>
            <Progress value={87} className="mt-2 h-2" />
          </CardContent>
        </Card>

        <Card className="border-destructive/20 bg-gradient-to-br from-card to-destructive/5">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Threat Level</CardTitle>
            <AlertTriangle className="h-4 w-4 text-destructive animate-pulse-cyber" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-warning">Medium</div>
            <p className="text-xs text-muted-foreground">
              3 suspicious activities
            </p>
            <Progress value={35} className="mt-2 h-2" />
          </CardContent>
        </Card>

        <Card className="border-cyber-grid/20 bg-gradient-to-br from-card to-cyber-grid/5">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Bandwidth Usage</CardTitle>
            <Activity className="h-4 w-4 text-cyber-grid animate-glow" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2.4 GB/s</div>
            <p className="text-xs text-muted-foreground">
              Peak: 3.1 GB/s
            </p>
            <Progress value={78} className="mt-2 h-2" />
          </CardContent>
        </Card>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Network Topology */}
        <div className="lg:col-span-2">
          <NetworkTopology />
        </div>

        {/* Threat Alerts */}
        <div>
          <ThreatAlerts />
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Traffic Analytics */}
        <TrafficAnalytics />
        
        {/* Device Status */}
        <DeviceStatus />
      </div>

      {/* Quick Actions */}
      <Card className="border-primary/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Eye className="h-5 w-5 text-primary" />
            Quick Response Actions
          </CardTitle>
          <CardDescription>
            Emergency response tools for immediate threat mitigation
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-4">
            <Button variant="outline" className="border-warning text-warning-foreground bg-warning/10 hover:bg-warning/20">
              Isolate Suspicious Device
            </Button>
            <Button variant="outline" className="border-destructive text-destructive-foreground bg-destructive/10 hover:bg-destructive/20">
              Block IP Range
            </Button>
            <Button variant="outline" className="border-primary text-primary-foreground bg-primary/10 hover:bg-primary/20">
              Run Deep Scan
            </Button>
            <Button variant="outline" className="border-success text-success-foreground bg-success/10 hover:bg-success/20">
              Update Firewall Rules
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SecurityDashboard;