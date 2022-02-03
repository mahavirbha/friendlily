import './post.css';
import { person1, person2,person3,person4,person5} from '../../assets/images';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {like,heart} from '../../assets/images';
import { Users } from '../../dummyData';
import { useState } from 'react';


export default function Post({post}) {

    const user = Users.filter((u) => u.id === post.userId);
    const uName = user[0];
    // console.log(uName);
    const na = uName.username;
    const dp = uName.profilePicture;
    // console.log(na);

    const [like_,setLike] = useState(post.like);
    const [isLiked,setIsLike] = useState(false);

    const likeHandler = () => {
        setLike(isLiked ? like_-1 : like_+1);
        setIsLike(!isLiked);
    }

    return (<div className='post'>
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img src={dp} alt="Profile Pic" className="postProfileImg" />
                    <span className="postUsername">{na}</span>
                    <span className="postDate">{post.date}</span>  
                </div>
                <div className="postTopRight">
                    <MoreVertIcon />                                    
                </div>      
            </div>
            <div className="postCenter">
                <span className="postText">{post?.desc}</span>
                <img src={post.photo} alt="" className="postImg" />
            </div>
            <div className="postBottom"> 
                <div className="postBottomLeft">
                    <img src={like} alt="" onClick={likeHandler} className="likeIcon" />
                    <img src={heart} alt="" className="likeIcon" onClick={likeHandler} />
                    <span className="postLikeCounter">{like_} People like it</span>
                </div>
                <div className="postBottomRight">
                    <span className="postCommentText">{post.comment} comments</span>
                </div>
            </div>
        </div>
    </div>);
}
