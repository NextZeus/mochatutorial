var Mocha = require('mocha');

var mocha = new Mocha({});

mocha.addFile('./test/index.js');

let success = true;

mocha.run()
    .on('test', function(test) {
        console.log('Test started: '+test.title);
    })
    .on('test end', function(test) {
        console.log('Test done: '+test.title);
    })
    .on('pass', function(test) {
        // console.log('Test passed');
        // console.log(test);
        // todo 把配置cp xlsx2json 不执行拷贝
    })
    .on('fail', function(test, err) {
        console.log('Test fail');
        // console.log(test);
        // console.log(err);
        success = false;
    })
    .on('end', function() {
        console.log('All done',success);
    });