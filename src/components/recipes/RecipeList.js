import React, { useState, useEffect} from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import RecipeItem from "./RecipeItem";
import { BASE_URL } from "../../constants/api";
import SearchRecipe from "./SearchRecipe";



function RecipeList() {
        const [ recipes, setRecipes]= useState([]);
        const [filteredRecipes, setFilteredRecipes] = useState([]);
        
        useEffect(() => {
            fetch(BASE_URL)
                .then(response => response.json())
                .then(json => {
                setRecipes(json.results);
                setFilteredRecipes(json.results);
            })
                .catch(error => console.log(error));
        }, []);
    
        const filterCards = function(e) {
            const searchValue = e.target.value.toLowerCase();
            const filteredArray = recipes.filter(function(char) {
                const lowerCaseTitle = char.title.toLowerCase();
                
                if (lowerCaseTitle.startsWith(searchValue)) {
                    return true;
                }
                return false;
            });
            
            setFilteredRecipes(filteredArray);
        };
      
        return (
            
            <>
               <SearchRecipe handleSearch={filterCards} /> 
               <Row>
                  {filteredRecipes.map(recipe => {
                     const {title, thumbnail} = recipe;
            
                     return (
                          <Col sm={6} md={3} key={title}>
						     <RecipeItem title={title}  thumbnail={thumbnail} />
					      </Col>
        
                       );
                   
                   })}
               </Row>
            </>
        );
}



export default RecipeList;
