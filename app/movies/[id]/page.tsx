'use client'
import React, {useRef} from 'react';
import {useQuery} from "@tanstack/react-query";
import Loader from "@/app/components/Loader";
import {
    AspectRatio,
    Avatar,
    Badge,
    Button,
    Callout,
    Card,
    Flex,
    Inset,
    ScrollArea,
    Strong,
    Table,
    Text
} from "@radix-ui/themes";
import axios from "axios";
import * as Utils from "@/app/utils";
import './movie-detail.css'
import {notFound} from "next/navigation";
import {InfoCircledIcon} from "@radix-ui/react-icons";
import useHorizontalScroll from "@/app/hooks/useHorizontalScroll";
import Link from "next/link";
interface Props {
    params: {
        id: string;
    }
}

interface MovieDetail {
    adult: boolean;
    backdrop_path: string | null;
    belongs_to_collection: string | null; // If this can be something other than null, you need to define its structure
    budget: number;
    genres: Genre[];
    homepage: string | null;
    id: number;
    imdb_id: string | null;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string | null;
    production_companies: ProductionCompany[];
    production_countries: ProductionCountry[];
    release_date: string; // or Date if you want to use Date objects
    revenue: number;
    runtime: number | null; // assuming runtime can be null if not available
    spoken_languages: SpokenLanguage[];
    status: string;
    tagline: string | null;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

interface Genre {
    id: number;
    name: string;
}

interface ProductionCompany {
    id: number;
    logo_path: string | null;
    name: string;
    origin_country: string;
}

interface ProductionCountry {
    iso_3166_1: string;
    name: string;
}

interface SpokenLanguage {
    english_name: string;
    iso_639_1: string;
    name: string;
}

interface CastMember {
    adult: boolean;
    gender: number;
    id: number;
    known_for_department: string;
    name: string;
    original_name: string;
    popularity: number;
    profile_path: string | null;
    cast_id: number;
    character: string;
    credit_id: string;
    order: number;
}

interface CrewMember {
    adult: boolean;
    gender: number;
    id: number;
    known_for_department: string;
    name: string;
    original_name: string;
    popularity: number;
    profile_path: string | null;
    credit_id: string;
    department: string;
    job: string;
}

const MovieDetailPage = ({params}: Props) => {
    const{data, error, isLoading} = useQuery({
        queryKey: [params.id],
        queryFn:() => axios.get('/api/movie/'+params.id).then(res =>res.data),
        staleTime: 60 * 1000 * 10,
        retry: 0,
    });
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    useHorizontalScroll(scrollContainerRef);

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
    const movie: MovieDetail = data?.movie;
    const casts: CastMember[]  = data?.crews.cast;
    const crews: CrewMember[]  = data?.crews.crew;
    console.log(casts);
    return (
        <div className='right-container'>
            <div className='movie-detail-container'>
                <Flex direction='row' gap='4'>
                    <Card>
                        <Flex>
                            <img src={`${Utils.TMDB_IMAGE_ENDPOINT}${Utils.posterSize.extraLarge}${movie.poster_path}`} style={{
                                borderRadius: 'var(--radius-3)',
                            }} />
                        </Flex>
                    </Card>
                    <Card className='grow'>
                        <Flex direction='column' gap='5'>
                            <h1 className='text-3xl font-extrabold'>{movie.title}</h1>
                            <p className='italic'>{movie.overview}</p>
                            <Flex direction='row' gap='9'>
                                <Table.Root>
                                    <Table.Header>
                                        <Table.Row>
                                            <Table.ColumnHeaderCell>Language</Table.ColumnHeaderCell>
                                            <Table.ColumnHeaderCell>Length</Table.ColumnHeaderCell>
                                            <Table.ColumnHeaderCell>Rating</Table.ColumnHeaderCell>
                                        </Table.Row>
                                    </Table.Header>
                                    <Table.Row>
                                        <Table.Cell>{movie.spoken_languages.map(language => (<p>{language.english_name}</p>))}</Table.Cell>
                                        <Table.Cell>{movie.runtime} min</Table.Cell>
                                        <Table.Cell><p>{Math.round(movie.vote_average *10)/10}</p></Table.Cell>
                                    </Table.Row>
                                </Table.Root>
                            </Flex>
                            <p>{movie.genres.map(genre => (<Badge className='mr-2'>{genre.name}</Badge>))}</p>
                            <p>{movie.release_date}</p>
                            <Flex direction='row' gap='5'>
                                {movie.homepage && (<a href={movie.homepage} target="_blank"><Button color='pink'>Website</Button></a>)}
                                {movie.imdb_id && (<a href={`https://www.imdb.com/title/${movie.imdb_id}/`} target="_blank"><Button color='pink'>IMDB</Button></a>)}
                            </Flex>
                        </Flex>
                    </Card>
                </Flex>
                <Flex direction='row'>
                    <Card className='grow'>
                        <Flex direction='column' gap='3'>
                            <h1 className='text-2xl font-extrabold'>Production Company</h1>
                            <Flex direction='row' gap='7' justify='start'>
                            {
                                movie.production_companies.map(company => (
                                    <Flex direction='row' gap='4' >
                                        <Card size="2" style={{ maxWidth: 240 }}>
                                            <Inset clip="padding-box" side="top" pb="current">
                                                    <img
                                                        src={`${company.logo_path ? `${Utils.TMDB_IMAGE_ENDPOINT}${Utils.posterSize.original}${company.logo_path}`: '/images/placeholder_163X245.png'}`}
                                                        alt="Bold typography"
                                                        style={{
                                                            display: 'block',
                                                            objectFit: 'cover',
                                                            width: 218,
                                                            height: 65,
                                                            backgroundColor: 'var(--gray-5)',
                                                        }}
                                                    />
                                            </Inset>
                                            <Text as="p" size="3">
                                                <Strong>{company.name}</Strong>
                                            </Text>
                                            <Text as="p" size="2">
                                                <Strong>{company.origin_country}</Strong>
                                            </Text>
                                        </Card>
                                    </Flex>
                                ))
                            }
                            </Flex>
                        </Flex>
                    </Card>
                </Flex>
                <Flex direction='column'>
                    <Card className='grow'>
                        <div className='flex flex-row justify-between'>
                            <div className='flex flex-row gap-4 items-center'>
                                <h1 className='text-2xl font-extrabold mb-2'>Casts</h1>
                                <p className='font-light text-sm'>{casts.length > 10 ? `Showing 10 of ${casts.length}` : ''}</p>
                            </div>
                            <h2 className='text-sm font-extrabold mb-2'>SEE MORE</h2>
                        </div>
                        <Flex direction='row' gap='7'>
                            <ScrollArea ref={scrollContainerRef} scrollbars='horizontal' style={{ height: 280 }}>
                                <div className='card-container-trending w-full'>
                                    {
                                        casts.map((cast, index) => (
                                            <Flex direction='row' gap='5'  >
                                                {index > 10 ? (null) : (
                                                    <Card size="2" style={{ maxWidth: 240 }}>
                                                        <Inset clip="padding-box" side="top" pb="current">
                                                            <img
                                                                src={`${cast.profile_path ? `${Utils.TMDB_IMAGE_ENDPOINT}${Utils.posterSize.original}${cast.profile_path}` : '/images/placeholder_163X245.png'}`}
                                                                alt="Bold typography"
                                                                style={{
                                                                    display: 'block',
                                                                    objectFit: 'cover',
                                                                    width: 245,
                                                                    height: 160,
                                                                    backgroundColor: 'var(--gray-5)',

                                                                }}
                                                            />
                                                        </Inset>
                                                        <Text as="p" size="3">
                                                            <Strong>{cast.name}</Strong>
                                                        </Text>
                                                        <Text as="p" size="2">
                                                            {cast.character}
                                                        </Text>
                                                    </Card>
                                                )}

                                            </Flex>
                                        ))
                                    }
                                </div>
                            </ScrollArea>
                        </Flex>
                    </Card>
                </Flex>
                <Flex direction='row'>
                    <Card className='grow'>
                        <Flex direction='row' justify='between' className='p-5'>
                            <h1 className='text-2xl font-extrabold mb-5'>Reviews</h1>
                            <Button>Review this title</Button>
                        </Flex>
                        <Card className='p-2'>
                            <Flex direction='column' gap='2'>
                                <Flex direction='row' gap='3'>
                                    <Avatar fallback={<InfoCircledIcon/>} src={'/images/avatar.jpeg'}  />
                                    <Flex direction='column'>
                                        <p>Ran Li</p>
                                        <p>1 day ago</p>
                                    </Flex>
                                </Flex>
                                <Flex direction='column' gap='3'>
                                    <h1 className='text-xl font-semibold'>Mission: Impossible - Dead Reckoning (Part One) boasts some of cinema's most stunning stunt work, but it came at the cost of character development and a solid story.</h1>
                                    <p>Man.... I wish I loved this movie more than I did. Don't get me wrong, it's a solid action movie with jaw-dropping stunts (some of the best in the series), but as a Mission: Impossible movie, it felt like a small step backward for the franchise. Fallout had mind-blowing action sequences and stunt work, along with developing Ethan's relationship with Ilsa, providing closure with Julia, showing the lengths Ethan would go to protect those closest to him, and battling an imposing villain.... <strong>See more</strong></p>
                                </Flex>
                            </Flex>
                        </Card>
                    </Card>
                </Flex>
            </div>
        </div>
    );
};

export default MovieDetailPage;