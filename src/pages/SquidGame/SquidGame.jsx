import React from 'react';
import './SquidGame.css';
import back_arrow_icon from '../../assets/back_arrow_icon.png';
import { useNavigate } from 'react-router-dom';

const SquidGame = () => {

  const navigate = useNavigate();

  return (
    <div className="squid">
      <img src={back_arrow_icon} alt="" onClick={() => {navigate('/')}} />
      <iframe
        width="85%"
        height="85%"
        src="https://www.youtube.com/embed/zgGTVaG2UiQ"
        title="Trailer"
        allowFullScreen
      ></iframe>
      <div className="player-info">
        <p>2025-05-31</p>
        <p>Squid Game: Season 3</p>
        <p>Trailer</p>
      </div>
    </div>
  );
}

export default SquidGame