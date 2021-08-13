// import React, { useState, useEffect } from 'react';
import React from 'react';
import useFecthGifs from '../hooks/useFecthGifs';
// import { getGifs } from '../helpers/getGifs';
import GifGridItem from './GifGridItem';

const GifGrid = ({ category }) => {

    // const [images, setImages] = useState([]);
    const {data:images, loading} = useFecthGifs(category);

    // useEffect ( () => {
    //     getGifs(category)
    //         // .then( imgs => setImages( imgs) )
    //         .then( setImages );
    // }, [category] );

    return (
        <>
            <h3 className="animate__animated animate__backInLeft">{category}</h3>
            { loading && <p className="animate__animated animate__flash">Loading</p> }
            {/* { loading ? 'Cargando...' : 'Data cargada'} */}
            <div className="card-grid">
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
