import React from 'react';
import {MagnifyingGlassIcon, PlayIcon} from "@radix-ui/react-icons";
import {Button} from "@radix-ui/themes";

const HeroSection = () => {
    return (
        <div className='hero-img'>
            <div className='hero-content'>
                <div className='flex flex-col hero-content-left'>
                    <div className='search-input-container'>
                        <MagnifyingGlassIcon className='icon ml-2' height="16" width="16"/>
                        <input type='text'/>
                        <Button className='search-btn' radius='full' size="4">
                            Search
                        </Button>
                    </div>
                    <h1 className='text-5xl font-extrabold mb-2'>Your gateway to unlimited entertainment</h1>
                    <p className='text-2xl'>With our seamless streaming technology, you can effortlessly discover
                        and enjoy content that resonates with your interests.</p>
                </div>
                <div className='flex flex-row hero-content-right'>
                    <h1 className='text-2xl'>Top 10 most interesting places in the world. Must visit</h1>
                    <Button className='play-video-btn' radius='full' size={'3'} style={{borderRadius: '50%'}}>
                        <PlayIcon className='icon' height="16" width="16" radius='full'/>
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;