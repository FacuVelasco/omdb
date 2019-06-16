import React from "react";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";

import s from "./style.scss";

export default ({ isLoggedIn }) => (
  <div className={s.container}>
    <div className={s.logo}>OMDB</div>
    <div className={s.search}>Search</div>
    <div className={s.buttons}>
      {isLoggedIn ? (
        <Link to="/profile">
          <Button color="violet">Profile</Button>
        </Link>
      ) : (
        <>
          <Link to="/login">
            <Button color="violet">Login</Button>
          </Link>
          <Link to="/register">
            <Button color="violet">Register</Button>
          </Link>
        </>
      )}
    </div>
  </div>
);
