import React from 'react';
import './header.css';
function Header() {
    return (
        <div className='headerclass'>
            <div className="section_s1">
                <div className="image-card">
                    <td><i className="fa fa-bars"></i></td>&nbsp;&nbsp;&nbsp;&nbsp;
                    <img className='Ylogo' src="images/YouTube_Logo_2017.svg.webp" alt="youtube_logo" />&nbsp;

                </div>

            </div>
            <div className="section_s2">
                <div className="searchbox">
                    <input type="text" placeholder="Search.." />
                    <button><i class="fa fa-search"></i> </button>&nbsp;
                    <button type="submit"><i class="fa fa-microphone" aria-hidden="true"></i></button>

                </div>

            </div>
            <div className='section_s3'>
                <i class="fa fa-youtube-play" aria-hidden="true"></i>&nbsp;&nbsp;
                <i class="fa fa-bell" aria-hidden="true"></i>&nbsp;&nbsp;
                <i class="fa fa-user" aria-hidden="true"></i>

            </div>
        </div>
    )
}

export default Header;