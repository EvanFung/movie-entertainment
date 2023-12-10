'use client'
import React, {useEffect, useRef} from 'react';
import CollectionHeader from "@/app/components/CollectionHeader";
import Image from "next/image";
import {useQuery} from "@tanstack/react-query";
import api from "@/app/utils/api";
import * as Utils from "@/app/utils";
import Loader from "@/app/components/Loader";
import delay from "delay";

interface Movie extends Array<Movie> {
    id: number;
    adult:boolean;
    title: string;
    backdrop_path:string;
    original_language:string;
    overview:string;
    poster_path:string;
    media_type:string;
    genre_ids:number[];
    popularity:number;
    release_date:string;
    video:boolean;
    vote_average:number;
    vote_count:number;
}
interface Props {
    entertainmentType:string;
    collectionType:string;
    isTrending?:boolean | false;
    endpoint:string;
    limit?:number | 8;
    queryKey:string
}
const CollectionVideos = ({
    entertainmentType,
    collectionType,isTrending, endpoint,limit, queryKey}: Props) =>  {

    // const scrollContainerRef = useRef<HTMLDivElement>(null);
    //
    // useEffect(() => {
    //     const handleWheel = (event: WheelEvent) => {
    //         console.log('Wheel event triggered'); // Add this to ensure the event is being fired
    //         if (scrollContainerRef.current) {
    //             event.preventDefault();
    //             const scrollAmount = event.deltaY;
    //             scrollContainerRef.current.scrollLeft += scrollAmount;
    //             console.log(`Scrolled: ${scrollAmount}`); // This will log the scroll amount
    //         }
    //     };
    //
    //     const scrollContainerEl = scrollContainerRef.current;
    //
    //     scrollContainerEl?.addEventListener('wheel', handleWheel, { passive: false });
    //
    //     return () => {
    //         scrollContainerEl?.removeEventListener('wheel', handleWheel);
    //     };
    // }, []);



    const{data , error, isLoading} =  useQuery({
        queryKey: [queryKey],
        queryFn:() => api.get(endpoint).then(res =>res.data),
        staleTime: 60 * 1000 * 10,
    });
    // await delay(5000);
    if(isLoading) {
        return <Loader/>
    }
    if(error) {
        return <p>Error</p>
    }
    const movies = handleMovieData(data.results, limit || 8);
    return (
        <section className="collection">
            <CollectionHeader collectionType={collectionType} entertainmentType={entertainmentType} />
            <div className={`${isTrending ? 'card-container-trending h-scroll' : 'card-container'}`}>
                {movies.map( (movie, index) => (
                    <div key={movie.id} className={`${isTrending ? 'card-item-trending': `${index >= movies.length - 3 ? 'card-item-long card-item' : 'card-item'}`}`}>
                        <div className={`${isTrending ? 'card-container-trending h-scroll': 'card-image-container'}`}>
                            {isTrending ? (
                                    <div className="image-container-trending">
                                        <Image className='rounded-lg' src={`${Utils.TMDB_IMAGE_ENDPOINT + Utils.backdropSize.medium + movie.backdrop_path}`} alt='sss' width={500} height={281} style={{objectFit:'cover'}}  />
                                    </div>
                                ):
                                <img src={`${Utils.TMDB_IMAGE_ENDPOINT + Utils.backdropSize.large + movie.backdrop_path}`}  />
                            }
                        </div>
                        <div className={`${isTrending ? 'info-trending': 'card-item-text'}`}>
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
        </section>
    );
};

const handleMovieData = (movies: Movie[], limit:number | 8) => {
    return movies.sort((a, b) => {
        return a.popularity - b.popularity;
    }).slice(0, limit)

}

export default CollectionVideos;