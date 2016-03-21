describe('removeAllVowels Filter', function () {
	var $controller, removeAllVowels;

	beforeEach(module('app'));

	beforeEach(inject(function ($injector) {
		$filter = $injector.get('$filter');
	}));
  it('should remove all vowels', function() {
    var results = $filter('removeAllVowels')('applesandbananas');

    expect(results).toEqual('pplsndbnns');
  });

});
