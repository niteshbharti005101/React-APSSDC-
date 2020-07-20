import React,{Component} from 'react';
import './App.css';
import Sample from './Sample';
import data from './data.json';
import StatesInFunction from './statesInFunction';
import StatesInClass from './statesInClass';
class App extends Component{
  constructor(){
    super();
    this.state={
      name:"Nitesh"
    }
  }

  changeStateValue=()=>{
    this.setState({
      name:"Hovering"
    })
  }
  

  stateInitialValue=()=>{
    this.setState({
      name:"Nitesh"
    })
  }
  
  render(){
    //console.log(data);
  return (<div className="App"><h2 
  onMouseOver={this.changeStateValue}
  onMouseLeave={this.stateInitialValue}> {this.state.name}</h2>
    <App1></App1>
    <Sample></Sample>
    <StatesInFunction name="Nitesh" age="20 years"/>
    <StatesInClass name="Bharti" age="20 years"/>
    </div>
    )
  }
}
let App1=()=>{
  return <div><h2> App1 Component</h2></div>
}
export default App;