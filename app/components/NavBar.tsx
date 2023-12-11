'use client'
import React from 'react';
import {ClockIcon, HomeIcon, MoonIcon, PersonIcon, VideoIcon} from "@radix-ui/react-icons";
import {Avatar} from "@radix-ui/themes";
import AvatarDropdown from "@/app/components/AvatarDropdown";
import Link from "next/link";

const NavBar = () => {
    const [activeMenu, setActiveMenu] = React.useState('home');
    const handleActiveMenu = (menu: string) => {
        setActiveMenu(menu);
    }
    return (
        <div className='nav-menu'>
            <ul className='sidebar-list'>
                    <li className='sidebar-item sidebar-avatar'>
                        <AvatarDropdown/>
                    </li>
                    <Link href='/'>
                        <li onClick={() => handleActiveMenu('home')} className={`sidebar-item ${activeMenu == 'home' ? 'clicked' : ''}`}>
                            <HomeIcon className='icon'  height="28" width="28" />
                        </li>
                    </Link>
                    <li onClick={() => handleActiveMenu('clock')} className={`sidebar-item ${activeMenu == 'clock' ? 'clicked' : ''}`}>
                        <ClockIcon className='icon' height="28" width="28" />
                    </li>
                    <li onClick={() => handleActiveMenu('video')} className={`sidebar-item ${activeMenu == 'video' ? 'clicked' : ''}`}>
                        <VideoIcon className='icon' height="28" width="28" />
                    </li>
            </ul>
        </div>
    );
};

export default NavBar;