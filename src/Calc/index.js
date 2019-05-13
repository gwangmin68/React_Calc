import React, {Component} from 'react';
import './calc.scss';
import Num1 from './Num1';
import Num2 from './Num2';

class Calc extends Component {
    state = {
        num1 : 0,
        num2 : 0,
        result : 0
    }
    render() {
        let {num1, num2, result} = this.state;
        return (
            <div className='calc-style'>
                <div>{result}</div>
                <Num1 num1={num1} handle={this.num1Change}/>
                <Num2 num2={num2} handle={this.num2Change}/>
                <button onClick={this.numPlus}>+</button>
                <button onClick={this.numMin}>-</button>
                <button onClick={this.numMul}>*</button>
                <button onClick={this.numDiv}>/</button>
                <div></div>
            </div>
        );
    }
    num1Change = event => this.setState({
        num1: parseInt(event.target.value)
    });
    num2Change = event => this.setState({
        num2: parseInt(event.target.value)
    });
    numPlus = () => this.setState({
        result : this.state.num1 + this.state.num2
    });
    numMin = () => this.setState({
        result : this.state.num1 - this.state.num2
    });
    numMul = () => this.setState({
        result : this.state.num1 * this.state.num2
    });
    numDiv = () => this.setState({
        result : this.state.num1 / this.state.num2
    });
}

export default Calc;