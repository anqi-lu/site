import { Mongo } from 'meteor/mongo';

import LU from './resources';

let First;
let Second;
let Third;
let Fourth;

if (LU) {
  console.log("why?");
  First = new Mongo.Collection('a_projects');
  Second = new Mongo.Collection('a_research');
  Third = new Mongo.Collection('a_reading');
  Fourth = new Mongo.Collection('a_professional');
} else {
  First = new Mongo.Collection('c_projects');
  Second = new Mongo.Collection('c_research');
  Third = new Mongo.Collection('c_reading');
  Fourth = new Mongo.Collection('c_professional');
}

export { First, Second, Third, Fourth };

