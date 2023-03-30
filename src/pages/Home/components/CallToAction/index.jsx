import { Container } from "reactstrap"
import BtnCTA from "../../../../components/BtnCTA"
import styles from './cta.module.css'

const CallToAction = () => {
  return (
    <section id="CTA" className="my-5">
      <Container>
        <div className={styles.banner}>
          <h2>
            Sewa Mobil di Jakarta Utara Sekarang
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <BtnCTA />
        </div>
      </Container>
    </section>
  )
}

export default CallToAction