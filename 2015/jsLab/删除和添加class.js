
function deleteAdd (id,de,ad) {
	var deNode = document.getElementById(id),
	classNames = deNode.className.split(/\s+/),
	pos = -1,
	i,
	len;
	for(i=0, len=classNames.length; i < len; i++){
		if(classNames[i] == de){
			pos = i;
			break;
		}
	}
	classNames.splice(i,1);
	classNames.push(ad);

	deNode.className = classNames.join(' ');

}
