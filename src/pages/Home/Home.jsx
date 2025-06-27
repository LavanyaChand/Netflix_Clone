import React from 'react'
import './Home.css';
import Navbar from '../../components/Navbar/Navbar';
import hero_banner from '../../assets/main_poster.jpg'
import hero_title from '../../assets/group_7.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import TitleCards from '../../components/TitleCards/TitleCards';
import Footer from '../../components/Footer/Footer';
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="hero">
        <img src={hero_banner} alt="" className="banner-img" />
        
        <div className="hero-caption">
          <img src={hero_title} alt="" className="caption-img" />
          <p>
            Winning six Emmys, this world-renowned survival thriller follows
            desperate players competing in deadly children's games for
            life-changing sums of money.
          </p>
          <div className="hero-btns">
            <Link to="/squidgame" className='btn'>
              <img src={play_icon} alt="" />Play
            </Link>
            <button className='btn dark-btn'>
              <img src={info_icon} alt="" />More Info
            </button>
          </div>
          <TitleCards />
        </div>
      </div>
      <div className="more-cards">
        <TitleCards title={"Blockbuster Movies"} category={"top_rated"}/>
        <TitleCards title={"Only on Netflix"} category={"popular"}/>
        <TitleCards title={"Upcoming"} category={"upcoming"}/>
        <TitleCards title={"Top Picks for You"} category={"now_playing"}/>
      </div>
      <Footer />
    </div>
  );
}

export default Home

{/* <Link to={`/player/${card.id}`} className="card" key={index}>
            <img src={`https://image.tmdb.org/t/p/w500`+ card.backdrop_path} alt="" />
            <p>{card.original_title}</p>
          </Link> */}