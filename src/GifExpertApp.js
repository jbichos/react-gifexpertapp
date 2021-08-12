import React, { useState } from 'react'

const GifExpertApp = () => {

    // const categorias = ['One Punch', 'Samurai X', 'Dragon Ball'];
    const [categorias, setCategorias] = useState(['One Punch', 'Samurai X', 'Dragon Ball']);

    const handleAdd = () => {
        setCategorias([ ...categorias, 'Bitxo']);
        // setCategorias( cats => [...cats, 'Bitxo']);
    };

    return (
        <>
            <h2>GifExpertApp</h2>
            <hr />
            <button onClick={ handleAdd }>Add</button>

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
