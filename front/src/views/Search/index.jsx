import React, { Component } from "react";
import { Container, Header, Input } from "semantic-ui-react";

import s from "./style.scss";

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const input = e.target.value;
    this.setState({ input });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { history } = this.props;
    const { input } = this.state;
    if (input) {
      history.push(`/movies?s=${input}`);
    }
  }

  render() {
    const { input } = this.state;
    return (
      <div className={s.search}>
        <Container className={s.container}>
          <Header className={s.title} as="h1">
            Search between lots and lots of movies!
          </Header>
          <form onSubmit={this.handleSubmit}>
            <Input
              className={s.input}
              size="huge"
              icon="search"
              value={input}
              onChange={this.handleChange}
            />
          </form>
          <p>
            I'll add some extra options to the search later...{" "}
            <small>maybe</small>
          </p>
        </Container>
      </div>
    );
  }
}
