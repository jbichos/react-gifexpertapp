import React, { useState } from 'react';
import PropTypes from  'prop-types';

const AddCategory = ( {setCategorias} ) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        // console.log(e.target.value);
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if ( inputValue.trim().length > 2 ) {
            setCategorias( cats => [inputValue, ...cats] );
            setInputValue('');
        }
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

AddCategory.propTypes = {
    setCategorias: PropTypes.func.isRequired
}

export default AddCategory
