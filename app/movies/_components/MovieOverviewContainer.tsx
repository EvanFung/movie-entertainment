import React from 'react';
import { Flex} from "@radix-ui/themes";
import MoviePoster from "@/app/movies/_components/MoviePoster";
import {MovieDetail} from "@/app/models/MovieDetail";
import MovieDescription from "@/app/movies/_components/MovieDescription";
interface Props {
    movie: MovieDetail
}
const MovieOverviewContainer = ({movie}: Props) => {
    return (
        <Flex direction='row' gap='4' className='flex-wrap sm:flex-nowrap'>
            <MoviePoster movie={movie} />
            <MovieDescription movie={movie}  />
        </Flex>
    );
};

export default MovieOverviewContainer;