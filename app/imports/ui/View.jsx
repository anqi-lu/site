import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Constants from '../api/constants';
import shortid from 'shortid';

import SideBanner from './SideBanner.jsx';
import Entry from './Entry.jsx';

// view component
export default class View extends Component {
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

  renderItems(items) {
    const itemStyle = {
      width: '125px',
      display: 'inline-block',
      margin: '3px',
      textAlign: 'right',
      height: '65px',
      backgroundColor: '#f3f3f3',
    };
    return items.map((item) => {
      const addr = `public/icons/${item.icon}`;
      return (
        <div style={itemStyle} key={shortid.generate()}>
          <span style={{ float: 'left', marginLeft: '25px' }}>
            <h5>
              {item.tool}
            </h5>
          </span>
        </div>
      );
    });
  }
  renderCollection(collection) {
    const LIGHT = '#FFF';
    const DARK = '#f3f3f3';
    return collection.map((entry, i) => (
      <Entry
        key={shortid.generate()}
        entry={entry}
        view={this.props.view}
        backgroundColor={(i % 2 === 1) ? LIGHT : DARK}
        color={this.props.color}
      />
    ));
  }

  render() {
    const style = {
      container: {
        width: '100%',
        height: '100%',
        float: 'left',
      },
      left: {
        float: 'left',
        width: '20%',
        height: '100%',
      },
      right: {
        float: 'left',
        width: '80%',
        height: '95%',
        overflowY: 'auto',
      },
      content: {
        marginRight: '4%',
      },
    };

    let content;
    switch (this.props.view) {
      case Constants.VIEW_PROF:
        const langs = this.renderItems(this.props.langs);
        const tools = this.renderItems(this.props.tools);
        const jobs = this.renderCollection(this.props.collection);
        content = (
          <div>
            <h3> Interests </h3>
            <p>
              {this.props.interests}
            </p>
            <h3> Skills </h3>
            <div>
              <h4> Languages </h4>
              {langs}
            </div>
            <div>
              <h4> Tools </h4>
              {tools}
            </div>
            <h3> Employment </h3>
            {jobs}
          </div>
        );       
        break;
      case Constants.VIEW_PROJ:
        const personal = this.renderCollection(this.props.collection.filter(entry =>
          (entry.category === 'personal'),
        ));
        const academic = this.renderCollection(this.props.collection.filter(entry =>
          (entry.category === 'academic'),
        ));
        const iqp = this.renderCollection(this.props.collection.filter(entry =>
          (entry.category === 'iqp'),
        ));
        content = (
          <div>
            <div>
              <h2> Personal </h2>
              {personal}
              <h2> Academic </h2>
              {academic}
              <h2> Interactive Qualifying Project </h2>
              {iqp}
            </div>
          </div>
        );
        break;
      case Constants.VIEW_RESE:
        const cs = this.renderCollection(this.props.collection.filter(entry =>
          (entry.category === 'Computer Science'),
        ));
        const math = this.renderCollection(this.props.collection.filter(entry =>
          (entry.category === 'Math'),
        ));
        content = (
          <div>
            <div>
              <h2> Computer Science </h2>
              {cs}
              <h2> Math </h2>
              {math}
            </div>
          </div>
        );
        break;
      default:
        content = this.renderCollection(this.props.collection);
        break;
    }
    // TODO add side banner
    return (
      <div style={style.container}>
        <div style={style.left}>
          <SideBanner color={this.props.color} image={this.props.image} />  
        </div>
        <div style={style.right}>
          <div style={style.content}>
            {content}
          </div>
        </div>
      </div>
    );
  }
}

View.propTypes = {
  view: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  collection: PropTypes.array.isRequired,
  tools: PropTypes.array.isRequired,
  langs: PropTypes.array.isRequired,
  interests: PropTypes.string.isRequired,
};
