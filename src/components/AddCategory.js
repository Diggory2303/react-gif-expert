import React,{useState} from 'react';
import PropTypes from 'prop-types';

//Este componente hace referencia al formulario que permite la creacion de listas
export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('');
    // const [warning, setWarning] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log('Submit Hecho');
        if( inputValue.trim().length > 2){ //Si no hay caracteres vacios
            // setWarning('');
            setCategories(cats => [inputValue,...cats]); //...cats es para seguir desplegando categorias seleccionadas anteriormente
            setInputValue('');
        } else{
            alert('Ingrese al menos un caracter');
            // setWarning('No puede tener una lista vacia');
        }
        
    }

    return (
        <>
            {/* <h2>{warning}</h2> */}
            <form onSubmit={handleSubmit}>
                <input 
                type="text" 
                value={inputValue}
                onChange={ handleInputChange}
                />
             </form>
        </>
        
    )
}

AddCategory.propTypes={
    setCategories:PropTypes.func.isRequired

}
