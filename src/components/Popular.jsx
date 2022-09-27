import React, {useState, useEffect} from 'react';
import {Splide, SplideSlide} from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

function Popular() {

    const [popular, setPopular] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const check = localStorage.getItem('popular');
        if(check){
            setPopular(JSON.parse(check));
        }else{
            const response = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`)
            const data = await response.json();
            localStorage.setItem('popular', JSON.stringify(data.recipes));
            setPopular(data.recipes); 
        }
        console.log(popular);
    }

  return (
      <Wrapper>
        <Splide
         options={ {
            rewind: true,
            gap   : '1rem',
            perPage: 4,
          } }
        >
                {popular.map((recipe) => {
                    return(
                        <SplideSlide key={recipe.id}>
                            <Card>
                                <NavLink to={`/recipe/${recipe.id}`}>
                                    <img src={recipe.image} />
                                    <h3>{recipe.title}</h3>  
                                </NavLink>
                                
                            </Card>
                        </SplideSlide>
                    );
                })}
        </Splide>     
      </Wrapper>

  )
}

const Wrapper = styled.div`
    margin: 0px 100px;
`;

const Card = styled.div`
    position: relative;
    text-align: center;
    color: white;
    width: 100%;
    height: 30vh;
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
    }

    h3{
        margin-bottom: 0px;
        position: absolute;
        z-index: 10;
    }

`;



export default Popular