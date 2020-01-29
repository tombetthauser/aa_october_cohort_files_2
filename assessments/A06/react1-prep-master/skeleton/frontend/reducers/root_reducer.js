import { combineReducers } from 'redux';
import PostsReducer from './posts_reducer';
import { REMOVE_POST } from '../actions/post_actions';

/*
Export a `RootReducer` that sets up a `posts` slice of state, which delegates
to the `PostsReducer`.
*/

const RootReducer = combineReducers({
  posts: PostsReducer
});

export default RootReducer

// ~10min no notes only minor bugs! - very rusty though -- drill!!