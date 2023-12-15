import React from 'react';
import {Avatar, Card, Flex} from "@radix-ui/themes";
import {InfoCircledIcon} from "@radix-ui/react-icons";
import {FaCommentAlt, FaHeart, FaShare, FaTrashAlt} from "react-icons/fa";
import CommentItem from "@/app/movies/_components/CommentItem";
import {useParams} from "next/navigation";
import {ReviewProvider, useReview} from "@/app/contexts/ReviewContext";
import {useQuery} from "@tanstack/react-query";
import axios from "axios";

const CommentContainer = () => {
    const {review, rootComments, getReplies, createLocalComment, updateLocalComment, deleteLocalComment} = useReview();
    return (
        <Card>
            <Flex direction='column' gap='4'>
                <h1 className='font-bold text-xl'>Comments</h1>
                <CommentItem />
            </Flex>
        </Card>
    );
};

export default CommentContainer;