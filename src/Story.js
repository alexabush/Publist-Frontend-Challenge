import React, { Component } from 'react';
import './Story.css';

class Story extends Component {
  toUrl = () => {
    window.location = this.props.storyData.url;
  };

  render() {
    const { image_url, title, read_time } = this.props.storyData;
    const score = Math.round(this.props.storyData.score);
    return (
      <div className="Story" onClick={this.toUrl}>
        <div className="Image__container">
          <img src={image_url} alt="" />
        </div>
        <div className="Story__content">
          <h2>{title}</h2>
          <div className="Story__div--row">
            <p>Score: {score}</p>
            <p>{this.props.storyData.site.name}</p>
            <p>Read Time: {read_time}s</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Story;
