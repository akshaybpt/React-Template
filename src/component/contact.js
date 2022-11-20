import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import './contact.css';
const Contact = () => {
  return (
    <div>
      <section id="Contact">
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-12">
              <div className="row">
                <div className="tittle text-center mt-5">
                  <h3 style={{ color: '#24bca4' }}>Contact us</h3>
                  <h2>Get IN Touch</h2>
                  <p className="fs-5">Mauris at tempus mi, ut iaculis dui. Integer laoreet mattis justo nec pretium. Ut nibh elit, <br />
                    fermentum vel hendrerit vel, dictum nec velit. Morbi volutpat suscipit.</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="contact-details">
                    <h1>Get answers and advices from professional consultants.</h1>
                    <br />
                    <div className="row">
                      <div className="col-2 col-md-2 fs-2 text-center " style={{ color: '#24bca4' }}>
                        <i className="bi bi-map"></i>
                      </div>
                      <div className="col-10  col-md-10">
                        <h4>Address</h4>
                        <p>1650 Lombard Street,
                          <br />
                          San Francisco, CA 94123</p>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-2 col-md-2 fs-2 text-center " style={{ color: '#24bca4' }}>
                        <i className="bi bi-phone"></i>
                      </div>
                      <div className="col-10 col-md-10">
                        <h4>Phone</h4>
                        <p>+1 (415) 876-3250
                          <br />
                          +1 (415) 876-3251</p>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-2 col-md-2 fs-2 text-center " style={{ color: '#24bca4' }}>
                        <i className="bi bi-envelope"></i>
                      </div>
                      <div className="col-10 col-md-10">
                        <h4>Say Hello</h4>
                        <p>email@sitename.com</p>
                      </div>
                    </div>
                    <hr />
                  </div>
                </div>
                <div className="col-md-6 contactForm" >
                  <form className="fs-3 p-3">
                    <div className="mt-5 mx-3 mb-3">
                      <Form.Control type="text" placeholder="Name" />
                    </div>
                    <div className="m-3">
                      <Form.Control type="email" placeholder="E-mail" />

                    </div>
                    <div className="m-3">
                      <Form.Control type="text" placeholder="Subject" />

                    </div>
                    <div className="m-3">
                      <Form.Control as="textarea" rows={5} placeholder="Message" />
                    </div>
                    <div className="m-3">
                      <Button variant="success" className="conatctFormBtn" type="submit">Submit</Button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="map">
        <div className="responsive-map">
        // eslint-disable-next-line
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.0805483068834!2d77.3723344!3d28.6273479!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce458d000004d%3A0x37c4ca2c151dd11b!2z4KS14KS_4KSc4KS-4KSw4KWN4KShIOCkh-CkqOCljeCkq-Cli-CkteClh-CknCDgpKrgpYDgpLXgpYDgpJ_gpYDgpbAg4KSP4KSy4KSf4KWA4KSh4KWA4KWw!5e0!3m2!1shi!2sin!4v1664533861154!5m2!1shi!2sin" width="100%" height="450" style={{ border: '0' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
       
        </div>
      </section>
      <section className="bg-dark">
        <div className="container">
          <div className="row ">
            <div className="col-md-12 mt-5 p-5">
              <div className="row">
                <div className="col-12 col-md-4">
                  <div className="company text-white">
                    <h2>SENA</h2>
                    <p>Sena is a clean and modern one
                      <br /> page multipurpose theme.</p>
                  </div>
                </div>
                <div className="col-12 col-md-4">
                  <div className="company text-white">
                    <h3>Contact Info</h3>
                    <p><i className="bi bi-geo-alt-fill " style={{ color: '#24bca4' }}></i>1650 Lombard Street, <br />
                      San Francisco, CA 94123</p>
                    <p><i className="bi bi-telephone-fill" style={{ color: '#24bca4' }}></i>+1 (415) 876-3250</p>
                    <p><i className="bi bi-envelope" style={{ color: '#24bca4' }}></i> email@sitename.com</p>
                  </div>
                </div>
                <div className="col-12 col-md-4">
                  <div className="company text-white">
                    <h3>Useful Links</h3>
                    <Card.Link href="#">Support</Card.Link>
                    <br />
                    <Card.Link href="#">Privacy Policy</Card.Link>
                    <br />
                    <Card.Link href="#">Terms & Conditions</Card.Link>
                    <br />
                    <Card.Link href="#"> Affiliate Program</Card.Link>
                    <br />
                    <Card.Link href="#">Careers</Card.Link>
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
export default Contact;