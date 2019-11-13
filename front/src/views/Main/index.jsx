import React from "react";
import { Route, Switch } from "react-router-dom";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Search from "../Search";
import Movies from "../Movies";

import s from "./style.scss";

import "semantic-ui-css/semantic.min.css";

export default ({ location }) => (
  <div className={s.container}>
    <Navbar search={location.search} />
    <div className={s.content}>
      <Switch>
        <Route exact path="/" component={Search} />
        <Route path="/movies" component={Movies} />
      </Switch>
    </div>
    <Footer />
  </div>
);
