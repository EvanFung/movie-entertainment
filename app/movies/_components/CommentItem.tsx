import React, {useState} from 'react';
import {Avatar, Card, Flex, IconButton} from "@radix-ui/themes";
import {InfoCircledIcon} from "@radix-ui/react-icons";
import {FaCommentAlt, FaHeart, FaShare, FaTrashAlt} from "react-icons/fa";
import {formatDistance} from "date-fns";
import {Comment, useReview} from "@/app/contexts/ReviewContext";
import CommentForm from "@/app/movies/_components/CommentForm";
import CommentList from "@/app/movies/_components/CommentList";
import {IconBase} from "react-icons";
interface Props {
    comment: Comment
}

const CommentItem = ({comment}: Props) => {
    const [areChildrenHidden, setAreChildrenHidden] = useState(false)
    const [isReplying, setIsReplying] = useState(false)
    const [isEditing, setIsEditing] = useState(false)
    const {review, getReplies} = useReview()
    const childComments = getReplies(comment.id)
    return (
        <Card>
            {/*First row*/}
            <Flex direction='row' gap='2' justify='between' align='center'>
                <Flex direction='row' align='center' gap='3'>
                    <Avatar size='4'  fallback={<InfoCircledIcon/>} src={`${comment.user.image}`}  />
                    <Flex direction='column' gap='2'>
                        <p className='text-sm'>{comment.user.name}</p>
                        <p className='text-sm'>{formatDistance(new Date(comment.createdAt), new Date(), { addSuffix: true })}</p>
                    </Flex>
                </Flex>
            </Flex>
            {/*  Second row  */}
            <Flex direction='row' className='mt-3'>
                <p className='text-base leading-loose'>{comment.message}</p>
            </Flex>
            <Flex className='mr-2' direction='row' justify='end' gap='4'>
                <button><FaHeart /></button>
                <button><FaShare /></button>
                <button onClick={() => setIsReplying(prev => !prev)}><FaCommentAlt /></button>
                <button><FaTrashAlt /></button>
            </Flex>
            {isReplying && (
                <div className='mt-2'>
                    <CommentForm parentId={comment.id} />
                </div>
            )}
            <button
                className={`btn mt-1 ${!areChildrenHidden ? "hide" : ""}`}
                onClick={() => setAreChildrenHidden(false)}
            >
                <p className='text-zinc-400 text-xs'>Show Replies</p>
            </button>
            {
                childComments?.length > 0 && (
                    <div className={`mt-2 flex ${areChildrenHidden ? "hide" : ""}`}>
                        <button
                            className="collapse-line"
                            aria-label="Hide Replies"
                            onClick={() => setAreChildrenHidden(true)}
                        />
                        <div className='grow'>
                            <CommentList comments={childComments} isChild={true} />
                        </div>
                    </div>
                )
            }
        </Card>
    );
};

export default CommentItem;