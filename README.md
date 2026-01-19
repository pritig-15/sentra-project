# SENTRA – Anti-Ragging Reporting & Awareness System

Sentra is a web-based anti-ragging platform designed to help students safely report ragging incidents and help institutions take quick action.  
The system provides awareness, reporting, and monitoring features for students, staff, and administrators.

---

## 📌 Project Overview

Ragging is a serious issue in educational institutions. Sentra aims to create a **safe, digital solution** where:
- Students can report incidents without fear
- Authorities can monitor and take action
- Awareness about anti-ragging laws is increased

---

## 🚀 Features

- 🔐 User authentication (Student & Staff)
- 📝 Online ragging complaint reporting
- 📊 Dashboard for students and staff
- 🛡 Secure data handling
- 📱 Responsive design (mobile + desktop)
- 🤖 Chatbot integration (for help & guidance)
- 📢 Awareness pages with anti-ragging information

---

## 🧱 Tech Stack

### Frontend
- React.js
- HTML5
- CSS3
- JavaScript

### Backend
- Node.js
- Express.js

### Database
- MongoDB Atlas

### Tools & Platforms
- Git & GitHub
- Vercel (Frontend)
- Render (Backend)

---

## 📂 Project Structure

sentra-project/
│
├── Backend/
│ ├── config/
│ ├── models/
│ ├── routes/
│ ├── controllers/
│ ├── server.js
│ └── .env
│
├── Frontend/
│ ├── src/
│ ├── public/
│ └── package.json
│
├── README.md
└── package.json

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/pritig-15/sentra-project.git
cd sentra-project

cd Backend
npm install

cd ../Frontend
npm install

5️⃣ Run the Project
Start Backend
cd Backend
node server.js

Start Frontend
cd Frontend
npm start


Now open browser:

http://localhost:5000


| Method | Endpoint           | Description      |
| ------ | ------------------ | ---------------- |
| POST   | /api/auth/register | Register user    |
| POST   | /api/auth/login    | Login user       |
| POST   | /api/report        | Submit report    |
| GET    | /api/report        | View all reports |

