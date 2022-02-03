import "./online.css";

export default function Online(user) {
  return (
    <li className="rightbarFriend">
        <div className="rightbarProfileImgContainer">
            {console.log(user.user.profilePicture)}
            <img src={user.user.profilePicture} alt="" className="rightbarProfileImg" />
            <span className="rightbarOnline"></span>              
        </div>
        <span className="rightbarUsername">{user.user.username}</span>
    </li>
  );
}
