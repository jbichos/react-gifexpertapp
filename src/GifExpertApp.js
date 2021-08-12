import React, { useState } from 'react'
import AddCategory from './components/AddCategory';

const GifExpertApp = () => {

    const [categorias, setCategorias] = useState(['One Punch', 'Samurai X', 'Dragon Ball']);

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
                    categorias.map( category => {
                        return <li key={category}>{category}</li>
                    })
                }
            </ol>
        </>
    )
}

export default GifExpertApp
