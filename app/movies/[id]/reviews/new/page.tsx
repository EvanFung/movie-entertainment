'use client'
import React, {useRef} from 'react';
import {z} from 'zod'
import {Button, Callout, Card, Flex, TextField} from "@radix-ui/themes";
import { Editor } from '@tinymce/tinymce-react';
import { Editor as TinyMCEEditor } from 'tinymce';
import {TINYMCE_API_KEY} from "@/app/utils";
import {useRouter} from "next/navigation";
import {zodResolver} from "@hookform/resolvers/zod";
import {Controller, useForm} from "react-hook-form";
import {postReviewSchema} from "@/app/validationSchemas";
import Rating from "@/app/movies/_components/Rating";
import ErrorMessage from "@/app/components/ErrorMessage";
import axios from "axios";
import Spinner from "@/app/components/Spinner";
import ReviewForm from "@/app/movies/_components/ReviewForm";
type ReviewData = z.infer<typeof postReviewSchema>

interface Props {
    params: {
        id: string;
    },
    review?: ReviewData
}
const NewReviewPage = ({params, review}: Props) => {
    // const router = useRouter();
    // const {register, control, handleSubmit, formState: {errors}} = useForm<ReviewData>({
    //     resolver: zodResolver(postReviewSchema)
    // });
    // const editorRef = useRef<TinyMCEEditor | null>(null);
    // const [error, setError] = React.useState('');
    // const [isSubmitting, setIsSubmitting] = React.useState(false);
    // const onSubmit = handleSubmit(async (data) => {
    //     try {
    //         setIsSubmitting(true);
    //         if(review) {
    //             axios.patch('/api/review/'+review.id, data);
    //         } else {
    //             data.movieId = params.id;
    //             await axios.post('/api/review', data);
    //         }
    //         router.push('/movies/'+params.id);
    //         router.refresh();
    //     }catch(error) {
    //         setIsSubmitting(false);
    //         setError('An unexpected error occurred');
    //     }
    // });
    return (
        <div className='right-container'>
            <Flex direction='column' className='p-5 mx-auto my-auto'>
                <Card size='5'>
                    {/* Header section */}
                    <Flex direction='row' className='mb-5' justify={"between"}>
                        <a href={`/movies/${params.id}`}>Back</a>
                        <h1 className='text-2xl font-extrabold'>Write your review</h1>
                    </Flex>
                    <Flex direction='column' gap='5' className='max-w-screen-xl'>
                        <ReviewForm params={{id: params.id}} />
                    </Flex>
                </Card>
            </Flex>
        </div>
    );
};

export default NewReviewPage;