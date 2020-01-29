/*
Export the following API Util functions with the specified parameters:

1. `fetchPosts`
2. `fetchPost(postId)`
3. `createPost(post)`
4. `updatePost(post)`
5. `deletePost(postId)`
*/


export const fetchPosts = () => (
  $.ajax({
    url: "/api/posts",
    method: "GET",
    data: null
  })
)

export const fetchPost = (postId) => (
  $.ajax({
    url: `/api/posts/${postId}`,
    method: "GET",
    data: null
  })
)

export const createPost = (post) => (
  $.ajax({
    url: `/api/posts`,
    method: "POST",
    data: { post: post }
  })
)

export const updatePost = (post) => (
  $.ajax({
    url: `/api/posts/${post.id}`,
    method: "PATCH",
    data: { post: post }
  })
)

export const deletePost = (postId) => (
  $.ajax({
    url: `/api/posts/${postId}`,
    method: "DELETE",
    data: null
  })
)

// ~7min - minor bug "/api" - no notes first try!!