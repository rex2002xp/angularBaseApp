'use strict';

describe('Directive: landingScrollspy', function () {

  // load the directive's module
  beforeEach(module('angularBaseApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<landing-scrollspy></landing-scrollspy>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the landingScrollspy directive');
  }));
});
