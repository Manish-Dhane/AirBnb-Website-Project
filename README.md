# 🏠 HolidayHub – Airbnb Inspired Web Platform

A **full-stack Airbnb-inspired web application** built using **Node.js, Express, MongoDB, and EJS**.  
Users can **browse, create, and review property listings**, view locations on an interactive map, and upload images for properties.

🚀 **Live Demo:**  
👉 https://manish-holidayhub-website.onrender.com

![Node.js](https://img.shields.io/badge/Node.js-22.9.0-green)
![Express](https://img.shields.io/badge/Express-4.21.2-blue)
![MongoDB](https://img.shields.io/badge/MongoDB-Mongoose-brightgreen)
![Render](https://img.shields.io/badge/Deployed%20on-Render-purple)
![License](https://img.shields.io/badge/License-ISC-yellow)

---

# ✨ Features

🔐 **User Authentication**
- Secure signup/login with Passport.js
- Session-based authentication
- Password hashing

🏡 **Property Listings**
- Browse rental listings
- View property details
- Create new listings

📝 **Full CRUD Operations**
- Create
- Read
- Update
- Delete listings

⭐ **Review System**
- Add reviews and ratings
- User-specific review tracking

🗺 **Interactive Maps**
- Mapbox integration
- Real location coordinates
- Property markers

📸 **Image Upload**
- Cloudinary image hosting
- Multer file upload handling

📱 **Responsive Design**
- Mobile-friendly layout
- Bootstrap UI

🔒 **Data Validation**
- Server-side validation using Joi

💾 **Session Management**
- Persistent user login sessions

---

# 🌐 Live Deployment

The project is deployed on **Render**.

🔗 **Live Website:**  
https://manish-holidayhub-website.onrender.com

You can:
- Create listings
- Upload property images
- Add reviews
- Explore listings on map

---

# 🛠 Tech Stack

## Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- Passport.js

## Frontend
- EJS (Template Engine)
- Bootstrap
- CSS
- JavaScript

## Cloud Services
- **MongoDB Atlas** → Database
- **Cloudinary** → Image Storage
- **Mapbox** → Maps & Geolocation
- **Render** → Deployment

---

# 📦 Key Dependencies

- `express` → Web framework  
- `mongoose` → MongoDB ODM  
- `passport-local-mongoose` → Authentication  
- `cloudinary` → Image hosting  
- `multer` → File upload  
- `@mapbox/mapbox-sdk` → Maps integration  
- `joi` → Validation  
- `connect-flash` → Flash messages  
- `express-session` → Session handling  

---

# 📁 Project Structure

```
AirBnb-Website-Project
│
├── controller/        # Route controllers
├── models/            # Mongoose schemas
├── router/            # Express routes
├── views/             # EJS templates
├── public/            # Static assets
├── init/              # Database seed data
├── utils/             # Utility functions
│
├── app.js             # Main server file
├── middleware.js      # Custom middleware
├── schema.js          # Joi validation schemas
├── cloudConfig.js     # Cloudinary configuration
└── package.json
```

---

# 🚀 Getting Started

## Prerequisites

- Node.js
- MongoDB Atlas
- Cloudinary Account
- Mapbox Account

---

# Installation

### 1️⃣ Clone the repository

```bash
git clone https://github.com/Manish-Dhane/AirBnb-Website-Project.git
cd AirBnb-Website-Project
```

---

### 2️⃣ Install dependencies

```bash
npm install
```

---

### 3️⃣ Setup environment variables

Create a `.env` file:

```env
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_KEY=your_cloudinary_key
CLOUDINARY_SECRET=your_cloudinary_secret

MAPBOX_TOKEN=your_mapbox_token

ATLASDB_URL=your_mongodb_connection_string

SECRET=your_session_secret
```

---

### 4️⃣ Initialize database

```bash
node init/index.js
```

---

### 5️⃣ Run the server

```bash
node app.js
```

or

```bash
nodemon app.js
```

---

### 6️⃣ Open browser

```
http://localhost:8080
```

---

# 🎯 Key Functional Modules

## Authentication System

- Signup & login functionality
- Passport.js authentication
- Session handling

---

## Property Listings

Users can:

- Create property listings
- Upload images
- Edit or delete listings
- View location on map

---

## Review System

- Add property reviews
- Star ratings
- User-based review tracking

---

## Map Integration

Using **Mapbox Geocoding API**

- Convert location → coordinates
- Show markers on map

---

# 🌍 Deployment

This application can be deployed on:

- Render
- Railway
- Heroku
- DigitalOcean

Current deployment platform:

**Render**

Live URL:

```
https://manish-holidayhub-website.onrender.com
```

---

# 📸 Screenshots

*(Add screenshots of your homepage, listings page, and map view here for better GitHub presentation)*

---

# 🚧 Future Enhancements

- Payment integration (Stripe)
- Real-time chat
- Advanced search filters
- Email notifications
- Mobile app version
- Multi-language support

---

# 📄 License

This project is licensed under the **ISC License**.

---

# 👨‍💻 Author

**Manish Dhane**

GitHub  
https://github.com/Manish-Dhane

LinkedIn  
https://www.linkedin.com/in/manish-dhane/

---

# 🙏 Acknowledgements

- Airbnb for design inspiration
- Open-source community
- Mapbox
- Cloudinary
- MongoDB

---

⭐ If you found this project helpful, consider giving it a **star on GitHub**.