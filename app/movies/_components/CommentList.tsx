import React from 'react';
import {Avatar, Card, Flex} from "@radix-ui/themes";
import {InfoCircledIcon} from "@radix-ui/react-icons";
import {FaCommentAlt, FaHeart, FaShare, FaTrashAlt} from "react-icons/fa";
import CommentItem from "@/app/movies/_components/CommentItem";
import {useParams} from "next/navigation";
import {Comment} from "@/app/contexts/ReviewContext";
import {useQuery} from "@tanstack/react-query";
import axios from "axios";
interface Props {
    comments: Comment[];
    isChild?: boolean| false;
}
const CommentList = ({comments, isChild}: Props) => {
    if(isChild) {
        return (
            <div className='ml-2 flex flex-col gap-3'>
                {
                    comments != null && comments.length > 0 &&   comments.map(comment => (
                            <CommentItem comment={comment} key={comment.id} />
                        ))
                }
            </div>
        )
    } else {
        return (
            <Card>
                <Flex direction='column' gap='4'>
                    <h1 className='font-bold text-xl'>Comments</h1>
                    {
                        comments != null && comments.length > 0 &&   comments.map(comment => (
                            <CommentItem comment={comment} key={comment.id} />
                        ))
                    }
                </Flex>
            </Card>
        );
    }
};

export default CommentList;