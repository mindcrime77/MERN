import React from 'react'
import './Mobile.css'

function Mobile({ item }) {
    return (
        <div className="container">
            <img src={item.image} alt="" style={{ width: '100%' }} />
            <div className="content">
                <p>{`${item.title.slice(0, 10)}...`}</p>

            </div>
        </div>
    )
}

export default Mobile
