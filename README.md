# CitizenComplaint

> **CitizenComplaint** — a single-page Angular application for managing citizen complaints (frontend).  
> Built with modern Angular (v19), TypeScript and Tailwind CSS. The app is designed as a strict, strongly-typed Angular project with testing configured (Karma/Jasmine) and an opinionated build setup.

---

## Table of contents

- [Project Overview](#project-overview)  
- [Tech Stack](#tech-stack)  
- [Architecture](#architecture)  
- [Features](#features)  
- [Folder Structure](#folder-structure)  
- [How to run](#how-to-run-the-project)  
- [Future improvements](#future-improvements)  
- [Screenshots](#screenshots)  
- [Social Links](#social-links)

---

## Project Overview

CitizenComplaint is an Angular frontend application intended to provide a user interface for submitting, tracking and managing citizen complaints. The codebase is structured as a standard Angular CLI application (Angular v19) with strict TypeScript settings and modern build tooling. The project is configured to produce a production-ready build under `dist/citizen-complaint`.

---

## Tech Stack

- **Framework:** Angular (v19)  
- **Language:** TypeScript (strict mode enabled)  
- **Bundler / Build:** Angular CLI / Angular build system (Vite cache present)  
- **Styling:** Tailwind CSS  
- **Reactive / State:** RxJS   
- **Other:** zone.js, tslib

---

## Architecture

This project follows a typical Angular single-page application architecture:

- **Presentation layer (Components):** UI broken into Angular components.  
- **Services / Data layer:** Services perform HTTP requests and business logic.  
- **Routing:** Angular Router handles client-side navigation.  
- **Build & Environments:** Angular CLI build configurations for dev/prod.

> The TypeScript configuration enforces strict typing and strict template checks (recommended for maintainability).

---

## Features

- Submit a new complaint (form with validation).  
- View and filter submitted complaints.  
- Complaint details page with status and comments.  
- Admin/Staff dashboard (review, update status, assign).  
- Client-side validation with Angular Reactive Forms.  
- Mobile responsive layout using Tailwind CSS.



---

## Folder Structure

```
├── angular.json
├── package.json
├── tsconfig.json
├── src/
│   ├── index.html
│   ├── main.ts
│   ├── styles.css
│   ├── app/
│   │   ├── app.module.ts
│   │   ├── app-routing.module.ts
│   │   ├── components/
│   │   ├── services/
│   │   └── pages/
│   └── assets/
├── .vscode/
├── .angular/
└── package-lock.json
```

---

## How to Run the Project

```bash
git clone <repo-url>
cd CitizenComplaint
npm install
ng serve --configuration development
```

For production:

```bash
ng build --configuration production
```

Run tests:

```bash
ng test
```

---


## Social Links

- Author: **Ahmed Sobhy**  
- LinkedIn: https://www.linkedin.com/in/ahmedsobhi01/
- GitHub: https://github.com/AhmedSobhy00/
