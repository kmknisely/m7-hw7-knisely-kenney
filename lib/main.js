'use strict';

var hoverArea = document.getElementById('hover-effect');
var flavor = document.getElementById('text-hide');

var show = function show() {
  return flavor.style.opacity = '1';
};
var hide = function hide() {
  return flavor.style.opacity = '0';
};

hoverArea.addEventListener('mouseenter', show);
hoverArea.addEventListener('mouseleave', hide);