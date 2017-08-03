console.log('Loaded!');

var element =document.getElementID('main');
element.innerHTML='new value';

var img =document.getElementID('img');
img.onclick=function()
{
    img.style.marginLeft='100px';
}