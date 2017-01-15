import moment from 'moment';
import Point from './point.js';

var content = document.querySelector('#content');
var rightNow = moment().format('MMMM Do YYYY, h:mm:ss a');
content.textContent = 'Good point: ' + new Point(1, 23) + ' @ ' + rightNow;
