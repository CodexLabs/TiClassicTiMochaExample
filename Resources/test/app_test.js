var should = require('should');

module.exports = function(win, view) {

    describe('app.js', function() {

        describe('#myWindow', function() {

            it('exists', function() {
                should.exist(win);
                win.id.should.equal('myWindow');
            });

            it('has Ti.UI.Window functions', function() {
                should(win.open).be.a.Function;
                should(win.close).be.a.Function;

                if (Ti.Platform.name === 'iPhone OS') {
                    should(win.hideTabBar).be.a.Function;
                }
            });

            it('has dimensions equal to the device', function() {
                win.size.height.should.equal(Ti.Platform.displayCaps.platformHeight);
                win.size.width.should.equal(Ti.Platform.displayCaps.platformWidth);
            });

        });

        describe('#myView', function() {

            it('exists', function(){
                should.exist(view);
                view.id.should.equal('myView');
            });

            it('has Ti.UI.View functions', function() {
                should(view.add).be.a.Function;
            });

            it('is a child of window', function() {
                win.children.length.should.equal(1);
                should.exist(win.children[0]);
                win.children[0].id.should.equal('myView');
            });

            it('view has same dimensions as window', function(){
                view.size.height.should.equal(win.size.height);
                view.size.width.should.equal(win.size.width);
            });

        });

    });

    // run the tests
    mocha.run();
};