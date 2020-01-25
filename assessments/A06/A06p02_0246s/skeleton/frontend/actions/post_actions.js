import * as PostApiUtil from '../util/post_api_util';

/*
Export the following action constants:

1. `RECEIVE_ALL_POSTS` (corresponding action should have a `posts` payload)
2. `RECEIVE_POST` (corresponding action should have a `post` payload)
3. `REMOVE_POST` (corresponding action should have a `postId` payload)

Export the following thunk action creators with the specified parameters:

1. `fetchPosts`
2. `fetchPost(postId)`
3. `createPost(post)`
4. `updatePost(post)`
5. `deletePost(postId)`
*/

export const RECEIVE_ALL_POSTS = "RECEIVE_ALL_POSTS";
export const RECEIVE_POST = "RECEIVE_POST";
export const REMOVE_POST = "REMOVE_POST";

export const fetchPosts = () => dispatch => (
    PostApiUtil.fetchPosts().then(posts => dispatch({ type: RECEIVE_ALL_POSTS, posts }))
)

export const fetchPost = (postId) => dispatch => (
    PostApiUtil.fetchPost(postId).then(post => dispatch({ type: RECEIVE_POST, post }))
)

export const createPost = (post) => dispatch => (
    PostApiUtil.createPost(post).then(post => dispatch({ type: RECEIVE_POST, post }))
)

export const updatePost = (postId) => dispatch => (
    PostApiUtil.updatePost(postId).then(post => dispatch({ type: RECEIVE_POST, post }))
)

export const deletePost = (postId) => dispatch => (
    PostApiUtil.deletePost(postId).then(() => dispatch({ type: REMOVE_POST, postId }))
)