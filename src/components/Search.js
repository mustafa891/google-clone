import { Button } from '@mui/material';
import React from 'react'
import "./Search.css";

export default function Search() {
  return (
    <form className="search">
        <div className="search__input">
            <img className='search__searchIcon' src="images/search.svg" />
            <input type="text" />
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
