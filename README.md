# 📝 Guestbook Application

A simple, elegant web application that allows visitors to sign a digital guestbook by leaving their name and a message. Built with Node.js, Express, MongoDB, and EJS templating.

## 🌟 Features

- **Simple Form Interface** - Easy-to-use form for visitors to leave messages
- **Real-time Display** - All guest entries are displayed immediately after submission
- **Persistent Storage** - Messages are stored in MongoDB database
- **Chronological Order** - Latest messages appear first
- **Responsive Design** - Works on desktop and mobile devices
- **Error Handling** - Graceful error handling for database operations

## 🛠️ Technologies Used

- **Backend:** Node.js, Express.js
- **Database:** MongoDB with Mongoose ODM
- **Frontend:** EJS (Embedded JavaScript Templates)
- **Styling:** Basic HTML/CSS

## 📁 Project Structure

```
guestbook/
├── index.js                 # Main server file
├── package.json            # Project dependencies and scripts
├── package-lock.json       # Dependency lock file
├── models/
│   └── Guest.js            # MongoDB schema for guest entries
└── views/
    └── guestbook.ejs       # Main page template
```

## 🚀 Quick Start

### Prerequisites

Make sure you have the following installed on your system:
- [Node.js](https://nodejs.org/) (v14 or higher)
- [MongoDB](https://www.mongodb.com/try/download/community) (v4.0 or higher)

### Installation

1. **Clone or download this project**
   ```bash
   git clone <repository-url>
   cd guestbook
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start MongoDB service**
   - **Windows:** Start MongoDB service from Services
   - **macOS:** `brew services start mongodb/brew/mongodb-community`
   - **Linux:** `sudo systemctl start mongod`

4. **Run the application**
   ```bash
   node index.js
   ```

5. **Open your browser**
   Navigate to `http://localhost:3000`

## 📋 Dependencies

The project uses the following npm packages:

```json
{
  "express": "Web application framework",
  "mongoose": "MongoDB object modeling tool",
  "ejs": "Embedded JavaScript templating engine"
}
```

To install all dependencies, run:
```bash
npm install express mongoose ejs
```

## 🔧 Configuration

### Database Configuration
- **Database Name:** `guestbook`
- **Connection URL:** `mongodb://localhost:27017/guestbook`
- **Port:** 3000 (configurable in index.js)

### Customization Options
- Change the port by modifying the `PORT` variable in `index.js`
- Modify database connection string in the mongoose.connect() method
- Customize the page styling by editing `guestbook.ejs`

## 📖 How It Works

1. **Home Page (`/`)**: Displays the guestbook form and all existing entries
2. **Add Guest (`/addguest`)**: Processes form submissions and saves to database
3. **Database**: Stores guest name, message, and timestamp for each entry

### Data Structure
Each guest entry contains:
- `guestName`: Visitor's name (String)
- `guestMsg`: Visitor's message (String)
- `createdAt`: Timestamp when entry was created (Date, auto-generated)

## 🐛 Troubleshooting

### Common Issues

**MongoDB Connection Error**
```
Could not connect to MongoDB
```
- Ensure MongoDB service is running
- Check if MongoDB is installed correctly
- Verify the connection URL in index.js

**Port Already in Use**
```
EADDRINUSE: address already in use :::3000
```
- Change the PORT value in index.js to a different number (e.g., 3001)
- Or stop the process using port 3000

**Dependencies Not Installed**
```
Cannot find module 'express'
```
- Run `npm install` in the project directory

## 🚀 Deployment

### Local Development
The app runs on `http://localhost:3000` by default.

### Production Deployment
For production deployment, consider:
- Using environment variables for database connection
- Adding input validation and sanitization
- Implementing rate limiting
- Adding HTTPS support
- Using a process manager like PM2

## 🔮 Future Enhancements

Potential features to add:
- [ ] Input validation and sanitization
- [ ] Admin panel for managing entries
- [ ] Email notifications for new entries
- [ ] Export functionality (CSV, PDF)
- [ ] Search and filter capabilities
- [ ] User authentication
- [ ] Rich text editor for messages
- [ ] Image upload support
- [ ] Pagination for large number of entries

## 🤝 Contributing

1. Fork the project
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👥 Author

Created with ❤️ by [Your Name]

## 📞 Support

If you have any questions or need help:
- Create an issue in this repository
- Contact [your-email@example.com]

---

**Happy Guestbook-ing! 🎉**
