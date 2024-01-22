import './rightbar.css';
import { gift, ad } from '../../assets/images'
import { person1, person2, person3, person4, person5, person6, person7, person8, person9, person10 } from '../../assets/images';
import { Users } from '../../dummyData';
import Online from '../online/Online';


export default function Rightbar({ profile }) {

    const HomeRightbar = () => {
        return (
            <>
                <div className="birthdayContainer">
                    <img src={gift} alt="gift img" className="birthdayImg" />
                    <span className="birthdayText"><b>Divyesh Varu</b> and <b>3 other friends</b> have a birthday today.</span>
                </div>
                <img src={ad} alt="Ad img" className="rightbarAd" />
                <div className="rightbarOnlineContainer">

                    <h4 className="rightbarTitle">Online Friends</h4>

                    <ul className="rightbarFriendList">
                        {Users?.filter((user) => user.id != 12).map(u => (
                            <Online key={u.id} user={u} />
                        ))}
                    </ul>

                </div>
            </>
        );
    };


    const ProfileRightbar = () => {
        return (
            <>
                <h4 className="rightbarTitle">User information</h4>
                <div className="rightbarInfo">
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">City:</span>
                        <span className="rightbarInfoValue">Himmatnagar</span>
                    </div>

                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">From:</span>
                        <span className="rightbarInfoValue">Bayad</span>
                    </div>

                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">Relationship:</span>
                        <span className="rightbarInfoValue">Single</span>
                    </div>

                </div>

                <h4 className="rightbarTitle">Friends</h4>
                <div className="rightbarFollowings">

                    {Users?.filter((user) => user.id != 12).map(u => (
                        <div className='rightbarFollowing'>
                            <img src={u.profilePicture} alt="" className="rightbarFollowingImg" />
                            <span className="rightbarFollowingName">{u.username}</span>
                        </div>
                    ))}

                    {/* <div className="rightbarFollowing">
            <img src={person1} alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Mahavirbha Chauhan</span>
          </div>

          */}

                </div>
            </>
        );
    }

    return (
        <div className='rightbar'>
            <div className="rightbarWrapper">
                {profile ? <ProfileRightbar /> : <HomeRightbar />}
                {/* <ProfileRightbar /> */}
                {/* <HomeRightbar /> */}

            </div>
        </div>
    );
}
