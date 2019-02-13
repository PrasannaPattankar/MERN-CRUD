import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
class Create extends Component {
  constructor() {
    super();
    this.handleAgeChange = this.handleAgeChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handlePlaceChange = this.handlePlaceChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      name: "",
      age: "",

      Place: ""
    };
  }
  handleChange(e) {
    this.setState({
      name: e.target.value
    });
  }
  handleAgeChange(e) {
    this.setState({
      age: e.target.value
    });
  }

  handlePlaceChange(e) {
    this.setState({
      Place: e.target.value
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    const useradmin = {
      name: this.state.name,
      age: this.state.age,
      Place: this.state.Place
    };
    axios.post(`/user`, useradmin).then(res => {
      console.log(res);
      console.log(res.data);
    });
    this.setState({
      name: "",
      age: "",
      Place: ""
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Person Name:
            <input type="text" name="name" onChange={this.handleChange} />
          </label>
          <label>
            Person Age:
            <input type="text" name="age" onChange={this.handleAgeChange} />
          </label>
          <label>
            Person Place:
            <input type="text" name="Place" onChange={this.handlePlaceChange} />
          </label>
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}
export default Create;
