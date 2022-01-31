import './topbar.css';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import { person1, person2,person3,person4,person5} from '../../assets/images';

export default function Topbar() {
  return (
    <div className='topbarContainer'>
        <div className="topbarLeft">
          <span className="logo">Friendlily</span>
        </div>

        <div className="topbarCenter">
          <div className="searchbar">
            <SearchIcon className='searchIcon' />
            <input placeholder='Search for results' className="searchInput" />
          </div>
        </div>

        <div className="topbarRight">
          <div className="topbarLinks">
            <span className="topbarLink">Homepage</span>
            <span className="topbarLink">Timeline</span>
          </div>
          <div className='topbarIcons'>
            <div className="topbarIconItem">
              <PersonIcon />
              <span className="topbarIconBadge">1</span>
            </div>
            <div className="topbarIconItem">
              <ChatIcon />
              <span className="topbarIconBadge">2</span>
            </div>
            <div className="topbarIconItem">
              <NotificationsActiveIcon/>
              <span className="topbarIconBadge">1</span>
            </div>
          </div>
          <img src={person1} alt="" className="topbarImg"/>
        </div>
    </div>
  );
}
