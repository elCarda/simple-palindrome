exports.config = {
    allScriptsTimeout: 31000,

    specs: [
        'test/e2e/**/*.e2e.js'
    ],

    seleniumAddress: 'http://localhost:4444/wd/hub',

    framework: 'jasmine2',
    jasmineNodeOpts: {
        defaultTimeoutInterval: 30000
    },
    onPrepare: function(){
        browser.ignoreSynchronization = true;
    },

    params: {
        baseUrl: 'http://localhost:8080'
    }
};
