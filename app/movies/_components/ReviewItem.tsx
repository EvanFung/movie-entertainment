import React from 'react';
import {Avatar, Badge, Card, Flex} from "@radix-ui/themes";
import {InfoCircledIcon} from "@radix-ui/react-icons";
import { formatDistance } from 'date-fns';
import Review from "@/app/models/Review";
import parse from 'html-react-parser';
import Link from "next/link";
interface Props {
    review: any;
    movieId: string;
}
const ReviewItem = ({review, movieId}: Props ) => {
    return (
        <Card className='p-2 mt-4'>
            <Flex direction='column' gap='2'>
                <Flex direction='row' gap='3' justify='between'>
                    <Flex direction="row" gap='4' grow='1'>
                            <Avatar fallback={<InfoCircledIcon/>} src={`${review.user.image}`}  />
                            <Flex direction='column'>
                                <p>{review.user.name}</p>
                                <p>{formatDistance(new Date(review.createdAt), new Date(), { addSuffix: true })}</p>
                        </Flex>

                    </Flex>
                    <Flex gap='3'>
                        <Badge variant='surface' color='violet' size='2' radius='large'>{review.rating}</Badge>
                        <Badge color='iris'><Link href={`/movies/${movieId}/reviews/${review.id}`}>SEE MORE</Link></Badge>
                    </Flex>
                </Flex>
                <Flex direction='column' gap='3'>
                    <h1 className='text-xl font-semibold'>{review.title}</h1>
                    <div className='flex flex-row overflow-hidden text-ellipsis'>{parse(review.body.substring(0,1500) + '...')}</div>
                </Flex>
            </Flex>
        </Card>
    );
};
// const shortenContent = (review:string) => {
//     if(review.split(' ').length < 150) return review;
//      return review.split(' ').slice(0, 200).join(' ') + '...';
// }

export default ReviewItem;