import React from 'react';
import Image from "next/image";
import * as Utils from "@/app/utils";
import Movie from "@/app/models/Movie";

const NormalVideoCard = ({movies} : {movies: Movie[]}) => {
    return (
        <div className={'card-container'}>
            {movies.map( (movie, index) => (
                <div key={movie.id} className={`${index >= movies.length - 3 ? 'card-item-long card-item' : 'card-item'}`}>
                    <div className={'card-image-container'}>
                        <img src={`${Utils.TMDB_IMAGE_ENDPOINT + Utils.backdropSize.large + movie.backdrop_path}`}  />
                    </div>
                    <div className={'card-item-text'}>
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

export default NormalVideoCard;