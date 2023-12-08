import React from 'react';
import {ClockIcon, HomeIcon, MoonIcon, PersonIcon, VideoIcon} from "@radix-ui/react-icons";

const SideBarMenu = () => {
    const [activeMenu, setActiveMenu] = React.useState('home');
    return (
        <div className='nav-menu'>
            <ul className='sidebar-list'>
                <li className={`sidebar-item ${activeMenu == 'home' ? 'clicked' : ''}`}>
                    <HomeIcon className='icon sidebar-icon'  height="16" width="16" />
                </li>
                <li className={`sidebar-item ${activeMenu == 'person' ? 'clicked' : ''}`}>
                    <PersonIcon className='icon' height="16" width="16" />
                </li>
                <li className={`sidebar-item ${activeMenu == 'clock' ? 'clicked' : ''}`}>
                    <ClockIcon className='icon' height="16" width="16" />
                </li>
                <li className={`sidebar-item ${activeMenu == 'video' ? 'clicked' : ''}`}>
                    <VideoIcon className='icon' height="16" width="16" />
                </li>
                <li className={`sidebar-item ${activeMenu == 'moon' ? 'clicked' : ''}`}>
                    <MoonIcon className='icon' height="16" width="16" />
                </li>
            </ul>
        </div>
    );
};

export default SideBarMenu;