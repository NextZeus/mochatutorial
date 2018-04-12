let db = require('./db.js');

let userModel = db.get('user');

userModel.find()
	.then(info => {
		console.log('info ==',info);
	});
