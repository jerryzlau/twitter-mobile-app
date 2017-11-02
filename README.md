# Twitter Clone

## Notes: 
* node doesn't understand ES6 syntax, however, babel can handle that problem,
  the line below installs babel and solve the problem:
```
npm install babel-cli babel-plugin-transform-object-rest-spread babel-preset-env --save
```
* add run server line to package.json scripts:
  this also adds nodemon to recompile server on change
  ```
  "dev": "cross-env NODE_ENV=dev nodemon --exec babel-node src/index.js"
  ```
  run server by: 
  ```
  npm run-script dev
  ```