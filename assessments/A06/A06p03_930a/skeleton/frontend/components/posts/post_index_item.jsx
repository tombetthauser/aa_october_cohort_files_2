import React from 'react';
import { Link } from 'react-router-dom';

/*
Export a `PostIndexItem` presentational component that takes in a `post` and the
`deletePost` action via props. The component should render an `li` containing
the following:

1. A link to the post's show page with text of the post's title
2. A link to the post's edit page with text 'Edit'.
3. A button to delete the post.
*/

const PostIndexItem = props => {
  return (
    <li>
      <Link to={`/posts/${props.post.id}`}>{props.post.title}</Link>
      <Link to={`/posts/${props.post.id}/edit`}>Edit</Link>
      <button onClick={() => props.deletePost(props.post.id)}>Delete</button>
    </li>
  )
}

export default PostIndexItem;

// 9min - 2-3 solution peeks - bad bug not () => in the onClick
// 4min - no bugs no notes!
// 3min - no bugs no notes!
// 5min - no bugs no notes! (hard mode :p)