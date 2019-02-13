import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
class Show extends Component {
  state = {
    users: []
  };
  componentDidMount() {
    axios.get(`/users`).then(res => {
      const users = res.data.data;
      this.setState({ users });
      console.log(users);
    });
  }

  render() {
    return (
      <div>
        <form>
          <button type="button">Add User</button>
          <table className="tat" border="1px">
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Place</th>
              <th>Created_at</th>
            </tr>
            {this.state.users.map(user => {
              const { age, name, id, created_at, Place } = user;
              return (
                <tr key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.age}</td>

                  <td>{Place}</td>
                  <td>{created_at}</td>
                  {/* <td>{person.email}</td> */}
                </tr>
              );
            })}
          </table>
        </form>
      </div>
    );
  }
}
export default Show;
