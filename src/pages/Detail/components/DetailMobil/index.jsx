import React from 'react'
import { FiUsers } from 'react-icons/fi'

const CATEGORY_OPTION = {
    small: '2 - 4 orang',
    medium: '4 - 6 orang',
    large: '6 - 8 orang',
};

const DetailMobil = (props) => {
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
        <div
            style={{
                width: '405px',
                height: '435px',
                background: '#FFFFFF',
                boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.15)',
                borderRadius: '8px',
                padding: '24px'
            }}
        >
            <img src={props.image} alt="" width="100%" />
            <p
                style={{
                    fontFamily: 'Arial',
                    fontStyle: 'normal',
                    fontWeight: '700',
                    fontSize: '14px',
                    lineHeight: '20px',
                }}
            >{props.name}</p>
            <div>

                <FiUsers />
                <span
                    style={{
                        fontFamily: 'Arial',
                        fontStyle: 'normal',
                        fontSize: '14px',
                        lineHeight: '20px',
                    }}
                >{CATEGORY_OPTION[props.category]}</span>
            </div>
            <div className='d-flex justify-content-between align-items-center'>
                <span
                    style={{
                        fontFamily: 'Arial',
                        fontStyle: 'normal',
                        fontWeight: '700',
                        fontSize: '14px',
                        lineHeight: '20px',
                    }}
                >Total</span>
                <span
                    style={{
                        fontFamily: 'Arial',
                        fontStyle: 'normal',
                        fontWeight: '700',
                        fontSize: '14px',
                        lineHeight: '20px',
                    }}
                >{strToCurrIDR(props.price)}</span>

            </div>

        </div >
    )
}

export default DetailMobil