import React, { Component } from 'react';

const Johnnysky = ({johnnysky}) => {
    // const johnnyList = johnnysky.map(johnny => {
    //     if (johnny.age > 20){
    //         return (
    //             <div className='johnnysky' key={johnny.id}>
    //                 <div>Name: { johnny.name }</div>
    //                 <div>Age: { johnny.age }</div>
    //                 <div>Belt: { johnny.belt }</div>
    //                 </div>
    //             )
    //     }else {
    //         return null
    //     }    
    // })
    return(
        <div className="johnny-list">
            { 
                johnnysky.map(johnny => {
                    return johnny.age > 20 ? (
                        <div className='johnnysky' key={johnny.id}>
                            <div>Name: { johnny.name }</div>
                            <div>Age: { johnny.age }</div>
                            <div>Belt: { johnny.belt }</div>
                        </div>
                    ) : null;
                })
            }
            </div>
    )
}

export default Johnnysky