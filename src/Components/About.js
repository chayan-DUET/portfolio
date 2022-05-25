import React from "react";
 export default function About(){
     return <>
        <div className="about_me">
        <div className="about_large_title d-none d-lg-block">
                About
        </div>
        <div className="container">
            <div className="row align-items-center">
                <div className="col-xl-6 col-md-6">
                    <div className="about_e_details">
                        <h3>About me</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida Risus com odo viverra maecenas.</p>
                        <div className="download_cv">
                            <a className="boxed-btn3" href="#">Download CV</a>
                        </div>
                    </div>
                </div>
                <div className="col-xl-6 col-md-6">
                    <div className="about_img">
                        <div className="color_pattern d-none d-lg-block">
                            <img src="img/about/color_grid.png" alt=""/>
                        </div>
                        <div className="my_Pic">
                                <img src="img/about/about.png" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
     </>
 }