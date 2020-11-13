import React, {Component} from 'react' ;
import { BrowserRouter, Route, } from "react-router-dom";
import Home from '../containers/Home';
import Header from '../containers/Header';
import Footer from '../containers/Footer'
import Hfooter from '../containers/SubFooter'
import '../App.css';
import '../props.css';








class AppRouter extends Component {
    render() {
        return(
            <BrowserRouter>
                <Header />
            <Route path='/' component={Home} />   
                <Footer />
                <Hfooter />
            </BrowserRouter>
        )
    }
}


export default AppRouter;
