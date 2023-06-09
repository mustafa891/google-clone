import { Button } from '@mui/material';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { ACTIONS } from '../StateProvider/reducer';
import { useContextValue } from '../StateProvider/StateProvider';
import "./Search.css";

export default function Search({hideButtons}) {

  const navigate = useNavigate();
  const [state, dispatch] = useContextValue();

  const setInput = (value) => {
      dispatch({
        type: ACTIONS.SET_SEARCH_TERM,
        term: value,
      })
  }
  
  const Submit = (e) => {
    e.preventDefault();
    navigate("/search")
  }

  return (
    <form className="search" onSubmit={Submit}>
        <div className="search__input">
            <img className='search__searchIcon' src="images/search.svg" />
            <input value={state.term} type="text" onChange={(e) => setInput(e.target.value)} />
            <div>
              <img className='search__micro' src="images/micro.svg" />
              <img className='search__camera' src="images/camera.svg" />
            </div>
        </div>    

        {!hideButtons &&<>
        
        <div className="search__buttons">   
            <Button variant="outlined">Google Search</Button>
            <Button variant="outlined">I'm Feeling Lucky</Button>
        </div>
        
        <div className='search__lang'>
            <span>Google offered in: </span>
            <a href='#'>العربية </a>
            <a href='#'>کوردی</a>
        </div>
        </> 
        }

    </form>
  )
}
