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
      tools: {
        textAlign: 'center',
      },
    };

    let content;
    const toolIcons = this.props.entry.tools ? this.props.entry.tools.map((tool, i) => {
      const addr = `icons/${tool.icon}`;
      return (
        tool.icon ?
        <img
          src={addr}
          key={shortid.generate()}
          alt={tool.tool}
          style={{ height: '25px', width: '25px' }}
        /> : null
      );
    }) : null;
    const tools = toolIcons ? (
      <div style={style.tools}>
        {toolIcons}
      </div>
    ) : null;

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
      case Constants.VIEW_READ:
        content = (
          <div>
            <span style={{ float: 'left' }}>
              <h5 style={style.leftH}> {this.props.entry.name} </h5>
            </span>
            <h5 style={{ textAlign: 'right', marginRight: '5px' }}>
              - {this.props.entry.author}
            </h5>
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
            <img src={addr} alt="decorative" style={{ height: '75px', width: '75px', paddingLeft: '45%' }} />
          </div>
        );
        break;
      default:
        // no op
        break;
    }

    return (
      <div 
        style={{
          backgroundColor: this.state.hover ? this.props.color : this.props.backgroundColor,
          paddingTop: '1px',
          paddingBottom: '5px',
          paddingLeft: '2px',
        }}
        onMouseEnter={() => this.setState({ hover: true })}
        onMouseLeave={() => this.setState({ hover: false })}
      >
        {content}
      </div>
    );
  }
}

Entry.propTypes = {
  view: PropTypes.string.isRequired,
  entry: PropTypes.object.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};
