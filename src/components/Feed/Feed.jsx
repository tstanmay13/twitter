import React from "react";
import "./Feed.css";
import Post from "./Post";
import TweetBox from "./TweetBox";
import me from "../../assets/me.jpg";
import { db } from "../../firebase"
import { collection, getDocs } from "@firebase/firestore";
import FlipMove from 'react-flip-move';

function Feed() {
  const [posts, setPosts] = React.useState([])

  React.useEffect(() => {
    async function fetchAPI() {
      let { docs } = await getDocs(collection(db, "posts"))
      let response = docs.map(doc => doc.data())
      setPosts(response)
    }
    fetchAPI()
  }, [posts]);

  return (
    <div className="feed">
      <div className="feed__header">
        <h2> Home</h2>
      </div>
      <TweetBox />
      <FlipMove>
      {posts.map(post =>
        <Post 
          // key={}
          displayName={post.displayName}
          username={post.username}
          verified={post.verified}
          text={post.text}
          avatar={post.avatar}
          image={post.image}
        />)}
        </FlipMove>
    </div>
  );
};

export default Feed;
