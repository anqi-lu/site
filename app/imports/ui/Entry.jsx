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
      clicked: false,
    };
  }

  setHover(hover) {
    this.setState({
      hover,
    });
  }

  renderDetailedImages(images) {
    const itemStyle = {
      display: 'inline-block',
      margin: '3px',
      textAlign: 'right',
      backgroundColor: '#f3f3f3',
    };
    return images.map((item) => {
      const mergeStyle = Object.assign(itemStyle, { height: item.height, width: item.width });
      const addr = `public/images/detailed/${item.image}`;
      return (
        <div style={mergeStyle} key={shortid.generate()}>
          {/*<span style={{ float: 'left', marginLeft: '25px' }}>
            <h5>
              {item.tool}
            </h5>
          </span>*/}
          <img
            src={addr}
            alt={item.image}
            style={{ height: item.height, width: item.width }}
          />
        </div>
      );
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
      const addr = `public/icons/${tool.icon}`;
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
        const link = { color: 'green' };
        const code = this.props.entry.link.code.length > 0 ?
          (<a href={this.props.entry.link.paper} style={link}>code</a>) : null;
        const paper = this.props.entry.link.paper.length > 0 ?
          (<span> | <a href={this.props.entry.link.paper} style={link}>paper</a> </span>) : null;
        const links = (
          <div>
            {code} {paper}
          </div>
        );
        const detailedImages = this.state.hover && this.state.clicked ?
          this.renderDetailedImages(this.props.entry.detailedImages) : null;
        const statusRight = `    -  ${this.props.entry.status}`;
        content = (
          <div>
            <div>
              <span style={{ float: 'left' }}>
                <h4 style={style.leftH}>
                  {this.props.entry.name}
                </h4>
              </span>
              <h5> {statusRight} </h5>
            </div>
            <div> {this.props.entry.description} </div>
            {detailedImages}
            <div style={style.links}>
              {links}
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
        const addr = `public/icons/${this.props.entry.icon}`;
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
        onMouseLeave={() => this.setState({ hover: false, clicked: false })}
        onClick={() => this.setState({ clicked: (!this.state.clicked) })}
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
