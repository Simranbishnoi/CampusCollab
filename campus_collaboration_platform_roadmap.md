# 🎓 Campus Collaboration Platform (VIT Exclusive)

## 🎯 Problem Statement
Students struggle to find the right professors/research scholars for projects, research papers, and hackathons. There is no structured system for collaboration, filtering, or communication.

---

# 🚀 CORE IDEA
A **VIT-only platform** where:
- Students connect with professors & research scholars
- Collaborate on projects & research
- Find hackathon teammates
- Track collaboration status & outcomes

---

# 👥 USER TYPES
1. Student
2. Professor
3. Research Scholar

---

# 🔐 PHASE 1: AUTHENTICATION SYSTEM

## Tasks:
- Create 3 login options:
  - Student Login
  - Professor Login
  - Research Scholar Login

- Email validation:
  - Only allow: `@vitstudent.ac.in`

- Create fake authentication system (no backend initially):
  - Store dummy users in JSON
  - Validate login locally

- First-time login form (Student only):
  - Name
  - Registration Number

- Store data using:
  - React State
  - LocalStorage

---

# 🧩 PHASE 2: PROJECT SETUP (REACT)

## Tasks:
- Create React app
- Install dependencies:
  - react-router-dom
- Setup folder structure:

```
src/
 ├── components/
 ├── pages/
 ├── hooks/
 ├── data/
 ├── services/
 ├── context/
 ├── utils/
 └── App.js
```

---

# 🎨 PHASE 3: UI STRUCTURE & ROUTING

## Pages:
- Login Page (3 roles)
- Student Dashboard
- Professor Dashboard
- Research Scholar Dashboard
- Projects Page
- Research Page
- Hackathon Page
- Chat Page
- Profile Page

## Tasks:
- Setup routing using React Router
- Create navigation layout
- Sidebar + Topbar (with notification bell)

---

# 🧱 PHASE 4: STUDENT DASHBOARD

## Features:
- 4 Main Sections:
  - Projects
  - Research
  - Hackathons
  - Activity

## Tasks:
- Create dashboard cards/buttons
- Route to each section

---

# 🔍 PHASE 5: PROJECT COLLABORATION MODULE

## Features:
- Filter professors by:
  - Department (CSE, ECE, Mechanical, etc.)
  - School (SCOPE, SCORE, HOT, etc.)

- Professor Card:
  - Name
  - Cabin
  - Email
  - Expertise
  - "Request Collaboration" button
  - "DM" button

## Tasks:
- Create filter sidebar
- Create professor listing component
- Implement filtering using state

---

# 💬 PHASE 6: CHAT SYSTEM (BASIC)

## Features:
- Student ↔ Professor chat
- Idea discussion
- Meeting scheduling

## Tasks:
- Create chat UI
- Use React State (no backend)
- Store chats locally

---

# 🔔 PHASE 7: NOTIFICATION SYSTEM

## Features:
- Notification bell (top-right)
- Request status:
  - Pending
  - Approved
  - Rejected

- Color codes:
  - Blue → Student
  - Green → Research Scholar

## Tasks:
- Create notification component
- Manage using state

---

# 📊 PHASE 8: ACTIVITY TRACKING

## Features:
- Sent requests list
- Status tracking
- Approved projects

- Clicking project → GitHub link

## Tasks:
- Create activity page
- Store project data

---

# 🔬 PHASE 9: RESEARCH MODULE

## Features:
- Filter by research domains:
  - AI, Nanotechnology, etc.

- Professor expertise matching
- Collaboration request system

- Right Sidebar:
  - Published research
  - Google Scholar links

## Tasks:
- Create research filter system
- Create research listing

---

# 🧪 PHASE 10: RESEARCH SCHOLAR FLOW

## Features:
- Similar to student
- Lab access requests
- Scheduling via professor

## Tasks:
- Create scholar dashboard
- Add lab request feature

---

# 🧑‍🏫 PHASE 11: PROFESSOR DASHBOARD

## Features:
- Add expertise fields
- View student requests
- Accept/Reject requests
- Send meeting time via chat

## Tasks:
- Create request management UI
- Update request status

---

# 🧑‍🔬 PHASE 12: RESEARCH SCHOLAR DASHBOARD

## Features:
- Similar to professor
- Separate notification color

---

# 🏆 PHASE 13: HACKATHON MODULE

## Features:
- Post requirements
- Find teammates
- Reddit-like discussion

- Right Sidebar:
  - Success stories

## Tasks:
- Create post system
- Create comment/reply system

---

# 🧠 PHASE 14: DATA MANAGEMENT

## Tasks:
- Create fake data files:

```
data/
 ├── students.json
 ├── professors.json
 ├── researchScholars.json
 └── projects.json
```

- Use data for UI rendering

---

# ⚙️ PHASE 15: REACT CONCEPTS USAGE (IMPORTANT FOR EXAM)

## You MUST include:

### React Components
- Functional components
- Reusable components

### Constructors / State
- useState

### Props
- Passing data between components

### Props Validation
- PropTypes

### Hooks
- useState
- useEffect

### Routing
- react-router-dom

### Styling
- CSS / Tailwind

---

# 🚀 PHASE 16: GITHUB + DEPLOYMENT

## Tasks:
- Initialize Git
- Push to GitHub regularly
- Commit after each feature

- Deploy using:
  - Vercel / Netlify

---

# 📈 PHASE 17: MVP STRATEGY (VERY IMPORTANT)

## Build FIRST:
1. Login system
2. Student dashboard
3. Professor listing + filters
4. Request button

## THEN:
- Chat
- Notifications
- Hackathon module

---

# 🌟 FUTURE IMPROVEMENTS

- Real backend (Node.js + MongoDB)
- Real authentication
- AI recommendation system
- Email notifications

---

# ✅ FINAL NOTE
Focus on **step-by-step building**. Do NOT try to complete everything at once. Build MVP first, then improve.

