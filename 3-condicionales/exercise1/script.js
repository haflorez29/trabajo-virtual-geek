const avatar = false && '<img src="http://placehold.it/300x300">';
// var empty;
var empty = '<img src="http://www.fillmurray.com/300/300">'
const div = document.querySelector('div')

div.innerHTML = `
${(avatar || empty)}`



