import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";

import s from "./style.scss";

const MovieCard = ({ movie }) => (
  <Card>
    <Image className={s.img} src={movie.Poster} ui={false} />
    <Card.Content className={s.content}>
      <Card.Header>{movie.Title}</Card.Header>
      <Card.Meta>{movie.Year}</Card.Meta>
    </Card.Content>
  </Card>
);

export default MovieCard;
