import React from 'react';
import post1 from '../img/post-1.jpg';
import post2 from '../img/post-2.jpg';
import post3 from '../img/post-3.jpg';
import Card from 'react-bootstrap/Card';
import './blog.css';
const Blog = () => {
  return (
    <div>
      <section id="Blog">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="tittle row mt-5 text-center p-3 ">
                <h3 style={{ color: '#24bca4' }}>LATEST ARTICLES</h3>
                <h2>Blog Posts</h2>
                <p className="fs-5">Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; <br /> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <div className="blog-post position-relative mb-5">
                    <Card >
                      <div className="card-img-top">
                        <Card.Img src={post1} alt="post-1" />
                        <div className="overlay"></div>
                        <span className="blog-type">Photography</span>
                      </div>
                      <Card.Body>
                        <Card.Subtitle className="mb-2 text-muted"><b> AthenaStudio </b>   April 16, 2022</Card.Subtitle>
                        <Card.Title>Carousel of Colours in Cinque Terre Beach</Card.Title>
                        <Card.Text>
                          Quisque dui at erat auctor pulvinar nisl felis, gravida et aliquam vitae, aliquet quis nibh.
                        </Card.Text>
                        <Card.Link href="#">Read More</Card.Link>
                      </Card.Body>
                    </Card>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="blog-post position-relative mb-5">
                    <Card >
                      <div className="card-img-top">
                        <Card.Img src={post2} alt="post-2" />
                        <div className="overlay"></div>
                        <span className="blog-type">LIFESTYLE</span>
                      </div>
                      <Card.Body>
                        <Card.Subtitle className="mb-2 text-muted"><b> AthenaStudio </b>   March 30, 2022</Card.Subtitle>
                        <Card.Title>Grass and Tree Covered Village Luzern</Card.Title>
                        <Card.Text>
                          Quisque dui at erat auctor pulvinar nisl felis, gravida et aliquam vitae, aliquet quis nibh.
                        </Card.Text>
                        <Card.Link href="#">Read More</Card.Link>
                      </Card.Body>
                    </Card>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="blog-post position-relative mb-5">
                    <Card >
                      <div className="card-img-top">
                        <Card.Img src={post3} alt="post-3" />
                        <div className="overlay"></div>
                        <span className="blog-type">DEVLOPMENT</span>
                      </div>
                      <Card.Body>
                        <Card.Subtitle className="mb-2 text-muted"><b> AthenaStudio </b>   Feb 12, 2022</Card.Subtitle>
                        <Card.Title>Forest Highway With Green Leaves</Card.Title>
                        <Card.Text>
                          Quisque dui at erat auctor pulvinar nisl felis, gravida et aliquam vitae, aliquet quis nibh.
                        </Card.Text>
                        <Card.Link href="#">Read More</Card.Link>
                      </Card.Body>
                    </Card>
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
export default Blog;