import React from "react";

class ApiCall extends React.Component {
  state = {
    repos: []
  };

  componentDidMount() {
    fetch("https://api.github.com/users/rigorojas/repos")
      .then(response => response.json())
      .then(data => this.setState({ repos: data }));
    console.log("WE MOUNTED");
  }

  render() {
    return (
      <div>
        <span>Calling GITHUB API</span>
        {this.state.repos.map((repo, i) => (
          <div key={i}>
            {repo.name} - {repo.full_name}
          </div>
        ))}
      </div>
    );
  }
}

export default ApiCall;
