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
      margin: '4px',
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
        marginTop: '14px',
        marginBottom: '16px',
        textAlign: 'center',
      },
      tools: {
        textAlign: 'center',
      },
      icons: !this.state.hover ? {
        maxHeight: '25px', width: 'auto', filter: 'grayscale(100%)',
      } : {
        maxHeight: '25px', width: 'auto',
      },
    };

    let content;
    const toolIcons = this.props.entry.tools ? this.props.entry.tools.map((tool, i) => {
      const addr = `public/icons/${tool.icon}`;
      return (
        tool.icon ?
        <img
          className="icon"
          src={addr}
          key={shortid.generate()}
          alt={tool.tool}
          style={style.icons}
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
        const link = { color: 'green' };
        const code = this.props.entry.link.length > 0 ?
          (<a href={this.props.entry.link} style={link}>link</a>) : null;
        content = (
          <div className="box">
            <h3> {this.props.entry.name} </h3>
            <div> {this.props.entry.description.split('\n').map(item => (
                <span>
                  {item}
                  <br />
                </span>
              ))} </div>
            {tools}
            <div style={style.links}>
              {code}
            </div>
          </div>
        );
        break;
      case Constants.VIEW_RESE:
        const statusRight = ` -  ${this.props.entry.status}`;
        content = (
          <div className="box">
            <div>
              <span style={{ float: 'left' }}>
                <h4 style={style.leftH}>
                  {this.props.entry.name}
                </h4>
              </span>
              <h5> {statusRight} </h5>
            </div>
            <div> {this.props.entry.description.split('\n').map(item => (
                <span>
                  {item}
                  <br />
                </span>
              ))} </div>
            {tools}
          </div>
        );
        break;
      default:
        //case Constants.VIEW_PROF:
        const title = `${this.props.entry.name} - ${this.props.entry.company}`;
        const dates = `${this.props.entry.date[0]} - ${this.props.entry.date[1]}`;
        const addr = `public/icons/${this.props.entry.icon}`;
        content = (
          <div className="box">
            <div>
              <span style={{ float: 'left' }}>
                <h3 style={style.leftH}> {title} </h3>
              </span>
              <h5 style={{ textAlign: 'right' }}> {dates} </h5>
            </div>
            <div> {this.props.entry.description.split('\n').map(item => (
                <span>
                  - {item}
                  <br />
                </span>
              ))} </div>
            <img src={addr} alt="decorative" style={{ maxWidth: '75px', maxHeight: '100px', paddingLeft: '45%' }} />
          </div>
        );
        break;
     // default:
        
        
        // no op
      //  break;
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
