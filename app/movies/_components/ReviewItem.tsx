import React from 'react';
import {Avatar, Badge, Card, Flex} from "@radix-ui/themes";
import {InfoCircledIcon} from "@radix-ui/react-icons";
import {Review} from "@prisma/client";
import {convertDateTimeToXDaysAgo} from "@/app/utils";
interface Props {
    review:Review
}
const ReviewItem = ({review}: Props) => {
    return (
        <Card className='p-2'>
            <Flex direction='column' gap='2'>
                <Flex direction='row' gap='3' justify='between'>
                    <Flex direction="row" gap='3'>
                        <Avatar fallback={<InfoCircledIcon/>} src={'/images/avatar.jpeg'}  />
                        <Flex direction='column'>
                            <p>{review.userId}</p>
                            <p>{convertDateTimeToXDaysAgo(review.createdAt)}</p>
                        </Flex>
                    </Flex>
                    <Badge color='iris'>SEE MORE</Badge>
                </Flex>
                <Flex direction='column' gap='3'>
                    <h1 className='text-xl font-semibold'>{review.title}</h1>
                    <p>{reviewsContent(review.body)}...</p>
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