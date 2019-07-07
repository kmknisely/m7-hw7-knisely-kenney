const hoverArea = document.getElementById('hover-effect');
const flavor = document.getElementById('text-hide');

var show = () => flavor.style.opacity='1';
var hide = () => flavor.style.opacity='0';


hoverArea.addEventListener('mouseenter', show);
hoverArea.addEventListener('mouseleave', hide);
