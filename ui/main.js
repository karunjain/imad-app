console.log('Loaded!');

var element =document.getElementById('main');
element.innerHTML='Welcome Aboard..?';

var img =document.getElementById('k');
var marginleft =0;
function moveRight()
{
    marginleft +=2;
    img.style.marginleft =marginleft +'px';
};
img.onclick=function()
{
    var interval=setInterval(moveRight,50);
};
