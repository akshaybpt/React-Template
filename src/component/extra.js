<section id="Home">
<div className="row">
  <div className="col-md-12">
    <Carousel fade className="position-relative">
      <Carousel.Item interval={3000}>
        <img
          className="d-block  img-fluid"
          src={slide1}
          alt="First slide"
        />
        <Carousel.Caption className="position-absolute top-50">
          <h3 className="carouselHeading text-uppercase ">Who We are</h3>
          <h1>Our Work Create Shared <br />Value For Customers</h1>
          <br />
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
          <h1>Boutique Design Agency <br />Focused On Quality</h1>
          <br />
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
          <h1>We Help To Improve <br />Your Business</h1>
          <br />
          <Button className="slidebtn">Get Started </Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  </div>
</div>
</section>
