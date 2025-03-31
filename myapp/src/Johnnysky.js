import React, { Component } from 'react';

class Johnnysky extends Component{
    render(){
        // console.log(this.props); 
        const { name, age, belt } = this.props;
        return(
            <div className='Johnnysky'>
                <div>Name: { name }</div>
                <div>Age: { age }</div>
                <div>Belt: { belt }</div>
            </div>
        );
    }
}

export default Johnnysky