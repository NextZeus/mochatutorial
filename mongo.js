const mongoose = require('mongoose');

async function run(){
	mongoose.connect('mongodb://localhost:27017/mocha');
	await mongoose.connection.dropDatabase();

	const userModel = mongoose.model('user', new mongoose.Schema({uid:Number, name:String}));

	await userModel.create({uid:2, name:'xiaoming'});

	let doc = await userModel.find({uid:2});

	console.log('doc==>>',doc);
}

run().catch(e => {

});