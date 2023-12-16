import React from 'react';
import {Card, Flex} from "@radix-ui/themes";
import * as Utils from "@/app/utils";
import {MovieDetail} from "@/app/models/MovieDetail";

interface Props {
    movie: MovieDetail
}

const MoviePoster = ({movie}: Props) => {
    return (
        <Card>
            <Flex>
                <img className='justify-center' src={`${Utils.TMDB_IMAGE_ENDPOINT}${Utils.posterSize.extraLarge}${movie.poster_path}`} style={{
                    borderRadius: 'var(--radius-3)',
                }} />
            </Flex>
        </Card>
    );
};

export default MoviePoster;