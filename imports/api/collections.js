import { Mongo } from 'meteor/mongo';

import LU from './resources';

const First = new Mongo.Collection('c_projects');
const Second = new Mongo.Collection('c_research');
const Third = new Mongo.Collection('c_reading');
const Fourth = new Mongo.Collection('c_professional');

export { First, Second, Third, Fourth };

