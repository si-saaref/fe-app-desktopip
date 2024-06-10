# FE Application

This application using ReactJS for the library and Vite for the framework. I use the tailwind for app styling.
For the app data, I use the TMDB Api to get the list movie.

In repo I use 2 branch, the first one is master as the main branch, and the second one is dev for the development.

## Run Locally

1. Clone the project

```bash
  git clone https://github.com/si-saaref/fe-app-desktopip.git
```

2. Go to the project directory

```bash
  cd fe-app-desktopip
```

3. Install dependencies

```bash
  npm install
```

4. Create file `.env ` in root project copy the list of environment varible from below and paste to your `.env` file

5. Start the server

```bash
  npm run dev
```

## Environment Variables

To run this project, you have to add some variable name to your environment variable `.env` file

Edit file `.env-example` (rename the file to `.env`) and change the variable into

`VITE_BASE_URL`=`http://localhost:2112`\
`VITE_KEY`=`0a13539a3d9420231b1c475207d076eb`\
`VITE_MOVIE_URL`=`https://api.themoviedb.org/3/`\
`VITE_BASE_IMAGE_URL`=`https://image.tmdb.org/t/p/w500/`\
`VITE_DEFAULT_LANGUAGE`=`en-us`
