// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {first: false, last: false}

  showHideFirstName = () => {
    const {first} = this.state

    if (first === false) {
      this.setState({first: true})
    } else {
      this.setState({first: false})
    }
  }

  showHideLastName = () => {
    const {last} = this.state

    if (last === false) {
      this.setState({last: true})
    } else {
      this.setState({last: false})
    }
  }

  render() {
    const {first, last} = this.state
    return (
      <div className="bg_container">
        <div className="main_container">
          <h1>Show/Hide</h1>
          <div className="buttons_container">
            <div className="container">
              <button type="button" onClick={this.showHideFirstName}>
                Show/Hide Firstname
              </button>
              {first ? (
                <div className="name_container">
                  <p>Joe</p>
                </div>
              ) : null}
            </div>
            <div className="container">
              <button type="button" onClick={this.showHideLastName}>
                Show/Hide Lastname
              </button>
              {last ? (
                <div className="name_container">
                  <p>Jonas</p>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
