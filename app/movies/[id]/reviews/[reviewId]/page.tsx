'use client'
import React from 'react';
import {Avatar, Badge, Button, Card, Flex, TextField} from "@radix-ui/themes";
import ReviewForm from "@/app/movies/_components/ReviewForm";
import {z} from "zod";
import {postReviewSchema} from "@/app/validationSchemas";
import {InfoCircledIcon, MagnifyingGlassIcon} from "@radix-ui/react-icons";
import {formatDistance} from "date-fns";
import Link from "next/link";
import { FaHeart, FaShare, FaCommentAlt,FaTrashAlt} from "react-icons/fa";
import CommentList from "@/app/movies/_components/CommentList";
import {ReviewProvider, useReview} from "@/app/contexts/ReviewContext";
import CommentForm from "@/app/movies/_components/CommentForm";
import ReviewBody from "@/app/movies/_components/ReviewBody";
import ReviewHeader from "@/app/movies/_components/ReviewHeader";
import CommentContainer from "@/app/movies/_components/CommentContainer";
type ReviewData = z.infer<typeof postReviewSchema>
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