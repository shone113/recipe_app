import React from 'react';
import { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import {motion} from 'framer-motion';

function Cuisine() {

    const params = useParams();
    const [cuisine, setCuisine] = useState([]);

    useEffect(() => {

      fetchCuisine();
    }, [params.type]);

    const fetchCuisine = async () => {

      const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&number=9&cuisine=${params.type}`);
      const recipes = await data.json();
      setCuisine(recipes.results);
    }

  return (
    <Wrapper
      animate={{opacity: 1}}
      initial={{opacity: 0}}
      exit={{opacity: 0}}
      transition={{duration: 0.5}}
    >
      {cuisine.map((recipe) => {
        return(
          <Card key={recipe.id} to={`/recipe/${recipe.id}`}>
            <img src={recipe.image} />
            <h3>{recipe.title}</h3>
          </Card>
        );
      })}
    </Wrapper>

  )
}


const Wrapper = styled(motion.div)`
    margin: 50px auto;
    width: 80%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: minmax(100px, auto);
    column-gap: 0;
    row-gap: 50px;
`;

const Card = styled(NavLink)`
    position: relative;
    text-align: center;
    color: white;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    border-radius: 15px;

    img{
        flex-shrink: 0;
        max-width: 100%;
        max-height: 100%;
        height: auto;
        border-radius: 15px;
    }

    h3{
        margin-bottom: 20px;
        position: absolute;
        z-index: 10;
    }

`;

export default Cuisine