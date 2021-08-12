import React, { useState } from 'react'

const AddCategory = () => {

    const [inputValue, setInputValue] = useState('Hola Bitxo');

    const handleInputChange = (e) => {
        // console.log(e.target.value);
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            {/* <h2>Add Category</h2> */}
            <input
                type="text"
                value={inputValue}
                onChange={ handleInputChange }
            />  
        </form>
    )
}

export default AddCategory
