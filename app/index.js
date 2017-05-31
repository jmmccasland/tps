import 'whatwg-fetch';
import $ from 'jQuery';

// var $ = require('jquery');

$(document).ready(() => {
  setTimeout(() => {
    $('body')
    .css('background-color', '#f1f3f7')
    .css('opacity', 1);

    // $('.container')
    //   .css('border-top', 0);
  }, 1000);
});
