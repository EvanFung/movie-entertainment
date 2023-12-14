import React from 'react';
import {Card, Flex, Inset, Strong, Text} from "@radix-ui/themes";
import * as Utils from "@/app/utils";
import {MovieDetail} from "@/app/models/MovieDetail";
interface Props {
    movie: MovieDetail
}
const CompanyContainer = ({movie}: Props) => {
    return (
        <Flex direction='row'>
            <Card className='grow'>
                <Flex direction='column' gap='3'>
                    <h1 className='text-2xl font-extrabold'>Production Company</h1>
                    <Flex direction='row' gap='7' justify='start'>
                        {
                            movie.production_companies.map(company => (
                                <Flex direction='row' gap='4' >
                                    <Card size="2" style={{ maxWidth: 240 }}>
                                        <Inset clip="padding-box" side="top" pb="current">
                                            <img
                                                src={`${company.logo_path ? `${Utils.TMDB_IMAGE_ENDPOINT}${Utils.posterSize.original}${company.logo_path}`: '/images/placeholder_163X245.png'}`}
                                                alt="Bold typography"
                                                style={{
                                                    display: 'block',
                                                    objectFit: 'cover',
                                                    width: 218,
                                                    height: 65,
                                                    backgroundColor: 'var(--gray-5)',
                                                }}
                                            />
                                        </Inset>
                                        <Text as="p" size="3">
                                            <Strong>{company.name}</Strong>
                                        </Text>
                                        <Text as="p" size="2">
                                            <Strong>{company.origin_country}</Strong>
                                        </Text>
                                    </Card>
                                </Flex>
                            ))
                        }
                    </Flex>
                </Flex>
            </Card>
        </Flex>
    );
};

export default CompanyContainer;