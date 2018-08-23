import React, { Component } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';

import Constants from '../api/constants';

// entry component
// a single instance of the generic db value
export default class Item extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hover: false,
      clicked: false,
    };
  }

  render() {
    const style = {
      width: '125px',
      display: 'inline-block',
      margin: '3px',
      textAlign: 'right',
      height: '65px',
     
      backgroundColor: this.state.hover ? this.props.color : '#f3f3f3',
      color: this.state.hover ? 'while' : 'black',
      float: 'left',
      marginLeft: '25px',
    };
    const itemText = this.props.item.tool;
    const content = (
      <span style={{ float: 'left', marginLeft: '25px' }}>
        <h5>
          {itemText}
        </h5>
      </span>);
    return (
      <div
        style={style}
        onMouseEnter={() => this.setState({ hover: true })}
        onMouseLeave={() => this.setState({ hover: false, clicked: false })}
        onClick={() => this.setState({ clicked: (!this.state.clicked) })}
      >
        {content}
      </div>
    );
  }
}

Item.propTypes = {
  view: PropTypes.string.isRequired,
  item: PropTypes.object.isRequired,
  color: PropTypes.string.isRequired,
};
