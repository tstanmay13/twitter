import { Avatar } from '@mui/material';
import React from 'react';
import "./Post.css";
import me from "../../assets/me.jpg";
import VerifiedIcon from '@mui/icons-material/Verified';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PublishIcon from '@mui/icons-material/Publish';

const Post = ({ displayName,
    username,
    verified,
    text,
    image,
    avatar }) => {

    return (
        <div className="post">
            <div className="post__avatar">
                <Avatar src={me} ></Avatar>
            </div>
            <div className="post__body">
                <div className="post__header">
                    <div className="post__headerText">
                        <h3>
                            Tanmay Singh
                            <span className="post__headerSpecial">
                                <VerifiedIcon className="post__badge" /> @tstanmay13
                            </span>

                        </h3>
                    </div>
                    <div className="post__headerDescription">
                        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, voluptatibus aliquam. Doloribus aspernatur nam cumque blanditiis recusandae aliquid nihil temporibus!</p>
                    </div>
                </div>
                <img src="https://images.unsplash.com/photo-1520453803296-c39eabe2dab4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGVsbG8lMjBzaWdufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                <div className="post__footer">
                    <ChatBubbleOutlineIcon fontSize="small" />
                    <RepeatIcon fontSize="small" />
                    <FavoriteBorderIcon fontSize="small" />
                    <PublishIcon fontSize="small" />
                </div>
            </div>
        </div>
    );
}

export default Post;
