// import React from 'react';

const SingleNews = ({item}) => {
    const {title, images, description}= item
    return (
        <div>
            <h1>{title}</h1>
            <img className="w-full" src={images.thumbnail} alt={images.thumbnail}/>
            <h2>{description}</h2>
        </div>
    );
};

export default SingleNews;