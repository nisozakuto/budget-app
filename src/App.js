import React, { Component } from 'react'
import './App.css';
import Header from './components/Header'
import Details from './components/Details'

export default class App extends Component {
  constructor(props)
  {
    super(props)
    this.state = ({

    })
  }
  handleChangeValue = e => this.setState({yearlyIncome: e.target.value});

  render() {
    return (
      <section>
        <Header/>
        <Details yearlyIncome={this.state.yearlyIncome} onChangeValue={this.handleChangeValue} />
      </section>
    )
  }
}
