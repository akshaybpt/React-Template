import React from 'react';
import faq from "../img/faqs.png";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import './review.css';
const Review=()=>{
return(
    <div>
        <section id="Review">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="tittle text-center mt-5">
              <h3 className="text-uppercase"  style={{color: '#24bca4'}}>TESTIMONIALS</h3>
              <h2><b>Client Reviews</b></h2>
              <p className="fs-5">Donec purus est, tincidunt eu sodales quis, vehicula quis enim. Morbi dapibus, tellus a <br/>
                 gravida faucibus, elit ipsum sollicitudin risus, id ultricies arcu neque eget velit.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="parallex1">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="row text-center m-5 p-5" >
                <h1> <Card.Link href="#"><i className="bi bi-play-circle  fs-1" style={{color: '#24bca4'}}></i></Card.Link></h1>
              <p className="fs-3 text-white">Watch Video</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div className="container">
        <div className="row ">
          <div className="col-md-12 ">
            <div className="tittle text-center mt-5">
              <h3 className="text-uppercase"  style={{color: '#24bca4'}}>FREQUENTLY ASKED QUESTIONS</h3>
              <h2><b> Why Choose Us</b></h2>
              <p className="fs-5">Cras fringilla, lectus sed ullamcorper fringilla. Massa ex accumsan odio, quis iaculis justo <br/>
                 magna quis tortor. Donec consectetur rutrum elit, non porta nisi congue tincidunt.</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="imgbox">
              <img src={faq} alt="" className="img-fluid"/>
            </div>
          </div>
          <div className="col-md-6 faq">
            <div className=" mt-5">
            <ListGroup className='reviewList'>
      <ListGroup.Item>
      <Dropdown>
      <Dropdown.Toggle  id="dropdown-basic">
      1. In scelerisque ex id scelerisque tempor?
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item >Phasellus elit augue, egestas eu est ut, rutrum elementum eget sapien et leo porttitor lobortis turpis. <br /> Vivamus eget blandit est. Curabitur dapibus est et malesuada dignissim interdum gravida varius mollis diam.  <br/> Donec blandit scelerisque quis lacinia sapien eget mattis. Pellentesque id suscipit lorem. <br/> Nunc aliquam tempor vehicula eros pharetra interdum. Proin facilisis, arcu ut tristique congue, libero metus lobortis ex,
                       eget facilisis orci leo quis eros. <br /> Etiam convallis, orci erat molestie nisl.</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
      </ListGroup.Item>
      <ListGroup.Item>
      <Dropdown>
      <Dropdown.Toggle  id="dropdown-basic">
      2. Aliquam non justo finibus gravida dolor eu?
      </Dropdown.Toggle>
      <Dropdown.Menu>
      <Dropdown.Item >Phasellus elit augue, egestas eu est ut, rutrum elementum eget sapien et leo porttitor lobortis turpis. <br /> Vivamus eget blandit est. Curabitur dapibus est et malesuada dignissim interdum gravida varius mollis diam.  <br/> Donec blandit scelerisque quis lacinia sapien eget mattis. Pellentesque id suscipit lorem. <br/> Nunc aliquam tempor vehicula eros pharetra interdum. Proin facilisis, arcu ut tristique congue, libero metus lobortis ex,
                       eget facilisis orci leo quis eros. <br /> Etiam convallis, orci erat molestie nisl.</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
      </ListGroup.Item>
      <ListGroup.Item>
      <Dropdown>
      <Dropdown.Toggle  id="dropdown-basic">
      3. Praesent vestibulum et orci ac lobortis?
      </Dropdown.Toggle>
      <Dropdown.Menu>
      <Dropdown.Item >Phasellus elit augue, egestas eu est ut, rutrum elementum eget sapien et leo porttitor lobortis turpis. <br /> Vivamus eget blandit est. Curabitur dapibus est et malesuada dignissim interdum gravida varius mollis diam.  <br/> Donec blandit scelerisque quis lacinia sapien eget mattis. Pellentesque id suscipit lorem. <br/> Nunc aliquam tempor vehicula eros pharetra interdum. Proin facilisis, arcu ut tristique congue, libero metus lobortis ex,
                       eget facilisis orci leo quis eros. <br /> Etiam convallis, orci erat molestie nisl.</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
      </ListGroup.Item>
      <ListGroup.Item>
      <Dropdown>
      <Dropdown.Toggle  id="dropdown-basic">
      4. Maecenas id congue est vitae facilisis purus?
      </Dropdown.Toggle>
      <Dropdown.Menu>
      <Dropdown.Item >Phasellus elit augue, egestas eu est ut, rutrum elementum eget sapien et leo porttitor lobortis turpis. <br /> Vivamus eget blandit est. Curabitur dapibus est et malesuada dignissim interdum gravida varius mollis diam.  <br/> Donec blandit scelerisque quis lacinia sapien eget mattis. Pellentesque id suscipit lorem. <br/> Nunc aliquam tempor vehicula eros pharetra interdum. Proin facilisis, arcu ut tristique congue, libero metus lobortis ex,
                       eget facilisis orci leo quis eros. <br /> Etiam convallis, orci erat molestie nisl.</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
      </ListGroup.Item>
      <ListGroup.Item>
      <Dropdown>
      <Dropdown.Toggle  id="dropdown-basic">
      5. Pellentesque ac auctor ante vel iaculis velit?
      </Dropdown.Toggle>
      <Dropdown.Menu>
      <Dropdown.Item >Phasellus elit augue, egestas eu est ut, rutrum elementum eget sapien et leo porttitor lobortis turpis. <br /> Vivamus eget blandit est. Curabitur dapibus est et malesuada dignissim interdum gravida varius mollis diam.  <br/> Donec blandit scelerisque quis lacinia sapien eget mattis. Pellentesque id suscipit lorem. <br/> Nunc aliquam tempor vehicula eros pharetra interdum. Proin facilisis, arcu ut tristique congue, libero metus lobortis ex,
                       eget facilisis orci leo quis eros. <br /> Etiam convallis, orci erat molestie nisl.</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
      </ListGroup.Item>
             </ListGroup>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
);
} 
export default Review;
