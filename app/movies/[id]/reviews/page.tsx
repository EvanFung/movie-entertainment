import React from 'react';
import {Avatar, Card, Flex} from "@radix-ui/themes";
import {InfoCircledIcon} from "@radix-ui/react-icons";
interface Props {
    params: {
        id: string;
    }
}
const ReviewPage = ({params}: Props) => {
    return (
        <div className='right-container'>
            <Flex direction='column' className='p-5'>
                <Card>
                    {/* Header section */}
                    <Flex direction='row' className='mb-5'>
                        <h1 className='text-2xl font-extrabold'>Reviews</h1>
                    </Flex>
                    <Flex direction='column' gap='4'>
                        <Card className='p-2'>
                            <Flex direction='column' gap='2'>
                                <Flex direction='row' gap='3'>
                                    <Avatar fallback={<InfoCircledIcon/>} src={'/images/avatar.jpeg'}  />
                                    <Flex direction='column'>
                                        <p>Ran Li</p>
                                        <p>1 day ago</p>
                                    </Flex>
                                </Flex>
                                <Flex direction='column' gap='3'>
                                    <h1 className='text-xl font-semibold'>Mission: Impossible - Dead Reckoning (Part One) boasts some of cinema's most stunning stunt work, but it came at the cost of character development and a solid story.</h1>
                                    <p>Man.... I wish I loved this movie more than I did. Don't get me wrong, it's a solid action movie with jaw-dropping stunts (some of the best in the series), but as a Mission: Impossible movie, it felt like a small step backward for the franchise. Fallout had mind-blowing action sequences and stunt work, along with developing Ethan's relationship with Ilsa, providing closure with Julia, showing the lengths Ethan would go to protect those closest to him, and battling an imposing villain.... <strong>See more</strong></p>
                                </Flex>
                            </Flex>
                        </Card>
                        <Card className='p-2'>
                            <Flex direction='column' gap='2'>
                                <Flex direction='row' gap='3'>
                                    <Avatar fallback={<InfoCircledIcon/>} src={'/images/avatar.jpeg'}  />
                                    <Flex direction='column'>
                                        <p>Ran Li</p>
                                        <p>1 day ago</p>
                                    </Flex>
                                </Flex>
                                <Flex direction='column' gap='3'>
                                    <h1 className='text-xl font-semibold'>Mission: Impossible - Dead Reckoning (Part One) boasts some of cinema's most stunning stunt work, but it came at the cost of character development and a solid story.</h1>
                                    <p>Man.... I wish I loved this movie more than I did. Don't get me wrong, it's a solid action movie with jaw-dropping stunts (some of the best in the series), but as a Mission: Impossible movie, it felt like a small step backward for the franchise. Fallout had mind-blowing action sequences and stunt work, along with developing Ethan's relationship with Ilsa, providing closure with Julia, showing the lengths Ethan would go to protect those closest to him, and battling an imposing villain.... <strong>See more</strong></p>
                                </Flex>
                            </Flex>
                        </Card>
                    </Flex>
                </Card>
            </Flex>
        </div>
    );
};

export default ReviewPage;