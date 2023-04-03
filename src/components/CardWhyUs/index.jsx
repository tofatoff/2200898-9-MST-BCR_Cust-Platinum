import React from 'react'
import { Card, CardBody, CardTitle, CardText } from "reactstrap"

const CardWhyUs = (props) => {
    return (
        <Card style={{
            padding: '24px',
            width: '268px',
            height: '196px',
            border: '1px solid #D0D0D0',
            borderRadius: '8px',
            marginBottom: '16px'
        }}>
            <CardBody className='d-flex flex-column justify-content-between m-0 p-0'>
                <div style={{
                    width: 32 + 'px',
                    height: 32 + 'px',
                    borderRadius: '50%',
                    backgroundColor: props.iconBg,
                    textAlign: 'center',
                    color: 'white'
                }}>
                    {props.icon}
                </div>
                <CardTitle tag="h5">
                    {props.title}
                </CardTitle>
                <CardText>
                    {props.text}
                </CardText>
            </CardBody>
        </Card >
    )
}

export default CardWhyUs