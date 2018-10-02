import React, { Component } from 'react';
import './App.js';

class App extends Component {
    constructor(){
        super();

        this.state={
            black: true,
            purple: true,
            blue1: true,

        }
    }
    changeColor1() {
        this.setState(prevState => ({black: !prevState.black}));
    }
    changeColor2(){
        this.setState(prevState => ({purple: !prevState.purple}))
    }
    changeColor3(){
        this.setState(prevState => ({blue1: !prevState.blue1}))
    }
    changeColor4(){
        this.setState(prevState => ({blue: !prevState.blue}))
    }
  render(){
            let btn1_class = this.state.black ? 'blackButton' : 'whiteButton';
            let btn2_class = this.state.purple ? 'purpleButton' : '';
            let btn4_class = this.state.blue1 ? 'blue1Button' : '';
            let btn3_class = this.state.blue ? 'blue2Button' : '';


    return (
      <div className="App">
          <div className='box-container'>
                <div className={`Box1 ${btn1_class} ${btn2_class} `}/>
                <div className={`Box2 ${btn1_class} ${btn2_class} `}/>
                <div className={`Box3 ${btn1_class} ${btn3_class}`}/>
                <div className={`Box4 ${btn1_class} ${btn4_class}`}/>
         </div>
          <div className='box'>
                <button onClick={this.changeColor1.bind(this)}>Click</button>
                <button onClick={this.changeColor2.bind(this)}>Click</button>
                <button onClick={this.changeColor3.bind(this)}>Click</button>
                <button onClick={this.changeColor4.bind(this)}>Click</button>
      </div>
      </div>
    );
  }
}

export default App;
