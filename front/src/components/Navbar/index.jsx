import React, { Component } from "react";
import { Button } from "semantic-ui-react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import actions from "../../store/actions";
import AuthModal from "../AuthModal";

import s from "./style.scss";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: null,
      authError: false
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.sendAuthRequest = this.sendAuthRequest.bind(this);
  }

  componentDidMount() {
    this.props.fetchMe();
  }

  showModal(modal) {
    this.setState({ showModal: modal });
  }

  hideModal() {
    this.setState({ showModal: null });
  }

  sendAuthRequest(cred) {
    const { showModal } = this.state;

    if (showModal === "login") {
      this.props
        .postLogin(cred)
        .then(this.hideModal)
        .catch(err => {
          this.setState({ authError: err.message });
        });
    } else if (cred.password === cred.confirm) {
      this.props
        .postRegister(cred)
        .then(() => {
          this.setState({
            authError: null,
            showModal: "login"
          });
        })
        .catch(err => {
          this.setState({ authError: err.message });
        });
    } else {
      return this.setState({ authError: "Passwords don't match" });
    }
  }

  renderButtons() {
    const { isLoggedIn, push, postLogout } = this.props;
    // if (loading)
    //   return (
    //     <div className="ui active dimmer">
    //       <div className="ui loader" />
    //     </div>
    //   );

    if (isLoggedIn) {
      return (
        <Button.Group>
          <Button onClick={() => push("/profile")} color="violet">
            Profile
          </Button>
          <Button onClick={postLogout} color="violet">
            Logout
          </Button>
        </Button.Group>
      );
    } else {
      return (
        <Button.Group>
          <Button onClick={() => this.showModal("login")} color="violet">
            Login
          </Button>
          <Button onClick={() => this.showModal("register")} color="violet">
            Register
          </Button>
        </Button.Group>
      );
    }
  }

  render() {
    const { showModal, authError } = this.state;
    return (
      <div className={s.container}>
        <Link to="/">
          <div className={s.logo}>OMDB</div>
        </Link>
        <div className={s.search}>Search</div>
        <AuthModal
          open={Boolean(showModal)}
          tab={showModal}
          closeModal={this.hideModal}
          onSubmit={this.sendAuthRequest}
          authError={authError}
        />
        <div className={s.buttons}>{this.renderButtons()}</div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoggedIn: !!state.user.id,
  loading: state.loading
});

const mapDispatchToProps = dispatch => ({
  fetchMe: () => dispatch(actions.fetchMe()),
  postLogin: credentials => dispatch(actions.postLogin(credentials)),
  postRegister: credentials => dispatch(actions.postRegister(credentials)),
  postLogout: () => dispatch(actions.postLogout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
