import React from 'react';
import {ClockIcon, HomeIcon, MoonIcon, PersonIcon, VideoIcon} from "@radix-ui/react-icons";

const SideBarMenu = () => {
    return (
        <div className='nav-menu'>
            <ul className='sidebar-list'>
                <li className='sidebar-item'>
                    <HomeIcon className='icon sidebar-icon' height="16" width="16" />
                </li>
                <li className='sidebar-item'>
                    <PersonIcon className='icon' height="16" width="16" />
                </li>
                <li className='sidebar-item'>
                    <ClockIcon className='icon' height="16" width="16" />
                </li>
                <li className='sidebar-item'>
                    <VideoIcon className='icon' height="16" width="16" />
                </li>
                <li className='sidebar-item'>
                    <MoonIcon className='icon' height="16" width="16" />
                </li>
            </ul>
        </div>
    );
};

export default SideBarMenu;