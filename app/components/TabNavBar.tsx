'use client';
import React, {useEffect, useRef, useState} from 'react';
import {ChevronLeftIcon, ChevronRightIcon} from "@radix-ui/react-icons";


const TabNavBar = () => {
    const tabMenuRef = useRef<HTMLUListElement>(null);
    const leftBtnRef = useRef<HTMLButtonElement>(null);
    const rightBtnRef = useRef<HTMLButtonElement>(null);
    const [isAtStart, setIsAtStart] = useState(true);
    const [isAtEnd, setIsAtEnd] = useState(false);

    const categories:string[] = ['All', 'Recommended', 'Actions', 'Drama', 'Mystery', 'Western', 'Adventure', 'Animation', 'Comedy', 'Crime', 'Documentary', 'Family', 'Fantasy', 'History', 'Horror', 'Music', 'Romance', 'Science Fiction', 'TV Movie', 'Thriller', 'War'];
    const [activeCategory, setActiveCategory] = useState(categories[0]); // Default to the first category

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

    const handleCategoryClick = (category:string) => {
        setActiveCategory(category);
    };

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
                    {
                        categories.map(category => (
                            <li className={`tab-item ${category==activeCategory ? 'clicked' : ''}`} key={category} onClick={() => handleCategoryClick(category)}>
                                {category}
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
};

export default TabNavBar;