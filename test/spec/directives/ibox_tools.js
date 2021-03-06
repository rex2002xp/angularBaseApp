'use strict';

describe('Directive: iboxTools', function () {

  // load the directive's module
  beforeEach(module('angularBaseApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<ibox-tools></ibox-tools>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the iboxTools directive');
  }));
});
