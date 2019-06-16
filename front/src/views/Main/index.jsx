import React from "react";
import { Route, Switch } from "react-router-dom";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Search from "../Search";

import s from "./style.scss";

import "semantic-ui-css/semantic.min.css";

export default () => (
  <div className={s.container}>
    <Navbar />
    <div className={s.content}>
      <Switch>
        <Route exact path="/" component={Search} />
        {/* <Route path="/movies" component={Movies} /> */}
      </Switch>
    </div>
    <Footer />
  </div>
);
