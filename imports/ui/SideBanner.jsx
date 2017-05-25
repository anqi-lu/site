import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Constants from '../api/constants';

// banner component
// most just name, but will also show more information
export default class SideBanner extends Component {

  render() {
    const style = {
      image: {
        backgroundImage: 'url(' + this.props.image + ')',
        backgroundSize: 'cover',
        position: 'relative',
        width: '80%',
        height: '90%',
        marginLeft: '10%',
      },
      filter: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundColor: this.props.color,
      },
    };

    return (
      <div style={style.image}>
        <div style={style.filter} />
      </div>
    );
  }
}

SideBanner.propTypes = {
  color: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
