import React, { useEffect, useRef, useState } from 'react';
import './TitleCards.css'
import { Link } from 'react-router-dom';
// import cards_data from '../../assets/cards/Cards_data';
//API: https://developer.themoviedb.org/reference/movie-now-playing-list


const TitleCards = ({title, category}) => {

  const [apiData, setapiData] = useState([])
  const cardsRef = useRef();

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNTE5MTYwY2E5YTA1MDljYzZjZGY3ODI1NWQwMmIyNyIsIm5iZiI6MTc1MDk2OTU4My4wNDQ5OTk4LCJzdWIiOiI2ODVkYWNlZjBkZGE5YTEyZGY5MTRmMDIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.1AIHQubaSIEp3OhLqCSAAWGkiF1k-ZHgvATxT7x-y0Y'
    }
  };


  const handleWheel = (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  }

  useEffect(() => {

     fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
    .then(res => res.json())
    .then(res => setapiData(res.results))
    .catch(err => console.error(err));

    cardsRef.current.addEventListener('wheel', handleWheel);
  },[])

  return (
    <div className='title-cards'>
      <h2>{title ? title : "Popular on Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card, index) => {
          return <Link to={`/player/${card.id}`} className="card" key={index}>
            <img src={`https://image.tmdb.org/t/p/w500`+ card.backdrop_path} alt="" />
            <p>{card.original_title}</p>
          </Link>
        })}
      </div>
    </div>
  )
}

export default TitleCards