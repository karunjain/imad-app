console.log('Loaded!');

var element =document.getElementById('main');
element.innerHTML='Welcome Aboard..?';

var img =document.getElementById('k');
img.onclick=function()
{
    var interval=setInterval(moveRight,100);
};
