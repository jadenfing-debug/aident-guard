import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { toast } from "@/hooks/use-toast";
import { Bell, Camera, MonitorUp, MapPin } from "lucide-react";

 type PermissionState = 'unknown' | 'granted' | 'denied' | 'prompt';

const PermissionsPanel = () => {
  const [notificationState, setNotificationState] = useState<PermissionState>('unknown');
  const [mediaState, setMediaState] = useState<PermissionState>('unknown');
  const [screenState, setScreenState] = useState<PermissionState>('unknown');
  const [geoState, setGeoState] = useState<PermissionState>('unknown');

  const badgeClass = (state: PermissionState) => {
    switch (state) {
      case 'granted':
        return 'border-success text-success-foreground bg-success/10';
      case 'denied':
        return 'border-destructive text-destructive-foreground bg-destructive/10';
      case 'prompt':
        return 'border-warning text-warning-foreground bg-warning/10';
      default:
        return 'border-muted text-muted-foreground bg-muted/10';
    }
  };

  const requestNotifications = async () => {
    try {
      if (!('Notification' in window)) {
        toast({ title: 'Unsupported', description: 'Notifications are not supported in this browser.' });
        return;
      }
      const result = await Notification.requestPermission();
      setNotificationState(result as PermissionState);
      toast({ title: 'Notifications', description: `Permission: ${result}` });
    } catch (e: any) {
      setNotificationState('denied');
      toast({ title: 'Notifications Error', description: e?.message || 'Failed to request permission' });
    }
  };

  const requestMedia = async () => {
    try {
      if (!navigator.mediaDevices?.getUserMedia) {
        toast({ title: 'Unsupported', description: 'Media devices not available.' });
        return;
      }
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      stream.getTracks().forEach((t) => t.stop());
      setMediaState('granted');
      toast({ title: 'Microphone', description: 'Access granted.' });
    } catch (e: any) {
      setMediaState('denied');
      toast({ title: 'Microphone', description: e?.message || 'Access denied.' });
    }
  };

  const requestScreen = async () => {
    try {
      if (!navigator.mediaDevices?.getDisplayMedia) {
        toast({ title: 'Unsupported', description: 'Screen capture not available.' });
        return;
      }
      const stream = await navigator.mediaDevices.getDisplayMedia({ video: true });
      stream.getTracks().forEach((t) => t.stop());
      setScreenState('granted');
      toast({ title: 'Screen Capture', description: 'Access granted.' });
    } catch (e: any) {
      setScreenState('denied');
      toast({ title: 'Screen Capture', description: e?.message || 'Access denied.' });
    }
  };

  const requestGeolocation = () => {
    try {
      if (!navigator.geolocation) {
        toast({ title: 'Unsupported', description: 'Geolocation not available.' });
        return;
      }
      navigator.geolocation.getCurrentPosition(
        () => {
          setGeoState('granted');
          toast({ title: 'Geolocation', description: 'Access granted.' });
        },
        (err) => {
          setGeoState('denied');
          toast({ title: 'Geolocation', description: err?.message || 'Access denied.' });
        }
      );
    } catch (e: any) {
      setGeoState('denied');
      toast({ title: 'Geolocation', description: e?.message || 'Access denied.' });
    }
  };

  return (
    <Card className="border-primary/20">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Bell className="h-5 w-5 text-primary" />
          Permissions & Real-time Capture
        </CardTitle>
        <CardDescription>
          Grant system permissions to enable real-time monitoring features
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 rounded-lg border border-muted/20 bg-gradient-to-br from-card to-muted/5">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <Bell className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">Notifications</span>
              </div>
              <Badge variant="outline" className={`text-xs ${badgeClass(notificationState)}`}>{notificationState.toUpperCase()}</Badge>
            </div>
            <Button variant="outline" className="w-full border-primary text-primary-foreground bg-primary/10 hover:bg-primary/20" onClick={requestNotifications}>
              Request
            </Button>
          </div>

          <div className="p-4 rounded-lg border border-muted/20 bg-gradient-to-br from-card to-muted/5">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <Camera className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">Microphone</span>
              </div>
              <Badge variant="outline" className={`text-xs ${badgeClass(mediaState)}`}>{mediaState.toUpperCase()}</Badge>
            </div>
            <Button variant="outline" className="w-full border-primary text-primary-foreground bg-primary/10 hover:bg-primary/20" onClick={requestMedia}>
              Request
            </Button>
          </div>

          <div className="p-4 rounded-lg border border-muted/20 bg-gradient-to-br from-card to-muted/5">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <MonitorUp className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">Screen Capture</span>
              </div>
              <Badge variant="outline" className={`text-xs ${badgeClass(screenState)}`}>{screenState.toUpperCase()}</Badge>
            </div>
            <Button variant="outline" className="w-full border-primary text-primary-foreground bg-primary/10 hover:bg-primary/20" onClick={requestScreen}>
              Request
            </Button>
          </div>

          <div className="p-4 rounded-lg border border-muted/20 bg-gradient-to-br from-card to-muted/5">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">Geolocation</span>
              </div>
              <Badge variant="outline" className={`text-xs ${badgeClass(geoState)}`}>{geoState.toUpperCase()}</Badge>
            </div>
            <Button variant="outline" className="w-full border-primary text-primary-foreground bg-primary/10 hover:bg-primary/20" onClick={requestGeolocation}>
              Request
            </Button>
          </div>
        </div>

        <p className="text-xs text-muted-foreground mt-4">
          Note: For low-level packet capture and device isolation, native capabilities are required. We can enable this via Capacitor for iOS/Android/desktop.
        </p>
      </CardContent>
    </Card>
  );
};

export default PermissionsPanel;
