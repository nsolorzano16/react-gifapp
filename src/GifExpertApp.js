

import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    const [categories, setcategories] = useState(['Goku']);

    // const handleAdd = () => {
    //     setcategories(['nelson', ...categories]);
    // }

    return (
        <>


            <h2>Gif Expert App</h2>
            <AddCategory setCategories={setcategories} />
            <hr />


            <ol>
                {
                    categories.map((category, i) => (
                        <GifGrid
                            key={category}
                            category={category} />
                    )


                    )
                }
            </ol>
        </>
    );
}
