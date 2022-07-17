import React from "react";
import "./Feed.css";
import Post from "./Post";
import TweetBox from "./TweetBox";
import me from "../../assets/me.jpg";
import { db } from "../../firebase"
import { collection, getDocs, doc, onSnapshot} from "@firebase/firestore";
import FlipMove from 'react-flip-move';

function Feed() {
  const [posts, setPosts] = React.useState([])


  const colRef = collection(db, "posts")
  React.useEffect(() => {
      onSnapshot(colRef, (snapshot) => {
        const posts = snapshot.docs.map((doc) => ({...doc.data(), id: doc.id}))
        setPosts(posts)
        console.log(posts)
      },(error) => {
        alert("Hi! I am unfortunately out of api calls to my backend server for today. Please try again tommorow. ")
      })

      
  }, []);

  return (
    <div className="feed">
      <div className="feed__header">
        <h2> Home</h2>
      </div>
      <TweetBox />
      <FlipMove>
      {posts.map(post =>
        <Post 
          key={post.id}
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
