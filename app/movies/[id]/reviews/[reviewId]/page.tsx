'use client'
import React from 'react';
import {Avatar, Badge, Button, Card, Flex, TextField} from "@radix-ui/themes";
import ReviewForm from "@/app/movies/_components/ReviewForm";
import {z} from "zod";
import {postReviewSchema} from "@/app/validationSchemas";
import {InfoCircledIcon, MagnifyingGlassIcon} from "@radix-ui/react-icons";
import {formatDistance} from "date-fns";
import Link from "next/link";
import { FaHeart, FaShare, FaCommentAlt,FaTrashAlt} from "react-icons/fa";
type ReviewData = z.infer<typeof postReviewSchema>
interface Props {
    params: {
        id: string;
        reviewId: string;
    }
}
//review page
const ReviewPage = ({params}: Props) => {
    return (
        <div className='right-container p-5'>
            <Card>
                {/*Header section */}
                <Flex direction='row' gap='3'>
                    <Flex direction='row' gap='3' justify='between' align='center'>
                        <Flex direction="row" gap='3'>
                            <Avatar fallback={<InfoCircledIcon/>} src={`/images/avatar.jpeg`}  />
                            <Flex direction='column'>
                                <p>Evan Feng</p>
                                <p>1 days ago</p>
                            </Flex>
                            <Badge variant='surface' color='violet' size='2' radius='large'>5.0</Badge>
                        </Flex>
                        <h1 className='font-bold text-xl'>
                            Mission: Impossible - Dead Reckoning (Part One) boasts some of cinema's most stunning stunt work, but it came at the cost of character development and a solid story.
                        </h1>
                    </Flex>
                </Flex>
                {/*Body section */}
                <Flex className='mt-4' direction='column' gap='3'>
                    <Flex direction='column' gap='3'>
                        <p className='leading-loose'>                        Man.... I wish I loved this movie more than I did. Don't get me wrong, it's a solid action movie with jaw-dropping stunts (some of the best in the series), but as a Mission: Impossible movie, it felt like a small step backward for the franchise. Fallout had mind-blowing action sequences and stunt work, along with developing Ethan's relationship with Ilsa, providing closure with Julia, showing the lengths Ethan would go to protect those closest to him, and battling an imposing villain
                            Man.... I wish I loved this movie more than I did. Don't get me wrong, it's a solid action movie with jaw-dropping stunts (some of the best in the series), but as a Mission: Impossible movie, it felt like a small step backward for the franchise. Fallout had mind-blowing action sequences and stunt work, along with developing Ethan's relationship with Ilsa, providing closure with Julia, showing the lengths Ethan would go to protect those closest to him, and battling an imposing villain
                            Man.... I wish I loved this movie more than I did. Don't get me wrong, it's a solid action movie with jaw-dropping stunts (some of the best in the series), but as a Mission: Impossible movie, it felt like a small step backward for the franchise. Fallout had mind-blowing action sequences and stunt work, along with developing Ethan's relationship with Ilsa, providing closure with Julia, showing the lengths Ethan would go to protect those closest to him, and battling an imposing villain
                            Man.... I wish I loved this movie more than I did. Don't get me wrong, it's a solid action movie with jaw-dropping stunts (some of the best in the series), but as a Mission: Impossible movie, it felt like a small step backward for the franchise. Fallout had mind-blowing action sequences and stunt work, along with developing Ethan's relationship with Ilsa, providing closure with Julia, showing the lengths Ethan would go to protect those closest to him, and battling an imposing villain
                        </p>
                        <p className='leading-loose'>                        Man.... I wish I loved this movie more than I did. Don't get me wrong, it's a solid action movie with jaw-dropping stunts (some of the best in the series), but as a Mission: Impossible movie, it felt like a small step backward for the franchise. Fallout had mind-blowing action sequences and stunt work, along with developing Ethan's relationship with Ilsa, providing closure with Julia, showing the lengths Ethan would go to protect those closest to him, and battling an imposing villain
                            Man.... I wish I loved this movie more than I did. Don't get me wrong, it's a solid action movie with jaw-dropping stunts (some of the best in the series), but as a Mission: Impossible movie, it felt like a small step backward for the franchise. Fallout had mind-blowing action sequences and stunt work, along with developing Ethan's relationship with Ilsa, providing closure with Julia, showing the lengths Ethan would go to protect those closest to him, and battling an imposing villain
                            Man.... I wish I loved this movie more than I did. Don't get me wrong, it's a solid action movie with jaw-dropping stunts (some of the best in the series), but as a Mission: Impossible movie, it felt like a small step backward for the franchise. Fallout had mind-blowing action sequences and stunt work, along with developing Ethan's relationship with Ilsa, providing closure with Julia, showing the lengths Ethan would go to protect those closest to him, and battling an imposing villain
                            Man.... I wish I loved this movie more than I did. Don't get me wrong, it's a solid action movie with jaw-dropping stunts (some of the best in the series), but as a Mission: Impossible movie, it felt like a small step backward for the franchise. Fallout had mind-blowing action sequences and stunt work, along with developing Ethan's relationship with Ilsa, providing closure with Julia, showing the lengths Ethan would go to protect those closest to him, and battling an imposing villain
                        </p>
                    </Flex>
                    <Flex direction='row' gap='2' align='center'>
                        <TextField.Root className='grow'>
                            <TextField.Input style={{height:'100px'}} size='3' placeholder="What are your throughts?" />
                        </TextField.Root>
                        <Button style={{height: '100px'}}>Post</Button>
                    </Flex>
                </Flex>
            </Card>
            <Card>
                <Flex direction='column' gap='4'>
                    <h1 className='font-bold text-xl'>Comments</h1>
                    <Card>
                        {/*First row*/}
                        <Flex direction='row' gap='2' justify='between' align='center'>
                            <Flex direction='row' align='center' gap='3'>
                                <Avatar size='4'  fallback={<InfoCircledIcon/>} src={`/images/avatar.jpeg`}  />
                                <Flex direction='column' gap='2'>
                                    <p className='text-sm'>Evan Feng</p>
                                    <p className='text-sm'>1 days ago</p>
                                </Flex>
                            </Flex>
                        </Flex>
                        {/*  Second row  */}
                        <Flex direction='row' className='mt-3'>
                            <p className='text-base leading-loose'>Web dev is the most fun job ever!!Web dev is the most fun job ever!!Web dev is the most fun job ever!!Web dev is the most fun job ever!!</p>
                        </Flex>
                        <Flex direction='row' justify='end' gap='4'>
                            <FaHeart />
                            <FaShare />
                            <FaCommentAlt />
                            <FaTrashAlt />
                        </Flex>
                    </Card>
                </Flex>
            </Card>
        </div>
    );
};

export default ReviewPage;