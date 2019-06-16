import React from "react";
import { Link } from "react-router-dom";

import s from "./style.scss";

export default () => (
  <div className={s.container}>
    <a href="http://www.omdbapi.com/">
      <p>POWERADE BY OMDB API</p>
    </a>
    <p className={s.footnote}>
      made with <span className={s.heart}>{"<3"}</span> by
      <span className={s.cafeparatodos}> cafeparatodos</span>
    </p>
  </div>
);
