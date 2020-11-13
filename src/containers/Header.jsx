import React, {Component} from 'react';
import Logo from '../images/logo.webp';
import {Link} from 'react-router-dom';
import Hnav from './SubHeader';
import Question from '../Icons/Scrool'
import Search from '../Icons/Search'
import Search1 from '../Icons/Search1'



class Header extends Component {
    render(){
        return(
            <div>
            <div className="header fixed flex aic">

                <div className="logo">
                <Link to="/"> <img src={Logo} alt="olx" width="50px" /> </Link>
                </div>


                <div className="icon-location rel flex aic">
                <div className="ico s24 " />
                <Search />
                <input className="label s15 font" placeholder="Your location" value="Pakistan" />
                <Question />
                </div>


                <div className="search flex aic">
                    <input type="text" placeholder="Find Cars,Mobile and More..." className="query font s15" />
                    {/* <button className="" > Hello </button> */}
                    <Search1 />
                </div>


                <div className="action flex aic">
                    <Link to="/Login/" target="-blank" className="fontb s15">Login</Link>
                <button className="sell flexc aic">
                <div className="icon-plus ico s24"></div>
                <h2 className="s18 fontb"> SELL </h2>
                </button>
                </div>
            </div>

            <Hnav />

            </div>
        )
    }
}

export default Header;