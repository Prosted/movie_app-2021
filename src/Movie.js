import React from "react";
import Proptypes from "prop-types";
import "./Movie.css";

function Movie({id, year, title, summary, poster, genres}){
    return(
        <div className="movie">
            <img src={poster} alt={title}/>
            <div className="movie__data">
                <h3 className="movie__title">{title}</h3>
                <h5 className="movie__year">{year}</h5>
                <ul className="movie__genres">{genres.map((genre, index) => <li className="movie__genre" key={index}>#{genre}</li>)}</ul>
                <h5 className="movie__summary">{summary.slice(0, 180)}...</h5>
            </div>
        </div>
    )
}

Movie.prototype = {
    id : Proptypes.number.isRequired,
    year : Proptypes.number.isRequired,
    title : Proptypes.string.isRequired,
    summary : Proptypes.string.isRequired,
    poster : Proptypes.string.isRequired,
    genres : Proptypes.arrayOf(Proptypes.string).isRequired,
}


export default Movie;