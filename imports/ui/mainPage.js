import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './mainPage.html';

Template.mainPage.onCreated(function () {
  console.log('This is Client');
});

Template.mainPage.onRendered(function () {
  $('.button-collapse').sideNav();
  $('.parallax').parallax();
});

Template.mainPage.helpers({
  
});

Template.mainPage.events({
  
});