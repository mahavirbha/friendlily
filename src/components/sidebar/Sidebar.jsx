import './sidebar.css';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import ChatIcon from '@mui/icons-material/Chat';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import GroupIcon from '@mui/icons-material/Group';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import EventIcon from '@mui/icons-material/Event';
import SchoolIcon from '@mui/icons-material/School';
import { person1, person2, person3, person4, person5, person6, person7, person8, person9, person10 } from '../../assets/images';
import CloseFriend from '../closeFriend/CloseFriend';
import { Users } from '../../dummyData';

export default function Sidebar() {
    return (<div className='sidebar'>
        <div className="sidebarWrapper">
            <ul className="sidebarList">
                <li className="sidebarListItem">
                    <RssFeedIcon className='sidebarIcon' />
                    <span className="sidebarListItemText">
                        Feed
                    </span>
                </li>

                <li className="sidebarListItem">
                    <ChatIcon className='sidebarIcon' />
                    <span className="sidebarListItemText">
                        Feed
                    </span>
                </li>

                <li className="sidebarListItem">
                    <PlayCircleIcon className='sidebarIcon' />
                    <span className="sidebarListItemText">
                        Videos
                    </span>
                </li>

                <li className="sidebarListItem">
                    <GroupIcon className='sidebarIcon' />
                    <span className="sidebarListItemText">
                        Groups
                    </span>
                </li>

                <li className="sidebarListItem">
                    <BookmarkIcon className='sidebarIcon' />
                    <span className="sidebarListItemText">
                        Bookmarks
                    </span>
                </li>

                <li className="sidebarListItem">
                    <HelpOutlineIcon className='sidebarIcon' />
                    <span className="sidebarListItemText">
                        Questions
                    </span>
                </li>

                <li className="sidebarListItem">
                    <WorkOutlineIcon className='sidebarIcon' />
                    <span className="sidebarListItemText">
                        Jobs
                    </span>
                </li>

                <li className="sidebarListItem">
                    <EventIcon className='sidebarIcon' />
                    <span className="sidebarListItemText">
                        Events
                    </span>
                </li>

                <li className="sidebarListItem">
                    <SchoolIcon className='sidebarIcon' />
                    <span className="sidebarListItemText">
                        Courses
                    </span>
                </li>

            </ul>

            <button className="sidebarButton">Show More</button>
            <hr className='sidebarHr' />
            <ul className="sidebarFriendList">

                {Users?.filter((user) => user.id != 12).map(u => (
                    <CloseFriend key={u.id} user={u} />
                ))}

            </ul>
        </div>
    </div>);
}
