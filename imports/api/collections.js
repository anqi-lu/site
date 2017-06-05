import { Mongo } from 'meteor/mongo';

import LU from './resources';

const First = LU ? new Mongo.Collection('a_projects') : new Mongo.Collection('c_projects');
const Second = LU ? new Mongo.Collection('a_research') : new Mongo.Collection('c_research');
const Third = LU ? new Mongo.Collection('a_reading') : new Mongo.Collection('c_reading');
const Fourth = LU ? new Mongo.Collection('a_professional') : new Mongo.Collection('c_professional');

export { First, Second, Third, Fourth };

