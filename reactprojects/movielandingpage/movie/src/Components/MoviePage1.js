
import React, { useState} from 'react';

const MoviePage1 = () => {

  const [showText, setShowText] =useState(false);
  const handleMouseEnter = () => {
    setShowText(true);

  }
  const handleMouseLeave = () => {

    setShowText(false);
  }
  return (
    <div  >
      
      <div className='row'>
        <div className='poster' onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}>
          <img className='img' src="https://bit.ly/3G0RJXR"></img>
          {showText && <div class="text"><br/>MINIONS <br/>2 hr 05 min <br/>OTT:AMAZON PRIME</div>}
        </div>
        <div className='poster' onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}>
          <img className='img' src="https://bit.ly/3WuQWUB"></img>
          {showText && <div class="text"><br/>THE SEA BEAST <br/> 1 hr 55 min<br/>OTT: NETFLIX</div>}
        </div>
        <div className='poster' onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}>
          <img className='img' src="https://bit.ly/3PBZWVr"></img>
          {showText && <div class="text"><br/>LIGHT YEAR <br/> 2 hr 55 min <br/>OTT: DISNEYPLUS</div>}
        </div>
      </div>
      <div className='row'>
        <div className='poster' onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}>
          <img className='img' src="https://bit.ly/3YxZLig"></img>
          {showText && <div class="text"><br/>WISH DRAGON <br/> 1 hr 55 min<br/>OTT: NETFLIX</div>}
        </div>
        <div className='poster' onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}>
          <img className='img' src="https://bit.ly/3VeOkcw" ></img>
          {showText && <div class="text"><br/>BAY MAX <br/> 1 hr 55 min <br/>OTT: SONY LIV</div>}
        </div>
        <div className='poster' onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}>
          <img className='img' src="https://bit.ly/3G115TC" ></img>
          {showText && <div class="text"><br/>HOTEL TRANSYLVANIA <br/> 1 hr 55 min <br/>OTT:DISNEY<br/></div>}

        </div>

      </div>
    </div>
  )
}
export default MoviePage1;
