//EXAMINE THE DOCUMENT OBJECT
console.dir(document);
console.log(document.domain);
console.log(document.title);
document.title =122;
console.log(document.doctype);
console.log(document.body);
console.log(document.head);
console.log(document.all);
console.log(document.forms);
console.log(document.links);
console.log(document.images);
var headerTitle = document.getElementById('header-title');
var header=document.getElementById('main-header');
console.log(headerTitle);
headerTitle.textContent='hello';
headerTitle.innerHTML='goodbye';
headerTitle.innerHTML = '<h3>Hello</h3>';
header.style.borderBottom='solid 4px #000';
var items=document.getElementsByClassName('list-group-item');
console.log(items[1]);
items[1].textContent='hello';
items[1].style.fontWeight = 'bold';
items[1].style.backgroundColor ='yellow'
items.style.backgroundColor ='#f4f4f4';
for(let i=0;i<items.length;i++){
    items[i].style.backgroundColor='#f4f4f4';
}
//GETELEMENTBYTAGNAME//
var header=document.querySelector('main-header');


   
