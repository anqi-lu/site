import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import Banner from './Banner.jsx'; 
import Pane from './Pane.jsx'; 
import Constants from '../api/constants.js'; 

// App component - represents the whole app
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      view: Constants.VIEW_HOME,
    };
  }

  toggleView(view) {
    this.setState({
      view,
    });
  }

//   renderTasks() {
//     let filteredTasks = this.props.tasks;
//     if (this.state.hideCompleted) {
//       filteredTasks = filteredTasks.filter(task => !task.checked);
//     }
//     return filteredTasks.map((task) => (
//       <Task key={task._id} task={task} />
//     ));
//   }

  render() {
    const config = {
      proj: {
        color: '#B05F6D',
        name: 'projects',
      },
      reas: {
        color: '#47B39D',
        name: 'research',
      },
      read: {
        color: '#FFC153',
        name: 'reading',
      },
      prof: {
        color: '#EB6B56',
        name: 'professional',
      },
    };
    const style = {
      split: {
        float: 'left',
      },
      clear: {
        float: 'left',
        clear: 'left',
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
    let container;
    const banner = <Banner name="anqi lu" view={this.state.view} />;

    switch (this.state.view) {
      case Constants.VIEW_HOME: {
        container = (
          <div style={style.container} >
            <Pane {...config.proj} style={style.split} />
            <Pane {...config.reas} style={style.split} />
            <Pane {...config.read} style={style.clear} />
            <Pane {...config.prof} style={style.split} />
          </div>
        );

        break;
      }
      case Constants.VIEW_REAS: {
        break;
      }

      case Constants.VIEW_PROJ:

        break;
      case Constants.VIEW_READ:

        break;
      case Constants.VIEW_PROF:

        break;
      default:
        // no op
        break;
    }


    return (
      <div style={style.main} >
        {banner}
        {container}
      </div>
    );
  }
}

// App.propTypes = {
//   tasks: PropTypes.array.isRequired,
//   incompleteCount: PropTypes.number.isRequired,
// };

export default createContainer(() => {
  return {};
}, App);
