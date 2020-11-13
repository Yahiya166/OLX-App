import React from 'react';
import {Link} from 'react-router-dom';




class Footer extends React.Component {
    render() {
        return(
            <div>
                <div className="footer flex">
                    <div className="block flex flex-col">
                        <h2 className="tittle s16 fontb color"> POPULAR CATEGORIES </h2>
                        <Link to="/browser/" className="noul nouul font s15 color"> Cars </Link>
                        <Link to="/browser/" className="noul nouul font s15 color"> Flats for rent </Link>
                        <Link to="/browser/" className="noul nouul font s15 color"> Jobs </Link>
                        <Link to="/browser/" className="noul nouul font s15 color"> Mobile Phones </Link>
                    </div>

                    <div className="block flex flex-col">
                    <h2 className="tittle s16 fontb color"> TRENDING SEARCHES </h2>
                    <Link to="/browser/" className="noul nouul font s15 color"> Bikes </Link>
                    <Link to="/browser/" className="noul nouul font s15 color"> Watches </Link>
                    <Link to="/browser/" className="noul nouul font s15 color"> Books </Link>
                    <Link to="/browser/" className="noul nouul font s15 color"> Dogs </Link>
                    </div>

                    <div className="block flex flex-col">
                    <h2 className="tittle s16 fontb color"> POPULAR CATEGORIES </h2>
                    <Link to="/" className="noul nouul font s15 color"> Cars </Link>
                    <Link to="/" className="noul nouul font s15 color"> Flats for rent </Link>
                    <Link to="/" className="noul nouul font s15 color"> Jobs </Link>
                    <Link to="/" className="noul nouul font s15 color"> Mobile Phones </Link>
                    </div>

                    <div className="block flex flex-col">
                    <h2 className="tittle s16 fontb color"> ABOUT US </h2>
                    <Link to="/" className="noul nouul font s15 color"> About OLX Group </Link>
                    <Link to="/" className="noul nouul font s15 color">OLX Blog </Link>
                    <Link to="/" className="noul nouul font s15 color"> Contact Us</Link>
                    <Link to="/" className="noul nouul font s15 color"> OLX for Businesses </Link>
                    </div>

                    <div className="block flex flex-col">
                    <h2 className="tittle s16 fontb color"> OLX </h2>
                    <Link to="/" className="noul nouul font s15 color"> Help </Link>
                    <Link to="/" className="noul nouul font s15 color"> Sitemap </Link>
                    <Link to="/" className="noul nouul font s15 color"> Legal & Privacy information </Link>
                    </div>

                <div>
                <h2 className="folow fontb s18 color"> FOLLOW US </h2>

                <div>
                    <ul>
                        <li className="iconn ibl"> <a href="https://www.facebook.com/olxpakistan"  target="-blank"> <img src="https://w7.pngwing.com/pngs/94/962/png-transparent-social-media-computer-icons-facebook-inc-icon-design-social-media.png" width="50px" height="30px" /> </a> </li>
                        <li className="iconn ibl"> <a href="https://twitter.com/OLX_Pakistan"  target="-blank"> <img src="https://img.icons8.com/dotty/2x/twitter.png" width="30px" height="30px" /> </a> </li>
                        <li className="iconn ibl"> <a href="https://www.youtube.com/channel/UCARDDjJnW7IRBpo_AP7WTHQ?sub_confirmation=1"  target="-blank"> <img src="https://icons.iconarchive.com/icons/iconsmind/outline/512/Youtube-icon.png" width="30px" height="30px" /> </a> </li>
                        <li className="iconn ibl"> <a href="https://www.instagram.com/olx.pakistan/"  target="-blank"> <img src="https://img.icons8.com/ios/452/instagram-new.png"  width="30px" height="30px" /> </a> </li>
                    </ul>
                </div>


                <div className=" flex as">
                <a href="#" className="Heelllo noul bl"> <img src="https://statics.olx.com.pk/external/base/img/appstore_2x.png" alt="olx-image"/> </a>
                <a href="#" className="Heelllo noul bl"> <img src="https://statics.olx.com.pk/external/base/img/playstore_2x.png" alt="olx-image"/> </a>
                </div>


                </div>




            </div>
            </div>
        )
    }
}

export default Footer;