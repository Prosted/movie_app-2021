import React from "react";
import "./MovieDetail.css";

class MovieDetail extends React.Component{
    componentDidMount(){
        const {location, history} = this.props;
        if(location.state === undefined){
            return history.push("/");
        }
    }
    render(){
        const {location} = this.props;
        if(location.state === undefined){
            return null;
        }
        const {title, summary, poster, year, genres} = this.props.location.state;

        return(
            <div className="detail-container">
                <img src={poster} alt={title}/>
                <div className="detail-data">
                    <span className="detail-data__title">{title}</span>
                    <span className="detail-data__year">{year}</span>
                    <span className="detail-data__genres">{genres.map((genre, index)=><span className="detail-data__genre" key={index}>#{genre}</span>)}</span>
                    <span className="detail-data__summary">{summary}</span>
                </div>
            </div>
        )
    }
}

export default MovieDetail;