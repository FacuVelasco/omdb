import React from "react";

import s from "./style.scss";

const MovieCard = movie => (
  <div className={s.container} style={{ backgroundImage: "" }}>
    <div>title</div>
    <div>year</div>
  </div>
);

export default MovieCard;
