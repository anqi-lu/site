import React, { Component, PropTypes } from 'react';
import { Constants } from '../api/constants.js'; 

// banner component
// most just name, but will also show more information
export default class Banner extends Component {

  render() {
    const style = {
      banner: {
        width: '100%',
        textAlign: 'right',
      },
      h1: {
        marginRight: '25px',
        fontWeight: '500',
      },
    };

    // TODO: add logic to switch banner to include view information
    // TODO: add transition for banner between views

    return (
      <div style={style.banner}>
        <h1 style={style.h1}> {this.props.name} </h1>
      </div>
    );
  }
}

Banner.propTypes = {
  name: PropTypes.string.isRequired,
  view: PropTypes.string.isRequired,
};
