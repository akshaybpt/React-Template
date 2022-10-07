import React from 'react';
import Card from 'react-bootstrap/Card';
import './about.css'

const About=()=>{
    return(
        <div>
            <section id="About">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="tittle text-center mt-5">
                            <h3 style={{color: '#24bca4'}}>What We Do</h3>
                        <h2>We Are Awesome Agency</h2>
                        <p className="fs-4">We are an innovative company. We develop <b style={{color: '#24bca4'}} > softwares</b> for costumers around the world. Our clients are some of the most forward-looking companies in the world.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="cardbox">
                            <Card >
      <Card.Body className="text-center">
        <Card.Title>Product Design</Card.Title>
        <Card.Text>
        Ferri reque integre mea ut, eu eos vide errem
                        <br/> noluise se. Putent laoreet et ius utroque <br/> dissentias ut.
        </Card.Text>
        <Card.Link href="#">
        <div className="icon">
                        <i class="bi bi-arrow-right-circle text-center"></i>
                      </div>
        </Card.Link>
      </Card.Body>
    </Card>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="cardbox">
                            <Card >
      <Card.Body className="text-center">
        <Card.Title>Digital Marketing</Card.Title>
        <Card.Text>
        Ferri reque integre mea ut, eu eos vide errem
                        <br/> noluise se. Putent laoreet et ius utroque <br/> dissentias ut.
        </Card.Text>
        <Card.Link href="#">
        <div className="icon">
                        <i class="bi bi-arrow-right-circle text-center"></i>
                      </div>
        </Card.Link>
      </Card.Body>
    </Card>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="cardbox">
                            <Card >
      <Card.Body className="text-center">
        <Card.Title>Brand Identity</Card.Title>
        <Card.Text>
        Ferri reque integre mea ut, eu eos vide errem
                        <br/> noluise se. Putent laoreet et ius utroque <br/> dissentias ut.
        </Card.Text>
        <Card.Link href="#">
        <div className="icon">
                        <i class="bi bi-arrow-right-circle text-center"></i>
                      </div>
        </Card.Link>
      </Card.Body>
    </Card>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="parallex">
        <div className="container">
          <div className="row">
            <div className="parallexbox " id="parallexbox">
              <div className="row ">
                <div className="col-md-3">
                  <div className="colbox text-center fadeInUp">
                    <div className="diamondicon">
                      <i className="bi bi-gem"></i>
                    </div>
                    <div className="content">
                      <h5 id="count1">345</h5>
                      <p>Happy Clients</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="colbox text-center fadeInUp">
                    <div className="diamondicon">
                      <i className="bi bi-tag"></i>
                    </div>
                    <div className="content">
                      <h5 id="count2">672</h5>
                      <p>Completed Projects</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="colbox text-center fadeInUp">
                    <div className="diamondicon">
                      <i className="bi bi-book"></i>
                    </div>
                    <div className="content">
                      <h5 id="count3">230</h5>
                      <p>Blog Post</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="colbox text-center fadeInUp">
                    <div className="diamondicon">
                      <i className="bi bi-star"></i>
                    </div>
                    <div className="content">
                      <h5 id="count4">598</h5>
                      <p>Positive Rates</p>
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
export default About;