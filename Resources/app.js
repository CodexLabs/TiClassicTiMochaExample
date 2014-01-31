/* this repo is documenting the following http://tonylukasavage.com/ti-mocha/ */
require('ti-mocha');
mocha.setup({ reporter: 'ti-spec-studio' });

// create a basic UI
var win = Ti.UI.createWindow({
    backgroundColor: '#fff',
    fullscreen: false,
    exitOnClose: true,
    id: 'myWindow'
});
var view = Ti.UI.createView({
    height: Ti.UI.FILL,
    width: Ti.UI.FILL,
    backgroundColor: '#a00',
    id: 'myView'
});
win.add(view);

// run tests after window opens to ensure UI is initialized
win.addEventListener('open', function() {
    require('test/app_test')(win, view);
});

// show the UI
win.open();