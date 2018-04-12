let chai = require('chai');

chai.config.includeStack = true;
chai.config.showDiff = true;

const should = chai.should();


describe('should test', () => {
	it('foo should be a array' , () => {
		let foo;

		foo.should.be.a('array');
	});
});

