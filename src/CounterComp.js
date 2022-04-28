import React from 'react';

class Counter extends React.Component{
  constructor(props){
    super()
    this.state = {
      value:6
    }
  }
  handleIncrement=()=>{
    this.setState({value: this.state.value +1})
  }
  handleDecrement=()=>{
    this.setState({value: this.state.value > 0 ? this.state.value -1 : 6})
  }
  handleReset=()=>{
    this.setState({value: 6})
  }
  render(){
    return(
      <>
      <h3>Counter Component for react ref</h3>
      <p>{this.props.tropies}</p>
      <p>Value:{this.state.value}</p>
      <button onClick={this.handleIncrement}>Increment</button> &nbsp;
      <button onClick={this.handleDecrement}>Decrement</button> &nbsp;
      <button onClick={this.handleReset}>Reset</button> 
      </>
    )
  }
}
export default Counter;