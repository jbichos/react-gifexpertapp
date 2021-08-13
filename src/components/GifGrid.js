import React, { useState, useEffect } from 'react';
import GifGridItem from './GifGridItem';

const GifGrid = ({ category }) => {

    const [images, setImages] = useState([]);

    useEffect ( () => {
        getGifs();
    }, [] );

    const getGifs = async () => {

        // const url = 'https://api.giphy.com/v1/gifs/search?q=dragon+ball&limit=10&api_key=CgeR3pkFnBwB45rClFdODnFlwOlFvNRg';
        const url = 'https://api.giphy.com/v1/gifs/search?q=pokemon&limit=10&api_key=CgeR3pkFnBwB45rClFdODnFlwOlFvNRg';
        const resp = await fetch( url );
        const { data } = await resp.json();

        const gifs = data.map ( ({id, title, images}) => {
            return {
                id,
                title,
                url: images.downsized_medium.url
            }
        });

        console.log(gifs);
        setImages(gifs);

    }

    return (
        <div>
            <h3>{category}</h3>
            {/* <ol>
                {
                    images.map( ({id,title}) => (
                        <li key={id}>{title}</li>
                    ))
                }
            </ol> */}
            {
                images.map( img => (
                    <GifGridItem 
                        key={img.id}
                        {...img} 
                    />
                ))
            }
        </div>
    )
}

export default GifGrid
