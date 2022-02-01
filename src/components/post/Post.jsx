import './post.css';
import { person1, person2,person3,person4,person5} from '../../assets/images';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { post1,post2,post3,post4,post5,post6,post7,post8,post9,post10} from '../../assets/images';

export default function Post() {
  return (<div className='post'>
      <div className="postWrapper">
          <div className="postTop">
                <div className="postTopLeft">
                    <img src={person1} alt="Profile Pic" className="postProfileImg" />
                    <span className="postUsername">Mahavirbha Chauhan</span>
                    <span className="postDate">5 mins ago</span>  
                </div>
                <div className="postTopRight">
                    <MoreVertIcon />                                    
                </div>      
          </div>
          <div className="postCenter">
              <span className="postText">Hey! It's My First Post :)</span>
              <img src={post1} alt="" className="postImg" />
          </div>
          <div className="postBottom">

          </div>
      </div>
  </div>);
}
