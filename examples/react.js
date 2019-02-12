import React, { Component } from 'react'
import { render } from 'react-dom'
import Container from './components/Container'

class App extends Component {
  state = {
    count: 0,
  }

  increment = () => {
    this.setState(prevState => ({ count: prevState.count + 1 }))
  }

  decrement = () => {
    this.setState(prevState => ({ count: prevState.count - 1 }))
  }

  render() {
    return (
      <Container className="App">
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
      </Container>
    )
  }
}

render(<App />, document.getElementById('root'))
