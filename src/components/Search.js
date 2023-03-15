import { Button } from '@mui/material';
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { ACTIONS } from '../StateProvider/reducer';
import { StateContext } from '../StateProvider/StateProvider';
import "./Search.css";

export default function Search() {

  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const [state, dispatch] = useContext(StateContext);

  
  const Submit = (e) => {
    e.preventDefault();
    dispatch({
      type: ACTIONS.SET_SEARCH_TERM,
      term: input,
    })
    navigate("/search")
  }


  return (
    <form className="search" onSubmit={Submit}>
        <div className="search__input">
            <img className='search__searchIcon' src="images/search.svg" />
            <input type="text" onChange={(e) => setInput(e.target.value)} />
            <div>
              <img className='search__micro' src="images/micro.svg" />
              <img className='search__camera' src="images/camera.svg" />
            </div>
        </div>    


        <div className="search__buttons">   
            <Button variant="outlined">Google Search</Button>
            <Button variant="outlined">I'm Feeling Lucky</Button>
        </div>
        
        <div className='search__lang'>
            <span>Google offered in: </span>
            <a href='#'>العربية </a>
            <a href='#'>کوردی</a>
        </div>

    </form>
  )
}
