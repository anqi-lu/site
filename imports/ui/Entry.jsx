import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Constants from '../api/constants';

// view component
export default class Entry extends Component {
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
    let content;
    switch (this.props.view) {
      case Constants.VIEW_PROJ:
        content =
          <div>
            A Project Entry
            <div> {this.props.entry.text} </div>
          </div>;
        break;
      case Constants.VIEW_RESE:
        content =
          <div>
            A Research Entry
          </div>;
        break;
      default:
        // no op
        break;
    }
    // TODO add side banner
    return (
      <div>
          {content}
      </div>
    );
  }
}

Entry.propTypes = {
  view: PropTypes.string.isRequired,
  entry: PropTypes.object.isRequired,
};
