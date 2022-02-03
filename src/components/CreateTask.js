import React, { Component } from "react";

export default class CreateTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: "",
    };
  }

  submitHandler = (event) => {
    event.preventDefault();
    this.props.createTask(this.state.task);
    this.setState({ task: "" });
  };

  handleChange = (event) => {
    this.setState({ task: event.target.value });
  };
  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <input
          type='text'
          placeholder='enter task'
          value={this.state.task}
          onChange={this.handleChange}
          autoFocus
        />
        <button className='add' type='submit'>
          Add
        </button>
      </form>
    );
  }
}
