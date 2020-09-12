import React, { Component } from "react";
import "./index.css";

export default class Calculator extends Component {

  constructor(props) {
    super(props);
    this.state = {
      totalOperations: 0,
      currentOperation: '+',
      result: '',
      input1: '',
      input2: ''
    }
  }

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: parseInt(evt.target.value)
    })
  }

  handleReset = () => {
    this.setState({
      totalOperations: 0,
      currentOperation: '+',
      result: '',
      input1: '',
      input2: ''
    })
  }

  handleSubmit = (evt) => {
    const { input1, input2 } = this.state;
    let result;

    if ((!input1 && input1 !== 0) || (!input2 && input2 !== 0)) {
      this.setState({ result: '' });
      return;
    }

    const operationType = evt.target.textContent;
    switch (operationType) {
      case '-':
        result = input1 - input2;
        break;
      case '*':
        result = input1 * input2;
        break;
      case '/':
        result = input1 / input2;
        break;
      default:
        result = input1 + input2;
        break;
    }

    this.setState((state) => ({
      currentOperation: operationType,
      totalOperations: state.totalOperations + 1,
      result
    }));
  }

  render() {
    const { totalOperations, currentOperation, result, input1, input2 } = this.state;
    return (
      <div className="layout-column align-items-center">
        <div data-testid="total-operations" className="pt-50 total-operations">Total operations performed: {totalOperations}</div>
        <div className="card">
          
          <section className="card-text">
            <div className="layout-row justify-content-around align-items-center mt-40">
              <input type="number" className="ml-3 mr-3" data-testid="app-input1" autoComplete="off" placeholder="Eg: 1"
                name="input1" value={input1} onChange={this.handleChange} />
              <label className="ml-2 mr-2 symbol text-center" data-testid="selected-operator">{currentOperation}</label>
              <input type="number" data-testid="app-input2" autoComplete="off" className="ml-3 mr-3"
                placeholder="Eg: 2" name="input2" value={input2} onChange={this.handleChange} />
            </div>

            <div className="layout-row justify-content-around mt-30">
              <button className="operationFont" type="submit" data-testid="addButton" onClick={this.handleSubmit}>+</button>
              <button className="operationFont" type="submit" data-testid="subtractButton" onClick={this.handleSubmit}>-</button>
              <button className="operationFont" type="submit" data-testid="multiplyButton" onClick={this.handleSubmit}>*</button>
              <button className="operationFont" type="submit" data-testid="divideButton" onClick={this.handleSubmit}>/</button>
            </div>

            <div className="layout-row justify-content-between align-items-center mt-30">
              <button type="reset" data-testid="resetButton" className="outline danger" onClick={this.handleReset}>Reset</button>
              <div className="layout-row justify-content-center align-items-center result-container">
                {result !== '' && <div data-testid="result" className="result-value ma-0 slide-up-fade-in">Result: {result}</div>}
              </div>
            </div>
          </section>

        </div>
      </div>
    );
  }
}