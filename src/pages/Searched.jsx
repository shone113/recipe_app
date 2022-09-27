import React from 'react';
import { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

function Cuisine() {

    const params = useParams();
    const [searched, setSearched] = useState([]);

    useEffect(() => {

      fetchSearched();
    }, [params.search]);

    const fetchSearched = async () => {

      const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&number=9&query=${params.search}`);
      const recipes = await data.json();
      console.log(recipes.results);
      setSearched(recipes.results);
    }

  return (
    <Wrapper>
      {searched.map((search) => {
        return(
          <Card key={search.id} to={`/recipe/${search.id}`}>
            <img src={search.image} />
            <h3>{search.title}</h3>
          </Card>
        );
      })}
    </Wrapper>

  )
}


const Wrapper = styled.div`
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