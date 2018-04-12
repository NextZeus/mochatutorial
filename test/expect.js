const expect = require('chai').expect;

describe('Expect Method', function () {
	it('expect test', () => {
		let foo;
		expect(foo).to.be.an('array');
		expect(function(){}).to.not.throw();
		expect({a:1,c:2}).to.not.have.property('b');
		expect([1,2]).to.be.an('array').that.does.not.include(3);
		expect(2).to.equal(2);

		// .equal, .include, .members, .keys, .property
		// deeply but not strictly equals `{a:1}`
		expect({a:1}).to.deep.equal({a:1});
		expect([{a:1}]).to.deep.include({a:1});
		expect({x: {a: 1}}).to.deep.include({x: {a: 1}});
		expect([{a: 1}]).to.have.deep.members([{a: 1}]);
		expect(new Set([{a: 1}])).to.have.deep.keys([{a: 1}]);
		expect({x: {a: 1}}).to.have.deep.property('x', {a: 1});	
	});
});

