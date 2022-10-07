import React from "react";
import slide1 from '../img/slideshow-1.jpg';
import slide2 from '../img/slideshow-2.jpg';
import slide3 from '../img/slideshow-3.jpg';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import img10 from "../img/mission-one.jpg";
import img20 from "../img/mission-two.jpg";
import img30 from "../img/mission-dot.png";
import ProgressBar from 'react-bootstrap/ProgressBar';
import './slider.css'
const Slider= () =>{
return(
    <div>
        
        <section id="Home">
            <div className="row">
                <div className="col-md-12">
                <Carousel fade  className="position-relative">
      <Carousel.Item interval={3000}>
        <img
          className="d-block  img-fluid"
          src={slide1}
          alt="First slide"
        />
        <Carousel.Caption className="position-absolute top-50">
          <h3 className="carouselHeading text-uppercase ">Who We are</h3>
          <h1>Our Work Create Shared <br/>Value For Customers</h1>
          <br/>
          <Button className="slidebtn">Explore Features</Button>
        </Carousel.Caption>
      </Carousel.Item >
      <Carousel.Item interval={3000}>
        <img
          className="d-block img-fluid"
          src={slide2}
          alt="Second slide"
        />

        <Carousel.Caption className="position-absolute top-50">
        <h3 className="carouselHeading text-uppercase">global responsibiltye</h3>
          <h1>Boutique Design Agency <br/>Focused On Quality</h1>
          <br/>
          <Button className="slidebtn">Work with us</Button>
        </Carousel.Caption>
      </Carousel.Item >
      <Carousel.Item interval={3000}>
        <img
          className="d-block img-fluid"
          src={slide3}
          alt="Third slide"
        />

        <Carousel.Caption className="position-absolute top-50">
        <h3 className="carouselHeading text-uppercase">we are digital Agency</h3>
        <h1>We Help To Improve <br/>Your Business</h1>
        <br/>
          <Button className="slidebtn">Get Started </Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
                </div>
            </div>
        </section>
        <section className="mt-5">
        <div className="container py-5 px-2">
            <div className="row">
                <div className="col-md-5">
                    <div className="box px-3 text-start">
                        <div className="tittle">
                            <h3 >Discover Sena</h3>
                            <h2>Our Mission</h2>
                        </div>
                        <div className="middlebox">
                            <p>Aliquam nunc felis, sagittis eu purus non, interdum vehicula urna. <br/>
                                 Pellentesque vel elit egestas, pretium est ac, convallis orci. Vivamus <br/>
                                  sem nisl, tristique vel fringilla vitae, efficitur at eros.
                            </p>
                        </div>
                        <div className="lowerbox">
                            <p> <b> Branding </b>
                            <ProgressBar style={{height: '7px' }} now={70} />
                              </p>
                              
                              <p> <b> Web Design </b>
                              <ProgressBar style={{height: '7px' }}  now={95} />
                                </p>
                                <p> <b> Mobile App </b>
                                <ProgressBar style={{height: '7px' }}  now={80} />
                                  </p>
                                  <p> <b> Devlopment </b>
                                  <ProgressBar style={{height: '7px' }}  now={60} />
                                    </p>
                                    
                        </div>
                    </div>
                </div>
                <div className="col-md-7 ">
                    <div className="rowbox" style={{padding :'14px'}}>
                        <div className="col">
                            <div className="imgb">
                                <div className="img1">
                                    <img src={img10} alt="" className="img-fluid"/>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="imgb">
                                <div className="img2">
                                    <img src={img20} alt="" className="img-fluid"/>
                                </div>
                                <div className="img3">
                                    <img src={img30}alt="" className="img-fluid"/>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
);
} 
export default Slider;