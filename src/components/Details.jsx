import React, { Component } from 'react'

export default class Details extends Component {
    render() {
        return (
            <section>
                {this.props.yearlyIncome ?
                    (<h1>there is smt</h1>)
                    :
                    (<h1>Theresnt anytng</h1>)
                }
                <h1></h1>
                <form onSubmit={this.props.handler} >
                    <label>Enter Yearly Income</label>
                    <input type="number" placeholder="50000" value={this.props.yearlyIncome} onChange={this.props.onChangeValue} />
                    <input type="submit" value="enter" />
                </form>
            </section>
        )
    }
}
