import React from 'react';
import {Badge} from "@radix-ui/themes";
interface Props {
    collectionType:string;
    entertainmentType:string;
}
const CollectionHeader = ({collectionType, entertainmentType}: Props) => {
    return (
        <div className="collection-header">
            <div className="title-container">
                <h2 className="section-title">{collectionType}</h2>
                <Badge variant='solid'>{entertainmentType}</Badge>
            </div>
            <a className="see-more" href={`/api/v1/video?videoType=${collectionType}`}>See more</a>
        </div>
    );
};

export default CollectionHeader;