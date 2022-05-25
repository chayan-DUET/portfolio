import React from "react";
 export default function Testimonial(){
     return <>
      <div className="counter_area">
        <div className="container">
            <div className="row">
                <div className="col-xl-4 col-md-4">
                    <div className="single_counter text-center">
                        <h3>
                            <span className="counter" >520 </span><span>+</span>
                        </h3>
                        <p>Total Projects</p>
                    </div>
                </div>
                <div className="col-xl-4 col-md-4">
                    <div className="single_counter text-center">
                        <h3>
                            <span className="counter">244 </span>
                        </h3>
                        <p>On Going Projects</p>
                    </div>
                </div>
                <div className="col-xl-4 col-md-4">
                    <div className="single_counter text-center">
                        <h3>
                            <span className="counter" >95 </span> <span>%</span>
                        </h3>
                        <p>Job Success</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
      <div className="testimonial_area ">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="testmonial_active owl-carousel">
                            <div className="single_carousel">
                                    <div className="single_testmonial text-center">
                                            <div className="quote">
                                                <img src="img/testmonial/quote.svg" alt=""/>
                                                <p>Donec imperdiet congue orci consequat mattis. Donec rutrum porttitor <br/> 
                                                    sollicitudin. Pellentesque id dolor tempor sapien feugiat ultrices nec sed neque.  <br/>
                                                    Fusce ac mattis nulla. Morbi eget ornare dui. </p>
                                            <div className="testmonial_author">
                                                <div className="thumb">
                                                        <img src="img/testmonial/thumb.png" alt=""/>
                                                </div>
                                                <h3>Robert Thomson</h3>
                                                <span>Business Owner</span>
                                            </div>
                                        </div>
                            </div>
                            <div className="single_carousel">
                                    <div className="single_testmonial text-center">
                                            <div className="quote">
                                                <img src="img/testmonial/quote.svg" alt=""/>
                                            </div>
                                            <p>Donec imperdiet congue orci consequat mattis. Donec rutrum porttitor <br/> 
                                                    sollicitudin. Pellentesque id dolor tempor sapien feugiat ultrices nec sed neque.  <br/>
                                                    Fusce ac mattis nulla. Morbi eget ornare dui. </p>
                                            <div className="testmonial_author">
                                                <div className="thumb">
                                                        <img src="img/testmonial/thumb.png" alt=""/>
                                                </div>
                                                <h3>Robert Thomson</h3>
                                                <span>Business Owner</span>
                                            </div>
                                        </div>
                            </div>
                            <div className="single_carousel">
                                    <div className="single_testmonial text-center">
                                        <div className="quote">
                                            <img src="img/testmonial/quote.svg" alt=""/>
                                        </div>
                                        <div className="testmonial_author">
                                            <div className="thumb">
                                                    <img src="img/testmonial/thumb.png" alt=""/>
                                            </div>
                                            <h3>Robert Thomson</h3>
                                            <span>Business Owner</span>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        <div className="discuss_projects">
        <div className="container">
            <div className="row">
                <div className="col-xl-12">
                    <div className="project_text text-center">
                        <h3>Let’s discuss for a project</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor <br/> incididunt ut labore et dolore magna aliqua.</p>
                        <a className="boxed-btn3" href="#">Start Talking</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
     </>
 }