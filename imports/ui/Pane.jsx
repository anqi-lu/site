import React, { Component, PropTypes } from 'react';
import { Constants } from '../api/constants.js'; 

// banner component
// most just name, but will also show more information
export default class Pane extends Component {

  render() {
    const style = {
      pane: {
        width: '45%',
        height: '45%',
        textAlign: 'center',
        minHeight: '150px',
        minWidth: '400px',
        backgroundColor: this.props.color,
        margin: '10px',
      },
      h2: {
        fontWeight: '500',
        color: '#FFF',
        top: '40%',
        position: 'relative',
      },
    };

    const mergeStyle = Object.assign({}, this.props.style, style.pane);

    return (
      <div style={mergeStyle}>
        <h2 style={style.h2}> {this.props.name} </h2>
      </div>
    );
  }
}

Pane.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  style: PropTypes.object.isRequired,
};
