import React, { useState } from 'react'
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = () => {

    const [categorias, setCategorias] = useState(['Dragon Ball']);

    // const handleAdd = () => {
    //     setCategorias([ ...categorias, 'Bitxo']);
    //     // setCategorias( cats => [...cats, 'Bitxo']);
    // };

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategorias={ setCategorias } />
            <hr />

            <ol>
                {
                    categorias.map( category => (
                        <GifGrid 
                            key={category}
                            category={category} 
                        />
                    ))
                }
            </ol>
        </>
    )
}

export default GifExpertApp
