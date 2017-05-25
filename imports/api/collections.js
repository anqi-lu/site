import { Mongo } from 'meteor/mongo';

const Projects = new Mongo.Collection('projects');
const Research = new Mongo.Collection('research');
const Reading = new Mongo.Collection('reading');
const Professional = new Mongo.Collection('professional');

export { Projects, Research, Reading, Professional };
