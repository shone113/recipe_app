import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

function Recipe() {

    const params = useParams();
    const [recipe, setRecipe] = useState({});
    const [activeTab, setActiveTab] = useState('instructions');

    useEffect(() => {
        getRecipe();
    }, [params])

    const getRecipe = async () => {
        const data = await fetch(`https://api.spoonacular.com/recipes/${params.id}/information?apiKey=${process.env.REACT_APP_API_KEY}`);
        const recipe = await data.json();
        setRecipe(recipe);
        console.log(recipe);
    }

  return (
    <Wrapper>
        <Left>
            <h4>{recipe.title}</h4>
            <img src={recipe.image} />
        </Left>
        <Right>
            <Buttons>
                <button
                className={activeTab === 'instructions' ? 'active' : ''}
                onClick={() => setActiveTab('instructions')}
                >Instructions</button>
                <button
                className={activeTab === 'ingredients' ? 'active' : ''}
                onClick={() => setActiveTab('ingredients')}
                >Ingredients</button>
            </Buttons>
            <div>
                {activeTab === 'instructions' && (
                    <div>
                        <h4 dangerouslySetInnerHTML={{__html: recipe.summary}}></h4>
                        <h4 dangerouslySetInnerHTML={{__html: recipe.instructions}}></h4>
                    </div>
                )}
                {activeTab === 'ingredients' && (
                    <ul>
                        {recipe.extendedIngredients.map((ingredient) => ( 
                            <li key={ingredient.id}>{ingredient.original}</li>
                        ))}
                    </ul>
                )};
      
            </div>
        </Right>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 20px;
    width: 70%;
    margin: auto;
    margin-top: 100px;
    text-align: center;
`;

const Left = styled.div`
    img{
        width: 80%;
        height: auto;
        display: block;
        margin-left: auto;
        margin-right: auto;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        border-radius: 10px;
    }
`;
const Right = styled.div`

    ul{
        list-style-type: none;
    }

`;

const Buttons = styled.div`
    display: flex;
    justify-content: space-evenly;

    button{
        border: 2px solid black;
        background-color: white;
        color: black;
        padding: 10px;
        border-radius: 5px;
        cursor: pointer;
    }

    .active{
        background: linear-gradient(#16222A, #3A6073);
        color: white;
        font-weight: bold;
    }

`;
export default Recipe