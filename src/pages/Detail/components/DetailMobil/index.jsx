import React from 'react'
import { FiUsers } from 'react-icons/fi'

const DetailMobil = () => {
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
            <img src="" alt="" />
            <p>Mobil</p>
            <FiUsers />
            <span>Kapasitas</span>
            <span>Total</span>
            <span>Harga</span>

        </div>
    )
}

export default DetailMobil