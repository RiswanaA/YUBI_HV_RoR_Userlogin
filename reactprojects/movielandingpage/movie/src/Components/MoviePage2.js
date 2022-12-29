import React, { useState} from 'react';
const MoviePage2 = () => {

    const [showText, setShowText] = useState(false)
    const handleMouseEnter = () => {
        setShowText(true);
     }
    const handleMouseLeave = () => {

        setShowText(false);
    }
    
    return (
        <div>

            <div className='row'>
                <div className='poster' onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}>
                    <img className='img' src="https://bit.ly/3FX2yKt" ></img>
                    {showText && <div class="text"><br/>LUCK<br/> 1 hr 55 min <br/>OTT:AMAZON PRIME</div>}
                </div><div className='poster' onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}>
                            <img className='img' src="https://bit.ly/3BJMuJC" ></img>
                            {showText && <div class="text"><br/>THE CROODS <br/> 1 hr 55 min<br/>OTT: NETFLIX</div>}
        </div>
                
                <div className='poster' onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}>
                    <img className='img' src="https://bit.ly/3uWijeo" ></img>
                    {showText && <div class="text"><br/>SUPER PETS <br/> 1 hr 45 min<br/> OTT:AMAZON PRIME </div>}
                </div>
            </div>
        </div>
    )
}
export default MoviePage2;