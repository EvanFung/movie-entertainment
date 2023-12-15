import React from 'react';
import {Avatar, Badge, Flex} from "@radix-ui/themes";
import {InfoCircledIcon} from "@radix-ui/react-icons";
import {useReview} from "@/app/contexts/ReviewContext";
import { formatDistance } from 'date-fns';

const ReviewHeader = () => {
    const {review} = useReview();
    return (
        <Flex direction='row' gap='3'>
            <Flex direction='row' gap='3' justify='center' align='center' grow='0'>
                <Flex direction="row" gap='3' grow='1'>
                    <Avatar fallback={<InfoCircledIcon/>} src={`${review.user.image}`}  />
                    <div>
                        <p>{review.user.name}</p>
                        <p>{formatDistance(new Date(review.createdAt), new Date(), { addSuffix: true })}</p>
                    </div>
                    <Badge variant='surface' color='violet' size='2' radius='large'>{review.rating}</Badge>
                </Flex>
            </Flex>
        </Flex>
    );
};

export default ReviewHeader;