import React, { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';
import GifGridItem from './GifGridItem';

const GifGrid = ({ category }) => {

    const [images, setImages] = useState([]);

    useEffect ( () => {
        getGifs(category)
            // .then( imgs => setImages( imgs) )
            .then( setImages );
    }, [category] );

    return (
        <>
            <h3>{category}</h3>
            <div className="card-grid">
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
        </>
    )
}

export default GifGrid
