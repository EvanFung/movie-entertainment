import React from 'react';
import {Badge, Button, Card, Flex, Table} from "@radix-ui/themes";
import {MovieDetail} from "@/app/models/MovieDetail";
interface Props {
    movie: MovieDetail
}
const MovieDescription = ({movie}: Props) => {
    return (
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
    );
};

export default MovieDescription;