import React from "react";
import { Button, Avatar } from "@mui/material";
import me from "../../assets/me.jpg";
import "./TweetBox.css"
import { db } from "../../firebase"
import {collection, addDoc} from "firebase/firestore"
import { serverTimestamp } from "firebase/firestore";

const TweetBox = () => {

    const[tweetMessage, setTweetMessage] = React.useState('');
    const[tweetImage, setTweetImage] = React.useState('');

    const sendTweet = (event) => {
        event.preventDefault();

        const post = {
            displayName: 'Tanmay Singh',
            username: "tstanmay13",
            verified: true,
            text: tweetMessage,
            avatar: me,
            image: tweetImage,
            timestamp: serverTimestamp()
        }

        addDoc(collection(db, "posts"), post)
        
        setTweetImage("")
        setTweetMessage("")
    
    }
    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src={me} />
                    <input 
                    value={tweetMessage} 
                    placeholder="What's happening" 
                    type="text" 
                    onChange={(event) => setTweetMessage(event.target.value)}/>

                </div>
                <input
                 value={tweetImage} 
                    className="tweetBox__imageInput"
                    placeholder="Optional: Enter image URL"
                    type="text" 
                    onChange={(event) => setTweetImage(event.target.value)}/>

                <Button 
                onClick={sendTweet} 
                type="submit" 
                className="tweetBox__tweetButton"> Tweet </Button>
            </form>
        </div>
    );
};

export default TweetBox;
