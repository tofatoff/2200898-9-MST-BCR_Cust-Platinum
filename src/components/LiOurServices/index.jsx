import React from 'react'
import { FiCheck } from 'react-icons/fi'

const LiOurServices = (props) => {
    return (
        <li
            className='d-flex align-items-center'
            style={{
                marginBottom: '16px'
            }}>
            <div className='d-inline-flex align-items-center justify-content-center'
                style={{
                    background: '#CFD4ED',
                    height: '24px',
                    width: '24px',
                    borderRadius: '50%',
                    marginRight: '16px'
                }}>
                <FiCheck />
            </div>
            <span
                style={{
                    fontFamily: 'Arial',
                    fontStyle: 'normal',
                    fontWeight: '700',
                    fontSize: '14px',
                    lineHeight: '20px',
                }}>
                {props.text}
            </span>
        </li>
    )
}

export default LiOurServices