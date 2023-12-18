'use client'
import React from 'react';
import {Card, Flex} from "@radix-ui/themes";
import ReviewForm from "@/app/movies/_components/ReviewForm";
import {z} from "zod";
import {postReviewSchema} from "@/app/validationSchemas";
type ReviewData = z.infer<typeof postReviewSchema>

const EditReviewPage = () => {
    return (
        <div className='right-container'>
            <Flex direction='column' className='p-5 mx-auto my-auto'>
                <Card size='5'>
                    {/* Header section */}
                    <Flex direction='row' className='mb-5' justify={"between"}>
                        <a href={`#`}>Back</a>
                        <h1 className='text-2xl font-extrabold'>Edit your review</h1>
                    </Flex>
                    <Flex direction='column' gap='5' className='max-w-screen-xl'>
                        {/*<ReviewForm params={{id: movieId}} review={review} />*/}
                    </Flex>
                </Card>
            </Flex>
        </div>
    );
};

export default EditReviewPage;