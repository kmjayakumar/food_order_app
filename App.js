import React from "react";
import {createRoot} from "react-dom/client";

/**
 * Header
 *      -Logo
 *      -Navitemts
 * Body
 *      -Search
 *      -RestarauntContainer
 *          -Logo
 *          -Restaraunt name
 *          -Star rating with ETA
 *          -Cuisine name
 *          -Location
 * Footer
 *      -Links
 *      -Copyright
 *      -Address  
 */

const Header = () => (
    <div className="header">
        <div className="header_logo">
            <img className="img_logo"  src="https://png.pngtree.com/template/20191014/ourmid/pngtree-pin-food-delivery-map-location-delivery-logo-concept-image_318151.jpg"></img>
        </div>

        <div className="header_navigation">
            <ol className="header-nav">
                <ul>About Us</ul>
                <ul>Contact Us</ul>
                <ul>Cart</ul>
            </ol>
        </div>
    </div>
);

const Restaraunt = (props) => (
    
                <div className="body_res">
                    {console.log(props)}
                <div className="res_card">
                    <img className="res_logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/36da1c09-d695-455c-aa3d-ad295396f01f_820113.JPG" alt="res_logo"></img>
                    {/* <h3> KFC</h3> */}
                    <h3> {props.resName}</h3>
                    <h4> 3.5 Ratings - 34 Mins</h4>
                    {/* <h5> Briyani, South Indian, Asian</h5> */}
                    <h5> {props.cuisine}</h5>
                    {/* <h5> Salem, TN</h5> */}
                    <h5> {props.placeName}</h5>

                </div>
            </div>
)

const Body = () => (

    <div className="body_with_header">
        <Header/>
        <div className="search_rest">
            <div className="body_search">Search</div>
            <div className="rest-all">
            <Restaraunt
            resName="KFC"
            cuisine = "Chicken, Burger, Western"
            placeName = "4 Roads, Salem"

            />
            <Restaraunt
            resName="McDonald's"
            cuisine = "Burger"
            placeName = "Saradha College Road, Algapuram"
            />
            </div>
        </div>
    </div>
);

const Footer = (
    <div>
        <div>Links</div>
        <div>Copyright</div>
        <div>Address</div>
    </div>

)

const root = createRoot(document.getElementById('root'));

root.render(<Body/>);
