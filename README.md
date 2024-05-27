# Movie List React App

Welcome to the Movie List React App! This is a responsive web application built with React, Redux, Axios, and Tailwind CSS. It allows users to browse a list of movies fetched from an external API and mark their favorite movies.

## Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Setup Instructions](#setup-instructions)
- [Technologies Used](#technologies-used)
- [Folder Structure](#folder-structure)

## Features

- Fetches movie data from an external API.
- Displays movies sorted by rating.
- Allows users to mark movies as favorites.
- Provides smooth navigation between movie list and favorite movies.
- Responsive design for desktop, tablet, and mobile devices.

## Demo

You can see a live demo of the project [here](https://movies-app-abhishek.netlify.app/).

## Setup Instructions

### Prerequisites

- Node.js installed on your local machine

### Installation Steps

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/Abhishek-Verma79/Movie-app.git

2. **Navigate to the Project Directory:**

   ```bash
   cd Movie-app

3. **Install Dependencies:**

   ```bash
   npm install

4. **Run the Development Server:**

   ```bash
   npm run dev

5. **Open the Application:**

  - After running the last command, the terminal will display a localhost address. You can either copy and paste that link into your browser or simply ctrl+click on it to open the application directly in your browser.


## Technologies Used

- React
- Redux
- Axios
- Tailwind CSS


## Folder Structure


Movie-app/  
│  
├── public/  
│ └── vite.svg  
│  
├── src/  
│ ├── pages/  
│ │ ├── FavoriteMovies.jsx  
│ │ ├── MovieList.jsx  
│ │  
│ ├── store/  
│ │ ├── index.js  
│ │ ├── moviesSlice.js    
│ │   
│ ├── App.css  
│ ├── App.jsx  
│ ├── index.css  
│ └── main.jsx  
│  
├── .env  
├── .estlintrc.cjs   
├── index.html  
├── package-lock.json  
├── package.json  
├── postcss.config.js  
├── README.md  
├── tailwind.config.js  
└── vite.config.js  
 


