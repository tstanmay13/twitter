import React from "react";
import { Button, Avatar } from "@mui/material";
import me from "../../assets/me.jpg";
import "./TweetBox.css"

const TweetBox = () => {
    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src={me} />
                    <input placeholder="What's happening" type="text" />

                </div>
                <input
                    className="tweetBox__imageInput"
                    placeholder="Optional: Enter image URL"
                    type="text" />
                <Button className="tweetBox__tweetButton"> Tweet </Button>
            </form>
        </div>
    );
};

export default TweetBox;
