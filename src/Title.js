import { Component } from "react";

class Title extends Component {
  constructor(props) {
    super(props);
    this.state = { text: props.title };
  }

  onClick(text) {
    this.setState({ text });
  }

  render() {
    return (
      <>
        <input type="text" onChange={(e) => this.onClick(e.target.value)} />
        <p>{this.props.title || this.state.text}</p>
      </>
    );
  }
}

export default Title;
