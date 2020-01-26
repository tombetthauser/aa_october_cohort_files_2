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

const PostsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch(action.type) {
    case RECEIVE_ALL_POSTS:
      return Object.assign({}, oldState, action.posts)
    case RECEIVE_POST:
      return Object.assign({}, oldState, { [action.post.id]: action.post })
    case REMOVE_POST:
      let newState = Object.assign({}, oldState);
      delete newState[action.postId]
      return newState
    default:
      return oldState
  }
}

export default PostsReducer;



// ~20min - interrupted - checked solution a bunch for structure mainly - only mino bugs - debugged solo
// 7min no notes - no bugs!
// 7min no notes - no bugs!
// 6min no notes - no bugs!