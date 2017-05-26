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
        const tools = this.props.entry.tools.map((tool) => {
          const addr = 'icons/' + tool.icon;
          console.log(addr);
          return <img src={addr} key={new Date()} />;
        });
        content =
          <div>
            <h3> {this.props.entry.name} </h3>
            <div> {this.props.entry.description} </div>
              {tools}
            <hr />
          </div>;
          
        break;
      case Constants.VIEW_RESE:
        content =
          <div>
            <div> {this.props.entry.text} </div>
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
