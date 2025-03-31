import React, { Component } from 'react';

const Johnnysky = ({johnnysky}) => {
        const johnnyList = johnnysky.map(johnny => {
            return (
                <div className='johnnysky' key={johnny.id}>
                   <div>Name: { johnny.name }</div>
                   <div>Age: { johnny.age }</div>
                   <div>Belt: { johnny.belt }</div>
                </div>
            )
    })
    return(
        <div className="johnny-list">
            { johnnyList }
            </div>
    )
}

export default Johnnysky