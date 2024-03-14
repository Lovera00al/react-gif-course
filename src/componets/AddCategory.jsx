import { useState } from "react"


export const AddCategory = ( { onNewCategory }) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({ target })=>{
        setInputValue( target.value );
    }

    const onSubmit = ( event ) => {
        if( inputValue.trim().length < 1 )return;
        event.preventDefault(inputValue)
        // setCategories(categories => [ inputValue,...categories ]);
        onNewCategory( inputValue )
        setInputValue('');
    }
   
    
  return (
  <form onSubmit={ onSubmit }>
        <input 
        type="text" 
        placeholder="Buscar Gifs"
        value={ inputValue }
        onChange={ onInputChange }
        />
  </form>
  )
}
