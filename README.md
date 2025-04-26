# Movies Explorer

A modern web application for exploring movies, TV shows, and people in the entertainment industry, powered by Angular and The Movie Database (TMDB) API.

![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![PrimeNG](https://img.shields.io/badge/PrimeNG-DD0031?style=for-the-badge&logo=primeng&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)

## 📋 Overview

Movies Explorer is an Angular application that leverages the TMDB API to provide users with a seamless browsing experience across movies, TV shows, and entertainment personalities. The application offers detailed information including ratings, release dates, cast details, and production information.

## ✨ Features

- **Browse Trending Content**: Discover trending movies, TV shows, and popular personalities
- **Detailed Information**: View comprehensive details about movies and TV shows:
  - Ratings and popularity metrics
  - Release dates and runtime information
  - Cast and crew details
  - Production information and companies
  - Original language and country of origin
- **Responsive Design**: Optimized viewing experience across desktop and mobile devices
- **Component-Based Architecture**: Clean, modular codebase following Angular best practices
- **Modern UI**: Sleek interface using PrimeNG components and TailwindCSS

## 🚀 Getting Started

### Prerequisites

- Node.js (v14+)
- npm or yarn package manager

### Installation

1. Clone the repository:

   ```bash
   git clone https://your-repository-url/movies-api.git
   cd movies-api
   ```

2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:

   ```bash
   npm start
   ```

4. Open your browser and navigate to `http://localhost:4200/`

## 🛠️ Tech Stack

- **Frontend Framework**: Angular 19.2.0
- **UI Component Library**: PrimeNG
- **Styling**: TailwindCSS
- **API Integration**: TMDB (The Movie Database)
- **Build Tools**: Angular CLI

## 📁 Project Structure

```
src/
  app/
    components/         # Reusable UI components
    interfaces/         # TypeScript interfaces for API data
    pages/              # Page components (movies, tv shows, etc.)
    services/           # API services and helpers
  environments/         # Environment configuration
  assets/               # Static assets
```

## 📝 API Reference

This project uses The Movie Database (TMDB) API. You need to:

1. Register for an API key at [https://www.themoviedb.org/documentation/api](https://www.themoviedb.org/documentation/api)
2. Add your API key to the environment files

## 🧪 Testing

Run unit tests with Karma:

```bash
npm test
```

## 🏗️ Building for Production

To build the application for production:

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 🙏 Acknowledgements

- [Angular Documentation](https://angular.dev/)
- [PrimeNG](https://primeng.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [The Movie Database](https://www.themoviedb.org/) for their excellent API
