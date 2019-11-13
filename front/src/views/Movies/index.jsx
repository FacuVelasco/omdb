import React, { Component } from "react";
import { connect } from "react-redux";
import { Card } from "semantic-ui-react";
import { Loader } from "semantic-ui-react";
import qs from "qs";

import s from "./style.scss";
import actions from "../../store/actions";
import MovieCard from "../../components/MovieCard";

class Movies extends Component {
  componentDidMount() {
    const { searchMovies, query, history } = this.props;
    if (!query.s) {
      // go search something!
      history.push("/");
    }
    searchMovies(query.s);
  }

  render() {
    const { movies, loading } = this.props;
    let content = <p className={s.errorMsg}>No movies found ¯\_(ツ)_/¯</p>;

    if (loading) {
      content = <Loader active inline="centered" />;
    }

    if (movies.length) {
      content = (
        <Card.Group centered>
          {movies.map(movie => (
            <MovieCard movie={movie} key={movie.imdbID} />
          ))}
        </Card.Group>
      );
    }

    return <div className={s.container}>{content}</div>;
  }
}

const mapStateToProps = ({ movies, loading }, { location }) => ({
  query: qs.parse(location.search, { ignoreQueryPrefix: true }),
  movies,
  loading
});

const mapDispatchToProps = dispatch => ({
  searchMovies: query => dispatch(actions.searchMovies(query))
});

export default connect(mapStateToProps, mapDispatchToProps)(Movies);
