'use client'
import React, { useContext, useEffect, useMemo, useState, createServerContext } from "react"
// import {Comment} from "@prisma/client";
import {useQuery} from "@tanstack/react-query";
import {useParams} from "next/navigation";
import axios from "axios";
import Loader from "@/app/components/Loader";
import {useSession} from "next-auth/react";


export interface Comment {
    id: string;
    message: string;
    createdAt: Date;
    updatedAt: Date;
    reviewId: string;
    userId: string;
    parentId: string | null;
    user: {
        id: string;
        name: string;
        image: string;
    },
    likeCount: number;
    likedByMe:boolean;
    _count: {
        likes: number | 0;
    }
    likes: Like[];
}
export interface Like {
    userId:string;
    commentId:string;
}
export interface Review {
    id:string;
    title: string;
    body: string;
    rating:number;
    createdAt: Date;
    updatedAt: Date;
    movieId: string;
    user: {
        id: string;
        name: string;
        image: string;
    },
    comments: Comment[];
}
interface ContextValue {
    review: Review;
    rootComments: Comment[];
    getReplies: (parentId: string | 'root') => Comment[];
    createLocalComment: (comment: Comment) => void;
    updateLocalComment: (id: string, message: string) => void;
    deleteLocalComment: (id: string) => void;
    toggleLocalCommentLike: (id: string, addLike: boolean) => void;
}

const Context = React.createContext<ContextValue | null>(null);

export function useReview() {
    const context =  useContext(Context);
    if (!context) {
        throw new Error("useReview must be used within a ReviewProvider");
    }
    return context;
}

export function ReviewProvider({ children }: { children: React.ReactNode }) {
    const {id, reviewId, } = useParams<{ id: string; reviewId:string; }>();
    const [comments, setComments] = useState<Comment[]>([]);
    const {isLoading, isError, data: review} = useQuery<Review>({
        queryKey: ['review', id, reviewId],
        queryFn:() => axios.get('/api/movie/'+id+'/review/'+reviewId).then(res =>res.data),
        staleTime:0, // need to be 0 to update the data immediately when page is refreshed
        retry: 0,
    });
    const {data: session} = useSession();
    const commentsByParentId = useMemo<{ [key: string]: Comment[] }>(()=> {
        const group: { [key: string]: Comment[] } = {};
        comments.forEach(comment => {
            const parentId = comment.parentId || 'root'; // Use 'root' as a key for root comments
            group[parentId] = group[parentId] || [];
            group[parentId].push(comment);
        });
        return group;
    }, [comments]);

    //initialize comments from pulling data from server
    useEffect(() => {
        if(review?.comments == null) return
        setComments(review.comments);
    }, [review?.comments])

    const getReplies = (parentId: string | 'root'): Comment[] => {
        return commentsByParentId[parentId] || [];
    };

    const createLocalComment = (comment: Comment): void => {
        setComments(prevComments => [comment, ...prevComments]);
    };

    const updateLocalComment = (id: string, message: string): void => {
        setComments(prevComments =>
            prevComments.map(comment =>
                comment.id === id ? { ...comment, message } : comment,
            ),
        );
    };

    const deleteLocalComment = (id: string): void => {
        setComments(prevComments => prevComments.filter(comment => comment.id !== id));
    };

    const toggleLocalCommentLike = (id: string, addLike: boolean): void => {
        setComments(prevComments => {
                return prevComments.map(comment => {
                    if (id === comment.id) {
                        return addLike
                            ? {...comment, likeCount: comment.likeCount + 1, likedByMe: true}
                            : {...comment, likeCount: comment.likeCount -1, likedByMe: false};
                    }
                    return comment;
                });
            },
        );
    };

    return (
        <Context.Provider value={
            {
                review: {id, ...review} as Review,
                rootComments: commentsByParentId['root'],
                getReplies: getReplies,
                createLocalComment: createLocalComment,
                updateLocalComment: updateLocalComment,
                deleteLocalComment: deleteLocalComment,
                toggleLocalCommentLike: toggleLocalCommentLike,
            }
        }>
            {isLoading ?
                (
                    <div className='right-container justify-center items-center'>
                        <Loader />
                    </div>
                ): isError ? (
                    <div className='right-container justify-center items-center'>
                        404 - Review Not Found
                    </div>
                ) : (children)}

        </Context.Provider>
    )


}