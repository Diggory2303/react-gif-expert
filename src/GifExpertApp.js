import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

// App central de los componentes de GIF, aqui tenemos un estado para asignar las categorias

const GifExpertApp = props => {

//   const categories = ['Sci-fi','Horror','Comedy'];
 const [categories, setCategories] = useState(['Cinema']);

//  const handleAdd = () => {
//     setCategories([...categories, 'Adventure']);
//     // setCategories(categ => [...categ, 'Adventure]);
//  }

  return (
    <>
        <h2>GifExpertApp</h2>
        <AddCategory setCategories={setCategories}/> 
        <hr />
        

        <ol>
            {
                categories.map(category => (
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

GifExpertApp.propTypes = {}

export default GifExpertApp