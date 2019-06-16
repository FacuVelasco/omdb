import React, { Component } from "react";
import { Modal } from "semantic-ui-react";

import Login from "./partials/login";
import Register from "./partials/register";

import s from "./style.scss";

export default class AuthModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      confirm: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate(nextProps) {
    if (this.props.tab !== nextProps.tab) {
      this.setState({
        password: "",
        confirm: ""
      });
    }
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit() {
    this.props.onSubmit(this.state);
  }

  render() {
    const { open, tab, closeModal, authError } = this.props;
    const { email, password, confirm } = this.state;

    return (
      <Modal open={open} basic size="mini">
        {tab === "login" ? (
          <Login
            closeModal={closeModal}
            inputChange={this.handleChange}
            email={email}
            password={password}
            onSubmit={this.handleSubmit}
            authError={authError}
          />
        ) : (
          <Register
            closeModal={closeModal}
            inputChange={this.handleChange}
            email={email}
            password={password}
            confirm={confirm}
            onSubmit={this.handleSubmit}
            authError={authError}
          />
        )}
      </Modal>
    );
  }
}
