#### Setup

````
  yarn add redux react-redux
````

#### Structures

- actions
- reducers
- stores
- (middlewares)
  ex:

````
// Middleware function
mwfunc => store => next => action { 
  // smt
  return next(action)
  }
  ***
  applyMiddleware(mwfunc1, mwfunc2, ...)
````

````
  // Reducers
  ... reducers
  ***
  combineReducer(reducer1, reducer2, ...)
````

````
  // Stores
  import -> legacy_createStore as createStore
  
  -> store = createStore(reducer, middleware)
````
