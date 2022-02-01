import './rightbar.css';
import {gift,ad} from '../../assets/images'
import { person1, person2,person3,person4,person5,person6,person7,person8,person9,person10} from '../../assets/images';



export default function Rightbar() {
  return (<div className='rightbar'>
      <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <img src={gift} alt="gift img" className="birthdayImg" />
          <span className="birthdayText"><b>Divyesh Varu</b> and <b>3 other friends</b> have a birthday today.</span>
        </div>
        <img src={ad} alt="Ad img" className="rightbarAd" />
        <div className="rightbarOnlineContainer">

          <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img src={person3} alt="" className="rightbarProfileImg" />
              <span className="rightbarOnline"></span>              
            </div>
            <span className="rightbarUsername">Divyesh Varu</span>
          </li>

          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img src={person3} alt="" className="rightbarProfileImg" />
              <span className="rightbarOnline"></span>              
            </div>
            <span className="rightbarUsername">Divyesh Varu</span>
          </li>

          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img src={person3} alt="" className="rightbarProfileImg" />
              <span className="rightbarOnline"></span>              
            </div>
            <span className="rightbarUsername">Divyesh Varu</span>
          </li>

          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img src={person3} alt="" className="rightbarProfileImg" />
              <span className="rightbarOnline"></span>              
            </div>
            <span className="rightbarUsername">Divyesh Varu</span>
          </li>

          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img src={person3} alt="" className="rightbarProfileImg" />
              <span className="rightbarOnline"></span>              
            </div>
            <span className="rightbarUsername">Divyesh Varu</span>
          </li>

        </ul>

        </div>
        
      </div>
  </div>);
}
