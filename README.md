# SmartWaste - AI-Powered Waste Management Platform

A comprehensive, affordable AI-powered waste management system designed for municipalities and local governments. Built with Next.js 14 and powered by AI for intelligent waste classification and management.

## 🌟 Features

### Core Functionality
- **AI Waste Classification**: Upload images for instant waste type identification using CNN model
- **Smart Collection Requests**: Location-based collection requests with heatmap visualization
- **Predictive Analytics**: Forecast waste generation patterns and optimize collection routes
- **Real-time Alerts**: Automated notifications for collection triggers and recyclable detection
- **Admin Dashboard**: Comprehensive management panel with analytics and reporting

### User Experience
- **Mobile-First Design**: PWA support with offline functionality
- **Glassmorphism UI**: Modern, accessible interface with Tailwind CSS
- **Multilingual Support**: Available in multiple languages
- **Gamification**: Eco-points, achievements, and leaderboards to encourage participation

### Technical Stack
- **Frontend**: Next.js 14 with App Router
- **Styling**: Tailwind CSS with Glassmorphism design
- **Package Manager**: pnpm for faster, more efficient dependency management
- **AI Integration**: CNN model for waste classification
- **Real-time Updates**: Live data synchronization
- **Responsive Design**: Cross-device compatibility

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- pnpm (Install with `npm install -g pnpm`)
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/sarsaf.ai.git
   cd sarsaf.ai
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Configure the following variables in `.env.local`:
   ```env
   # Database
   DATABASE_URL="your-database-url"
   
   # AI Model
   MODEL_PATH="./model"
   
   # Email Alerts
   SMTP_HOST="your-smtp-host"
   SMTP_USER="your-smtp-user"
   SMTP_PASS="your-smtp-password"
   
   # Optional: External APIs
   MAPS_API_KEY="your-maps-api-key"
   TWILIO_SID="your-twilio-sid"
   TWILIO_TOKEN="your-twilio-token"
   ```

4. **Start the development server**
   ```bash
   pnpm dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:3000`

## 📁 Project Structure

```
sarsaf.ai/
├── app/              # Next.js app directory
├── components/       # Reusable UI components
├── hooks/           # Custom React hooks
├── lib/             # Utility functions and configurations
├── model/           # AI model and related files
├── public/          # Static assets
└── styles/          # Global styles and Tailwind config
```

## 🛠️ Development

### Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint
- `pnpm format` - Format code with Prettier

### Code Style

This project uses:
- ESLint for code linting
- Prettier for code formatting
- TypeScript for type safety

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- All contributors who have helped shape this project

## 📞 Support

For support, email support@sarsaf.ai or open an issue in the repository.
