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

* A very strict but good linter 

  npm install eslint eslint-config-equimper prettier eslint-config-prettier --save

  then 

  add file .eslintrc 
  ```
    {
      "extends": [
        "equimper",
        "prettier"
      ]
    }
  ```

## Questions I asked along the way

* What is express? 

  Express organizes application into an MVC architecture 

* What is mongoose? 

  Mongoose is the ORM, it is used for modeling mongodb 

* PostgreSQL vs MongoDB? 

  * PostgreSQL: 
    * Vertical Scaling(doesn't scale very well)
    * Could scale horizontally but need third party solution
    * ACID database

  * MongoDB: 
    * Horizontal Scaling (good stuff, better for scaling)
    * Automatic database sharding
    * Potential loss of data 

* Horizontal Scaling vs Vertical Scaling? 

  * Horizontal Scaling: 
    * Scale by adding more machines 
    * Easier to scale dynamically 
  * Vertical Scaling: 
    * Scale by adding more CPU, it is
    * Limited to the capacity of a single machine  