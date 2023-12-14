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
type ReviewData = z.infer<typeof postReviewSchema>

interface Props {
    params: {
        id: string;
    },
    review?: ReviewData
}
const ReviewPage = ({params, review}: Props) => {
    const router = useRouter();
    const {register, control, handleSubmit, formState: {errors}} = useForm<ReviewData>({
        resolver: zodResolver(postReviewSchema)
    });
    const editorRef = useRef<TinyMCEEditor | null>(null);
    const [error, setError] = React.useState('');
    const [isSubmitting, setIsSubmitting] = React.useState(false);
    const onSubmit = handleSubmit(async (data) => {
        try {
            setIsSubmitting(true);
            if(review) {
                // axios.patch('/api/review/'+review.id, data);
            } else {
                data.movieId = params.id;
                await axios.post('/api/review', data);
            }
            router.push('/movies/'+params.id);
            router.refresh();
        }catch(error) {
            setIsSubmitting(false);
            setError('An unexpected error occurred');
        }
    });
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
                        <form className='flex flex-col gap-5' onSubmit={onSubmit}>
                            {error && (
                                <Callout.Root color='red' className='mb-5'>
                                    <Callout.Text>
                                        {error}
                                    </Callout.Text>
                                </Callout.Root>
                            )}
                            <TextField.Root>
                                <TextField.Slot>
                                    Title
                                </TextField.Slot>
                                <TextField.Input {...register('title')} size='3' placeholder="Title of the review" />
                            </TextField.Root>
                            <ErrorMessage>{errors.title?.message}</ErrorMessage>
                            <Controller  name={'rating'} control={control} defaultValue={review?.rating}
                                         render={({field:{onChange, value}}) =>
                                <Rating className='flex flex-row gap-3' count={5} value={value || 1}  edit={true} onChange={onChange} />}
                            />
                            <ErrorMessage>{errors.rating?.message}</ErrorMessage>
                            <Controller control={control} name="body" defaultValue={review?.body} render={({field:{onChange}}) =>
                                <Editor
                                apiKey={`${TINYMCE_API_KEY}`}
                                init={{
                                    plugins: 'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount linkchecker',
                                    toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table | align lineheight | numlist bullist indent outdent | emoticons charmap | removeformat',
                                    content_css:'dark',
                                    skin: 'oxide-dark',
                                }}
                                initialValue=""
                                onInit={(evt, editor) => (editorRef.current = editor)}
                                onEditorChange={onChange}
                            />}  />
                            <ErrorMessage>{errors.body?.message}</ErrorMessage>
                            <Button>Submit Review</Button>
                        </form>
                    </Flex>
                </Card>
            </Flex>
        </div>
    );
};

export default ReviewPage;