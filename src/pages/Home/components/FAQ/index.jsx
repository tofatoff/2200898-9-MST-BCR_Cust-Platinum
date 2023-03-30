import React, { useState } from 'react';
import { Container } from 'reactstrap';
import AccordionFAQ from '../../../../components/AccordionFAQ';

const FAQ = () => {

    return (
        <Container className='d-flex justify-content-between'>
            <section id="faq" >
                <div>
                    <h2>Frequently Asked Question</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </div>
                <div>
                    <AccordionFAQ question="Apa saja syarat yang dibutuhkan?" answer='Sample Answer Text' /><br />
                    <AccordionFAQ question="Berapa hari minimal sewa mobil lepas kunci?" answer='Sample Answer Text' /><br />
                    <AccordionFAQ question="Berapa hari sebelumnya sabaiknya booking sewa mobil?" answer='Sample Answer Text' /><br />
                    <AccordionFAQ question="Apakah Ada biaya antar-jemput?" answer='Sample Answer Text' /><br />
                    <AccordionFAQ question="Bagaimana jika terjadi kecelakaan" answer='Sample Answer Text' /><br />
                </div>
            </section>
        </Container>
    )
}

export default FAQ