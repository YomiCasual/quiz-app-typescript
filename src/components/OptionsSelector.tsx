import React, { useState, useEffect } from 'react';
import { fetchCategories } from './api';

//@styles
import { Label, Select, Wrapper } from './css/Option.styles'


type CategoriesData = {
    id: number,
    name: string
  }

type OptionProps = {
    changeCategory: any,
    changeDifficulty: any
}

const difficulty = [
 "easy",
"medium", 
 "hard"
]



const OptionsSelector:React.FC<OptionProps> = ({ changeCategory, changeDifficulty }) => {
    const[categories, setCategories] = useState<CategoriesData[]>([])

    useEffect(() => {
        const fectchData = async () => {
            try {
                let response = await fetchCategories()
                setCategories(response)
            }
            catch(err) {
                console.log("not able to fetch")
            }
          
        }
        fectchData()
    }, [])
    

 
    return (
        <Wrapper>

                <div>
                <Label htmlFor="categories">Select a Category</Label>
                <div className="select">
                <Select onChange={changeCategory}>
                {
                categories.length > 0 && categories.map(category => (
                    <option 
                    key={category.id} 
                    value={category.id}
                    
                    >{category.name}</option>
                )) 
                    }
                </Select>
            </div>
            </div>
            
     
            <div>
            <Label htmlFor="difficulty">Difficulty</Label>
            <div className="select">
            <Select onChange={changeDifficulty}>
            {
               difficulty.map((item:string)=> (
                <option 
                key={item} 
                value={item}
                
                >{item}</option>
               )) 
                }
            </Select>
            </div>
            </div>
            
        </Wrapper>
    );
}

export default OptionsSelector;
