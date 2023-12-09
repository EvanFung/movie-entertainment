import React from 'react';
import Image from "next/image";
import {Badge} from "@radix-ui/themes";

const TrendingVideos = () => {
    return (
        <section className="collection">
            <div className="collection-header">
                <div className="title-container">
                    <h2 className="section-title">Trending</h2>
                    <Badge variant="solid">Movie</Badge>
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
    );
};

export default TrendingVideos;