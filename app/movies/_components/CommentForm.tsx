'use client'
import React, {useState} from 'react';
import {Button, Callout, Flex, TextArea, TextField} from "@radix-ui/themes";
import Spinner from "@/app/components/Spinner";
import {useReview} from "@/app/contexts/ReviewContext";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {postCommentSchema} from "@/app/validationSchemas";
import {Comment} from '@/app/contexts/ReviewContext';
import axios from "axios";
import ErrorMessage from "@/app/components/ErrorMessage";
import {useRouter} from "next/navigation";
import {useSession} from "next-auth/react";
interface Props {
    parentId?: string;
}
const CommentForm = ({parentId}: Props) => {
    const router = useRouter();
    const {status, data: session} = useSession();
    const [isSubmitting, setIsSubmitting] = React.useState(false);
    const {createLocalComment, review} = useReview();
    const [error, setError] = React.useState('');

    const {register, control, handleSubmit, formState: {errors}, reset } = useForm<Comment>({
        resolver: zodResolver(postCommentSchema)
    });
    const onSubmit = handleSubmit(async (data) => {
        try {
            status === 'unauthenticated' && router.push('/api/auth/signin');
            setIsSubmitting(true);
            data.reviewId = review.id;
            data.parentId = parentId || null;
            const newComment = await axios.post<Comment>('/api/movie/'+ review.movieId+'/review/'+review.id+'/comment',data);
            createLocalComment(newComment.data);
            setIsSubmitting(false);
            reset();
        }catch(error:any) {
            setIsSubmitting(false);
            setError(error.message);
        }
    });
    return (
        <form onSubmit={onSubmit}>
            {error && (
                <Callout.Root color='red' className='mb-5'>
                    <Callout.Text>
                        {error}
                    </Callout.Text>
                </Callout.Root>
            )}
            <Flex direction='row' gap='2' align='center'>
                <Flex direction='column' grow='1'>
                        <TextArea className='grow' style={{height:'100px'}} size='3' placeholder="what are your thoughts?" {...register('message')} />
                    <ErrorMessage>{errors.message?.message}</ErrorMessage>
                </Flex>
                <Button disabled={isSubmitting} style={{height: '100px'}}>Post{isSubmitting && <Spinner/>}</Button>
            </Flex>
        </form>
    );
};

export default CommentForm;