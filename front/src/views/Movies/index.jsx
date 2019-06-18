import React, { Component } from "react";
import { connect } from "react-redux";

import s from "./style.scss";

class Movies extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={s.container}>
        <h1>Movieesss</h1>
        here should be the list
      </div>
    );
  }
}

const mapStateToProps = state => ({
  movies: state.movies
});

export default connect(mapStateToProps)(Movies);
