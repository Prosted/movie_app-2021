import React from "react";
import PropTypes from 'prop-types';
import axios from "axios";
import Movie from "./Movie";
import "./App.css";

class App extends React.Component {
  state = {
    isLoading : true,
    movies : [],
  }

  getMovies = async () => {
    const {data : {data : {movies}}} = await axios("https://yts-proxy.nomadcoders1.now.sh/list_movies.json");
    this.setState({movies, isLoading : false});
  }

  componentDidMount(){
    this.getMovies();
  }

  render(){
    const {isLoading, movies} = this.state;
    return (
      <div className="container">{
        isLoading ? <section className="section"><span className="section__text">Loading...</span></section> : movies.map(movie => <Movie key={movie.id} id={movie.id} title={movie.title} year={movie.year} summary={movie.summary} poster={movie.medium_cover_image} genres={movie.genres}/>)
        }
      </div>
    )
  }
}

export default App; 