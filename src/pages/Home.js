import React from 'react'
import { Link } from 'react-router-dom'
import { Avatar } from '@mui/material';
import Search from "../components/Search";
import "./Home.css";


export default function Home() {


  return (
    <div className="home">

        <div className="home__header">
            <Link to="/gmail">Gmail</Link>
            <Link to="/Images">Images</Link>
            <img className='apps' src="/images/apps.svg" />
            <Avatar sx={{ bgcolor: "rgb(141 110 99)" }} className="avatar" />
            {/* Avater */}
        </div>

        <div className="home__body">
            <img className='home__logo' src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"  />
            <Search />
        </div>

        <div className="home__footer">
            <div className="home__footer__country">Iraq</div>
            <div className='home__footer_links'>
                    <div>
                        <a href="#">Aboute</a>
                        <a href="#">Advertising</a>
                        <a href="#">Business</a>
                        <a href="#">How Search works</a>
                    </div>
                    <div>
                      <a href="#">Privacy</a>
                      <a href="#">Terms</a>
                      <a href="#">Settings</a>
                    </div>
            </div>
        </div>

    </div>
  )
}
