import React, { Component } from 'react';
import PropTypes from 'prop-types';

import BlurUp from './BlurUp.jsx';

// pane component
export default class Pane extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hover: false,
    };
  }

  setHover(hover) {
    this.setState({
      hover,
    });
  }

  render() {
    const style = {
      pane: this.props.wraps ?
      {
        height: '300px',
        width: '80%',
        marginLeft: '10%',
        marginBottom: '20px',
        minWidth: '400px',
        position: 'relative',
      } : {
        width: '45%',
        height: '45%',
        minHeight: '300px',
        minWidth: '400px',
        marginTop: '1%',
        marginBottom: '1%',
        position: 'relative',
      },
      filter: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: this.props.color,
      },
      inner: {
        default: {
          width: '90%',
          height: '90%',
          position: 'absolute',
          left: '5%',
          top: '5%',
          textAlign: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        },
        hover: {
          backgroundColor: 'rgba(255,255,255,0.55)',
          width: '90%',
          height: '90%',
          position: 'absolute',
          left: '5%',
          top: '5%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        },
      },
      h2: {
        hover: {
          fontWeight: '500',
          color: '#000',
        },
        default: {
          fontWeight: '500',
          color: '#FFF',
        },
      },
    };

    // const imageStyle = {
    //   backgroundImage: 'url(' + this.props.image + ')',
    //   backgroundSize: 'cover',
    // };

    const imageStyle = Object.assign({ backgroundSize: 'cover' });

    // merge style from props for positioning & pane style
    const mergeStyle = Object.assign({}, this.props.style, style.pane); //, imageStyle

    // hover display
    const content = this.state.hover ?
    (
      <div style={style.inner.hover}>
        <h2 style={style.h2.hover}> {this.props.name} </h2>
      </div>
    ) : (
      <div style={style.inner.default}>
        <h2 style={style.h2.default}> {this.props.name} </h2>
      </div>
    );

    return (

      <div
        style={mergeStyle}
        onClick={this.props.onClick}
        onMouseEnter={() => this.setHover(true)}
        onMouseLeave={() => this.setHover(false)}
      >
        <BlurUp
          placeholderURL={`images/place_${this.props.image}`}
          url={`images/${this.props.image}`}
          aspectRatio="6:4"
          style={imageStyle}
        />
        <div style={style.filter}>
          {content}
        </div>
      </div>
    );
  }
}

Pane.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  style: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
  wraps: PropTypes.bool.isRequired,
  image: PropTypes.string.isRequired,
};
