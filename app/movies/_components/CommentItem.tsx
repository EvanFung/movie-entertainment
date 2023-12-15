import React from 'react';
import {Avatar, Card, Flex} from "@radix-ui/themes";
import {InfoCircledIcon} from "@radix-ui/react-icons";
import {FaCommentAlt, FaHeart, FaShare, FaTrashAlt} from "react-icons/fa";

const CommentItem = () => {
    return (
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