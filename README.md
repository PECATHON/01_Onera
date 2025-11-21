# RealWorld - Conduit Application

Full-stack blogging platform built with React + Redux (frontend) and Node.js + Express + Prisma (backend).

## 📁 Project Structure

```
01_Onera/
├── frontend/          React + Redux application
├── backend/           Node.js + Express + Prisma API
├── demo-video.mp4     Application demonstration video
└── README.md          Setup guide
```

## 🚀 Quick Start

### Prerequisites
- Node.js v14+
- npm or yarn

### Backend Setup

```bash
cd backend
npm install
echo "DATABASE_URL=file:./dev.db" > .env
echo "JWT_SECRET=your-secret-key" >> .env
echo "NODE_ENV=development" >> .env
npx prisma generate
npx prisma migrate deploy
npm start
```

Runs on http://localhost:3000/api

### Frontend Setup

```bash
cd frontend
npm install
npm start
```

Runs on http://localhost:4100

## 🎥 Demo Video

Check out `demo-video.mp4` for a demonstration of the application features.

## ✨ Features Implemented

- ✅ Bookmarking System
- ✅ User Mentions & Notifications
- ✅ Recommended Articles
- ✅ Comment Upvotes
- ✅ Enhanced Following Feed
- ✅ Search Functionality
- ✅ Offline Reading
- ✅ Comment Threading

## 🔧 Configuration

### Connect Frontend to Backend

Edit `frontend/src/agent.js`:
```javascript
const API_ROOT = 'http://localhost:3000/api';
```

### Database

Uses SQLite with Prisma ORM. Database file: `backend/prisma/dev.db`

## 📚 Documentation

- [Frontend README](./frontend/README.md)
- [Backend README](./backend/README.md)

## 🎯 API Endpoints

Base URL: `http://localhost:3000/api`

### Authentication
- `POST /users/login` - Login
- `POST /users` - Register
- `GET /user` - Get current user

### Articles
- `GET /articles` - List articles
- `POST /articles` - Create article
- `GET /articles/:slug` - Get article
- `PUT /articles/:slug` - Update article
- `DELETE /articles/:slug` - Delete article

### Comments
- `GET /articles/:slug/comments` - List comments
- `POST /articles/:slug/comments` - Add comment
- `DELETE /articles/:slug/comments/:id` - Delete comment

### Bookmarks
- `POST /articles/:slug/bookmark` - Bookmark article
- `DELETE /articles/:slug/bookmark` - Remove bookmark
- `GET /bookmarks` - Get bookmarked articles

### Notifications
- `GET /notifications` - Get user notifications
- `PUT /notifications/:id/read` - Mark as read

## 🛠️ Development

### Backend Development
```bash
cd backend
npm run start      # Start server
npm run build      # Build for production
npm test           # Run tests
```

### Frontend Development
```bash
cd frontend
npm start          # Start dev server
npm run build      # Build for production
npm test           # Run tests
```

## 📝 License

MIT
