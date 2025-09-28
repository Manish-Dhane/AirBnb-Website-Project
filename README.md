# 🏠 AirBnb Website Project

A full-stack web application inspired by Airbnb, built with Node.js, Express, and MongoDB. This platform allows users to list, browse, and book rental properties with features like user authentication, reviews, and interactive maps.

![Node.js](https://img.shields.io/badge/Node.js-22.9.0-green)
![Express](https://img.shields.io/badge/Express-4.21.2-blue)
![MongoDB](https://img.shields.io/badge/MongoDB-Mongoose-brightgreen)
![License](https://img.shields.io/badge/License-ISC-yellow)

## ✨ Features

- 🔐 **User Authentication**: Secure signup/login with Passport.js
- 🏡 **Property Listings**: Browse and search rental properties
- 📝 **CRUD Operations**: Create, read, update, and delete listings
- ⭐ **Review System**: Rate and review properties
- 🗺️ **Interactive Maps**: Location visualization with Mapbox
- 📸 **Image Upload**: Property images with Cloudinary integration
- 📱 **Responsive Design**: Mobile-friendly interface
- 🔒 **Data Validation**: Server-side validation with Joi
- 💾 **Session Management**: Persistent user sessions

## 🛠️ Tech Stack

**Backend:**
- Node.js (v22.9.0)
- Express.js
- MongoDB with Mongoose
- EJS (Templating Engine)
- Passport.js (Authentication)

**Frontend:**
- EJS Templates
- Bootstrap/CSS
- JavaScript

**Cloud Services:**
- Cloudinary (Image Storage)
- MongoDB Atlas (Database)
- Mapbox (Maps Integration)

**Key Dependencies:**
- `express` - Web framework
- `mongoose` - MongoDB ODM
- `passport-local-mongoose` - Authentication
- `cloudinary` & `multer` - File uploads
- `@mapbox/mapbox-sdk` - Maps integration
- `joi` - Data validation
- `connect-flash` - Flash messages
- `express-session` - Session management

## 📁 Project Structure

```
AirBnb-Website-Project/
├── controller/          # Route controllers
├── models/             # Database models
├── router/             # Route definitions
├── views/              # EJS templates
├── public/             # Static files (CSS, JS, images)
├── init/               # Database initialization
├── utils/              # Utility functions
├── app.js              # Main application file
├── middleware.js       # Custom middleware
├── schema.js           # Joi validation schemas
└── cloudConfig.js      # Cloudinary configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v22.9.0 or higher)
- MongoDB
- Cloudinary Account
- Mapbox Account

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Manish-Dhane/AirBnb-Website-Project.git
   cd AirBnb-Website-Project
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   Create a `.env` file in the root directory:
   ```env
   CLOUDINARY_CLOUD_NAME=your_cloudinary_name
   CLOUDINARY_KEY=your_cloudinary_key
   CLOUDINARY_SECRET=your_cloudinary_secret
   MAPBOX_TOKEN=your_mapbox_token
   ATLASDB_URL=your_mongodb_connection_string
   SECRET=your_session_secret
   ```

4. **Initialize Database**
   ```bash
   node init/index.js
   ```

5. **Start the application**
   ```bash
   node app.js
   # or for development
   nodemon app.js
   ```

6. **Open your browser**
   Navigate to `http://localhost:8080`

## 🎯 Key Features Explained

### Authentication System
- User registration and login
- Password hashing with passport-local-mongoose
- Protected routes with middleware
- Session persistence

### Property Management
- Add new property listings
- Upload multiple images per property
- Edit and delete listings
- Location mapping with coordinates

### Review System
- Star-based rating system
- User reviews for properties
- Review validation and moderation

### Search & Filter
- Search properties by location
- Filter by price, amenities, etc.
- Interactive map view

## 🔧 Configuration Files

- **app.js**: Main server configuration
- **middleware.js**: Custom authentication and validation middleware
- **schema.js**: Joi validation schemas for data integrity
- **cloudConfig.js**: Cloudinary setup for image uploads

## 🌐 Deployment

This application is configured for deployment on platforms like:
- Heroku
- Railway
- Render
- DigitalOcean

## 📝 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/listings` | Get all listings |
| POST | `/listings` | Create new listing |
| GET | `/listings/:id` | Get specific listing |
| PUT | `/listings/:id` | Update listing |
| DELETE | `/listings/:id` | Delete listing |
| POST | `/listings/:id/reviews` | Add review |
| GET | `/signup` | Signup page |
| POST | `/signup` | Create user account |
| GET | `/login` | Login page |
| POST | `/login` | Authenticate user |

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📸 Screenshots

*Add screenshots of your application here*

## 🚧 Future Enhancements

- [ ] Payment integration (Stripe/PayPal)
- [ ] Real-time chat between hosts and guests
- [ ] Advanced search filters
- [ ] Email notifications
- [ ] Mobile app development
- [ ] Multi-language support

## 📄 License

This project is licensed under the ISC License.

## 👨‍💻 Author

**Manish Dhane**
- GitHub: [@Manish-Dhane](https://github.com/Manish-Dhane)
- LinkedIn: [Connect with me](https://www.linkedin.com/in/manish-dhane/)

## 🙏 Acknowledgments

- Airbnb for design inspiration
- The open-source community for amazing packages
- Contributors and reviewers

---

⭐ If you found this project helpful, please give it a star!
