const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let userSchema = new Schema({uid:Number, name:String});

userSchema.pre('save', function(){
	if(this.isNew){
		// init 
		console.log('isNew---', this);
	} else {
		console.log('not new', this);
	}
});

let userModel;

async function run(){
	mongoose.connect('mongodb://localhost:27017/mocha');
	await mongoose.connection.dropDatabase();
	userModel = mongoose.model('user', userSchema);
}

run().then(async () => {
	await userModel.create({uid:1});
	let user = await userModel.findOne();
	console.log('user ',user);
	user.name = 'hello';
	await user.save();
});