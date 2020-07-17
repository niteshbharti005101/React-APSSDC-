import React,{Component} from 'react';
import './App.css';
import Sample from './Sample';
import data from './data.json';
class App extends Component{
  render(){
    console.log(data);
    return (<div className="App"><h2> Hello</h2>
    <App1></App1>
    <Sample></Sample>
    </div>
    )
  }
}
let App1=()=>{
  return <div><h2> App1 Component</h2></div>
}
export default App;