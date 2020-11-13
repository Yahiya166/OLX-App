import React, { Component } from 'react';
import {Link} from 'react-router-dom'


class Hnav extends Component {
  render(){
    const todos = [
        {value: "Mobile Phones"},
        {value: "Cars"},
        {value: "Motorcycles"},
        {value: "Houses"},
        {value: "TV - Video - Audio"},
        {value: "Tablets"},
        {value: "Land & Plots"}
    ];
    return(
    <div className="hnav fixed flex aic" >
        <button className="view-cates flex aic">
        <h2 className="s18 font color"> <b> ALL CATEGORIES </b> </h2>
        <button className="scrol-down arro s24" />
        </button>
        <ul>
            {todos.map((item,index)=>{
            return <li key={index} className="li noul nouul color bl ibl font s15">
                 <Link to={"/browser/"} className="color"> {item.value} </Link>
                  </li>
            })}
        </ul>

    </div>
    ) 
}
}


export default Hnav;