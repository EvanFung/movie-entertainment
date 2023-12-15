import React from 'react';
import CommentList from "@/app/movies/_components/CommentList";
import {useReview} from "@/app/contexts/ReviewContext";

const CommentContainer = () => {
    const {rootComments} =  useReview();
    return (
        <div>
            {
              rootComments != null && rootComments.length > 0 && (
                    <CommentList comments={rootComments} />
                )
            }
        </div>
    );
};

export default CommentContainer;