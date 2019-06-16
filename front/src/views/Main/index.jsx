import React, { Component } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import actions from "../../store/actions";
import Navbar from "../../components/Navbar";
// import AuthModal from "../../components/AuthModal";

import s from "./style.scss";

import "semantic-ui-css/semantic.min.css";

class Main extends Component {
  componentDidMount() {
    this.props.fetchMe();
  }

  render() {
    const { user } = this.props;
    return (
      <div className={s.container}>
        <Navbar isLoggedIn={!!user.id} />
        {/* <Route path="/login" component={AuthModal} /> */}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  fetchMe: () => dispatch(actions.fetchMe())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
