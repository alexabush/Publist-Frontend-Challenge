import React, { Component } from 'react';
import './Story.css';
class Story extends Component {
  state = {};
  render() {
    const {
      image_url,
      url,
      title,
      description,
      score,
      read_title
    } = this.props.storyData;
    return (
      <div className="Story">
        <div className="Image__container">
          <img src={image_url} alt="" />
        </div>
        <div>
          <h2>{title}</h2>
          <p>{description}</p>
          <div className="Story__div--row">
            <p>{score}</p>
            <p>{this.props.storyData.site.name}</p>
            <p>{read_title}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Story;
