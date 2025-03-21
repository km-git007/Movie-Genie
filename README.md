# 🎬 MovieGenie - AI-Powered Movie Recommendation System 

## 🚀 Overview  

**MovieGenie** is an AI-powered movie recommendation platform that **understands natural language prompts** to suggest movies tailored to your preferences. Whether you're in the mood for a **thrilling heist film**, a **heartfelt romantic drama**, or a **sci-fi adventure with time travel**, MovieGenie has got you covered.

It leverages **Google Gemini AI** to process queries like:  
> _"Show me a mind-bending thriller like Inception."_  
> _"Movie in which an astronaut gets left behind at Mars and he's rescued back to Earth."_  
> _"I dont feel good today. Suggest me a moodlifting rom-com movie from the 90s."_

## 📸 Stunning UI Preview  

| **HomePage** | **Detailed Movie Insights** | **Smart Search Results** | **Cast & Actor Profiles** |
|-----------------------|---------------------------|-------------------------|--------------------------|
| ![MovieGenie Banner](https://github.com/user-attachments/assets/84bf1f55-fcbb-4cde-80e6-b7d84fe6cff4)   | ![Movie Details](https://github.com/user-attachments/assets/30afb6c4-d8c7-4e60-92ec-81a3d257ba59) | ![Search Results](https://github.com/user-attachments/assets/9a45614d-1589-4b22-874a-7543aa5e3f6f) | ![Cast Details](https://github.com/user-attachments/assets/0b51b8ae-e957-4e51-b2fb-1e5fecccd09a) |


## ✨ Core Features  

✔ **AI-Powered Movie Search** – Get recommendations based on **mood, actors, themes, or specific descriptions** using **Google Gemini AI**.  
✔ **Real-Time Data Fetching** – Instant movie information via **React Query** and **Infinite Scroll**.  
✔ **Deep Movie Insights** – View trailers, cast details, streaming platforms, IMDb & Wikipedia links.  
✔ **Advanced Filtering** – Sort by **release year, genre, IMDb rating, box office earnings, and more**.  
✔ **High-Performance Caching** – **Redis caching** improves query speed by **70%**.  
✔ **Secure API Calls** – Axios ensures safe and reliable data retrieval.  
✔ **Modern UI** – Built with **Tailwind CSS** for a sleek and responsive interface.  
✔ **Spring Boot** & **Spring Data JPA** – Used for backend development and efficient database management.  
✔ **Rate Limiting** – **Bucket4j** prevents API overuse and abuse.


## 🔥 Key Functionalities

### 1️⃣ AI-Powered Search (The Heart of MovieGenie)
![AI Search](https://github.com/user-attachments/assets/c2c440d4-c5a6-4dca-a344-088128cc9086)
The AI Search is the most powerful feature of MovieGenie, allowing users to search for movies in the most natural and intuitive way.

💡 **How it works:**
- Simply enter a movie-related query using natural language (e.g., “Find a dark psychological thriller like The Joker”).
- **Google Gemini AI** processes your request and fetches personalized recommendations.
- Results are displayed instantly with **posters, IMDb ratings, and genre tags**.
- Advanced filtering allows users to refine results by **year, cast, language, and box office performance**.

🎥 **Example Search Queries:**
✔ “Show me classic sci-fi movies with time travel elements.”
✔ “Find movies starring Brad Pitt and directed by Quentin Tarantino.”
✔ “List animated movies with a deep emotional story.”

### 2️⃣ Movie Details Page
Once a user selects a movie, the **Movie Details Page** provides a comprehensive breakdown including:

🎬 **Plot Overview** – A summary of the movie.
🎭 **Cast Information** – Names and roles of key actors.
📺 **Streaming Platforms** – Shows where you can watch the movie (**Netflix, Disney+, etc.**).
🎞 **Trailer Preview** – Embedded **YouTube trailer** for quick viewing.
📖 **Wikipedia & IMDb Links** – One-click access to more detailed information.

### 3️⃣ Cast & Actor Details
The **Cast Details Page** helps users explore actors and their filmography in depth.

📌 **Features:**
- Shows the **full list of actors** in a movie.
- Displays **actor biographies, notable films, and awards**.
- Allows users to click on an actor to view **other movies they’ve starred in**.

💡 **Example Use Case:**
You’re watching **Interstellar** and find **Matthew McConaughey’s** performance impressive. Simply click on his name to see all his movies, including **Dallas Buyers Club, True Detective, and The Wolf of Wall Street**.

## 🛠️ Tech Stack

### 🔹 **Frontend (React)**
- **React 18** - Component-driven UI architecture.
- **Redux Toolkit** - Centralized state management.
- **React Query** - Efficient API data fetching and caching.
- **React Router** - Seamless navigation.
- **React Player** - Embedded YouTube trailer support.
- **Tailwind CSS** - Clean, responsive UI styling.
- **Axios** - Secure API calls.

### 🔹 **Backend (Spring Boot)**
- **Spring AI** - AI-powered recommendation engine.
- **Spring Boot** - Fast and scalable backend framework.
- **Redis** - High-speed caching.
- **Bucket4j** - API rate limiting.
- **Google Gemini API** - AI-powered movie analysis.

## 🚀 Deployment
- **Frontend**: Deployed on **Vercel**
- **Backend**: Deployed on **Render**

## 📩 Contact
- 🔗 [LinkedIn](https://www.linkedin.com/in/kaustavmishra)
- 📧 Email: mishrakaustav10@gmail.com
