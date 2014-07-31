var fs = require('fs');

fs.readFile('content.txt', 'utf-8', function  (err, data) {
	if (err) {
		console.error(err);
	} else{
		console.log(data);
	};
});

fs.writeFile('content.txt','342', 'utf-8', function  (err) {
	if (err) {
		console.error(err);
	};
} )

fs.readFile('content.txt', 'utf-8', function  (err, data) {
	if (err) {
		console.error(err);
	} else{
		console.log(data);
	};
});
