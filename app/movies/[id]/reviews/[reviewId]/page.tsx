import React from 'react';
import {Card, Flex} from "@radix-ui/themes";
import ReviewForm from "@/app/movies/_components/ReviewForm";
import {z} from "zod";
import {postReviewSchema} from "@/app/validationSchemas";
type ReviewData = z.infer<typeof postReviewSchema>
interface Props {

    movieId:string;
    review?: ReviewData
}
const ReviewPage = ({movieId, review}: Props) => {
    return (
        <div className='right-container'>

        </div>
    );
};

export default ReviewPage;