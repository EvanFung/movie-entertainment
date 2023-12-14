import React from 'react';
import {Avatar, Badge, Button, Card, Flex} from "@radix-ui/themes";
import {InfoCircledIcon} from "@radix-ui/react-icons";
import {useQuery} from "@tanstack/react-query";
import axios from "axios";
import Loader from "@/app/components/Loader";
import ReviewItem from "@/app/movies/_components/ReviewItem";
import Review from "@/app/models/Review";
interface Props {
    movieId:string;
    reviews:any;
}
const ReviewContainer =  ({movieId, reviews}: Props) => {
    return (
        <Flex direction='column'>
            <Card className='grow'>
                <Flex direction='row' justify='between' className='p-5'>
                    <h1 className='text-2xl font-extrabold mb-5'>Reviews</h1>
                    <Flex direction='row'>
                        <a href={`/movies/${movieId}/reviews/new`}><Button>Review this title</Button></a>
                    </Flex>
                </Flex>
                {
                    reviews.map((review: Review) => (
                        <ReviewItem review={review}
                                    key={review.id}
                                    movieId={movieId}
                        />
                    ))
                }
            </Card>
        </Flex>
    );
};

export default ReviewContainer;