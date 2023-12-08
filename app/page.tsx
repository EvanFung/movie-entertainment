'use client'
import {MagnifyingGlassIcon, PlayIcon} from "@radix-ui/react-icons";
import {Button} from "@radix-ui/themes";
import TabNavBar from "@/app/components/TabNavBar";
import SideBarMenu from "@/app/components/SideBarMenu";
import Image from 'next/image'
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
              <TabNavBar />
                <div className='video-collection-container'>
                    <section className="collection">
                        <div className="collection-header">
                            <div className="title-container">
                                <h2 className="section-title">Trending</h2>
                                <p className="category">movie</p>
                            </div>
                            <a className="see-more" href="/movie/trending/1">See more</a>
                        </div>
                        <section className="card-container h-scroll">
                            <div className="card">
                                <div className="image-container">
                                    <Image className='rounded-lg' src='/images/image-(5).jpg' alt='sss' layout='fill' objectFit='cover' />
                                </div>
                                <div className="info">
                                    <div className="info-text">
                                        <p>2023</p>
                                        <div className="info-detail">
                                            <p>Movie</p>
                                        </div>
                                    </div>
                                    <h2 className="movie-title">奥本可墨</h2>
                                </div>
                            </div>
                            <div className="card">
                                <div className="image-container">
                                    <Image className='rounded-lg' src='/images/image-(4).jpg' alt='sss' layout='fill' objectFit='cover' />
                                </div>
                                <div className="info">
                                    <div className="info-text">
                                        <p>2023</p>
                                        <div className="info-detail">
                                            <p>Movie</p>
                                        </div>
                                    </div>
                                    <h2 className="movie-title">奥本可墨</h2>
                                </div>
                            </div>
                            <div className="card">
                                <div className="image-container">
                                    <Image className='rounded-lg' src='/images/image-(3).jpg' alt='sss' layout='fill' objectFit='cover' />
                                </div>
                                <div className="info">
                                    <div className="info-text">
                                        <p>2023</p>
                                        <div className="info-detail">
                                            <p>Movie</p>
                                        </div>
                                    </div>
                                    <h2 className="movie-title">奥本可墨</h2>
                                </div>
                            </div>
                        </section>
                    </section>
                    <section className="collection">
                        <div className="collection-header">
                            <div className="title-container">
                                <h2 className="section-title">Trending</h2>
                                <p className="category">movie</p>
                            </div>
                            <a className="see-more" href="/movie/trending/1">See more</a>
                        </div>
                        <section className="card-container h-scroll">
                            <div className="card">
                                <div className="image-container">
                                    <Image className='rounded-lg' src='/images/image-(5).jpg' alt='sss' layout='fill' objectFit='cover' />
                                </div>
                                <div className="info">
                                    <div className="info-text">
                                        <p>2023</p>
                                        <div className="info-detail">
                                            <p>Movie</p>
                                        </div>
                                    </div>
                                    <h2 className="movie-title">奥本可墨</h2>
                                </div>
                            </div>
                            <div className="card">
                                <div className="image-container">
                                    <Image className='rounded-lg' src='/images/image-(4).jpg' alt='sss' layout='fill' objectFit='cover' />
                                </div>
                                <div className="info">
                                    <div className="info-text">
                                        <p>2023</p>
                                        <div className="info-detail">
                                            <p>Movie</p>
                                        </div>
                                    </div>
                                    <h2 className="movie-title">奥本可墨</h2>
                                </div>
                            </div>
                            <div className="card">
                                <div className="image-container">
                                    <Image className='rounded-lg' src='/images/image-(3).jpg' alt='sss' layout='fill' objectFit='cover' />
                                </div>
                                <div className="info">
                                    <div className="info-text">
                                        <p>2023</p>
                                        <div className="info-detail">
                                            <p>Movie</p>
                                        </div>
                                    </div>
                                    <h2 className="movie-title">奥本可墨</h2>
                                </div>
                            </div>
                        </section>
                    </section>
                    <section className="collection">
                        <div className="collection-header">
                            <div className="title-container">
                                <h2 className="section-title">Trending</h2>
                                <p className="category">movie</p>
                            </div>
                            <a className="see-more" href="/movie/trending/1">See more</a>
                        </div>
                        <section className="card-container h-scroll">
                            <div className="card">
                                <div className="image-container">
                                    <Image className='rounded-lg' src='/images/image-(5).jpg' alt='sss' layout='fill' objectFit='cover' />
                                </div>
                                <div className="info">
                                    <div className="info-text">
                                        <p>2023</p>
                                        <div className="info-detail">
                                            <p>Movie</p>
                                        </div>
                                    </div>
                                    <h2 className="movie-title">奥本可墨</h2>
                                </div>
                            </div>
                            <div className="card">
                                <div className="image-container">
                                    <Image className='rounded-lg' src='/images/image-(4).jpg' alt='sss' layout='fill' objectFit='cover' />
                                </div>
                                <div className="info">
                                    <div className="info-text">
                                        <p>2023</p>
                                        <div className="info-detail">
                                            <p>Movie</p>
                                        </div>
                                    </div>
                                    <h2 className="movie-title">奥本可墨</h2>
                                </div>
                            </div>
                            <div className="card">
                                <div className="image-container">
                                    <Image className='rounded-lg' src='/images/image-(3).jpg' alt='sss' layout='fill' objectFit='cover' />
                                </div>
                                <div className="info">
                                    <div className="info-text">
                                        <p>2023</p>
                                        <div className="info-detail">
                                            <p>Movie</p>
                                        </div>
                                    </div>
                                    <h2 className="movie-title">奥本可墨</h2>
                                </div>
                            </div>
                        </section>
                    </section>
                </div>
            </div>
    </main>
  )
}
