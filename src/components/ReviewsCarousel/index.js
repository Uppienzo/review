import './index.css'

import {Component} from 'react'

class ReviewsCarousel extends Component {
  state = {activeProfile: 0}

  forward = () => {
    const {reviewsList} = this.props
    const {activeProfile} = this.state
    if (reviewsList.length - 1 > activeProfile) {
      this.setState(prevState => ({activeProfile: prevState.activeProfile + 1}))
    }
  }

  backward = () => {
    const {activeProfile} = this.state
    if (activeProfile > 0) {
      this.setState(prevState => ({activeProfile: prevState.activeProfile - 1}))
    }
  }

  render() {
    const {activeProfile} = this.state
    const {reviewsList} = this.props
    const user = reviewsList[activeProfile]
    const {imgUrl, companyName, description, username} = user

    return (
      <div className="container">
        <button
          type="button"
          className="arrow-btn"
          id="leftArrow"
          onClick={this.backward}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
            alt="left arrow"
            className="arrow-img"
          />
        </button>
        <div className="review-container">
          <h1 className="heading">Reviews</h1>

          <img src={imgUrl} alt={username} className="review-img" />

          <p className="name-header">{username}</p>
          <p className="company-name">{companyName}</p>
          <p className="description">{description}</p>
        </div>
        <button
          type="button"
          className="arrow-btn"
          id="rightArrow"
          onClick={this.forward}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
            alt="right arrow"
            className="arrow-img"
          />
        </button>
      </div>
    )
  }
}

export default ReviewsCarousel
