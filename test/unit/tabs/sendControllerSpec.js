'use strict';
var expect = chai.expect;

function run(scope,done) {
  done();
}

describe('SendCtrl', function(){
  var rootScope, scope, controller_injector, dependencies, ctrl;

  beforeEach(module("rp"));
  beforeEach(inject(function($rootScope, $controller, $q) {
    rootScope = rootScope;
    scope = $rootScope.$new();
    scope.currencies_all = [{ name: 'XRP - Ripples', value: 'XRP'}];
    controller_injector = $controller;

    dependencies = {
      $scope: scope,
      $element: null,
      rpId: { loginStatus: true }
    }

    ctrl = controller_injector("SendCtrl", dependencies);
  }));

  describe('initializing the controller', function () {
    it('should be initialized with defaults', function (done) {
      assert.equal(scope.mode, 'form');
      assert.isObject(scope.send);
      assert.equal(scope.send.currency, 'XRP - Ripples');

      assert.isFalse(scope.show_save_address_form);
      assert.isFalse(scope.addressSaved);
      assert.equal(scope.saveAddressName, '');
      assert.isFalse(scope.addressSaving);

      done();
    });

    it('should reset destination dependencies', function (done) {
      assert.isFunction(scope.reset_destination_deps);
      done();
    });

    it('should update the destination', function (done) {
      assert.isFunction(scope.update_destination);
      done();
    });

    it('should update the destination remote', function (done) {
      assert.isFunction(scope.update_destination_remote);
      done();
    });

    it('should check the destination', function (done) {
      assert.isFunction(scope.check_destination);
      done();
    })

    it('should handle paths', function (done) {
      assert.isFunction(scope.handle_paths);
      done();      
    });

    it('should update paths', function (done) {
      assert.isFunction(scope.update_paths);
      done();      
    });

    it('should update the currency constraints', function (done) {
      assert.isFunction(scope.update_currency_constraints);
      done();
    });

    it('should reset the currency dependencies', function (done) {
      assert.isFunction(scope.reset_currency_deps);
      var mock = sinon.mock(scope);
      mock.expects('reset_amount_deps').once();
      scope.reset_currency_deps();
      mock.verify();
      done();
    });

    it('should update the currency', function (done) {
      assert.isFunction(scope.update_currency);
      done();
    });

    it('should reset the amount dependencies', function (done) {
      assert.isFunction(scope.reset_amount_deps);
      done();
    });

    it('should update the amount', function (done) {
      assert.isFunction(scope.update_amount);
      done();
    });

    it('should update the quote', function (done) {
      assert.isFunction(scope.update_quote);
      done();
    });

    it('should rest the paths', function (done) {
      assert.isFunction(scope.reset_paths);
      done();
    });

    it('should determine if the paths need updating', function (done) {
      assert.isFunction(scope.need_paths_update);
      done();
    })

    it('should cancel the form', function (done) {
      assert.isFunction(scope.cancelConfirm);
      scope.send.alt = '';
      scope.mode = null;

      scope.cancelConfirm();
      assert.equal(scope.mode, 'form');
      assert.isNull(scope.send.alt);
      done();
    });

    it('should reset the address form', function (done) {
      assert.isFunction(scope.resetAddressForm);
      scope.show_save_address_form = true
      scope.addressSaved = true;
      scope.saveAddressName = null;
      scope.addressSaving = true;

      scope.resetAddressForm();
      assert.isFalse(scope.show_save_address_form);
      assert.isFalse(scope.addressSaved);
      assert.equal(scope.saveAddressName, '');
      assert.isFalse(scope.addressSaving);
      done();
    });

    it('should perform a reset goto', function (done) {
      assert.isFunction(scope.reset_goto);
      var mock = sinon.mock(scope);
      mock.expects('reset').once();

      scope.reset_goto();
      mock.verify();
      done();
    });

    it('should handle when the send is prepared', function (done) {
      assert.isFunction(scope.send_prepared);
      scope.mode = null
      scope.send_prepared();
      assert.isTrue(scope.confirm_wait);
      assert.equal(scope.mode, 'confirm');

      done();
    });

    it('should handle when the send is confirmed', function (done) {
      assert.isFunction(scope.send_confirmed);
      assert.equal(scope.mode, 'form');
      done();
    });

    it('should save an address', function (done) {
      assert.isFunction(scope.saveAddress);
      done();
    })

    it('should handle sent', function (done) {
      assert.isFunction(scope.sent);
      assert.equal(scope.mode, 'form');
      scope.sent();
      assert.equal(scope.mode, 'status');

      done();
    })
  });

});
