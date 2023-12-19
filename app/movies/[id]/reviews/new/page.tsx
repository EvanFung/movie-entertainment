'use client'
import React from 'react';
import {z} from 'zod'
import {Card, Flex} from "@radix-ui/themes";

import {postReviewSchema} from "@/app/validationSchemas";
import ReviewForm from "@/app/movies/_components/ReviewForm";

// type ReviewData = z.infer<typeof postReviewSchema>

interface Props {
    params: {
        id: string;
    },
}
const NewReviewPage = ({params}: Props) => {

    return (
        <div className='right-container'>
            <Flex direction='column' className='p-5 mx-auto my-auto'>
                <Card size='5'>
                    {/* Header section */}
                    <Flex direction='row' className='mb-5' justify={"between"}>
                        <a href={`/movies/${params.id}`}>Back</a>
                        <h1 className='text-sm sm:text-2xl font-extrabold'>Write your review</h1>
                    </Flex>
                    <Flex direction='column' gap='5' className='max-w-screen-xl'>
                        <ReviewForm params={{id: params.id}} />
                    </Flex>
                </Card>
            </Flex>
        </div>
    );
};

export default NewReviewPage;