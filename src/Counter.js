import React from "react";

class Counter extends React.Component {
  state = {
    count: 0
  };

  onClickHandler = () => {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  };

  render() {
    return (
      <div>
        <div>Current Count is {this.state.count}</div>
        <div onClick={this.onClickHandler}>Add</div>
      </div>
    );
  }
}

export default Counter;
