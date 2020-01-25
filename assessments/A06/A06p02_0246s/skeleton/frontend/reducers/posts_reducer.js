import {
  RECEIVE_ALL_POSTS,
  RECEIVE_POST,
  REMOVE_POST,
} from '../actions/post_actions';
import merge from 'lodash/merge';

/*
Export a `PostsReducer` that takes in the old state and appropriately handles
all post actions.
*/

const PostReducer = (oldState = {}, action) => {
  switch (action.type) {
    case RECEIVE_ALL_POSTS:
      return Object.assign({}, oldState, action.posts)
    case RECEIVE_POST:
      return Object.assign({}, oldState, { [action.post.id]: action.post })
    case REMOVE_POST:
      let nextState = Object.assign({}, oldState);
      delete nextState[action.postId]
      return nextState;
    default:
      return oldState;
  }
}

export default PostReducer;