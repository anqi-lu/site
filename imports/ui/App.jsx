import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createContainer } from 'meteor/react-meteor-data';

import { Projects, Research, Reading, Professional } from '../api/collections.js';

import Banner from './Banner.jsx';
import Pane from './Pane.jsx';
import View from './View.jsx';

import Constants from '../api/constants';

// App component - represents the whole app
class App extends Component {
  constructor(props) {
    super(props);

    const pageWidth = window.innerWidth;
    const paneWidth = 400;
    const wraps = pageWidth < Math.ceil((paneWidth * 2) / 0.85);

    this.state = {
      view: Constants.VIEW_HOME,
      wraps,
    };
  }

  componentDidMount() {
    window.addEventListener('resize',
    () => {
      const pageWidth = window.innerWidth;
      const paneWidth = 400;
      const wraps = pageWidth < Math.ceil((paneWidth * 2) / 0.85);
      this.setState({
        wraps,
      });
    });
  }

  setView(view) {
    this.setState({
      view,
    });
  }

  render() {
    const config = {
      proj: {
        color: 'rgba(159, 74, 90, 0.35)',
        name: 'projects',
        image: 'images/proj.jpg',
      },
      reas: {
        color: 'rgba(60, 166, 139, 0.35)',
        name: 'research',
        image: 'images/reas.jpg',
      },
      read: {
        color: 'rgba(251, 181, 66, 0.35)',
        name: 'reading',
        image: 'images/read.jpg',
      },
      prof: {
        color: 'rgba(176, 95, 109, 0.35)',
        name: 'professional',
        image: 'images/prof.jpg',
      },
    };
    const style = {
      proj: {
        float: 'left',
        marginLeft: '4%',
        marginRight: '1%',
      },
      reas: {
        float: 'left',
        marginLeft: '1%',
        marginRight: '4%',
      },
      read: {
        float: 'left',
        clear: 'left',
        marginLeft: '4%',
        marginRight: '1%',
      },
      prof: {
        float: 'left',
        marginLeft: '1%',
        marginRight: '4%',
      },
      container: {
        height: '90%',
        minHeight: '350px',
      },
      main: {
        height: '100%',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
      },
    };
    let pageContent;
    const banner = (
      <Banner
        name="charles lovering"
        view={this.state.view}
        backFunc={() => this.setView(Constants.VIEW_HOME)}
      />
    );
    switch (this.state.view) {
      case Constants.VIEW_HOME: {
        // get width of page

        pageContent = (
          <div>
            <Pane
              {...config.proj}
              style={style.proj}
              onClick={() => this.setView(Constants.VIEW_PROJ)}
              wraps={this.state.wraps}
            />
            <Pane
              {...config.reas}
              style={style.reas}
              onClick={() => this.setView(Constants.VIEW_RESE)}
              wraps={this.state.wraps}
            />
            <Pane
              {...config.read}
              style={style.read}
              onClick={() => this.setView(Constants.VIEW_READ)}
              wraps={this.state.wraps}
            />
            <Pane
              {...config.prof}
              style={style.prof} 
              onClick={() => this.setView(Constants.VIEW_PROF)}
              wraps={this.state.wraps}
            />
          </div>
        );
        break;
      }
      case Constants.VIEW_PROJ:
        pageContent = (
          <View
            view={this.state.view}
            collection={this.props.projects}
            {...config.proj}
          />
        );
        break;
      case Constants.VIEW_RESE:
        pageContent = (
          <View
            view={this.state.view}
            collection={this.props.research}
            {...config.reas}
          />
        );
        break;
      case Constants.VIEW_READ:
        pageContent = (
          <View
            view={this.state.view}
            collection={this.props.reading}
            {...config.read}
          />
        );
        break;
      case Constants.VIEW_PROF:
        pageContent = (
          <View
            view={this.state.view}
            collection={this.props.professional}
            {...config.prof}
          />
        );
        break;
      default:
        // no op
        break;
    }

    const container = (
      <div style={style.container}>
        {pageContent}
      </div>
    );

    return (
      <div style={style.main}>
        {banner}
        {container}
      </div>
    );
  }
}

App.propTypes = {
  projects: PropTypes.array.isRequired,
  research: PropTypes.array.isRequired,
  reading: PropTypes.array.isRequired,
  professional: PropTypes.array.isRequired,
};

export default createContainer(() => {
  return {
    projects: Projects.find({}).fetch(),
    research: Research.find({}).fetch(),
    reading: Reading.find({}).fetch(),
    professional: Professional.find({}).fetch(),
  };
}, App);
