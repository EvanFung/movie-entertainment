'use client'
import {MagnifyingGlassIcon, PlayIcon} from "@radix-ui/react-icons";
import {Button} from "@radix-ui/themes";
import TabNavBar from "@/app/components/TabNavBar";
import SideBarMenu from "@/app/components/SideBarMenu";
import Image from 'next/image'
import HeroSection from "@/app/components/HeroSection";
import TrendingVideos from "@/app/components/TrendingVideos";
import CategoryVideos from "@/app/components/CategoryVideos";
export default function Home() {
  return (
    <main className='flex flex-row justify-end'>
        <SideBarMenu/>
            <div className='right-container'>
                <HeroSection />
                <TabNavBar />
                <div className='video-collection-container'>
                    <TrendingVideos />
                    <CategoryVideos />
                </div>
            </div>
    </main>
  )
}
