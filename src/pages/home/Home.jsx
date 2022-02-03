import React from 'react';
// import person1 from '../../assets/images';
import Topbar from '../../components/topbar/Topbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Rightbar from '../../components/rightbar/Rightbar';
import Feed from '../../components/feed/Feed';
import "./home.css";
import { useState } from 'react';

import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import { person1} from '../../assets/images';
import Profile from '../profile/Profile';

export default function Home() {
    const [profileState, setProfileState] = useState(false);
    const [pageName,setPageName] = useState(false);

    const changeState = () => {
        setProfileState(!profileState);
    };

    return (
        <>
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
                {profileState ? <span className="topbarLink" onClick={changeState} > View Feed </span> : <span className="topbarLink" onClick={changeState} > View Profile</span>}
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
            <img src={person1} alt="" className="topbarImg" onClick={changeState} />
            </div>
        </div>

        {profileState ? <Profile/> : ""}
        {profileState ? "" : (<>
            <div className="homeContainer">
                <Sidebar/>
                <Feed/>
                <Rightbar profile={profileState}/>        
            </div>
        </>)
        }
    </>
        
    );
}
