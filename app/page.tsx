'use client'
import {MagnifyingGlassIcon,PlayIcon,HomeIcon, PersonIcon, ClockIcon, VideoIcon, MoonIcon, ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import {Button, Avatar} from "@radix-ui/themes";
import TabNavBar from "@/app/components/TabNavBar";
import SideBarMenu from "@/app/components/SideBarMenu";
export default function Home() {
  return (
    <main className='flex flex-row justify-end'>
        <SideBarMenu/>
            <div className='right-container'>
              <div className='hero-img'>
                  <div className='hero-content'>
                      <div className='flex flex-col hero-content-left'>
                          <div className='search-input-container'>
                              <MagnifyingGlassIcon className='icon ml-2' height="16" width="16" />
                              <input type='text' />
                              <Button className='search-btn' radius='full'>
                                  Search
                              </Button>
                          </div>
                          <h1 className='text-4xl font-extrabold mb-2'>Your gateway to unlimited entertainment</h1>
                          <p>With our seamless streaming technology, you can effortlessly discover and enjoy content that resonates with your interests.</p>
                      </div>
                      <div className='flex flex-row hero-content-right'>
                          <h1 className='text-2xl'>Top 10 most interesting places in the world. Must visit</h1>
                          <Button className='play-video-btn' radius='full'>
                              <PlayIcon className='icon' height="16" width="16" />
                          </Button>
                      </div>
                  </div>
              </div>
              <TabNavBar />
        </div>
    </main>
  )
}
