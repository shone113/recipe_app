import React from 'react';
import styled from 'styled-components';
import { FaPizzaSlice, FaHamburger } from 'react-icons/fa';
import { GiNoodles, GiChopsticks } from 'react-icons/gi';
import {NavLink} from 'react-router-dom';

function Category() {
  return (
    <Container>
        <SLink to="/cuisine/Italian">
            <FaPizzaSlice />
            <h4>Italian</h4>
        </SLink>
        <SLink to="/cuisine/American">
            <FaHamburger />
            <h4>American</h4>
        </SLink>
        <SLink to="/cuisine/Thai">
            <GiNoodles />   
            <h4>Thai</h4>
        </SLink>
        <SLink to="/cuisine/Japanese">
            <GiChopsticks />
            <h4>Japanese</h4>
        </SLink>
    </Container>
  )
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    gap: 30px 50px;
    color: white;
    padding: 20px 0;
`;
const SLink = styled(NavLink)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    cursor: pointer;
    background: linear-gradient(#16222A, #3A6073);
    text-decoration: none;

    svg{
        font-size: 1rem;
        color: white;
    }
    h4{
        margin: 0px;
        padding: 0px;
        font-size: 0.8rem;
        color: white;
    }
    &.active{
        background: linear-gradient(#FF512F, #DD2476);

        svg{
            color: white;
        }
        h4{
            color: white;
        }
    }
`;


export default Category