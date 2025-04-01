import React, { Component } from 'react';
import './Johnnysky.css'

const Johnnysky = ({johnnysky, deleteJohnny}) => {
    const johnnyList = johnnysky.map(johnny => {
        if (johnny.age > 20){
            return (
                <div className='johnnysky' key={johnny.id}>
                    <div>Name: { johnny.name }</div>
                    <div>Age: { johnny.age }</div>
                    <div>Belt: { johnny.belt }</div>
                    <button onClick={() => {deleteJohnny(johnny.id)}}>Delete Johnny</button>
                    </div>
                )
        }else {
            return null
        }    
    })
    return(
        <div className="johnny-list">
            { johnnyList }
            </div>
    )
}

export default Johnnysky