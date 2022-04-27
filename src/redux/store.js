import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger'
import main from "./reducers/main";

export default createStore(
    main,
    applyMiddleware(logger)
)

// export default createStore(
//     main,
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
//     applyMiddleware(logger)
// )

 
