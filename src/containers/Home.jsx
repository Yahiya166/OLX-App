import React from 'react';
import Logoo from './Logo'

class Home extends React.Component{
  render(){
    return(
        <div>
          <div>
          </div>
          <div>
            <Logoo />
          </div>


        <div className="fontb s20">
          <h1 className="application color">APPLICATION</h1>
          <p className="text1"> Sir I am Extremely sorry sir me ye <i> <b> OLX </b> </i>  app nhi bana ska itne time me. </p>
          <p className="text2">Actually sir meri pichle 1/5 month se tabbyat kharab thi jis waja se mene ap ki class nhi li thi
             or meri tabbyat 1 hafty pehle hi thk hoi hai or mene ap ki class lena shoro ki jis me mujhe pata chala ke ap ne 
              <i> <b> OLX </b> </i> ki app banane ko di thi or time extend bhi kia hai mene jldi jldi react cover krne ki koshish ki.
               </p>
             <p className="text2"> Or mujhe jitni react samajh ayi mene ne olx app ko bane ki koshish ki. </p>
             <p className="text2"> Likn sir itne shot time me redux complete nhi kr skaa mujhe redux connect krna to agayi 
             mgr us ka use krna nhi aya or react lifecycle mebhi thora msla ho raha hai. </p>
             <p className="text2"> Sir please mujhe course se kickout mat kijye ga me hackathone hone se pehle redux
             cover kr longa. </p>
             <p className="text2"> Or sir muhe time nhi mila isi liye me ne firebase database connect nhi ki. </p>
             <h1 className="Name "> My Name Is M.YAHIYA ASIF </h1>
        </div>





          <div>
          <button className="load-more fontb s14"> Load More </button>
          </div>

        <div className="app-ribbon flex aic">

            <div className="img">
                <img className="bl" src="https://statics.olx.com.pk/external/base/img/phone-app.png" alt="olx-image"/>
            </div>

            <div className="meta">
            <h2 className="tittle fontb s30 color"> TRY THE OLX APP </h2>
            <h2 className="slown font s18 color"> Buy, sell and find just about anything using the app on your mobile. </h2>
            </div>
            <div className="links">
            <h2 className="tittle fontb s18 color"> GET YOUR APP TODAY </h2>
            <div className="flex as">
            <a href="#" className="noul bl"> <img src="https://statics.olx.com.pk/external/base/img/appstore_2x.png" alt="olx-image"/> </a>
            <a href="#" className="noul bl"> <img src="https://statics.olx.com.pk/external/base/img/playstore_2x.png" alt="olx-image"/> </a>
            </div>
            </div>
        </div> 



        </div>
    )
  }
}

export default Home;