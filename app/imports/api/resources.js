const LU = true;
let config;
let tools;
let langs;
let interests;
let name;

if (LU) {
  name = 'Anqi Lu - 陆安琪';
  config = {
    proj: {
      color: 'rgba(159, 74, 90, 0.35)',
      name: 'projects',
      image: 'al-proj.jpg',
    },
    prof: {
      color: 'rgba(60, 166, 139, 0.35)',
      name: 'professional',
      image: 'al-prof.jpg',
    },
    reas: {
      color: 'rgba(251, 181, 66, 0.35)',
      name: 'courses',
      image: 'al-scho.jpg',
    },
    read: {
      color: 'rgba(176, 95, 109, 0.35)',
      name: 'about',
      image: 'al-abou.jpg',
    },
  };

  interests = `I'm alway looking for new challenges. I've worked on a couple big data and machine 
  learning projects. 
  I also enjoy creating applications from the ground up, with a focus on the persepective
  of design. Both aesthetically in terms of UI, and the application's systems.
  `;

  langs = [
    {
      tool: 'Python',
      icon: 'Python.png',
    },
    {
      tool: 'Java',
      icon: 'java.png',
    },
    {
      tool: 'Javascript',
      icon: 'javascript.png',
    },
    {
      tool: 'C++',
      icon: 'cpp.png',
    },
    {
      tool: 'C',
      icon: 'c.png',
    },
    {
      tool: 'SQL',
      icon: '',
    },
    {
      tool: 'MATLAB',
      icon: '',
    },
    {
      tool: 'Racket',
      icon: 'racket.png',
    },
  ];
  tools = [
    {
      tool: 'Git',
      icon: '',
    },
    {
      tool: 'MapReduce',
      icon: '',
    },
    {
      tool: 'sklearn',
      icon: 'sklearn.png',
    },
    {
      tool: 'React',
      icon: 'react.png',
    },
    {
      tool: 'Node.js',
      icon: 'nodejs.png',
    },
    {
      tool: 'D3',
      icon: 'd3.svg',
    },
    {
      tool: 'Maven',
      icon: '',
    },
    {
      tool: 'LaTeX',
      icon: '',
    },
  ];
} else {
  name = 'charles lovering';

  config = {
    proj: {
      color: 'rgba(159, 74, 90, 0.35)',
      name: 'projects',
      image: 'proj.jpg',
    },
    reas: {
      color: 'rgba(60, 166, 139, 0.35)',
      name: 'research',
      image: 'reas.jpg',
    },
    read: {
      color: 'rgba(251, 181, 66, 0.35)',
      name: 'reading',
      image: 'read.jpg',
    },
    prof: {
      color: 'rgba(176, 95, 109, 0.35)',
      name: 'professional',
      image: 'prof.jpg',
    },
  };

  langs = [
    {
      tool: 'c++',
      icon: 'cpp.png',
    },
    {
      tool: 'Java',
      icon: 'java.png',
    },
    {
      tool: 'Javascript',
      icon: 'javascript.png',
    },
    {
      tool: 'Python',
      icon: 'Python.png',
    },
    {
      tool: 'MatLab',
      icon: 'matlab.png',
    },
    {
      tool: 'C',
      icon: 'c.png',
    },
    {
      tool: 'Racket',
      icon: 'racket.png',
    },
    {
      tool: 'Haskell',
      icon: 'haskell.png',
    },
  ];
  tools = [
    {
      tool: 'Boost',
      icon: 'boost.png',
    },
    {
      tool: 'React',
      icon: 'react.png',
    },
    {
      tool: 'D3',
      icon: 'd3.svg',
    },
    {
      tool: 'Keras',
      icon: 'keras.png',
    },
    {
      tool: 'TensorFLow',
      icon: 'tf.png',
    },
    {
      tool: 'Meteor',
      icon: 'meteor.png',
    },
    {
      tool: 'MongoDB',
      icon: 'mongo.svg',
    },
    {
      tool: 'sklearn',
      icon: 'sklearn.png',
    },
    {
      tool: 'scipy',
      icon: 'scipy.png',
    },
    {
      tool: 'BIND9',
      icon: 'bind9.png',
    },
  ];
  interests = `I am currently interested in the theory and applications of deep learning.
  I am also interested in machine learning, distributed computing and cloud computing.`;
}

export { LU, config, tools, langs, interests, name };
