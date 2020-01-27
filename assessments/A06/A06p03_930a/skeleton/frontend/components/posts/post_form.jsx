import React from 'react';
import create_post_form_container from './create_post_form_container';
import { fetchPost } from '../../actions/post_actions';

/*
Export a `PostForm` presentational component that creates a form to either
create or edit a post (it will be used by two separate containers). The form
should indicate whether it is a create or edit form based on the `formType`
prop. The form should initialize state to the `post` passed in from props. Use
controlled inputs and trigger the `action` passed in from the container upon
submission. Use a text input for the title and a textarea for the body.
*/

class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.post;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.action(this.state)
  }

  update(field) {
    return event => this.setState({ [field]: event.currentTarget.value })
  }

  render() {
    return (
      <div>
        <h2>{this.props.formType}</h2>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.update('title')} value={this.state.title} />
          <textarea  onChange={this.update('body')} value={this.state.body} />
          <button type="submit" value={this.props.formType} />
        </form>
      </div>
    );
  }
}

export default PostForm;


// 34min extensive solution checking --- one bad mispelling bug - debugged solo - handwrite notes then go again!
// 29min only checked notes for three lines - solved 2-3 bugs solo
// 28min checked notes -- only needed them for one line - 2-3 bad bugs debugged mostly solo
// 15min no notes!! - 2minor bugs -- onSubmit={this.handleSubmit}  &  fetchPost(this.props.match.params.postId)
// 12min no notes - no bugs!!!
// 13min no notes - no bugs!!!!
