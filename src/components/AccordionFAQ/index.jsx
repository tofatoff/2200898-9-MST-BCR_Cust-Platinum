import React, { useState } from 'react';
import {
    Accordion,
    AccordionBody,
    AccordionHeader,
    AccordionItem,
} from 'reactstrap';

const AccordionFAQ = (props) => {
    const [open, setOpen] = useState('');
    const toggle = (id) => {
        if (open === id) {
            setOpen();
        } else {
            setOpen(id);
        }
    };

    return (
        <div>
            <Accordion open={open} toggle={toggle}
                style={{
                    border: '1px solid #D4D4D4',
                    borderRadius: '4px',
                    width: '668px',
                    height: '56px'
                }}>
                <AccordionItem>
                    <AccordionHeader targetId="1"
                        style={{
                            fontFamily: 'Arial',
                            fontStyle: 'normal',
                            fontWeight: '700',
                            fontSize: "14px",
                            lineHeight: '20px'
                        }}>
                        {props.question}
                    </AccordionHeader>
                    <AccordionBody accordionId="1">
                        {props.answer}
                    </AccordionBody>
                </AccordionItem>
            </Accordion>
        </div >
    );
}

export default AccordionFAQ;