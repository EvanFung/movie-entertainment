import React from 'react';
import {Avatar, Badge, Card, Flex} from "@radix-ui/themes";
import {InfoCircledIcon} from "@radix-ui/react-icons";
import { formatDistance } from 'date-fns';
import Review from "@/app/models/Review";
import parse from 'html-react-parser';
const ReviewItem = ({review}: any ) => {
    return (
        <Card className='p-2 mt-4'>
            <Flex direction='column' gap='2'>
                <Flex direction='row' gap='3' justify='between'>
                    <Flex direction="row" gap='3'>
                        <Avatar fallback={<InfoCircledIcon/>} src={`${review.user.image}`}  />
                        <Flex direction='column'>
                            <p>{review.user.name}</p>
                            <p>{formatDistance(new Date(review.createdAt), new Date(), { addSuffix: true })}</p>
                        </Flex>
                    </Flex>
                    <Badge color='iris'>SEE MORE</Badge>
                </Flex>
                <Flex direction='column' gap='3'>
                    <h1 className='text-xl font-semibold'>{review.title}</h1>
                    {parse(reviewsContent(review.body))}
                </Flex>
            </Flex>
        </Card>
    );
};
const reviewsContent = (review:string) => {
    if(review.split(' ').length < 150) return review;
    return review.split(' ').slice(0, 150).join(' ');
}

export default ReviewItem;