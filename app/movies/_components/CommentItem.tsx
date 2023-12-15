import React from 'react';
import {Avatar, Card, Flex} from "@radix-ui/themes";
import {InfoCircledIcon} from "@radix-ui/react-icons";
import {FaCommentAlt, FaHeart, FaShare, FaTrashAlt} from "react-icons/fa";
import {Comment} from "@prisma/client";
import {formatDistance} from "date-fns";

interface Props {
    comment: Comment
}

const CommentItem = ({comment}: Props) => {
    return (
        <Card>
            {/*First row*/}
            <Flex direction='row' gap='2' justify='between' align='center'>
                <Flex direction='row' align='center' gap='3'>
                    <Avatar size='4'  fallback={<InfoCircledIcon/>} src={`/images/avatar.jpeg`}  />
                    <Flex direction='column' gap='2'>
                        <p className='text-sm'>Evan Feng</p>
                        {/*<p className='text-sm'>{formatDistance(new Date(comment.createdAt), new Date(), { addSuffix: true })}</p>*/}
                    </Flex>
                </Flex>
            </Flex>
            {/*  Second row  */}
            <Flex direction='row' className='mt-3'>
                <p className='text-base leading-loose'>{comment.message}</p>
            </Flex>
            <Flex className='mr-2' direction='row' justify='end' gap='4'>
                <FaHeart />
                <FaShare />
                <FaCommentAlt />
                <FaTrashAlt />
            </Flex>
        </Card>
    );
};

export default CommentItem;