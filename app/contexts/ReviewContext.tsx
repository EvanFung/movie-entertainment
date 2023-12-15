import React, { useContext, useEffect, useMemo, useState } from "react"
import {Comment} from "@prisma/client";
import {useQuery} from "@tanstack/react-query";
import {useParams} from "next/navigation";
import axios from "axios";
import Loader from "@/app/components/Loader";

interface Group {
    [key: string ]: Comment[];
}
interface Review {
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
    // toggleLocalCommentLike: (id: string, addLike: boolean) => void;
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
        queryKey: ['review', id],
        queryFn:() => axios.get('/api/movie/'+id+'/review/'+reviewId).then(res =>res.data),
        staleTime: 60 * 1000 * 10,
        retry: 0,
    });
    const commentsByParentId = useMemo<{ [key: string]: Comment[] }>(()=> {
        const group: { [key: string]: Comment[] } = {};
        comments.forEach(comment => {
            const parentId = comment.parentId || 'root'; // Use 'root' as a key for root comments
            group[parentId] = group[parentId] || [];
            group[parentId].push(comment);
        });
        return group;
    }, [comments]);
    console.log(commentsByParentId)
    // {
    //     "1": [
    //     {
    //         "id": "3",
    //         "message": "this is child comment",
    //         "createdAt": "2023-12-14T20:16:15.000Z",
    //         "updatedAt": "2023-12-14T20:16:16.000Z",
    //         "reviewId": "clq4p7ttr0019fmos284t1tuw",
    //         "userId": "clq0h73n000065082pemzw2ex",
    //         "parentId": "1"
    //     }
    // ],
    //     "root": [
    //     {
    //         "id": "1",
    //         "message": "this is root comment",
    //         "createdAt": "2023-12-14T20:15:10.000Z",
    //         "updatedAt": "2023-12-14T20:15:06.000Z",
    //         "reviewId": "clq4p7ttr0019fmos284t1tuw",
    //         "userId": "clq0h73n000065082pemzw2ex",
    //         "parentId": null
    //     },
    //     {
    //         "id": "2",
    //         "message": "this is root comment",
    //         "createdAt": "2023-12-14T20:15:47.000Z",
    //         "updatedAt": "2023-12-14T20:15:49.000Z",
    //         "reviewId": "clq4p7ttr0019fmos284t1tuw",
    //         "userId": "clq0h73n000065082pemzw2ex",
    //         "parentId": null
    //     }
    // ]
    // }

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

    // const toggleLocalCommentLike = (id: string, addLike: boolean): void => {
    //     setComments(prevComments =>
    //         prevComments.map(comment => {
    //             if (id === comment.id) {
    //                 return addLike
    //                     ? { ...comment, likeCount: comment.likeCount + 1, likedByMe: true }
    //                     : { ...comment, likeCount: comment.likeCount - 1, likedByMe: false };
    //             }
    //             return comment;
    //         }),
    //     );
    // };

    return (
        <Context.Provider value={
            {
                review: {id, ...review} as Review,
                rootComments: commentsByParentId['root'],
                getReplies: getReplies,
                createLocalComment: createLocalComment,
                updateLocalComment: updateLocalComment,
                deleteLocalComment: deleteLocalComment,
            }
        }>
            {isLoading ?
                (
                    <div className='right-container justify-center items-center'>
                        <Loader />
                    </div>
                ): isError ? (
                    <div className='right-container justify-center items-center'>
                        404 - Movie Not Found
                    </div>
                ) : (children)}

        </Context.Provider>
    )


}