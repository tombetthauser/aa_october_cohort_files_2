import React from 'react';

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
    this.handleSubmit = this.handleSubmit.bind(this)
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
        <h1>{this.props.formType}</h1>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.update('title')} value={this.state.title} />
          <textarea onChange={this.update('body')} value={this.state.body} />
          <button type="submit" value={this.props.formType} />
        </form>
      </div>
    )
  }
}

export default PostForm;

// 15min no notes no bugs!!!!