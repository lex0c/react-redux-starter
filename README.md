# Documentation

## Getting Started

1. **Clone this repository**

    git clone https://github.com/lleocastro/react-redux-starter.git

2. **Install dependencies**

    npm install

3. **Run dev server**

   npm run start

   Dev server should be running at http://localhost:8080/
   

### File Structure
```
.
├── app/
|   ├── assets/
|   |   ├── imgs/
|   |   ├── sass/
|   ├── src/
|   |   ├── components/
|   |   |   ├── ...
|   |   |   ├── action-creator.js
|   |   |   ├── app.jsx
|   |   ├── pages/
|   |   |   ├── ...
|   |   ├── utils/
|   |   |   ├── ...
|   |   ├── root.reducer.js
|   |   ├── store.js
|   |   └── index.js
|   ├── public/
|   |   ├── index.html
|   └── tests/
|   |   ├── ...
├── .eslintignore
├── .eslintrc
├── .editorconfig
├── package.json
├── default.conf
├── Dockerfile
├── docker-compose.yml
├── webpack.config.js
├── .gitattributes
└── .gitignore
```

## Scripts
- **npm run start**

     Start webpack dev server

- **npm run build**

     Bundles the application
     
- **npm run deploy**

     Creates the production files

- **npm run lint**

     Runs the linter

- **npm run test**

     Runs unit tests
     
     
