import React, {useRef} from 'react';
import Image from "next/image";
import * as Utils from "@/app/utils";
import Movie from "@/app/models/Movie";
import useHorizontalScroll from "@/app/hooks/useHorizontalScroll";

const TrendVideoCard = ({movies} : {movies: Movie[]}) => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    useHorizontalScroll(scrollContainerRef);
    return (
        <div ref={scrollContainerRef} className={'card-container-trending h-scroll'}>
            {movies.map( (movie, index) => (
                <div key={movie.id} className='card-item-trending'>
                    <div className={'card-container-trending h-scroll'}>
                        <div className="image-container-trending">
                            <Image className='rounded-lg' src={`${Utils.TMDB_IMAGE_ENDPOINT + Utils.backdropSize.medium + movie.backdrop_path}`} alt='sss' width={500} height={281} style={{objectFit:'cover'}}  />
                        </div>
                    </div>
                    <div className={'info-trending'}>
                        <div className="info-text">
                            <p>{new Date(movie.release_date).getFullYear()}</p>
                            <div className="info-detail">
                                <p>{Math.round(movie.vote_average *100)/100}</p>
                            </div>
                        </div>
                        <h2 className="movie-title">{movie.title}</h2>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TrendVideoCard;