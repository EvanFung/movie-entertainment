import React from 'react';
import {Badge} from "@radix-ui/themes";

interface Props {
    videoType:string;

}
//api/v1/videos?videoType=Popular
const CategoryVideos = () => {
    return (
        <section className="collection">
            <div className="collection-header">
                <div className="title-container">
                    <h2 className="section-title">Popular</h2>
                    <Badge variant='solid'>Movie</Badge>
                </div>
                <a className="see-more" href="#">See more</a>
            </div>
            <div className='card-container'>
                <div className="card-item">
                    <div className='card-image-container'>
                        <img src='/images/image-(3).jpg'  />
                    </div>
                    <div className='card-item-text'>
                        <div className="info-text">
                            <p>2023</p>
                            <div className="info-detail">
                                <p>Movie</p>
                            </div>
                        </div>
                        <h2 className="movie-title">Oppenheimer</h2>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CategoryVideos;