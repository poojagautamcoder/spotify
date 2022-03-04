import React, { Component } from 'react';

class Classcomponent extends Component {
    state = {
        count : 0
    }
    componentDidMount(){
        setInterval(() =>{
            this.setState({count : this.state.count + 1});
        },1000)
    }
    render() {
        return (
            <div>
            {this.state.count}    
            </div>
        );
    }
}

export default Classcomponent;
