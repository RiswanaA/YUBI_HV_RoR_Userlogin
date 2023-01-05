import React from 'react';
import './sidebar.css';
function Sidebar() {
    return (

        <div className="sidebar_container">
            <ul className='remove-bullets'>
                <li><i className="fa fa-home fa-fw"></i>Home</li>
                <li><i className="fa fa-camera fa-fw"></i>Shorts</li>
                <li><i className="fa fa-pencil fa-fw"></i>Subscriptions</li>
                <hr class="solid"></hr>
                <li><i className="fa fa-file-video-o fa-fw"></i>Library</li>
                <li><i className="fa fa-history fa-fw"></i>History</li>
                <li><i className="fa fa-clock-o fa-fw"></i>Watch Later</li>
                <li><i className="fa fa-thumbs-o-up fa-fw"></i>Liked Videos</li>
                <hr class="solid"></hr>
                <p>Subscriptions</p>
                <li><i className="fa fa-star fa-fw"></i>Star TV</li>
                <li><i className="fa fa-check-circle fa-fw"></i>ZEE</li>
                <li><i className="fa fa-lightbulb-o fa-fw"></i>BRIGHT SIDE</li>
                <hr class="solid"></hr>
                <p>Explore</p>
                <li><i className="fa fa-rss fa-fw"></i>Live</li>
            </ul>
        </div>

    );
}

export default Sidebar;