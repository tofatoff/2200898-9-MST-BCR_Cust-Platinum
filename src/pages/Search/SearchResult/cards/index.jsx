import React from 'react'
import {
  Card, CardBody, CardTitle, CardSubtitle, CardText, Button,
} from 'reactstrap'

const CardSearchResult = (props) => {
  const strToCurrIDR = (strnum) => {
    const formatterIDR = new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });
    return formatterIDR.format(parseInt(strnum));//ga pake parseInt jg bisa
  }

  return (
    <Card
      style={{
        width: '333px',
        height: '478px',
        padding: '24px',
        marginRight: '24px'
      }}
    >
      <img
        alt={props.name}
        src={props.img}
        height='222px'
        style={{
          objectFit: 'cover',
        }}
      />
      <CardBody
        style={{
          padding: 0,
          fontFamily: 'Arial',
          fontStyle: 'normal',
        }}
      >
        <CardSubtitle
          className="mb-2 mt-2 text-muted"
          tag="h6"
          style={{
            fontWeight: '400',
            fontSize: '14px',
            lineHeight: '20px',
          }}
        >
          {props.name}
        </CardSubtitle>
        <CardTitle tag="h5"
          style={{
            fontWeight: '700',
            fontSize: '16px',
            lineHeight: '24px',
          }}
        >
          {strToCurrIDR(props.price)} / hari
        </CardTitle>
        <CardText
          style={{
            fontWeight: '700',
            fontSize: '14px',
            lineHeight: '20px',
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </CardText>
        <Button style={{ background: '#5CB85F', width: '100%' }}>
          Pilih Mobil
        </Button>
      </CardBody>
    </Card >
  )
}

export default CardSearchResult