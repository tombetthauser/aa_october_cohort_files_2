import React from 'react';
import PostIndexItem from './post_index_item';
import CreatePostFormContainer from './create_post_form_container';
import { fetchPosts } from '../../actions/post_actions';

/*
Export a `PostIndex` presentational component that renders a list (`ul`) of
`PostIndexItems`. This component should receive `posts` from the store as a prop
via its container and fetch them once it has successfully mounted to the DOM.
Below the `ul`, render the `CreatePostFormContainer` component.
*/

class PostIndex extends React.Component {
  componentDidMount() {
    fetchPosts(this.props.posts)
  }

  render() {
    const { posts, deletePost } = this.props;
    return (
      <div>
        <ul>
          { posts.map(post => (<PostIndexItem post={post} deletePost={deletePost} key={post.id} />)) }
        </ul>
        <CreatePostFormContainer />
      </div>
    )
  }
}

export default PostIndex;

// 8min - no notes!! - one dumb 2sec bug - "state.props.posts -> state.posts"