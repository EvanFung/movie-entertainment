import React from 'react';
import Image from "next/image";
import {id} from "postcss-selector-parser";
interface Props {
    id?:number;
    isTrending?: boolean;
    category?:string;
    title: string;
    year?:string;
    imageUrl:string;
    alt:string;
    genres?:string;
}
const VideoCollection = ( {isTrending, category, title, year, imageUrl, alt, genres}: Props) => {
    return (
        <section className="collection">
            <div className="collection-header">
                <div className="title-container">
                    <h2 className="section-title">{isTrending ? `Trending`: `${category}`}</h2>
                    <p className="category">{category}</p>
                </div>
                <a className="see-more" href={`/api/movie/${category}/${id}`}>See more</a>
            </div>
            <section className="card-container h-scroll">
                <div className="card">
                    <div className="image-container">
                        <Image className='rounded-lg' src={imageUrl} alt={alt} fill objectFit='cover' />
                    </div>
                    <div className="info">
                        <div className="info-text">
                            <p>{year}</p>
                            <div className="info-detail">
                                <p>{genres}</p>
                            </div>
                        </div>
                        <h2 className="movie-title">{title}</h2>
                    </div>
                </div>
            </section>
        </section>
    );
};

export default VideoCollection;