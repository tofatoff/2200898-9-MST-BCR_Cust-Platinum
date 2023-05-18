import { Container } from "reactstrap";
// import CarouselExample from "../../../../components/CarouselExample"

import CarouselTestimonial from "../../../../components/CarouselTestimonial";

const Testimonial = () => {
  return (
    <section id="testimonial">
      <Container>
        <div>
          <h2>Testimonial</h2>
          <p>Berbagai review positif dari para pelanggan kami</p>
        </div>

        <CarouselTestimonial />
        {/* <CarouselExample /> */}
      </Container>
    </section>
  );
};

export default Testimonial;
