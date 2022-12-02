import React from 'react';
import Button from 'react-bootstrap/Button';
import './project.css';

const Project = () => {
  return (
    <div>
      <section id="Project">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className=" tittle row text-center mt-5">
                <h3 className="text-uppercase " style={{ color: '#24bca4' }}>Design Portfolio</h3>
                <h2><b> Recent Projects</b></h2>
                <p className="fs-5">Phasellus metus arcu, aliquam vitae pulvinar eget, placerat pellentesque risus. Fusce <br /> urna nisi, euismod non semper in. Sagittis fermentum non urna.</p>
              </div>
              <div className="btnrow text-center my-5">
                <Button href="#" className="btndk" variant="success">All</Button>
                <Button href="#" className="btndk" variant="success">Branding</Button>
                <Button href="#" className="btndk" variant="success">Web Design</Button>
                <Button href="#" className="btndk" variant="success">Photography</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-dark">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="tittle mt-5 mb-4 p-2 ">
                <h2 className="text-white">Do you want to work with us?</h2>
                <p className="text-white">Developing a plan that is custom-built for your business.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="row mt-5 mb-4 px-5 py-3">
                <Button href="#" className="btndk" variant="success">Contact Us</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
export default Project;