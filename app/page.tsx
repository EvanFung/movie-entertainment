'use client'
import {MagnifyingGlassIcon, PlayIcon} from "@radix-ui/react-icons";
import {Button} from "@radix-ui/themes";
import TabNavBar from "@/app/components/TabNavBar";
import SideBarMenu from "@/app/components/SideBarMenu";
import Image from 'next/image'
import HeroSection from "@/app/components/HeroSection";
export default function Home() {
  return (
    <main className='flex flex-row justify-end'>
        <SideBarMenu/>
            <div className='right-container'>
                <HeroSection />
                <TabNavBar />
                <div className='video-collection-container'>
                    <section className="collection">
                        <div className="collection-header">
                            <div className="title-container">
                                <h2 className="section-title">Trending</h2>
                                <p className="category">movie</p>
                            </div>
                            <a className="see-more" href="#">See more</a>
                        </div>
                        <div className="card-container-trending h-scroll">
                            <div className="card-item-trending">
                                <div className="image-container-trending">
                                    <Image className='rounded-lg' src='/images/image-(5).jpg' alt='sss' fill sizes='470px' objectFit='cover' />
                                </div>
                                <div className="info-trending">
                                    <div className="info-text">
                                        <p>2023</p>
                                        <div className="info-detail">
                                            <p>Movie</p>
                                        </div>
                                    </div>
                                    <h2 className="movie-title">Oppenheimer</h2>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="collection">
                        <div className="collection-header">
                            <div className="title-container">
                                <h2 className="section-title">Popular</h2>
                                <p className="category">TV</p>
                            </div>
                            <a className="see-more" href="#">See more</a>
                        </div>
                        <div className='card-container'>
                            <div className="card-item">
                                <div className='card-image-container'>
                                    <img src='/images/image-(1).jpg'  />
                                </div>
                                <div className='card-item-text'>
                                    <div className="info-text">
                                        <p>2023</p>
                                        <div className="info-detail">
                                            <p>Movie</p>
                                        </div>
                                    </div>
                                    <h2 className="movie-title">Oppenheimer</h2>
                                </div>
                            </div>
                            <div className="card-item">
                                <div className='card-image-container'>
                                    <img src='/images/image-(2).jpg'  />
                                </div>
                                <div className='card-item-text'>
                                    <div className="info-text">
                                        <p>2023</p>
                                        <div className="info-detail">
                                            <p>Movie</p>
                                        </div>
                                    </div>
                                    <h2 className="movie-title">Oppenheimer</h2>
                                </div>
                            </div>
                            <div className="card-item">
                                <div className='card-image-container'>
                                    <img src='/images/image-(3).jpg'  />
                                </div>
                                <div className='card-item-text'>
                                    <div className="info-text">
                                        <p>2023</p>
                                        <div className="info-detail">
                                            <p>Movie</p>
                                        </div>
                                    </div>
                                    <h2 className="movie-title">Oppenheimer</h2>
                                </div>
                            </div>
                            <div className="card-item">
                                <div className='card-image-container'>
                                    <img src='/images/image-(4).jpg'  />
                                </div>
                                <div className='card-item-text'>
                                    <div className="info-text">
                                        <p>2023</p>
                                        <div className="info-detail">
                                            <p>Movie</p>
                                        </div>
                                    </div>
                                    <h2 className="movie-title">Oppenheimer</h2>
                                </div>
                            </div>
                            <div className="card-item">
                                <div className='card-image-container'>
                                    <img src='/images/image-(5).jpg'  />
                                </div>
                                <div className='card-item-text'>
                                    <div className="info-text">
                                        <p>2023</p>
                                        <div className="info-detail">
                                            <p>Movie</p>
                                        </div>
                                    </div>
                                    <h2 className="movie-title">Oppenheimer</h2>
                                </div>
                            </div>
                            <div className="card-item card-item-long">
                                <div className='card-image-container'>
                                    <img src='/images/image-(1).jpg'  />
                                </div>
                                <div className='card-item-text'>
                                    <div className="info-text">
                                        <p>2023</p>
                                        <div className="info-detail">
                                            <p>Movie</p>
                                        </div>
                                    </div>
                                    <h2 className="movie-title">Oppenheimer</h2>
                                </div>
                            </div>
                            <div className="card-item card-item-long">
                                <div className='card-image-container'>
                                    <img src='/images/image-(2).jpg'  />
                                </div>
                                <div className='card-item-text'>
                                    <div className="info-text">
                                        <p>2023</p>
                                        <div className="info-detail">
                                            <p>Movie</p>
                                        </div>
                                    </div>
                                    <h2 className="movie-title">Oppenheimer</h2>
                                </div>
                            </div>
                            <div className="card-item card-item-long">
                                <div className='card-image-container'>
                                    <img src='/images/image-(3).jpg'  />
                                </div>
                                <div className='card-item-text'>
                                    <div className="info-text">
                                        <p>2023</p>
                                        <div className="info-detail">
                                            <p>Movie</p>
                                        </div>
                                    </div>
                                    <h2 className="movie-title">Oppenheimer</h2>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
    </main>
  )
}
