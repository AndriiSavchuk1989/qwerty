import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = { user: {} };
    this.showMyId = this.showMyId.bind(this);
    console.log("user____!!!!", this.state.user);
  }

  showMyId(event) {
    console.log(this.state.user.id);
    console.log(event.target.innerHTML);
  }

  componentDidMount() {
    console.log(this.props);
    this.setState({ user: { ...this.props.user } });
    console.log(this.state.user.id);
  }

  render() {
    const {
      user: { name, id }
    } = this.state;
    return (
      <div id={id} onClick={this.showMyId}>
        <p>{name}</p>
        <p>{id}</p>
      </div>
    );
  }
}

class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = { users: [] };
    this.showId = this.showId.bind(this);
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(json => this.setState({ users: [...json] }));
  }

  showId(event) {
    console.log(this.id);
  }

  render() {
    console.log(this.state);
    const { users } = this.state;
    const users1 = users.map(user => (
      <div>
        <User key={user.id} user={user} />
      </div>
    ));
    console.log("users1___", users1);
    return <div>{users1}</div>;
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Component />, rootElement);
