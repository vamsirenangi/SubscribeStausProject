// Write your code here
import './index.css'

import {Component} from 'react'

class Welcome extends Component {
  state = {text: 'Subscribe'}

  buttonAction = () => {
    const {text} = this.state
    if (text === 'Subscribe') {
      this.setState(() => ({text: 'Subscribed'}))
    } else {
      this.setState(() => ({text: 'Subscribe'}))
    }
  }

  render() {
    const {text} = this.state
    return (
      <div className="bg-container">
        <h1>Welcome</h1>
        <p>Thank You Happy Learning!</p>
        <button onClick={this.buttonAction()} type="button">
          {text}
        </button>
      </div>
    )
  }
}

export default Welcome
