console.log('Loaded!');

var element =document.getElementById('main');
element.innerHTML='new value';

var img =document.getElementById('k');
img.onclick=function()
{
    img.style.marginLeft='100px';
}