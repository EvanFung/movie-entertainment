'use client'
import React, {useEffect, useRef} from 'react';
import CollectionHeader from "@/app/components/CollectionHeader";
import Image from "next/image";
import {useQuery} from "@tanstack/react-query";
import api from "@/app/utils/api";
import * as Utils from "@/app/utils";
import Loader from "@/app/components/Loader";
import delay from "delay";
import Movie from "@/app/models/Movie";
import TrendVideoCard from "@/app/components/TrendVideoCard";
import NormalVideoCard from "@/app/components/NormalVideoCard";
import { Callout } from '@radix-ui/themes';
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

    const{data , error, isLoading} =  useQuery({
        queryKey: [queryKey],
        queryFn:() => api.get(endpoint).then(res =>res.data),
        staleTime: 60 * 1000 * 10,
        retry: 3
    });
    if(isLoading) {
        return <Loader/>
    }
    if(error) {
        return (

            <Callout.Root color='red' className='mb-5'>
                <Callout.Text>
                    {error.message}
                </Callout.Text>
            </Callout.Root>
        )
    }
    const movies = handleMovieData(data.results, limit || 8);
    return (
        <section className="collection">
            <CollectionHeader collectionType={collectionType} entertainmentType={entertainmentType} />
            {isTrending ? <TrendVideoCard movies={movies} /> : <NormalVideoCard movies={movies} />}
        </section>
    );
};

const handleMovieData = (movies: Movie[], limit:number | 8) => {
    return movies.sort((a, b) => {
        return a.popularity - b.popularity;
    }).slice(0, limit)
}

export default CollectionVideos;