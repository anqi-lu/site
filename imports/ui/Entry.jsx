import React, { Component } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';

import Constants from '../api/constants';

// entry component
// a single instance of the generic db value
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
    const style = {
      leftH: {
        marginTop: 0, marginBottom: 0, marginRight: '5px',
      },
      links: {
        marginTop: '10px',
        marginBottom: '10px',
        textAlign: 'center',
      },
    };
    let content;
    const tools = this.props.entry.tools ? this.props.entry.tools.map((tool) => {
      const addr = `icons/${tool.icon}`;
      return (
        <img 
          src={addr} 
          key={shortid.generate()}
          style={{ height: '25px', width: '25px' }}
        />
      );
    }) : null;

    switch (this.props.view) {
      case Constants.VIEW_PROJ:
        content = (
          <div>
            <h3> {this.props.entry.name} </h3>
            <div> {this.props.entry.description} </div>
            {tools}
          </div>
        );
        break;
      case Constants.VIEW_RESE:
        const statusRight = `    -  ${this.props.entry.status}`;
        content = (
          <div>
            <div>
              <span style={{ float: 'left' }}>
                <h4 style={style.leftH} > 
                  {this.props.entry.name}
                </h4>
              </span>
              <h5> {statusRight} </h5>
            </div>
            <div> {this.props.entry.description} </div>
            <div style={style.links}>
              <a href={this.props.entry.link.code}> code </a> |
              <a href={this.props.entry.link.paper}> paper </a>
            </div>
            {tools}
          </div>
        );
        break;
      case Constants.VIEW_PROF:
        const title = `${this.props.entry.name} - ${this.props.entry.company}`;
        const dates = `${this.props.entry.date[0]} - ${this.props.entry.date[1]}`;
        const addr = `icons/${this.props.entry.icon}`;
        content = (
          <div>
            <div>
              <span style={{ float: 'left' }}>
                <h3 style={style.leftH}> {title} </h3>
              </span>
              <h5 style={{ textAlign: 'right' }}> {dates} </h5>
            </div>
            <div> {this.props.entry.description} </div>
            <img src={addr} style={{ height: '75px', width: '75px' }} />
          </div>
        );
        break;
      default:
        // no op
        break;
    }

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
