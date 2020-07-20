import React from 'react';

export default class StatesInClass extends React.Component{
    render(){
        return(
            <div>
                <h1><u>States In Class</u></h1>
                <h2> {this.props.name} is {this.props.age} old.</h2>
            </div>
        )
    }
}