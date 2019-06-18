import React, { Component } from "react";
import { Container, Header, Button, Icon, Input } from "semantic-ui-react";
import { connect } from "react-redux";

import actions from "../../store/actions";

import s from "./style.scss";

class Search extends Component {
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
    const { serchMovies, history } = this.props;
    const { input } = this.state;
    if (input) {
      serchMovies(input).then(() => history.push("/movies"));
    }
  }

  render() {
    const { input } = this.state;
    return (
      <div className={s.search}>
        <Container className={s.container}>
          <Header className={s.title} as="h1">
            Search between hundreds of movies!
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
            Maybe I can add some extra search options in the future... maybe
          </p>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  serchMovies: query => dispatch(actions.searchMovies(query))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
