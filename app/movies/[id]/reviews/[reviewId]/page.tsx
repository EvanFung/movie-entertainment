'use client'
import React from 'react';
import {Card, Flex} from "@radix-ui/themes";
import {z} from "zod";
import {postReviewSchema} from "@/app/validationSchemas";
import {ReviewProvider} from "@/app/contexts/ReviewContext";
import CommentForm from "@/app/movies/_components/CommentForm";
import ReviewBody from "@/app/movies/_components/ReviewBody";
import ReviewHeader from "@/app/movies/_components/ReviewHeader";
import CommentContainer from "@/app/movies/_components/CommentContainer";

interface Props {
    params: {
        id: string;
        reviewId: string;
    }
}
//review page
const ReviewPage = ({params}: Props) => {
    return (
        <ReviewProvider>
            <div className='right-container p-5'>
                <Card>
                    {/*Header section */}
                    <ReviewHeader />
                    {/*Body section */}
                    <Flex className='mt-4' direction='column' gap='3'>
                        <ReviewBody  />
                        <CommentForm />
                    </Flex>
                </Card>
                <CommentContainer />
            </div>
        </ReviewProvider>
    );
};

export default ReviewPage;