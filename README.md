# 🛒 Shopping List Application

![Shopping List](https://github.com/user-attachments/assets/1602df5f-7746-4d86-9a08-1481f89431c0)

## 📝 Overview

A modern, feature-rich shopping list application that enables users to manage their shopping needs efficiently while offering social sharing capabilities. Built with React.js and Redux, this application provides a seamless experience for creating and managing shopping lists.

## ✨ Key Features

### Core Functionality
- **User Authentication** 
  - Secure email/password registration
  - JWT-based authentication
  - Password recovery system
  - Social media login integration

- **Shopping List Management**
  - Create multiple shopping lists
  - Add, edit, and remove items
  - Categorize items by type
  - Set quantities and priority levels
  - Add price estimates
  - Mark items as purchased

- **Social Features**
  - Share lists via social media platforms
  - Collaborative list editing
  - Real-time updates for shared lists
  - Comment system on shared items

### Additional Features
- **Smart Suggestions**
  - Auto-complete for common items
  - Recently used items list
  - Frequently bought items suggestions

- **Profile Management**
  - Customizable user profiles
  - Shopping preferences
  - Notification settings
  - Language preferences

## 🛠️ Technical Stack

### Frontend
- **React.js** (^18.0.0) - UI development
- **Redux** (^4.2.0) - State management
- **React-Redux** (^8.0.0) - React bindings
- **Redux Toolkit** - Modern Redux development
- **Axios** - API communication
- **Material-UI** - UI components
- **React Router** - Navigation
- **React Share** - Social media sharing

### Backend
- **JSON Server** - REST API simulation
- **JWT** - Authentication
- **json-server-auth** - Authentication middleware

## 📦 Installation

### Prerequisites
- Node.js (v16 or higher)
- npm (v7 or higher)
- Git

### Setup Steps

1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-username/shopping-list-app.git
   cd shopping-list-app
   ```

2. **Environment Setup**
   ```bash
   cp .env.example .env
   # Configure your environment variables in .env
   ```

3. **Install Dependencies**
   ```bash
   npm install
   ```

4. **Start Development Servers**
   ```bash
   # Terminal 1: Start JSON Server
   npm run server

   # Terminal 2: Start React Application
   npm start
   ```

5. **Access the Application**
   - Frontend: [http://localhost:3000](http://localhost:3000)
   - API: [http://localhost:3001](http://localhost:3001)

## 📁 Project Structure

```
shopping-list-app/
├── src/
│   ├── components/         # React components
│   ├── features/          # Feature-based modules
│   ├── hooks/            # Custom React hooks
│   ├── services/         # API services
│   ├── store/            # Redux store configuration
│   ├── styles/           # Global styles
│   └── utils/            # Utility functions
├── public/               # Static assets
├── server/               # JSON Server configuration
└── tests/                # Test files
```

## 🔧 Configuration

### Environment Variables
```env
REACT_APP_API_URL=http://localhost:3001
REACT_APP_AUTH_TOKEN_KEY=shopping_list_token
REACT_APP_SOCIAL_SHARE_API_KEY=your_api_key
```

## 🧪 Testing

```bash
# Run unit tests
npm test

# Run integration tests
npm run test:integration

# Generate coverage report
npm run test:coverage
```

## 🚀 Deployment

1. **Build the Application**
   ```bash
   npm run build
   ```

2. **Deploy to Production**
   ```bash
   npm run deploy
   ```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Contribution Guidelines
- Follow the existing code style
- Write meaningful commit messages
- Add tests for new features
- Update documentation as needed

## 📄 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## 📞 Support & Contact

- **Email**: okpoco15@gmail.com
- **Issues**: [GitHub Issues](https://github.com/your-username/shopping-list-app/issues)
- **Discussions**: [GitHub Discussions](https://github.com/your-username/shopping-list-app/discussions)

## 🙏 Acknowledgments

- Material-UI for the component library
- JSON Server team for the mock backend
- All contributors who have helped improve this project

---
Made with ❤️ by the Shopping List Team
