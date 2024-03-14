import { useState } from "react"
import { AddCategory, GifGrid } from "./componets"


export const GiftExpertApp = () => {

    const [categories, setCategories] = useState(['Mikasa'])

    const onAddCategory = (value) => {
        if ( categories.includes( value ) )return;
        setCategories([value,...categories]);
        // setCategories(['Valorant',...categories ])
        // setCategories ( cat =>[...cat, 'Valorant']);
    }

    return (
        <>
            {/* titulo */}
            <h1>Hola gift</h1>

            {/* Input */}
            <AddCategory 
                // setCategories={ setCategories }
                onNewCategory={ (value=> onAddCategory(value) )}
            />

            {/* Listado de GIF */}
            <ol>
                {
                    categories.map(( category ) => ( 
                        <GifGrid 
                            key={ category }
                            category={ category }
                        />
                    ))
                }
            </ol>
        </>    
    )
}
