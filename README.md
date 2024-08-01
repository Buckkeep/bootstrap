# How I set this up

## Install React with Vite
`npm create vite@latest`  
`cd <project name>`
`npm install`

## Install React-Bootstrap
- Visit https://react-bootstrap.github.io/docs/getting-started/introduction#installation to use updated installation command  
- This is currently: `npm install react-bootstrap bootstrap`  
- Visit https://react-bootstrap.github.io/docs/getting-started/introduction#css to use the updated css import statement  
- This is currently: `import 'bootstrap/dist/css/bootstrap.min.css';`  
- Copy and paste the CSS import to app.jsx, above your existing css import


## Launch the Dev Environment
`npm run dev` 

## Integrate Git
- Create a repository on GitHub and note the URL (it should end with .git)
- `git init`
- Make your changes and create your first commit: `git commit -m "first commit"`
- Rename your (local) branch from master to main: `git branch -M main`
- Connect your remote repository using your URL: `git remote add origin URL.git`
- Push to your remote repository `git push -u origin main`