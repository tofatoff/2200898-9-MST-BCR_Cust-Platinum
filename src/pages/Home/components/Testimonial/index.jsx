import { Container } from "reactstrap"
import imgPhoto from '../../../../assets/img_photo.png'
import { BsStarFill } from 'react-icons/bs'

const Testimonial = () => {

    const RATE_STARS = (rate) => {
        let stars = []
        for (let i = 1; i <= rate; i++) {
            stars.push(<BsStarFill />)
        }
        return stars
    }

    const REVIEWS = [
        {
            customer: 'John Dee 32, Bromo',
            photo: imgPhoto,
            message: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”',
            rate: 5
        },
        {
            customer: 'John Dee 32, Bromo',
            photo: imgPhoto,
            message: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”',
            rate: 5
        },
    ]


    return (
        <section id="testimonial">
            <Container>

                <h2>Testimonial</h2>
                <p>Berbagai review positif dari para pelanggan kami</p>

                {REVIEWS.map((review) =>
                (
                    <div
                        style={{
                            height: '270px',
                            width: '619px',
                            left: '410px',
                            top: '1652px',
                            borderRadius: '8px',
                            background: '#F1F3FF',
                            boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.15)',
                            padding: "69px 32px"
                        }}
                    >
                        <img src={review.photo} alt="" />
                        {RATE_STARS(review.rate)}
                        <p>{review.message}</p>
                        <p>{review.customer}</p>
                    </div>
                )
                )}
            </Container>
        </section>
    )
}

export default Testimonial