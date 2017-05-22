import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Constants } from '../api/constants.js'; 

// banner component
// most just name, but will also show more information
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
      pane: {
        width: '45%',
        height: '45%',
        textAlign: 'center',
        minHeight: '150px',
        minWidth: '400px',
        backgroundColor: this.props.color,
        marginTop: '1%',
        marginBottom: '1%',
      },
      h2: {
        fontWeight: '500',
        color: '#FFF',
        top: '40%',
        position: 'relative',
      },
    };

    const mergeStyle = Object.assign({}, this.props.style, style.pane);
    const content = this.state.hover ? <div>hello</div> : <h2 style={style.h2}> {this.props.name} </h2>;
    return (
      <div
        style={mergeStyle}
        onClick={this.props.onClick}
        onMouseEnter={() => this.setHover(true)}
        onMouseLeave={() => this.setHover(false)}
      >
        {content}
      </div>
    );
  }
}

Pane.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  style: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};
