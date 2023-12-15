import React from 'react';
import {Flex} from "@radix-ui/themes";
import parse from 'html-react-parser';
import {Review, useReview} from "@/app/contexts/ReviewContext";


const ReviewBody = () => {
    const {review} = useReview();
    return (
        <Flex direction='column' gap='3'>
            <h1 className='font-bold text-xl'>
                {review.title}
            </h1>
            {parse(review.body)}
        </Flex>
    );
};

export default ReviewBody;