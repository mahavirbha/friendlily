import "./profile.css";

import Topbar from '../../components/topbar/Topbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Rightbar from '../../components/rightbar/Rightbar';
import Feed from '../../components/feed/Feed';

import { person1,post3} from '../../assets/images';

export default function Profile() {
  return(
    <>
        {/* <Topbar/> */}
        <div className="profile">
            <Sidebar/>
            <div className="profileRight">
                <div className="profileRightTop">
                    <div className="profileCover">
                        <img src={post3} alt="" className="profileCoverImg" />
                        <img src={person1} alt="" className="profileUserImg" />
                    </div>
                    <div className="profileInfo">
                        <h4 className="profileInfoName">Mahavirbha Chauhan</h4>
                        <span className="profileInfoDesc">robo with some ai</span>
                    </div>
                    
                </div>
                <div className="profileRightBottom">
                    <Feed/>
                    <Rightbar profile/>  
                </div>

            </div>
                  
        </div>
    </>
  );
}
