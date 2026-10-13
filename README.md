# Devam Gupta — Full-Stack MERN Personal Portfolio

A professional, responsive, and performant personal portfolio website built with the **MERN Stack** (React.js, Node.js, Express.js, MongoDB). Designed and structured in accordance with the **MERN Stack Course Portfolio Assignment** guidelines.

---

## 🌟 Live Demo & Repository

- **GitHub Repository**: [https://github.com/Devam759/Portfolio](https://github.com/Devam759/Portfolio)
- **Live Deployment (Client)**: [https://portfoliodevam.netlify.app](https://portfoliodevam.netlify.app)
- **Live Deployment (API)**: [https://portfolio-api-devam.onrender.com](https://portfolio-api-devam.onrender.com) *(Render service)*

---

## 🏗️ Architecture & Project Structure

The project is structured into clear `/client` (Frontend) and `/server` (Backend) workspaces:

```
Portfolio/
├── client/                     # Frontend Application (React.js + Vite)
│   ├── public/                 # Static assets, sitemap.xml, robots.txt, llms.txt, favicon
│   ├── src/
│   │   ├── components/         # Modular UI Components
│   │   │   ├── Hero.jsx        # Landing section with Typewriter & CV CTA
│   │   │   ├── About.jsx       # Bio, location & current student status
│   │   │   ├── Skills.jsx      # Categorized skill badges
│   │   │   ├── Projects.jsx    # Filterable project showcase
│   │   │   ├── Timeline.jsx    # Vertical education & experience timeline with brand logos
│   │   │   ├── CoCurricular.jsx# Dedicated Co-Curricular & Volunteering showcase
│   │   │   ├── Certifications.jsx # Verified certificates & hackathons
│   │   │   ├── Contact.jsx     # Backend-connected MongoDB contact form
│   │   │   ├── NotFound.jsx    # Custom 404 page
│   │   │   ├── Header.jsx      # Responsive floating pill nav + Dark mode toggle
│   │   │   ├── Footer.jsx      # Social links & contact info
│   │   │   ├── TargetCursor.jsx# Interactive custom cursor
│   │   │   ├── TextType.jsx    # Typewriter component
│   │   │   ├── LogoLoop.jsx    # Smooth infinite CSS marquee
│   │   │   └── FlowingWaves.jsx# Layered wave background
│   │   ├── context/
│   │   │   └── ThemeContext.jsx# Dark Mode / Light Mode Provider
│   │   ├── App.jsx             # Root layout assembler
│   │   ├── main.jsx            # Entry point with BrowserRouter & ThemeProvider
│   │   └── index.css           # Tailwind CSS styles & themes
│   ├── index.html              # HTML shell with SEO meta & fonts
│   ├── vite.config.js          # Vite config with API proxy
│   └── package.json            # Client dependencies
│
├── server/                     # Backend Application (Node.js + Express.js)
│   ├── models/
│   │   └── Contact.js          # Mongoose schema for contact messages
│   │
│   ├── routes/
│   │   ├── contact.js          # POST /api/contact & GET /api/contact
│   │   └── resume.js           # GET /api/resume/pdf & GET /api/resume/docx
│   │
│   ├── files/                  # Server-served resume documents
│   │   ├── Devam_Gupta_Resume.pdf
│   │   └── Devam_Gupta_Resume.docx
│   │
│   ├── .env.example            # Environment template (safe for VCS)
│   ├── server.js               # Express app, MongoDB connection & health check
│   └── package.json            # Server dependencies
│
├── .gitignore                  # Excludes node_modules and .env files
├── README.md                   # Complete documentation
└── package.json                # Root orchestration scripts
```

---

## 🚀 Required Features & Implementation Details

### 1. Hero / Landing Section
- Animated intro with name, role, and designation.
- Dynamic typewriter effect.
- **Call-to-Action (CTA) button to Download CV**, providing options for both **PDF** and **Word (.docx)** served from the Express backend.
- Professional layered wave animation.

### 2. About Me Section
- Professional biography and high-resolution profile image.
- Explicit **Location** (*Jaipur, Rajasthan, India*) and **Current Status** (*B.Tech CSE Student, Class of 2026*).
- Scroll-triggered reveal animations.

### 3. Skills & Proficiency
- Grouped into three distinct categories:
  - **Frontend Development** (React.js, JavaScript, Tailwind, Next.js, HTML5/CSS3, TypeScript)
  - **Backend & Database** (Node.js, Express.js REST APIs, MongoDB & Mongoose, MySQL, JWT)
  - **Tools & Technologies** (Git/GitHub, Vite, Postman, Vercel/Render, Linux)
- Animated progress bars displaying percentage metrics.
- Hover tooltips indicating proficiency level (*Expert*, *Advanced*, *Proficient*).
- Infinite logo marquee ticker.

### 4. Projects Showcase
- 6 featured projects displayed as interactive responsive cards:
  - **VISTA** (Smart Hostel Attendance System)
  - **StitchUp** (Tailor & Customer Customization Platform)
  - **SABRANG'25** (University Annual Fest Portal)
  - **AARAMBH'25** (Freshers Portal)
  - **Hacker's Unity** (Hackathon Community Platform)
  - **Anokhi** (Cultural Fashion UI)
- Tech stack tags, project description, GitHub repository link, and live demo link for each card.
- **Technology category filter tabs** (*All*, *Full Stack*, *Frontend*, *UI/UX*).

### 5. CV / Resume Download (Backend Routes)
- Resumes are served directly via Express.js backend streaming routes:
  - `GET /api/resume/pdf` — Serves `Devam_Gupta_Resume.pdf` with `Content-Disposition: attachment`.
  - `GET /api/resume/docx` — Serves `Devam_Gupta_Resume.docx` with `Content-Disposition: attachment`.

### 6. Education & Experience Timeline
- Vertical animated timeline layout with milestone icons.
- Highlights degree (*B.Tech in CSE at JK Lakshmipat University*), secondary education, project leadership, and technical team roles.

### 7. Certifications & Achievements
- Verified course certifications (Coursera/Meta, NPTEL/IIT, freeCodeCamp, LinkedIn Learning).
- Direct credential verification links.
- Hackathon finalist recognition and university fest organization honors.

### 8. Backend-Connected Contact Form
- Form fields: `Name`, `Email`, `Message` with client-side and server-side validation.
- Submissions are sent via `POST /api/contact` and saved in **MongoDB** using **Mongoose**.
- Real-time user feedback with loading states, success confirmation, and error banners.
- Configured with optional **Nodemailer** integration for email notifications.

### 9. Theme & Dark Mode
- System-aware **Dark Mode / Light Mode toggle** persisted in `localStorage`.
- High-contrast styles tailored for both themes across all components.

---

## 🛠️ Tech Stack

- **Frontend**: React.js 19, React Router v7, Tailwind CSS v4, Framer Motion, React Icons
- **Backend**: Node.js, Express.js, CORS, Dotenv, Nodemailer
- **Database**: MongoDB, Mongoose ODM
- **Build & Dev Tooling**: Vite, Concurrently, Nodemon

---

## ⚙️ Local Setup and Installation

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [MongoDB](https://www.mongodb.com/) (Local Community Server running on `localhost:27017` or a free MongoDB Atlas connection string)
- [Git](https://git-scm.com/)

### 1. Clone the Repository
```bash
git clone https://github.com/Devam759/Portfolio.git
cd Portfolio
```

### 2. Install Dependencies
Install dependencies for root, client, and server in one command:
```bash
npm run install:all
```
*(Or install individually inside `/client` and `/server` via `npm install`)*

### 3. Configure Environment Variables
Inside the `/server` directory, create a `.env` file based on `.env.example`:
```bash
cd server
cp .env.example .env
```

Edit `server/.env` with your settings:
```env
PORT=5000
MONGODB_URI=mongodb://127.0.0.1:27017/portfolio
CLIENT_URL=http://localhost:5173

# Optional: Nodemailer email alert
EMAIL_SERVICE=gmail
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password
```

> **Security Note:** `.env` is ignored by `.gitignore` to protect sensitive credentials from being committed.

### 4. Run the Full Stack Application
From the root directory, start both the client and server concurrently:
```bash
npm run dev
```

- **Frontend Application**: `http://localhost:5173`
- **Backend API**: `http://localhost:5000`
- **API Health Check**: `http://localhost:5000/api/health`

Alternatively, you can run them in separate terminals:
```bash
# Terminal 1 - Frontend
npm run dev:client

# Terminal 2 - Backend
npm run dev:server
```

---

## 📡 Backend API Reference

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/api/health` | Health check returning server & database status |
| `POST` | `/api/contact` | Submits and stores a contact message in MongoDB |
| `GET` | `/api/contact` | Retrieves contact submissions (verification route) |
| `GET` | `/api/resume/pdf` | Downloads resume in PDF format |
| `GET` | `/api/resume/docx` | Downloads resume in Word (.docx) format |

---

## ☁️ Deployment Guide

### Frontend (Vercel / Netlify)
1. Deploy the `/client` directory to Vercel.
2. Set root directory to `client`.
3. Set build command: `npm run build`, output directory: `dist`.
4. Configure environment variable: `VITE_API_BASE_URL` pointing to the deployed backend URL.

### Backend (Render / Railway)
1. Deploy the `/server` directory as a Node Web Service.
2. Build command: `npm install`, Start command: `node server.js`.
3. Set environment variables (`PORT`, `MONGODB_URI`, `CLIENT_URL`).

---

## 👤 Author

**Devam Gupta**  
*Computer Science & Engineering Student — JK Lakshmipat University, Jaipur*  
- **GitHub**: [@Devam759](https://github.com/Devam759)  
- **LinkedIn**: [Devam Gupta](https://www.linkedin.com/in/devam-gupta-929239271/)  
- **Email**: devamg759@gmail.com  
- **Phone**: +91 73400 15201  

---

## 📄 License
This project is submitted for academic evaluation in the MERN Stack Course. All rights reserved.
