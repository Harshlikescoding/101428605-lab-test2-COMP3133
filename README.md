# 🚀 SpaceX Launch Explorer – 101428605-lab-test2-comp3133

This Angular application allows users to explore and search through SpaceX launch missions using the official SpaceX REST API. It displays detailed information about each launch including mission details, rocket info, launch site, and external links (article, Wikipedia, video). The project was built as part of a COMP3133 lab test.

---

## 🌐 Live Demo

🔗 [View the Live App Here](https://101428605spacex.vercel.app)  
📦 [GitHub Repository](https://github.com/Harshlikescoding/101428605-lab-test2-COMP3133)

---

## ✅ Features

- 🔍 **Mission List View** with filtering by:
  - Mission name
  - Launch year
  - Launch success
  - Landing success
- 📄 **Mission Details Page** with:
  - Rocket name and type
  - Launch site
  - Mission description
  - Article, video, and Wikipedia links
- 🎨 **Angular Material UI** for clean, responsive design
- 📡 Powered by [SpaceX REST API](https://github.com/r-spacex/SpaceX-API)

---

## 📁 Project Structure

- `missionlist` – Displays a grid of all SpaceX launches with filters
- `missiondetails` – Shows detailed info of a selected mission
- `missionfilter` – Handles search/filter functionality
- `spacexapi.service.ts` – Centralized service for API calls
- `mission.model.ts` – Mission class defining the data structure

---

## 🛠️ Getting Started

### Prerequisites

- Node.js
- Angular CLI

### Run Locally

```bash
git clone https://github.com/your-username/101428605-lab-test2-comp3133
cd 101428605-lab-test2-comp3133
npm install
ng serve
