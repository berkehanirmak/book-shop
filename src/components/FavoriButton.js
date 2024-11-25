import React, { Component } from 'react';

class FavoriButton extends Component {
  constructor() {
    super();
    this.state = {
      isActive: false,
    };
  }

  handleClick = () => {
    this.setState((prevState) => ({
      isActive: !prevState.isActive,
    }));
  };

  render() {
    const { isActive } = this.state;

    return (
      <div className={`heart-btn ${isActive ? 'heart-active' : ''}`} onClick={this.handleClick}>
        <div className='content'>
          <span className={`heart ${isActive ? 'heart-active' : ''}`}></span>
        </div>
      </div>
    );
  }
}

export default FavoriButton;