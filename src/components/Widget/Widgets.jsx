import React from 'react';
import "./Widgets.css"
import { TwitterTimelineEmbed, TwitterShareButton, TwitterTweetEmbed } from 'react-twitter-embed';
import SearchIcon from "@mui/icons-material/Search";

const Widgets = () => {
    return (
        <div className="widget">
            <div className="widgets__input">
                <SearchIcon className="widgets__searchIcon"/>
                <input placeholder="Search Twitter" type="text" />
            </div>

            <div className="widgets__widgetContainer">
                <h2>What's happening</h2>
                <TwitterTweetEmbed tweetId={"933354946111705097"}/>
                <TwitterTimelineEmbed 
                    sourceType="profile"
                    screenName="BleacherReport"
                    options={{height: 400}} />

                <TwitterShareButton 
                url={"https://www.linkedin.com/in/hire-tanmay/"} 
                options={{ text: "just hired this man!", via: "future_recruiter" }}/>
            </div>

        </div>
    );
}

export default Widgets;
