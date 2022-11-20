import React from 'react';
import member1 from '../img/member-1.jpg';
import member2 from '../img/member-2.jpg';
import member3 from '../img/member-3.jpg';
import member4 from '../img/member-4.jpg';
import Card from 'react-bootstrap/Card';
import './team.css'
const Team = () => {
  return (
    <div>
      <section className="mb-5" id="Team">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="tittle text-center mt-5">
                <h3 className="text-uppercase">Our Team members</h3>
                <h2> 
                  <b>Discover Trust Team</b> 
                  </h2>
                <p >Vestibulum ante ipsum primis in faucibus orci. Morbi tincidunt urna imperdiet tincidunt
                  <br /> rhoncus. Sed mollis ligula non massa aliquam faucibus.</p>
              </div>
              <div className="row">
                <div className="col-md-3 mt-1">
                  <div className="member">
                    <div className="member-pic">
                      <img src={member1} alt="" />
                      <div className="social">
                        <div className="social-link">

                          <Card.Link href="#"><i className="bi bi-facebook"></i></Card.Link>
                          <Card.Link href="#"><i className="bi bi-twitter"></i></Card.Link>
                          <Card.Link href="#"><i className="bi bi-linkedin"></i></Card.Link>
                          <Card.Link href="#"><i className="bi bi-dribbble"></i></Card.Link>
                        </div>
                      </div>
                    </div>
                    <div className="memberinfo text-center mt-2 " >
                      <h5><Card.Link href="#"><b> Michael Broad </b></Card.Link></h5>
                      <p>Web Designer</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 mt-1">
                  <div className="member">
                    <div className="member-pic">
                      <img src={member2} alt="" />
                      <div className="social">
                        <div className="social-link">
                          <Card.Link href="#"><i className="bi bi-facebook"></i></Card.Link>
                          <Card.Link href="#"><i className="bi bi-twitter"></i></Card.Link>
                          <Card.Link href="#"><i className="bi bi-linkedin"></i></Card.Link>
                          <Card.Link href="#"><i className="bi bi-dribbble"></i></Card.Link>
                        </div>
                      </div>
                    </div>
                    <div className="memberinfo text-center mt-2 " >
                      <h5><Card.Link href="#"><b> Jeannette Crow </b></Card.Link></h5>
                      <p>CEO Founder</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 mt-1">
                  <div className="member">
                    <div className="member-pic">
                      <img src={member3} alt="" />
                      <div className="social">
                        <div className="social-link">
                          <Card.Link href="#"><i className="bi bi-facebook"></i></Card.Link>
                          <Card.Link href="#"><i className="bi bi-twitter"></i></Card.Link>
                          <Card.Link href="#"><i className="bi bi-linkedin"></i></Card.Link>
                          <Card.Link href="#"><i className="bi bi-dribbble"></i></Card.Link>
                        </div>
                      </div>
                    </div>
                    <div className="memberinfo text-center mt-2 " >
                      <h5><Card.Link href="#"><b> Martin Lawrence </b></Card.Link></h5>
                      <p>App Developer</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 mt-1">
                  <div className="member">
                    <div className="member-pic">
                      <img src={member4} alt="" />
                      <div className="social">
                        <div className="social-link">
                          <Card.Link href="#"><i className="bi bi-facebook"></i></Card.Link>
                          <Card.Link href="#"><i className="bi bi-twitter"></i></Card.Link>
                          <Card.Link href="#"><i className="bi bi-linkedin"></i></Card.Link>
                          <Card.Link href="#"><i className="bi bi-dribbble"></i></Card.Link>
                        </div>
                      </div>
                    </div>
                    <div className="memberinfo text-center mt-2 " >
                      <h5><Card.Link href="#"><b> Isabella Dowson </b></Card.Link></h5>
                      <p>Creative Director</p>
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
export default Team;