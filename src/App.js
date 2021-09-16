import React from "react";
import PropTypes from 'prop-types';

function Beer({name, picture, rating}){
  return (
    <div>
      <h3>I Like {name}</h3>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name} />
    </div>
  )
}

const beerILike = [
  {
    id:1,
    name : "써머스비",
    image : "https://file.mk.co.kr/meet/neds/2019/07/image_readtop_2019_585083_15645527523847686.jpg",
    rating : 5.0,
  },
  {
    id:2,
    name : "예거",
    image : "https://cdn.dailycnc.com/news/photo/202006/101986_197399_4053.jpg",
    rating : 4.0,
  },
  {
    id:3,
    name : "곰표맥주",
    image : "https://dimg.donga.com/ugc/CDB/SHINDONGA/Article/5f/11/41/eb/5f1141eb12e0d2738de6.jpg",
    rating : 3.0,
  },
  {
    id:4,
    name : "버드와이저",
    image : "https://img.etnews.com/photonews/1901/1152597_20190128152140_286_0001.jpg",
    rating : 2.0,
  },
]

function renderBeer(beer){
  return <Beer name={beer.name} picture={beer.image} rating={beer.rating} key={beer.id}/>
}

Beer.propTypes = {
  name : PropTypes.string.isRequired,
  picture : PropTypes.string.isRequired,
  rating : PropTypes.number.isRequired,
}

function App() {
  return( 
    <div>
      {beerILike.map(renderBeer)}
    </div>
  )
}

export default App; 