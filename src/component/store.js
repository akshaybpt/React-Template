import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import './store.css';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../img/company-1.png';
import img2 from '../img/company-2.png';
import img3 from '../img/company-3.png';
import img4 from '../img/company-4.png';
import img5 from '../img/company-5.png';
import img6 from '../img/company-6.png';
import img7 from '../img/company-7.png';
import img8 from '../img/company-8.png';
import img9 from '../img/company-9.png';
import img10 from '../img/company-10.png';
import img11 from '../img/company-10.png';
import img12 from '../img/company-10.png';
const Store = () => {
  return (
    <div>
      <section className="parallex-2" id="Store">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="tittle row text-white text-center mt-5 p-5">
                <h3 style={{ color: '#24bca4' }}>Pricing Plans</h3>
                <h2>Affordable Price</h2>
                <p className="fs-5">Morbi nec massa ac ligula pulvinar congue. Nunc ut sollicitudin nibh. Etiam sem nibh, <br /> auctor sed, pharetra congue tellus malesuada dolor.</p>
              </div>
              <div className="row m-5">
                <div className="col-md-4">
                  <div className="bg-white my-3 text-center fs-2">
                    <div className="price-icon fs-2  pt-5" style={{ color: '#24bca4' }}>
                      <i className="bi bi-layers"></i>
                    </div>
                    <h5>Basic</h5>
                    <div className="currency  fs-4" style={{ color: '#24bca4' }}>
                      <h1 className=""> <i className="bi bi-currency-rupee fs-3"></i>19 </h1>
                      <p className="fs-5"> Month</p>
                    </div>
                    <div className="content pb-5 fs-4">
                      <ListGroup.Item>1 GB Disk Space</ListGroup.Item>
                      <ListGroup.Item>2 Subdomains</ListGroup.Item>
                      <ListGroup.Item>5 Email Accounts</ListGroup.Item>
                      <ListGroup.Item>Webmail Support</ListGroup.Item>
                      <Button variant="success" className="storebtn"> Purchase</Button>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="  text-white text-center fs-2 py-3 center">
                    <div className="price-icon fs-2  pt-5">
                      <i className="bi bi-heart"></i>
                    </div>
                    <h5>Professional</h5>
                    <div className="currency  fs-4">
                      <h1 className=""> <i className="bi bi-currency-rupee fs-3"></i>35 </h1>
                      <p className="fs-5"> Month</p>
                    </div>
                    <div className="content pb-5 fs-4">
                      <ListGroup.Item>10 GB Disk Space</ListGroup.Item>
                      <ListGroup.Item>8 Subdomains</ListGroup.Item>
                      <ListGroup.Item>10 Email Accounts</ListGroup.Item>
                      <ListGroup.Item>Webmail Support</ListGroup.Item>
                      <ListGroup.Item>Customer Support 24/7</ListGroup.Item>
                      <Button variant="success" className="storebtn"> Purchase</Button>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="bg-white my-3 text-center fs-2">
                    <div className="price-icon fs-2  pt-5" style={{ color: '#24bca4' }}>
                      <i className="bi bi-brightness-high"></i>
                    </div>
                    <h5>Business</h5>
                    <div className="currency  fs-4" style={{ color: '#24bca4' }}>
                      <h1 className=""> <i className="bi bi-currency-rupee fs-3"></i>89 </h1>
                      <p className="fs-5">Month</p>
                    </div>
                    <div className="content pb-5 fs-4">
                      <ListGroup.Item>100 GB Disk Space</ListGroup.Item>
                      <ListGroup.Item>Unlimited Subdomains</ListGroup.Item>
                      <ListGroup.Item>Unlimited Email Accounts</ListGroup.Item>
                      <ListGroup.Item>Webmail Support</ListGroup.Item>
                      <ListGroup.Item>Customer Support 24/7</ListGroup.Item>
                      <Button variant="success" className="storebtn"> Purchase</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="lowerslide my-5">
                <Carousel variant="dark" controls={false} indicators={false} className="position-relative">
                  <Carousel.Item interval={1000}>
                    <div className="row">
                      <div className="col">
                        <img
                          className="d-block  img-fluid"
                          src={img1}
                          alt="First slide"
                        />
                      </div>
                      <div className="col">
                        <img
                          className="d-block  img-fluid"
                          src={img2}
                          alt="First slide"
                        />
                      </div>
                      <div className="col">
                        <img
                          className="d-block  img-fluid"
                          src={img3}
                          alt="First slide"
                        />
                      </div>
                      <div className="col">
                        <img
                          className="d-block  img-fluid"
                          src={img4}
                          alt="First slide"
                        />
                      </div>
                      <div className="col">
                        <img
                          className="d-block  img-fluid"
                          src={img5}
                          alt="First slide"
                        />
                      </div>
                    </div>
                  </Carousel.Item>
                  <Carousel.Item interval={1500}>
                    <div className="row">
                      <div className="col">
                        <img
                          className="d-block  img-fluid"
                          src={img6}
                          alt="First slide"
                        />
                      </div>
                      <div className="col">
                        <img
                          className="d-block  img-fluid"
                          src={img7}
                          alt="First slide"
                        />
                      </div>
                      <div className="col">
                        <img
                          className="d-block  img-fluid"
                          src={img8}
                          alt="First slide"
                        />
                      </div>
                      <div className="col">
                        <img
                          className="d-block  img-fluid"
                          src={img9}
                          alt="First slide"
                        />
                      </div>
                      <div className="col">
                        <img
                          className="d-block  img-fluid"
                          src={img10}
                          alt="First slide"
                        />
                      </div>
                    </div>
                  </Carousel.Item>
                  <Carousel.Item interval={1500}>
                    <div className="row">
                      <div className="col">
                        <img
                          className="d-block  img-fluid"
                          src={img8}
                          alt="First slide"
                        />
                      </div>
                      <div className="col">
                        <img
                          className="d-block  img-fluid"
                          src={img9}
                          alt="First slide"
                        />
                      </div>
                      <div className="col">
                        <img
                          className="d-block  img-fluid"
                          src={img10}
                          alt="First slide"
                        />
                      </div>
                      <div className="col">
                        <img
                          className="d-block  img-fluid"
                          src={img11}
                          alt="First slide"
                        />
                      </div>
                      <div className="col">
                        <img
                          className="d-block  img-fluid"
                          src={img12}
                          alt="First slide"
                        />
                      </div>
                    </div>
                  </Carousel.Item>
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

}
export default Store
