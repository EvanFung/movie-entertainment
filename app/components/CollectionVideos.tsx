import React from 'react';
import CollectionHeader from "@/app/components/CollectionHeader";
import Image from "next/image";

interface Props {
    entertainmentType:string;
    collectionType:string;
    movieTitle:string;
    isTrending?:boolean | false;
}
//api/v1/videos?videoType=Popular
const CollectionVideos = ({
    entertainmentType,
    collectionType,movieTitle,isTrending}: Props) => {
    return (
        <section className="collection">
            <CollectionHeader collectionType={collectionType} entertainmentType={entertainmentType} />
            <div className='card-container'>
                <div className={`${isTrending ? 'card-item-trending': 'card-item'}`}>
                    <div className={`${isTrending ? 'card-container-trending h-scroll': 'card-image-container'}`}>
                        {isTrending ? (
                            <div className="image-container-trending">
                                <Image className='rounded-lg' src='/images/image-(5).jpg' alt='sss' fill sizes='470px' objectFit='cover' />
                            </div>
                        ):
                            <img src='/images/image-(3).jpg'  />
                        }
                    </div>
                    <div className={`${isTrending ? 'info-trending': 'card-item-text'}`}>
                        <div className="info-text">
                            <p>2023</p>
                            <div className="info-detail">
                                <p>{entertainmentType}</p>
                            </div>
                        </div>
                        <h2 className="movie-title">{movieTitle}</h2>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CollectionVideos;