import React from 'react'
import { useGoogleSearch } from '../Hooks/useGoogleSearch'
import { useContextValue } from '../StateProvider/StateProvider'
import Response from "../response";
import { Link } from 'react-router-dom';
import "./SearchPage.css"
import Search from '../components/Search';

// Icons
import SearchIcon from '@mui/icons-material/Search';
import DescriptionIcon from '@mui/icons-material/Description';
import ImageIcon from '@material-ui/icons/Image';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import RoomIcon from '@material-ui/icons/Room';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';


function SearchPage() {
  
  const [{term}, dispatch] = useContextValue(); 
  
  // Live Call 
  const {data} = useGoogleSearch(term)

  // const data = Response;


  return (
    <div className='searchPage'>

        <div className='searchPage__header'>

            <Link to="/">
              <img className='logo' src='https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png' />
            </Link>

            <div className="searchPage__headerBody">
                  <Search hideButtons />

                <div className="options">
                    <div className="left__options">

                      <div className="option">
                        <SearchIcon />
                        <span>All</span>
                      </div>
                    
                      <div className="option">
                        <DescriptionIcon />
                        <span>News</span>
                      </div>
                    
                      <div className="option">
                        <ImageIcon />
                        <span>Images</span>
                      </div>
                    
                      <div className="option">
                        <LocalOfferIcon />
                        <span>Shopping</span>
                      </div>
                    
                      <div className="option">
                        <RoomIcon />
                        <span>Maps</span>
                      </div>

                      
                      <div className="option">
                        <MoreVertIcon />
                        <span>More</span>
                      </div>
                    

                    </div>
                    <div className="right__options">

                      <div className="option">
                          <span>Tools</span>
                      </div>

                    </div>
                </div>
            </div>
        </div>

      <div className="searchResult__items">
          <p className="searchResult__itemsCount">
            About {data?.searchInformation.formattedTotalResults} results 
            ({data?.searchInformation.formattedSearchTime} seconds) for {term}
          </p>

          {data?.items.map((item, key) => {
           return <div className="searchResult__item">
            <a className="item__link" href={item.link}>
                <img src={item.pagemap?.cse_image?.length > 0 && 
                item.pagemap?.cse_image[0]?.src} />
              {item.displayLink} <ArrowDropDownIcon />
            </a>
            <a className="item__title" href={item.link}>
              <h3>
               {item.title}
              </h3>
            </a>
            <p className="item__snippet">
             {item.snippet}
            </p>
            </div>

          })}

      </div>

    </div>
  )
}

export default SearchPage