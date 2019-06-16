import React, { Component } from "react";

import { Button, Icon, Input } from "semantic-ui-react";

import s from "./style.scss";

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const input = e.target.value;
    this.setState({ input });
  }

  render() {
    const { input } = this.state;
    return (
      <div>
        <Input value={input} onChange={this.handleChange} />
      </div>
    );
  }
}
