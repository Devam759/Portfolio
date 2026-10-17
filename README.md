# Devam Gupta - Full-Stack MERN Personal Portfolio

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
├── .github/
│   └── workflows/
│       └── keep-alive.yml      # Cron workflow pinging Render API every 14 mins to prevent cold starts
│
├── client/                     # Frontend Application (React.js + Vite)
│   ├── public/                 # Static assets, sitemap.xml, robots.txt, llms.txt, favicon
│   ├── src/
│   │   ├── components/         # Modular UI Components
│   │   │   ├── Hero.jsx        # Landing section with Typewriter, photo frame & CV CTA
│   │   │   ├── About.jsx       # Bio, location, undergraduate status & degree
│   │   │   ├── Skills.jsx      # Categorized skill badges with hover proficiency tooltips
│   │   │   ├── Projects.jsx    # 10 production projects with live demos & repos
│   │   │   ├── Timeline.jsx    # Vertical education & experience timeline with logos
│   │   │   ├── CoCurricular.jsx# Dedicated Co-Curricular & volunteering showcase
│   │   │   ├── Certifications.jsx # Clean certifications & hackathon honors index
│   │   │   ├── Contact.jsx     # Backend-connected MongoDB contact form
│   │   │   ├── NotFound.jsx    # Custom 404 page
│   │   │   ├── Header.jsx      # Floating pill navbar with smooth animated scroll & dark mode toggle
│   │   │   ├── Footer.jsx      # Social links & contact info
│   │   │   ├── TargetCursor.jsx# Interactive custom cursor
│   │   │   ├── TextType.jsx    # Typewriter component
│   │   │   ├── LogoLoop.jsx    # Smooth infinite CSS marquee
│   │   │   └── FlowingWaves.jsx# Layered wave background
│   │   ├── constants/
│   │   │   └── assets.js       # Cloudinary CDN optimized asset URLs (f_auto, q_auto)
│   │   ├── context/
│   │   │   └── ThemeContext.jsx# Dark Mode / Light Mode Provider
│   │   ├── App.jsx             # Root layout assembler with smooth section routing
│   │   ├── main.jsx            # Entry point with BrowserRouter & ThemeProvider
│   │   └── index.css           # Tailwind CSS styles & smooth scroll behavior
│   ├── index.html              # HTML shell with SEO meta & fonts
│   ├── vite.config.js          # Vite config with API proxy
│   └── package.json            # Client dependencies
│
├── server/                     # Backend Application (Node.js + Express.js)
│   ├── models/
│   │   └── Contact.js          # Mongoose schema for contact messages
│   │
│   ├── routes/
│   │   ├── contact.js          # POST /api/contact (with dual Nodemailer alerts) & GET /api/contact
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
├── netlify.toml                # Netlify deployment configuration & reverse proxy rewrite
├── README.md                   # Complete documentation
└── package.json                # Root orchestration scripts
```

---

## 🚀 Required Features & Implementation Details

### 1. Hero / Landing Section
- Animated intro with name, role, and designation.
- Dynamic typewriter effect.
- **Call-to-Action (CTA) button to Download CV**, providing options for both **PDF** and **Word (.docx)** streamed directly from the Express backend.
- Architectural asymmetric photo frame backed by Cloudinary CDN.
- Smooth floating wave aesthetic.

### 2. About Me Section
- Professional biography highlighting engineering leadership, web development, and applied Generative AI.
- Explicit **Location** (*Jaipur / Bikaner, Rajasthan, India*), **Status** (*Undergraduate Student / Fresher*), and **Degree** (*B.Tech CSE, 2024 - 2028 at JK Lakshmipat University*).
- Scroll-triggered reveal animations.

### 3. Skills & Proficiency
- Grouped into three distinct categories:
  - **Frontend Development** (React.js, Next.js, JavaScript, Flutter & Dart, Tailwind CSS, HTML5 & CSS3)
  - **Backend & Database** (Node.js, Express.js, MongoDB, Firebase, Python, SQL & MySQL)
  - **Tools & Technologies** (Git & GitHub, Docker, Postman, VS Code, Linux, Netlify & Vercel)
- Interactive hover tooltips indicating proficiency tiers (*Expert*, *Advanced*, *Proficient*).
- Infinite logo marquee ticker with smooth CSS animation.

### 4. Projects Showcase
- 10 featured production projects displayed as clean, borderless interactive cards:
  - **VISTA** (Hostel Attendance & Tracking Platform with MobileFaceNet)
  - **Sabrang 2026** (University Annual Fest Portal)
  - **JKLU Sankalp 2027** (University Social & Cultural Web Portal)
  - **StitchUp** (Doorstep Custom Tailor-on-Demand Platform)
  - **Pindi Traders** (Commercial Wholesale Catalog)
  - **AARAMBH 2026** (Freshers Orientation Portal)
  - **JKLU Got Latent** (Interactive Competition Voting & Scoring System)
  - **Anokhi** (Modern Cultural Fashion E-Commerce UI)
  - **Browser Vigilant** (Proctoring & Focus Integrity Monitor)
  - **All About Ramayana** (Digital Storytelling Platform)
- Tech stack tags, detailed descriptions, GitHub repository links, and live demo links for each card.

### 5. CV / Resume Download (Backend Routes)
- Resumes are served directly via Express.js backend streaming routes:
  - `GET /api/resume/pdf` - Serves `Devam_Gupta_Resume.pdf` with `Content-Disposition: attachment`.
  - `GET /api/resume/docx` - Serves `Devam_Gupta_Resume.docx` with `Content-Disposition: attachment`.

### 6. Education & Experience Timeline
- Vertical animated timeline layout with milestone icons and organization logos.
- Highlights degree (*B.Tech in CSE at JK Lakshmipat University*), schooling, industry internship at Hayagreeva Consulting, project leadership, and technical team roles.

### 7. Certifications & Achievements
- Certifications from Google, DeepLearning.AI, and the University of Michigan.
- National Hackathon recognition (*4th Place Winner - HACKSTORM 2024*) and university fest leadership honors.

### 8. Backend-Connected Contact Form
- Form fields: `Name`, `Email`, `Message` with client-side and server-side validation.
- Submissions are sent via `POST /api/contact` and saved in **MongoDB** using **Mongoose**.
- Dual Nodemailer notifications: sends an instant alert to the administrator (`devamg759@gmail.com`) and an automatic confirmation receipt to the visitor.
- Real-time feedback with loading states, success confirmation, and error banners.

### 9. Navigation & Smooth Scrolling
- Floating glassmorphism pill navigation.
- Smooth scroll animation on button clicks with offset calculation to keep section headers perfectly framed.
- Dynamic active section tracking based on viewport scroll position.
- System-aware **Dark Mode / Light Mode toggle** persisted in `localStorage`.

### 10. Performance & Cloudinary CDN
- All media assets (brand portraits, logos, project screenshots) delivered via **Cloudinary CDN** with automated format and quality optimization (`f_auto,q_auto`).
- Automated keep-alive workflow pinging the Render service every 14 minutes to eliminate cold starts.

---

## 🛠️ Tech Stack

- **Frontend**: React.js 19, React Router v7, Tailwind CSS v4, Framer Motion, React Icons
- **Backend**: Node.js, Express.js, CORS, Dotenv, Nodemailer
- **Database**: MongoDB, Mongoose ODM
- **Cloud & CDN**: Cloudinary CDN, Render, Netlify, GitHub Actions
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
*Computer Science & Engineering Student - JK Lakshmipat University, Jaipur*  
- **GitHub**: [@Devam759](https://github.com/Devam759)  
- **LinkedIn**: [Devam Gupta](https://www.linkedin.com/in/devam-gupta-929239271/)  
- **Email**: devamg759@gmail.com  
- **Phone**: +91 73400 15201  

---

## 📄 License
This project is submitted for academic evaluation in the MERN Stack Course. All rights reserved.
