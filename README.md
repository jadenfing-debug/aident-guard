# AIdentGuard - AI-Powered Network Intrusion Detection System

🛡️ An advanced Network Intrusion Detection and Response System (NIDRS) powered by artificial intelligence for real-time threat monitoring and automated response.

## 🎯 Project Overview

AIdentGuard is a comprehensive cybersecurity solution that combines traditional signature-based detection with machine learning-powered anomaly detection. The system provides real-time network monitoring, threat detection, and automated response capabilities for enterprise-level network security.

### Key Features

- **Real-time Network Monitoring** - Live traffic analysis and logging
- **Hybrid Threat Detection** - Signature-based and ML-powered anomaly detection
- **Automated Response System** - Instant threat isolation and admin notifications
- **Interactive Security Dashboard** - Live visualization of network status and threats
- **Device Management** - Complete network topology and device status monitoring
- **Permission Management** - System-level access control for security operations

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ (recommended: use [nvm](https://github.com/nvm-sh/nvm))
- npm or yarn package manager
- Modern web browser with support for modern web APIs

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/aidentguard.git
   cd aidentguard
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   Edit `.env` with your Supabase credentials (if using backend features)

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   Navigate to `http://localhost:8080`

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **UI Framework**: shadcn/ui, Tailwind CSS
- **Charts & Visualization**: Recharts
- **State Management**: TanStack Query
- **Backend Integration**: Supabase (optional)
- **Network Monitoring**: Web APIs (with plans for native integration)

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/              # shadcn/ui components
│   ├── SecurityDashboard.tsx
│   ├── NetworkTopology.tsx
│   ├── ThreatAlerts.tsx
│   ├── TrafficAnalytics.tsx
│   ├── DeviceStatus.tsx
│   └── PermissionsPanel.tsx
├── pages/
│   ├── Index.tsx
│   └── NotFound.tsx
├── hooks/
├── lib/
└── assets/
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your GitHub repository to [Vercel](https://vercel.com)
3. Deploy with default settings

### Netlify

1. Build the project: `npm run build`
2. Deploy the `dist` folder to [Netlify](https://netlify.com)

### Self-hosted

1. Build the project: `npm run build`
2. Serve the `dist` folder with any static file server

## 🛡️ Security Features

### Current Implementation
- **Dashboard Monitoring**: Real-time security metrics visualization
- **Network Topology**: Interactive network device mapping
- **Threat Detection**: Simulated threat detection with alert system
- **Traffic Analysis**: Network traffic pattern analysis
- **Permission Management**: Web API permission requests

### Planned Enhancements
- **Real Packet Capture**: Integration with native network monitoring tools
- **ML-based Anomaly Detection**: Advanced threat pattern recognition
- **Automated Response**: Network device isolation and blocking
- **SIEM Integration**: Security Information and Event Management
- **Compliance Reporting**: Security audit and compliance reports

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

- Create an [Issue](https://github.com/your-username/aidentguard/issues) for bug reports
- Start a [Discussion](https://github.com/your-username/aidentguard/discussions) for questions
- Check the [Wiki](https://github.com/your-username/aidentguard/wiki) for documentation

## 🎯 Roadmap

- [ ] Native packet capture integration
- [ ] Machine learning model training interface
- [ ] Real-time device isolation capabilities
- [ ] Advanced threat intelligence feeds
- [ ] Multi-tenant support
- [ ] Mobile companion app
- [ ] API documentation and SDK

---

**⚠️ Security Notice**: This is a demonstration/development version. For production use in critical environments, ensure proper security auditing and compliance with your organization's security policies.