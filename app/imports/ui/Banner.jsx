import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Constants from '../api/constants';

// banner component
// most just name, but will also show more information
export default class Banner extends Component {

  render() {
    const style = {
      banner: {
        width: '100%',
        textAlign: 'right',
        height: '10%',
      },
      h1: {
        marginRight: '4%',
        fontWeight: '500',
        marginTop: '0',
        paddingTop: '15px',
      },
      img: {
        float: 'left',
        paddingTop: '15px',
      },
      link: {
        color: 'inherit',
        textDecoration: 'none',
      },
    };

    const icons = (
      <div style={{ textAlign: 'center', color: 'black' }}>
        <span>
          <a href={`https://github.com/anqi-lu`} style={style.link} ><i className="fa fa-github fa-lg" /></a>
          <span> </span>
          <a href={`https://linkedin.com/in/anqi-lu-5aa507a8/`} style={style.link} ><i className="fa fa-linkedin fa-lg" /></a>
          <span> </span>
          <a href={`https://drive.google.com/open?id=1EtgeLNsJfMnraMvu4XcVPUi87xy33_jG`} style={style.link} ><i className="fa fa-file-pdf-o" /></a>
          <span></span>
          <a href={`https://unsplash.com/@alu213000`} style={style.link}><i id="px" className="fa fa-camera-retro" /></a>        
        </span>
      </div>
    );
    const bannerJSX = this.props.view === Constants.VIEW_HOME ? (
      <div style={style.banner}>
        <span style={{ float: 'left', marginLeft: '4%', paddingTop: '25px' }}>
          {icons}
        </span>
        <h1 style={style.h1}> {this.props.name} </h1>
      </div>
    ) : (
      <div style={style.banner}>
        <span style={style.img}>
          <button className="arrow left" onClick={this.props.backFunc}>
            <svg width="80%" height="30px">
              <polyline
                fill="none"
                stroke="#898989"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                points="10,30 0.375,15 10,0.375 "
              />
              <line x1="0" y1="15" x2="300" y2="15" stroke="#898989" strokeWidth="1" markerEnd="url(#arrowhead)" />
            </svg>
          </button>
        </span>
        <h1 style={style.h1}> {this.props.name} </h1>
      </div>
    );

    return bannerJSX;
  }
}

Banner.propTypes = {
  name: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
  view: PropTypes.string.isRequired,
  backFunc: PropTypes.func.isRequired,
};
