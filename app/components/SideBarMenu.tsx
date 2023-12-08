import React from 'react';
import {ClockIcon, HomeIcon, MoonIcon, PersonIcon, VideoIcon} from "@radix-ui/react-icons";

const SideBarMenu = () => {
    const [activeMenu, setActiveMenu] = React.useState('home');
    const handleActiveMenu = (menu: string) => {
        setActiveMenu(menu);
    }
    return (
        <div className='nav-menu'>
            <ul className='sidebar-list'>
                <li onClick={() => handleActiveMenu('home')} className={`sidebar-item ${activeMenu == 'home' ? 'clicked' : ''}`}>
                    <HomeIcon className='icon'  height="28" width="28" />
                </li>
                <li onClick={() => handleActiveMenu('person')} className={`sidebar-item ${activeMenu == 'person' ? 'clicked' : ''}`}>
                    <PersonIcon className='icon' height="28" width="28" />
                </li>
                <li onClick={() => handleActiveMenu('clock')} className={`sidebar-item ${activeMenu == 'clock' ? 'clicked' : ''}`}>
                    <ClockIcon className='icon' height="28" width="28" />
                </li>
                <li onClick={() => handleActiveMenu('video')} className={`sidebar-item ${activeMenu == 'video' ? 'clicked' : ''}`}>
                    <VideoIcon className='icon' height="28" width="28" />
                </li>
                <li onClick={() => handleActiveMenu('moon')} className={`sidebar-item ${activeMenu == 'moon' ? 'clicked' : ''}`}>
                    <MoonIcon className='icon' height="28" width="28" />
                </li>
            </ul>
        </div>
    );
};

export default SideBarMenu;