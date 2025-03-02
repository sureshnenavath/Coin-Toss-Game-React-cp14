import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {
    coinState: 0,
  }
  total = 0
  heads = 0
  tails = 0
  onHandleCoinTossButton = () => {
    const randomToss = Math.floor(Math.random() * 2)
    this.setState({coinState: randomToss})
    if (randomToss) {
      this.total += 1
      this.tails += 1
    } else {
      this.total += 1
      this.heads += 1
    }
  }

  render() {
    const {coinState} = this.state
    return (
      <div className="main-container">
        <div className="container">
          <h1>Coin Toss Game</h1>
          <p>Heads (or) Tails</p>
          <div className="image-container">
            {coinState ? (
              <img
                className="image"
                alt="toss result"
                src="https://assets.ccbp.in/frontend/react-js/tails-img.png"
              />
            ) : (
              <img
                className="image"
                alt="toss result"
                src="https://assets.ccbp.in/frontend/react-js/heads-img.png"
              />
            )}
          </div>
          <button onClick={this.onHandleCoinTossButton}>Toss Coin</button>
          <div className="counts-container">
            <p>Total: {this.total}</p>
            <p>Heads: {this.heads}</p>
            <p>Tails: {this.tails}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
