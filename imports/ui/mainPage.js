import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './mainPage.html';

Template.mainPage.onCreated(function () {
  console.log('This is Client');
  $('.button-collapse').sideNav();
});

Template.mainPage.helpers({
  
});

Template.mainPage.events({
  
});