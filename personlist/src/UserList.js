import React, { Component } from "react";
import { User } from "./User";
import './user.css';

class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      isListVisible: true,
      userId: ""
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ users }));
  }
  handleShowDetails = (user, i) => {
    this.setState({
      isListVisible: false,
      userId: user.id - 1
    });
  };
  handleGoBack = () => {
    this.setState({
      isListVisible: true
    });
  };
  render() {
    const { users, isListVisible, userId } = this.state;
    return (
      <div>
        {isListVisible ? (
          <div className="Userlist">
            <ul>
              {users.map((user, i) => (
                <li key={i} onClick={() => this.handleShowDetails(user, i)}>
                  {user.name}
                </li>
              ))}
            </ul>
          </div>
        ) : ( <div className="right">
        <p>Name: {users[userId].name}</p>
      <p>Email:{users[userId].email}</p>
      <p>Phone:{users[userId].phone}</p>
      <p>City: {users[userId].address.city}</p>
      <button onClick={this.handleGoBack}>back</button>
        </div>
          
        )}
       
      </div>
    );
  }
}

export default UserList;
