# 🎬 MovieGenie - AI-Powered Movie Recommendation System

![MovieGenie Banner](your-image-url-here)

## 🚀 Overview
**MovieGenie** is an AI-driven movie recommendation system that helps users discover movies based on natural language prompts, moods, plot descriptions, and scene-based queries. Powered by **Google Gemini AI**, it delivers highly personalized movie suggestions while offering advanced filtering options.

### ✨ Key Features
- **AI-Powered Recommendations**: Discover movies based on text queries, mood, or themes using **Google Gemini AI**.
- **Real-Time Movie Fetching**: Optimized performance with **React Query** and **Infinite Scroll**.
- **Advanced Filtering**: Search movies by **date, cast, language, genre, IMDb score, earnings, and awards**.
- **High Performance**: **Redis caching** reduces query latency by 70%.
- **Rate Limiting**: Prevents abuse using **Bucket4j**.
- **Modern UI**: Clean and intuitive design with **Tailwind CSS**.
- **Seamless Navigation**: Built with **React Router**.
- **Secure API Calls**: Handled via **Axios**.

## 🛠️ Tech Stack
### **Frontend (React)**
- **React 18** - Component-based UI
- **Redux Toolkit** - Global state management
- **React Query** - Efficient data fetching
- **React Infinite Scroll Component** - Smooth infinite scrolling
- **React Router** - Navigation & routing
- **React Player** - Embedded movie trailers
- **Tailwind CSS** - Responsive and modern styling
- **Axios** - API requests handling

### **Backend (Spring Boot)**
- **Spring AI** - AI-driven recommendations
- **Spring Boot** - Java-based backend framework
- **Redis** - Caching for faster responses
- **Bucket4j** - Rate limiting
- **Google Gemini API** - AI-powered movie recommendations

### **Development Tools**
- **Vite** - Fast build tool
- **ESLint & Prettier** - Code linting & formatting
- **PostCSS & Autoprefixer** - CSS optimization

## 🖼️ Screenshots
| Home Page | Movie Details | Search Results |
|-----------|--------------|----------------|
| ![Home](your-image-url-here) | ![Details](your-image-url-here) | ![Search](your-image-url-here) |

## 🏗️ Installation & Setup
### 1️⃣ Clone the Repository
```sh
 git clone https://github.com/your-username/moviegenie.git
 cd moviegenie
```

### 2️⃣ Backend Setup (Spring Boot)
Ensure you have **Java 17+** and **Maven** installed.
```sh
 cd backend
 mvn clean install
 mvn spring-boot:run
```

### 3️⃣ Frontend Setup (React)
Ensure you have **Node.js (v18+)** installed.
```sh
 cd frontend
 npm install
 npm run dev
```

### 4️⃣ Environment Variables
Create a `.env` file in the backend & frontend folders with the required API keys.

## 🚀 Deployment
- **Frontend**: Deployed on **Vercel/Netlify**
- **Backend**: Deployed using **Render/DigitalOcean**

## 🤝 Contributing
Feel free to submit pull requests or report issues!

## 📜 License
MIT License © 2025 **Your Name**

---
📩 **Have questions? Reach out!**
- 🌐 [Your Portfolio](your-portfolio-url)
- 🐦 Twitter: [@your-handle](https://twitter.com/your-handle)
- 📧 Email: your-email@example.com

