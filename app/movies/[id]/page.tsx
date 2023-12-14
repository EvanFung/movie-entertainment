'use client';
import React from 'react';
import {Flex} from "@radix-ui/themes";
import axios from "axios";
import ReviewContainer from "@/app/movies/_components/ReviewContainer";
import CastContainer from "@/app/movies/_components/CastContainer";
import CompanyContainer from "@/app/movies/_components/CompanyContainer";
import MovieOverviewContainer from "@/app/movies/_components/MovieOverviewContainer";
import {CastMember, MovieDetail} from "@/app/models/MovieDetail";
import {useQuery} from "@tanstack/react-query";
import Loader from "@/app/components/Loader";


interface Props {
    params: {
        id: string;
    }
}
const MovieDetailPage = ({params}: Props)  =>{
    const{data, error, isLoading} = useQuery({
        queryKey: [params.id],
        queryFn:() => axios.get('/api/movie/'+params.id).then(res =>res.data),
        staleTime: 60 * 1000 * 10,
        retry: 0,
    });
    if(isLoading) {
        return (
            <div className='right-container justify-center items-center'>
                <Loader />
            </div>
        )
    }
    if(error) {
        return (
            <div className='right-container justify-center items-center'>
                404 - Movie Not Found
            </div>
        )
    }
    const movie: MovieDetail = data?.movie as MovieDetail;
    const casts: CastMember[]  = data?.crews.cast as CastMember[];
    return (
        <div className='right-container'>
            <Flex direction='column' gap='5' className='p-8'>
                <MovieOverviewContainer movie={movie} />
                <CompanyContainer movie={movie} />
                <CastContainer casts={casts} />
                <ReviewContainer movieId={`${movie.id}`}/>
            </Flex>
        </div>
    );
};

export default MovieDetailPage;