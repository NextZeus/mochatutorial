// let assert = require('assert');
// let Promise = require('bluebird');
// const should = require('chai').should;
// const expect = require('chai').expect;


// const mongoose = require('mongoose');

// let userModel = null;


// async function run(){
// 	mongoose.connect('mongodb://localhost:27017/mocha');
// 	await mongoose.connection.dropDatabase();
// 	userModel = mongoose.model('user', new mongoose.Schema({uid:Number, name:String}));
// }


// before(async function(){
// 	await run();
// });

// beforeEach(async function(){
// 	await userModel.create({uid:1,name:'xiaodong.li'});
// });


// afterEach(async function(){
// 	// await userModel.remove({uid:1});
// });	

// after(async function(){
// 	// await mongoose.connection.dropDatabase();
// });

// async function add(a,b){
// 	return Promise.resolve(a + b);
// }

// describe('#async add()', function(){
// 	it('2 + 2 is 4', async () => {
// 		const p = await add(2, 2);
// 		expect(p).to.equal(4);
// 	});

// 	it('3 + 3 is 6', async () => {
// 		const p = await add(3, 3);
// 		expect(p).to.equal(6);
// 	});
// });



// // describe('#Promise then', function () {
// // 	it('should true', function (done) {
// // 		Promise.resolve(1)
// // 			.then(number => {
// // 				expect(number).to.equal(1);
// // 				done();
// // 			})
// // 			.catch(e => {
// // 				done(e);
// // 			})
// // 			// .finally(() => { //only bluebird has finally, node Promise no finally function

// // 			// });
// // 	});
// // });


// describe('#Monk ', function () {
// 	describe('#User.find', function(){

// 		it('Async/Await find', async function(){
			
// 			let user = await userModel.findOne({uid:1});
				
// 			expect(user).to.have.property('name');
// 			expect(user.name).to.equal('xiaodong.li');
				
// 		});

// 		it('Promise find', function(done){
			
// 			userModel.find({uid:1})
// 				.then(users => {
// 					expect(users).to.have.lengthOf(1);
// 					expect(users[0]).to.have.property('name');
// 					expect(users[0].name).to.equal('xiaodong.li');
// 					done();
// 				})
// 				.catch(e => {
// 					done(e);
// 				})
// 		});
// 	});
// 	// describe('#User.findOne', function(){
// 	// 	it('should no user', function(done){
// 	// 		let userModel = db.get('user');
// 	// 		userModel.findOne({uid:1})
// 	// 			.then(user => {
// 	// 				should.not.exist(user);
// 	// 				done();
// 	// 			})
// 	// 			.catch(e => {
// 	// 				done(e);
// 	// 			});
// 	// 	});
// 	// });
// });

// // process.exit(0);


