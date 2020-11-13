import React from 'react';
import LOGOO from '../images/LOGOO.jpg';




class Logoo extends React.Component {
    render() {
        return(
            <div>

             <div className="slider flex">
                <img src={LOGOO} alt="OLX" width="100%"/>
             </div>

            </div>
        )
    }
}


export default Logoo;