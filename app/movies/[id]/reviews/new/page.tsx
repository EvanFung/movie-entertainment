'use client'
import React, {useRef} from 'react';
import {Button, Card, Flex, TextField} from "@radix-ui/themes";
import { Editor } from '@tinymce/tinymce-react';
import { Editor as TinyMCEEditor } from 'tinymce';
import {TINYMCE_API_KEY} from "@/app/utils";

interface Props {
    params: {
        id: string;
    }
}
const ReviewPage = ({params}: Props) => {
    const editorRef = useRef<TinyMCEEditor | null>(null);
    return (
        <div className='right-container'>
            <Flex direction='column' className='p-5 mx-auto my-auto'>
                <Card size='5'>
                    {/* Header section */}
                    <Flex direction='row' className='mb-5'>
                        <h1 className='text-2xl font-extrabold'>Write your review</h1>
                    </Flex>
                    <Flex direction='column' gap='5' className='max-w-screen-xl'>
                        <form className='flex flex-col gap-5'>
                            <TextField.Root>
                                <TextField.Slot>
                                    Title
                                </TextField.Slot>
                                <TextField.Input size='3' placeholder="Title of the review" />
                            </TextField.Root>
                            <Editor
                                apiKey={`${TINYMCE_API_KEY}`}
                                init={{
                                    plugins: 'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount linkchecker',
                                    toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table | align lineheight | numlist bullist indent outdent | emoticons charmap | removeformat',
                                    content_css:'dark',
                                    skin: 'oxide-dark',
                                    height:600,
                                }}
                                initialValue=""
                                onInit={(evt, editor) => editorRef.current = editor}
                            />
                            <Button>Submit Review</Button>
                        </form>
                    </Flex>
                </Card>
            </Flex>
        </div>
    );
};

export default ReviewPage;