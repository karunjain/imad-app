console.log('Loaded!');

var element =document.getElementById('main');
element.innerHTML='Welcome Aboard..?';

var img =document.getElementById('k');
var marginLeft =0;
function moveRight()
{
    marginLeft +=2;
    img.style.marginLeft =marginLeft +'px';
};
img.onclick=function()
{
    var interval=setInterval(moveRight,50);
};
