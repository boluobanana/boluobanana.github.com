var fragment = document.createDocumentFragment();
var li = null;
for(var i = 0; i < 3; i++ ){
	li = document.createElement('li');
	li = appendChild(document.createTextNode(i));
	fragment.appendChild(li);
}
document.body.appendChild(fragment);