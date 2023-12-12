import React from 'react';
import {Card, Flex} from "@radix-ui/themes";
interface Props {
    params: {
        id: string;
    }
}
const ReviewPage = ({params}: Props) => {
    return (
        <div className='right-container'>
            <Flex direction='column'>
                <Card>
                    {/* Header section */}
                    <Flex direction='row'>
                        <h1>Edit your review</h1>
                    </Flex>
                </Card>
            </Flex>
        </div>
    );
};

export default ReviewPage;