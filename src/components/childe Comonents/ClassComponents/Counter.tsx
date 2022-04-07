import React, { Component } from 'react';

type propstype={
    message:string
}
type CounterState={
    count:number
}
//if props arae empty  just write {} and if state empty write {}, <{},CounterState>
class Counter extends Component <propstype,CounterState> {
state={
    count:0,
}

handleclick=()=>{
    this.setState((prevstate)=>({count:prevstate.count+1}))
}
    render() {
        return (
            <div>
             
            <button onClick={this.handleclick}>INCREMENT</button>   <br/>
            {this.props.message} {this.state.count}

            </div>
        );
    }
}

export default Counter;