import React, { useState } from 'react';
import {
    Container,
    Accordion,
    AccordionBody,
    AccordionHeader,
    AccordionItem,
} from 'reactstrap';
import AccordionFAQ from '../../../../components/AccordionFAQ';

const FAQ = () => {
    const [open, setOpen] = useState('');
    const toggle = (id) => {
        if (open === id) {
            setOpen('');
        } else {
            setOpen(id);
        }
    };

    return (
        <section id="faq" >
            <Container className='d-flex justify-content-between flex-wrap'>
                <div>
                    <h2>Frequently Asked Question</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </div>
                <div
                    style={{
                        // width: '60%',
                        // marginLeft: '100px'
                    }}
                >
                    <Accordion open={open} toggle={toggle}
                    >
                        <AccordionFAQ question="Apa saja syarat yang dibutuhkan?" answer='Sample Answer Text' id='1' /><br />
                        <AccordionFAQ question="Berapa hari minimal sewa mobil lepas kunci?" answer='Sample Answer Text' id='2' /><br />
                        <AccordionFAQ question="Berapa hari sebelumnya sabaiknya booking sewa mobil?" answer='Sample Answer Text' id='3' /><br />
                        <AccordionFAQ question="Apakah Ada biaya antar-jemput?" answer='Sample Answer Text' id='4' /><br />
                        <AccordionFAQ question="Bagaimana jika terjadi kecelakaan" answer='Sample Answer Text' id='5' /><br />

                    </Accordion>
                </div>
            </Container>
        </section>
    )
}

export default FAQ