console.log('hello');

// TOP LEFT and TOP RIGHT input fields
const toplx = document.getElementById('tlx');
const toply = document.getElementById('tly');

const toprx = document.getElementById('trx');
const topry = document.getElementById('try');

// BOTTOM RIGHT and BOTTOM LEFT input fields
const bottomrx = document.getElementById('brx');
const bottomry = document.getElementById('bry');

const bottomlx = document.getElementById('blx');
const bottomly = document.getElementById('bly');

//New Mockup Button
const newMockupBtn = document.getElementById('newMockupBtn');

const newImageAndCoord = [
    {canvasName: 'new', coords: [[Number (toplx.value), toply.value], [toprx.value, topry.value], [bottomrx.value, bottomry.value], [bottomlx.value, bottomly.value]]}
];

/*
const newImageAndCoord = [
    {canvasName: 'newCanvas', coords: [[238, 167], [778, 167], [238, 474], [778, 474]]}
];
*/

newMockupBtn.addEventListener('mousedown', function(Event){
Event.preventDefault();
console.log(Number(toplx.value));
var v = newImageAndCoord();
console.log(newImageAndCoord.coords);


})