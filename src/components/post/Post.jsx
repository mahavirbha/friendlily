import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useState } from 'react';
import { heart, like } from '../../assets/images';
import { Users } from '../../dummyData';
import './post.css';

const Modal = ({ isOpen, onClose, url }) => {
    if (!isOpen) return null;

    return (
        <div className="modal">
            <div className="modalContent">
                <iframe src={url} title="External Content" className="iframe" />
                <button onClick={onClose} className="closeButton">
                    Close
                </button>
            </div>
        </div>
    );
};


export default function Post({ post, is_ad = false }) {

    const user = Users.filter((u) => u.id === post.userId);
    const uName = user[0];
    // console.log(uName);
    const na = uName.username;
    const dp = uName.profilePicture;
    // console.log(na);

    const [like_, setLike] = useState(post.like);
    const [isLiked, setIsLike] = useState(false);

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const likeHandler = () => {
        setLike(isLiked ? like_ - 1 : like_ + 1);
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
                <span className="postText">{post.desc}</span>
                <img src={post.photo} alt="" className="postImg" />
            </div>
            {is_ad ? <div className="postBottom">
                <div className="postBottomLeft bottomdsc">
                    {post.desc2}
                </div>
                <div className="postBottomRight">
                    <button onClick={() => openModal(post.cta_link)} className="ctabtn" >{post.cta_text}</button>
                </div>
            </div> : <div className="postBottom">
                <div className="postBottomLeft">
                    <img src={like} alt="" onClick={likeHandler} className="likeIcon" />
                    <img src={heart} alt="" className="likeIcon" onClick={likeHandler} />
                    <span className="postLikeCounter">{like_} People like it</span>
                </div>
                <div className="postBottomRight">
                    <span className="postCommentText">{post.comment} comments</span>
                </div>
            </div>}

        </div>

        <Modal isOpen={isModalOpen} onClose={closeModal} url={post.cta_link} />
    </div>);
}
