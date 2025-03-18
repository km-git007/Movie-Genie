# 🎬 MovieGenie - AI-Powered Movie Recommendation System

![MovieGenie Banner](your-image-url-here)

## 📌 Table of Contents
- [Overview](#-overview)
- [Key Features](#-key-features)
- [Tech Stack](#-tech-stack)
- [Screenshots](#-screenshots)
- [Installation & Setup](#-installation--setup)
- [Deployment](#-deployment)
- [Contributing](#-contributing)
- [License](#-license)
- [Contact](#-contact)

## 🚀 Overview
**MovieGenie** is an AI-driven movie recommendation system designed to help users discover movies effortlessly. By leveraging **Google Gemini AI**, it provides highly personalized movie suggestions based on **natural language prompts, moods, plot descriptions, and scene-based queries**.

## ✨ Key Features
✅ **AI-Powered Recommendations** - Get movie suggestions based on textual descriptions, moods, or themes using **Google Gemini AI**.  
✅ **Real-Time Data Fetching** - Optimized performance with **React Query** and **Infinite Scroll** for a seamless user experience.  
✅ **Advanced Filtering** - Filter movies by **date, cast, language, genre, IMDb score, earnings, and awards**.  
✅ **High Performance** - **Redis caching** reduces query latency by **70%**, ensuring fast responses.  
✅ **Rate Limiting** - **Bucket4j** prevents API abuse by implementing request rate limits.  
✅ **Modern UI** - A clean, intuitive interface designed with **Tailwind CSS**.  
✅ **Seamless Navigation** - Built with **React Router** for smooth transitions.  
✅ **Secure API Calls** - Managed through **Axios** to handle data retrieval safely.  

## 🛠️ Tech Stack

### 🔹 **Frontend (React)**
- **React 18** - Component-based UI architecture.
- **Redux Toolkit** - Efficient global state management.
- **React Query** - Advanced asynchronous data fetching.
- **React Infinite Scroll Component** - Seamless infinite scrolling.
- **React Router** - Dynamic navigation & routing.
- **React Player** - Embedded movie trailer support.
- **Tailwind CSS** - Modern, responsive UI styling.
- **Axios** - API request handling.

### 🔹 **Backend (Spring Boot)**
- **Spring AI** - AI-driven recommendation engine.
- **Spring Boot** - Java-based backend framework.
- **Redis** - High-speed caching for optimal performance.
- **Bucket4j** - API rate limiting to prevent abuse.
- **Google Gemini API** - AI-powered movie recommendations.

### 🔹 **Development Tools**
- **Vite** - Lightning-fast frontend build tool.
- **ESLint & Prettier** - Code linting & formatting for better maintainability.
- **PostCSS & Autoprefixer** - CSS optimization for better cross-browser support.

## 🖼️ Screenshots
| Home Page | Movie Details | Search Results |
|-----------|--------------|----------------|
| ![Home](your-image-url-here) | ![Details](your-image-url-here) | ![Search](your-image-url-here) |

## 🏗️ Installation & Setup

### 🔹 1️⃣ Clone the Repository
```sh
 git clone https://github.com/your-username/moviegenie.git
 cd moviegenie
```

### 🔹 2️⃣ Backend Setup (Spring Boot)
Ensure you have **Java 17+** and **Maven** installed.
```sh
 cd backend
 mvn clean install
 mvn spring-boot:run
```

### 🔹 3️⃣ Frontend Setup (React)
Ensure you have **Node.js (v18+)** installed.
```sh
 cd frontend
 npm install
 npm run dev
```

### 🔹 4️⃣ Environment Variables
Create a `.env` file in both **backend** and **frontend** folders with the required API keys and configuration settings.

## 🚀 Deployment
- **Frontend**: Deployed on **Vercel/Netlify**
- **Backend**: Deployed on **Render/DigitalOcean**

## 🤝 Contributing
We welcome contributions! If you’d like to contribute:
1. Fork the repository.
2. Create a feature branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -m "Add new feature"`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.

## 📜 License
This project is licensed under the **MIT License** © 2025 **Your Name**.

## 📩 Contact
- 🌐 [Your Portfolio](your-portfolio-url)
- 🐦 Twitter: [@your-handle](https://twitter.com/your-handle)
- 📧 Email: your-email@example.com

