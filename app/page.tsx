'use client'
import {MagnifyingGlassIcon,PlayIcon,HomeIcon, PersonIcon, ClockIcon, VideoIcon, MoonIcon } from "@radix-ui/react-icons";
import {Button} from "@radix-ui/themes";

export default function Home() {
  return (
    <main className='flex flex-row justify-end'>
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
      <div className='hero-img'>
          <div className='hero-content'>
              <div className='flex flex-col hero-content-left'>
                  <div className='search-input-container'>
                      <MagnifyingGlassIcon className='icon ml-2' height="16" width="16" />
                      <input type='text' />
                      <Button className='search-btn'>
                          Search
                      </Button>
                  </div>
                  <h1 className='text-4xl font-extrabold mb-2'>Your gateway to unlimited entertainment</h1>
                  <p>With our seamless streaming technology, you can effortlessly discover and enjoy content that resonates with your interests.</p>
              </div>
              <div className='flex flex-row hero-content-right'>
                  <h1 className='text-2xl'>Top 10 most interesting places in the world. Must visit</h1>
                  <Button className='play-video-btn'>
                      <PlayIcon className='icon' height="16" width="16" />
                  </Button>
              </div>
          </div>
      </div>
    </main>
  )
}
