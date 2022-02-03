import "./closeFriend.css";

export default function CloseFriend(user) {
  return (
    <li className="sidebarFriend">
        <img src={user.user.profilePicture} alt="Parth" className="sidebarFriendImg" />
        <span className="sidebarFriendname">{user.user.username}</span>
    </li>
  );
}
