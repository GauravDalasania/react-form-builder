import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { watcherSaga } from "./sagas/saga";
import formReducers from "./reducers/formReducers";
import { createBrowserHistory } from "history";
import { connectRouter, routerMiddleware } from "connected-react-router";

const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();
const routeMiddleware = routerMiddleware(history);
const middleWare = [routeMiddleware, sagaMiddleware];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducer = combineReducers({
	router: connectRouter(history),
	form: formReducers,
});

const store = createStore(reducer, composeEnhancers(applyMiddleware(...middleWare)));

sagaMiddleware.run(watcherSaga);

export { store, history };
