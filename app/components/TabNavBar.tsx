'use client';
import React, {useEffect, useRef, useState} from 'react';
import {ChevronLeftIcon, ChevronRightIcon} from "@radix-ui/react-icons";


const TabNavBar = () => {
    const tabMenuRef = useRef<HTMLUListElement>(null);
    const leftBtnRef = useRef<HTMLButtonElement>(null);
    const rightBtnRef = useRef<HTMLButtonElement>(null);
    const [isAtStart, setIsAtStart] = useState(true);
    const [isAtEnd, setIsAtEnd] = useState(false);
    const IconVisibility = () => {
        if (tabMenuRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = tabMenuRef.current;
            setIsAtStart(scrollLeft === 0);
            setIsAtEnd(scrollLeft + clientWidth >= scrollWidth);
        }
    }
    useEffect(() => {
        const tabMenu = tabMenuRef.current;
        if (tabMenu) {
            tabMenu.addEventListener('scroll', IconVisibility);
        }
        IconVisibility();
        return () => {
            if (tabMenu) {
                tabMenu.removeEventListener('scroll', IconVisibility);
            }
        }
    }, []);
    const handleScrollLeft = () => {
        if (tabMenuRef.current && tabMenuRef.current.scrollLeft > 0) {
            tabMenuRef.current.scrollLeft -= 150;
            IconVisibility();
        }
    }

    const handleScrollRight = () => {
        if (tabMenuRef.current) {
            tabMenuRef.current.scrollLeft += 150;
            IconVisibility();
        }
    }

    return (
        <div className='tab-nav-bar'>
            <div className='tab-navigation'>
                <ul className='tab-menu' ref={tabMenuRef}>
                    { !isAtStart && (
                        <button onClick={handleScrollLeft}>
                            <ChevronLeftIcon className='icon left-btn' height="32" width="32" />
                        </button>
                    )}
                    { !isAtEnd && (
                        <button onClick={handleScrollRight}>
                            <ChevronRightIcon className='icon right-btn' height="32" width="32" />
                        </button>
                    )}
                    <li className='tab-item clicked'>
                        All
                    </li>
                    <li className='tab-item'>
                        Recommended
                    </li>
                    <li className='tab-item'>
                        Actions
                    </li>
                    <li className='tab-item'>
                        Drama
                    </li>
                    <li className='tab-item'>
                        Mystery
                    </li>
                    <li className='tab-item'>
                        Western
                    </li>
                    <li className='tab-item'>
                        Western
                    </li>
                    <li className='tab-item'>
                        Western
                    </li>
                    <li className='tab-item'>
                        Western
                    </li>
                    <li className='tab-item'>
                        Western
                    </li>
                    <li className='tab-item'>
                        Western
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default TabNavBar;