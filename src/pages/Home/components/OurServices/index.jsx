import imgService from '../../../../assets/img_service.png'
import { Container } from 'reactstrap'
import { FiCheck } from 'react-icons/fi'
import LiOurServices from '../../../../components/LiOurServices'

const OurServices = () => {
    return (
        <section id='our-services'
            style={{
                margin: '100px 0px'
            }}>
            <Container className='d-flex align-items-center flex-wrap flex-xxl-nowrap'>
                <img src={imgService} alt="imgService" className='me-5'
                // width="100%" height="100%"
                />
                <div>
                    <h2
                        style={{
                            fontFamily: 'Arial',
                            fontStyle: 'normal',
                            fontWeight: '700',
                            fontSize: '24px',
                            lineHeight: '36px',
                        }}>
                        Best Car Rental for any kind of trip in Jakarta Utara!
                    </h2>
                    <p
                        style={{
                            fontFamily: 'Arial',
                            fontStyle: 'normal',
                            fontWeight: '700',
                            fontSize: '14px',
                            lineHeight: '20px',
                        }}>
                        Sewa mobil di Jakarta Utara bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.
                    </p>
                    <ul>
                        <LiOurServices text="Sewa Mobil Dengan Supir di Bali 12 Jam" />
                        <LiOurServices text="Sewa Mobil Lepas Kunci di Bali 24 Jam" />
                        <LiOurServices text="Sewa Mobil Jangka Panjang Bulanan" />
                        <LiOurServices text="Gratis Antar - Jemput Mobil di Bandara" />
                        <LiOurServices text="Layanan Airport Transfer / Drop In Out" />
                    </ul>
                </div>
            </Container>
        </section >
    )
}

export default OurServices