# 🛒 TwinMart – Full Stack E-Commerce Application

TwinMart is a full-stack e-commerce web application built using **React.js** for the frontend and **Spring Boot** for the backend.  
The project focuses on secure authentication, clean UI design, and smooth frontend–backend integration, simulating real-world e-commerce functionality.

---

## 📌 Features

- User authentication and authorization using **JWT and Spring Security**
- Secure login and signup with protected routes
- Product listing with category-based filtering
- Shopping cart management using **Context API**
- User profile view and update functionality
- RESTful API integration with proper error handling
- Responsive UI built using **Tailwind CSS**
- Stateless backend architecture with token-based security

---

## 🧑‍💻 Tech Stack

### Frontend
- React.js  
- JavaScript (ES6+)  
- React Router  
- Context API  
- React Query  
- Formik  
- Tailwind CSS  

### Backend
- Spring Boot  
- Spring Security  
- JWT Authentication  
- REST APIs  

### Database & Tools
- MySQL  
- Git  
- GitHub  

---

## 🔐 Authentication Flow

1. User logs in or signs up
2. Backend generates a **JWT token**
3. Token is stored on the client
4. Token is attached to API requests via the Authorization header
5. Spring Security validates the token on each request

---

## 🚀 Getting Started

### Frontend Setup
```bash
npm install
npm run dev
mvn clean install
mvn spring-boot:run

## 📂 Project Structure
TwinMart
├── frontend
│   ├── components
│   ├── pages
│   ├── context
│   ├── api
│   └── styles
├── backend
│   ├── controller
│   ├── service
│   ├── repository
│   ├── security
│   └── dto
