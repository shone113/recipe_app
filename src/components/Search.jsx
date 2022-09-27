import React, { useState } from 'react';
import {FaSearch} from 'react-icons/fa';
import styled from 'styled-components';
import {useNavigate} from 'react-router-dom';

function Search() {

  const navigate = useNavigate();
  const [input, setInput] = useState('');

  const preventSearch = (e) => {
    e.preventDefault();
    navigate('/searched/' + input);
  }

  return (
    <div>
      <FormStyled onSubmit={preventSearch}>
        <FaSearch></FaSearch>
        <input 
        type='text' 
        placeholder='Search...' 
        name='search'
        onChange={(e) => {setInput(e.target.value)}} />
      </FormStyled>
    </div>
  )
}

const FormStyled = styled.form`
  width: 30%;
  margin: auto;
  padding: 10px;
  font-size: 1.2rem;
  border-radius: 15px;
  background: linear-gradient(#16222A, #3A6073);
  color: white;

  input{
    background: transparent;
    border: none;
    color: white;
    font-size: 1.2rem;
    padding: 0 10px;
    width: 90%;
    outline: none;
  }
`;

export default Search