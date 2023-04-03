import {
    FiAward, FiClock, FiTag, FiThumbsUp
} from "react-icons/fi"
import { Container } from "reactstrap"
import CardWhyUs from "../../../../components/CardWhyUs"

const WhyUs = () => {
    return (
        <section id="why-us" className="my-5 py-5">
            <Container>
                <div className="section-title">
                    <h2>Why Us?</h2>
                    <p>Mengapa harus pilih Binar Car Rental?</p>
                </div>
                <div className="d-flex justify-content-between flex-wrap">

                    <CardWhyUs
                        icon={<FiThumbsUp />}
                        iconBg='#F9CC00'
                        title="Mobil Lengkap"
                        text="Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat"
                    />
                    <CardWhyUs
                        icon={<FiTag />}
                        iconBg='#FA2C5A'
                        title="Harga Murah"
                        text="Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain"
                    />
                    <CardWhyUs
                        icon={<FiClock />}
                        iconBg='#0D28A6'
                        title="Layanan 24 Jam"
                        text="Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu"
                    />
                    <CardWhyUs
                        icon={<FiAward />}
                        iconBg='#5CB85F'
                        title="Sopir Profesional"
                        text="Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu"
                    />

                </div>
            </Container>
        </section>
    )
}

export default WhyUs