import { createStore, applyMiddleware } from 'redux';
import RootReducer from '../reducers/root_reducer';
import thunk from 'redux-thunk';

/*
Export a `configureStore` function that takes in a `preloadedState` parameter
and returns a store created with the `RootReducer`, `preloadedState`, and
`thunk` middleware.
*/

const configureStore = (preloadedState = {}) => (
  createStore(RootReducer, preloadedState, applyMiddleware(thunk))
)

export default configureStore;

// ~2min - no bugs no notes!! - pretty rusty though - might drill a bit

// paused after 40min to say gnight to Erin
// resetting timer from 0:00 -- add up after