import React, {useRef} from 'react';
import {Card, Flex, Inset, ScrollArea, Strong, Text} from "@radix-ui/themes";
import * as Utils from "@/app/utils";
import {CastMember} from "@/app/models/MovieDetail";
import useHorizontalScroll from "@/app/hooks/useHorizontalScroll";

interface Props {
    casts: CastMember[]
}

const CastContainer = ({casts}: Props) => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    useHorizontalScroll(scrollContainerRef);
    return (
        <Flex direction='column'>
            <Card className='grow'>
                <div className='flex flex-row justify-between'>
                    <div className='flex flex-row gap-4 items-center'>
                        <h1 className='text-2xl font-extrabold mb-2'>Casts</h1>
                        <p className='font-light text-sm'>{casts.length > 10 ? `Showing 10 of ${casts.length}` : ''}</p>
                    </div>
                    <h2 className='text-sm font-extrabold mb-2'>SEE MORE</h2>
                </div>
                <Flex direction='row' gap='7'>
                    <ScrollArea ref={scrollContainerRef} scrollbars='horizontal' style={{ height: 280 }}>
                        <div className='card-container-trending w-full'>
                            {
                                casts.map((cast, index) => (
                                    <Flex direction='row' gap='5'  >
                                        {index > 10 ? (null) : (
                                            <Card size="2" style={{ maxWidth: 240 }}>
                                                <Inset clip="padding-box" side="top" pb="current">
                                                    <img
                                                        src={`${cast.profile_path ? `${Utils.TMDB_IMAGE_ENDPOINT}${Utils.posterSize.original}${cast.profile_path}` : '/images/placeholder_163X245.png'}`}
                                                        alt="Bold typography"
                                                        style={{
                                                            display: 'block',
                                                            objectFit: 'cover',
                                                            width: 245,
                                                            height: 200,
                                                            backgroundColor: 'var(--gray-5)',

                                                        }}
                                                    />
                                                </Inset>
                                                <Text as="p" size="3">
                                                    <Strong>{cast.name}</Strong>
                                                </Text>
                                                <Text as="p" size="2">
                                                    {cast.character}
                                                </Text>
                                            </Card>
                                        )}
                                    </Flex>
                                ))
                            }
                        </div>
                    </ScrollArea>
                </Flex>
            </Card>
        </Flex>
    );
};

export default CastContainer;